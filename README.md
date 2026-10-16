# בד פורח — מיצבים אמנותיים לאירועים

אתר עסקי סטטי (Astro) בעברית, RTL. נפרד לחלוטין מאתר האמנות.

**חי:** https://avgilx.github.io/rachel-events/

## הפעלה

```bash
npm install
npm run dev      # פיתוח
npm run build    # בנייה מקומית לתיקיית dist/
npm run preview  # תצוגה של התוצר
```

שני הסקריפטים מכבדים `PORT`; ברירת המחדל 4340.

## פרסום עדכון

⚠️ בנייה לפרסום דורשת `SITE_URL` ו-`BASE_PATH` (האתר יושב בתת־נתיב ב-GitHub Pages).
**התוצר הזה לא יעבוד בתצוגה מקומית** — אחריו צריך `npm run build` רגיל כדי לחזור.

```bash
SITE_URL=https://avgilx.github.io BASE_PATH=/rachel-events npm run build
cd dist && git init -q && git checkout -qb gh-pages && git add -A \
  && git commit -qm "עדכון" \
  && git push -fq https://github.com/avgilx/rachel-events.git gh-pages:gh-pages
```

## איפה משנים

| מה | קובץ |
| --- | --- |
| כל המלל, פרטי קשר, שם העסק | `src/content/site.ts` |
| המיצבים והתיאורים | `src/content/works.ts` |
| צבעים וטיפוגרפיה | `src/styles/global.css` |

## להוסיף מיצב

1. תמונה ל-`src/assets/work/`
2. רשומה אחת ב-`src/content/works.ts` עם `id`, `image`, `alt`, `installation`
3. זהו — גלריה, lightbox ותמונות רספונסיביות מתעדכנים לבד

## מה עדיין חסר (TODO בקוד)

- **פרטי קשר** — אין אף ערוץ. בלי זה אתר עסקי לא יכול לעבוד. `contact.channels`
- **שם העסק** — כרגע שם פרטי. רחל כתבה "אנחנו רוצות", כלומר יש שותפה. `site.name`
- **שמות למיצבים** — `title` בכל רשומה ב-`works.ts`
- **endpoint לטופס** — `contact.formEndpoint`. כל עוד ריק, הטופס לא מוצג

כל שדה שנשאר ריק פשוט לא מוצג למבקר. אין ערכי דמה בשום מקום.

## החלטות שכדאי להכיר

- **חיתוך תמונות**: בניגוד לאתר האמנות, כאן התמונות נחתכות (אזור פתיחה, כרטיסים,
  רצועות רוחב). אלה צילומי חלל ולא יצירות — החיתוך משרת את העיצוב. בגלריה כל תמונה
  מוצגת במלואה.
- **אין וידאו באתר**: החלטה של בעלות העסק. לא להוסיף וידאו בלי אישור מפורש שלהן.
