import fs from 'fs';
import path from 'path';

export type CaseCategory = 'aligner' | 'laminate';

export interface CaseData {
  id: string;
  category: CaseCategory;
  titleKey: string;
  metaKey: string;
  images: {
    before: string | null;
    during: string | null;
    after: string | null;
  };
}

/**
 * public/images/cases/ 폴더를 스캔하여 케이스 데이터를 자동 생성합니다.
 *
 * 폴더 구조:
 *   public/images/cases/
 *     case1/
 *       before.jpg
 *       during.jpg
 *       after.jpg
 *       meta.json    ← { "category": "aligner", "title": "...", "meta": "..." }
 *     case2/
 *       before.jpg
 *       after.jpg
 *       meta.json
 *
 * 규칙:
 * - 폴더명이 case ID가 됩니다 (case1, case2, ...)
 * - before/during/after 중 있는 것만 표시됩니다
 * - jpg, jpeg, png, webp 확장자 지원
 * - meta.json이 없으면 기본값 사용
 */
export function getCases(): CaseData[] {
  const casesDir = path.join(process.cwd(), 'public', 'images', 'cases');

  if (!fs.existsSync(casesDir)) {
    return [];
  }

  const caseFolders = fs.readdirSync(casesDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();

  return caseFolders.map(folder => {
    const folderPath = path.join(casesDir, folder);
    const files = fs.readdirSync(folderPath);

    const findImage = (prefix: string): string | null => {
      const found = files.find(f =>
        f.startsWith(prefix) && /\.(jpg|jpeg|png|webp)$/i.test(f)
      );
      return found ? `/images/cases/${folder}/${found}` : null;
    };

    // meta.json 읽기
    let category: CaseCategory = 'aligner';
    let title = `Case — ${folder}`;
    let meta = '';

    const metaPath = path.join(folderPath, 'meta.json');
    if (fs.existsSync(metaPath)) {
      try {
        const metaData = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
        category = metaData.category || 'aligner';
        title = metaData.title || title;
        meta = metaData.meta || '';
      } catch {
        // meta.json 파싱 실패 시 기본값 사용
      }
    }

    return {
      id: folder,
      category,
      titleKey: title,
      metaKey: meta,
      images: {
        before: findImage('before'),
        during: findImage('during'),
        after: findImage('after'),
      },
    };
  });
}
