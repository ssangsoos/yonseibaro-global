export type BranchStatus = 'active' | 'coming_soon';

export interface Branch {
  id: string;
  nameEn: string;
  nameKo: string;
  region: 'seoul' | 'gyeonggi' | 'incheon' | 'chungcheong' | 'jeju' | 'other';
  status: BranchStatus;
  url?: string; // 각 지점 개별 페이지 URL (추후 연결)
}

export const branches: Branch[] = [
  // ── Seoul ──
  { id: 'apgujeong', nameEn: 'Apgujeong', nameKo: '압구정', region: 'seoul', status: 'active', url: '' },
  { id: 'mokdong', nameEn: 'Mokdong', nameKo: '목동', region: 'seoul', status: 'active', url: '' },

  // ── Gyeonggi ──
  { id: 'ilsan', nameEn: 'Ilsan', nameKo: '일산', region: 'gyeonggi', status: 'active', url: '' },
  { id: 'bundang', nameEn: 'Bundang', nameKo: '분당', region: 'gyeonggi', status: 'active', url: '' },
  { id: 'dongtan', nameEn: 'Dongtan', nameKo: '동탄', region: 'gyeonggi', status: 'active', url: '' },
  { id: 'gimpo', nameEn: 'Gimpo', nameKo: '김포', region: 'gyeonggi', status: 'active', url: '' },
  { id: 'bucheon', nameEn: 'Bucheon', nameKo: '부천', region: 'gyeonggi', status: 'active', url: '' },
  { id: 'guri', nameEn: 'Guri', nameKo: '구리', region: 'gyeonggi', status: 'active', url: '' },
  { id: 'pyeongtaek', nameEn: 'Pyeongtaek', nameKo: '평택', region: 'gyeonggi', status: 'active', url: '' },
  { id: 'suwon', nameEn: 'Suwon', nameKo: '수원', region: 'gyeonggi', status: 'active', url: '' },
  { id: 'uijeongbu', nameEn: 'Uijeongbu', nameKo: '의정부', region: 'gyeonggi', status: 'active', url: '' },
  { id: 'anyang', nameEn: 'Anyang', nameKo: '안양', region: 'gyeonggi', status: 'active', url: '' },

  // ── Incheon ──
  { id: 'incheon', nameEn: 'Incheon', nameKo: '인천', region: 'incheon', status: 'active', url: '' },

  // ── Chungcheong ──
  { id: 'daejeon', nameEn: 'Daejeon', nameKo: '대전', region: 'chungcheong', status: 'active', url: '' },

  // ── Coming Soon ──
  { id: 'jeju', nameEn: 'Jeju', nameKo: '제주', region: 'jeju', status: 'coming_soon', url: '' },
];

// 새 지점 추가 시: 위 배열에 항목 하나만 추가하세요.
// url 필드에 지점 개별 페이지 URL을 넣으면 글로벌 페이지에서 버튼 클릭으로 연결됩니다.
