const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** מוסיף לנתיב את קידומת הבסיס של האתר (נחוץ באירוח בתת־נתיב). */
export const withBase = (path: string) => {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) return path;
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
};
