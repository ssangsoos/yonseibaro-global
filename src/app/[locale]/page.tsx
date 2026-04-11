import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import TwoPath from '@/components/TwoPath';
import Treatment from '@/components/Treatment';
import Cases from '@/components/Cases';
import TeamNetwork from '@/components/TeamNetwork';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <TrustBar />
      <TwoPath />
      <Treatment />
      <Cases />
      <TeamNetwork />
      <Contact />
      <Footer />
    </>
  );
}
