/**
 * הקולקציה.
 *
 * להוספת מיצב: לשמור תמונה תחת src/assets/work/ ולהוסיף כאן רשומה אחת.
 * שדה ריק פשוט לא מוצג למבקר — לעולם לא מופיע שדה ריק באתר.
 *
 * ⚠️ TODO: אין עדיין שמות למיצבים. כשרחל תבחר — למלא את title.
 */

export interface Work {
  id: string;
  /** שם המיצב בקולקציה — ריק כל עוד לא נבחר */
  title?: string;
  image: string;
  /** תיאור חזותי בעברית — חובה */
  alt: string;
  /** שם המיצב לקיבוץ פנימי */
  installation: string;
  displayOrder?: number;
}

export const works: Work[] = [
  {
    id: 'peony-backdrop',
    installation: 'פרח הענק',
    image: 'work/peony-backdrop.jpg',
    alt: 'גב במה מעוצב: פרח ענק מבד בגווני שמנת וורוד תלוי בצד אחד, לצידו וילון לבן מקומט ושרשרת פנינים גדולות נופלת בקשת לרוחב הבד.',
    displayOrder: 1,
  },
  {
    id: 'peony-detail',
    installation: 'פרח הענק',
    image: 'work/peony-detail.jpg',
    alt: 'תקריב של הפרח הענק: עשרות עלי כותרת מבד מקומט בגווני שמנת, ובמרכזם פסים ורודים עזים המתפשטים מן הלב הקרמי.',
    displayOrder: 2,
  },
  {
    id: 'peony-wide',
    installation: 'פרח הענק',
    image: 'work/peony-wide.jpg',
    alt: 'מבט רחב על הגב המעוצב בתוך החלל: הפרח הענק בצד אחד, וילון לבן ארוך ושרשרת פנינים, על רקע קיר בהיר ורצפת אבן.',
    displayOrder: 3,
  },
  {
    id: 'gold-bow-backdrop',
    installation: 'פפיון הזהב',
    image: 'work/gold-bow-backdrop.jpg',
    alt: 'גב במה ובו פפיון גדול מבד זהוב בצד אחד, וילונות בלבן ובקרם, שרשרת פנינים הנופלת בקשת, ובצד השני עלי בד ופרחי ורד לבנים.',
    displayOrder: 4,
  },
  {
    id: 'gold-bow-detail',
    installation: 'פפיון הזהב',
    image: 'work/gold-bow-detail.jpg',
    alt: 'תקריב של הפפיון הזהוב: לולאות בד רחבות ומבריקות הקשורות בקשר מרכזי, וממנו משתלשלת שרשרת פנינים.',
    displayOrder: 5,
  },
  {
    id: 'double-bow-backdrop',
    installation: 'פפיון הזהב',
    image: 'work/double-bow-backdrop.jpg',
    alt: 'גב במה ובו שני פפיונים זהובים בגדלים שונים זה מעל זה, וילון לבן מקומט, שרשרת פנינים וסידור ורדים לבנים בצד.',
    displayOrder: 6,
  },
  {
    id: 'pearl-swag-evening',
    installation: 'פפיון הזהב',
    image: 'work/pearl-swag-evening.jpg',
    alt: 'גב במה בתאורת ערב חמה: פפיון זהוב, שתי שרשרות פנינים הנופלות בקשתות על וילון קרם, וסידור ורדים לבנים בצד.',
    displayOrder: 7,
  },
  {
    id: 'petal-tower',
    installation: 'מגדל עלי הכותרת',
    image: 'work/petal-tower.jpg',
    alt: 'מיצב גבוה הבנוי מעלי כותרת גדולים מבד לבן הנפתחים זה מעל זה כצמח מטפס, ובין העלים משובצים פרחים לבנים וירק.',
    displayOrder: 8,
  },
  {
    id: 'petal-tower-blush',
    installation: 'מגדל עלי הכותרת',
    image: 'work/petal-tower-blush.jpg',
    alt: 'מיצב עלי הכותרת מזווית אחרת, ולמרגלותיו סידור פרחים בגווני ורוד בהיר ולבן עם ירק משתפל.',
    displayOrder: 9,
  },
  {
    id: 'petal-tower-below',
    installation: 'מגדל עלי הכותרת',
    image: 'work/petal-tower-below.jpg',
    alt: 'מבט מלמטה אל מיצב עלי הכותרת: עלי הבד נפרשים כלפי מעלה אל התקרה ויוצרים מעין חופה.',
    displayOrder: 10,
  },
  {
    id: 'petal-tower-white',
    installation: 'מגדל עלי הכותרת',
    image: 'work/petal-tower-white.jpg',
    alt: 'מיצב עלי הכותרת ניצב בפינת החלל, עלי בד לבנים גדולים ובתוכם פרחים לבנים, לצד חלון מואר.',
    displayOrder: 11,
  },
];

export const allWorks = () =>
  [...works].sort((a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999));

export const workById = (id: string) => works.find((w) => w.id === id);
