export type BranchStatus = 'active' | 'coming_soon';

export interface Branch {
  id: string;
  nameEn: string;
  nameKo: string;
  region: 'seoul' | 'gyeonggi' | 'incheon' | 'chungcheong' | 'jeju' | 'other';
  status: BranchStatus;
  address: string;
  phone: string;
  url?: string; // 각 지점 개별 페이지 URL (추후 연결)
}

export const branches: Branch[] = [
  // ── Seoul ──
  { id: 'apgujeong', nameEn: 'Apgujeong', nameKo: '압구정', region: 'seoul', status: 'active', address: '서울 강남구 논현로 873', phone: '02-3443-8585', url: '' },
  { id: 'mokdong', nameEn: 'Mokdong', nameKo: '목동', region: 'seoul', status: 'active', address: '서울 양천구 신월로 274 3층', phone: '02-2696-2828', url: '' },
  { id: 'songpa', nameEn: 'Songpa', nameKo: '송파', region: 'seoul', status: 'active', address: '서울 송파구 법원로 128 C동 207호', phone: '02-6949-1200', url: '' },

  // ── Incheon ──
  { id: 'incheon', nameEn: 'Incheon', nameKo: '인천', region: 'incheon', status: 'active', address: '인천 남동구 구월로 247 2,3층', phone: '032-473-2222', url: '' },

  // ── Gyeonggi ──
  { id: 'bucheon', nameEn: 'Bucheon', nameKo: '부천', region: 'gyeonggi', status: 'active', address: '경기 부천시 원미구 길주로 105 세이브존 6층', phone: '032-325-2825', url: '' },
  { id: 'ilsan', nameEn: 'Ilsan', nameKo: '일산', region: 'gyeonggi', status: 'active', address: '경기 고양시 일산동구 정발산로 27 4층', phone: '031-906-7528', url: '' },
  { id: 'guri', nameEn: 'Guri', nameKo: '구리', region: 'gyeonggi', status: 'active', address: '경기 구리시 경춘로 249 9층', phone: '031-523-2070', url: '' },
  { id: 'yongin', nameEn: 'Yongin', nameKo: '용인', region: 'gyeonggi', status: 'active', address: '경기 용인시 처인구 금령로71번길 3 10층', phone: '031-333-8570', url: '' },
  { id: 'gimpo', nameEn: 'Gimpo', nameKo: '김포', region: 'gyeonggi', status: 'active', address: '경기 김포시 김포한강4로 117 4층', phone: '031-984-2824', url: '' },
  { id: 'dongtan', nameEn: 'Dongtan', nameKo: '동탄', region: 'gyeonggi', status: 'active', address: '경기 화성시 동탄대로 537 라스플로레스 3층', phone: '031-372-8582', url: '' },
  { id: 'siheung', nameEn: 'Siheung', nameKo: '시흥', region: 'gyeonggi', status: 'active', address: '경기 시흥시 능곡번영길 22 3층', phone: '031-313-7522', url: '' },
  { id: 'bundang', nameEn: 'Bundang', nameKo: '분당', region: 'gyeonggi', status: 'active', address: '경기 성남시 분당구 내정로165번길 50 크리스탈빌딩 3층', phone: '031-717-2275', url: '' },

  // ── Chungcheong ──
  { id: 'daejeon', nameEn: 'Daejeon', nameKo: '대전', region: 'chungcheong', status: 'active', address: '대전 서구 대덕대로 203 미래빌딩 5층', phone: '042-471-1010', url: '' },

  // ── Jeju ──
  { id: 'jeju', nameEn: 'Jeju', nameKo: '제주', region: 'jeju', status: 'active', address: '제주시 노형로 373 3층', phone: '064-900-2580', url: '' },
];

// 새 지점 추가 시: 위 배열에 항목 하나만 추가하세요.
// url 필드에 지점 개별 페이지 URL을 넣으면 글로벌 페이지에서 버튼 클릭으로 연결됩니다.
