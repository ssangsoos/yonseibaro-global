'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.style.boxShadow = window.scrollY > 10
          ? '0 2px 20px rgba(10,22,40,0.1)'
          : 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#top" className="logo-wrap">
            <span className="logo-name">Yonsei Baro</span>
            <span className="logo-tag">
              <b>B</b><span className="p">etter </span>
              <b>A</b><span className="p">esthetics. </span>
              <b>R</b><span className="p">ight </span>
              <b>O</b><span className="p">rthodontics.</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#twopath" className="nav-link">{t('whoIsThisFor')}</a>
            <a href="#treatment" className="nav-link">{t('treatments')}</a>
            <a href="#cases" className="nav-link">{t('cases')}</a>
            <a href="#network" className="nav-link">{t('network')}</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
              {t('getConsultation')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
