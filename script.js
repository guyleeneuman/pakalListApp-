
/*
  כאן מנהלים את כל התוכן של האתר.
  החליפי את שמות הקבצים והתוכן בדוגמאות שלך.
  תמונות: שימי את קובצי התמונות בתיקיית images.
*/

const topics = [
  {
    id: "topic-1",
    title: "סד''פ הרכבת ערכה",
    // description: "תיאור קצר שמופיע על גבי התמונה",
    image: "images/sadap.png",
    pages: [
      {
        title: "סד''פ פק''ל",
        text: `
        1. חיבור האנטנה למב''ן
        2.הכנסת סוללה לכוורת
        3.ווידוא עלייה של המב''ן והערכה (אם לא נדלק, נלחץ 10 שניות על כפתור ההדלקה שעל הכוורת, ובנוסף נלחץ עוד 10 שניות על כפתור ההדלקה שעל המב''ן)
        5. הכנסת הכוורת למנשא
        6. חיבור כבל טקטי בין הדבורה לכוורת
        7. הדלקת הדבורה
        8. הדלקת ס''צ
        9.חיבור כבל מיקרו יו אס בי בין הס''צ לדבורה`
      },
      {
        title: "סוגי תקשורת",
        text: `
        1. אין תקשורת
        2. רק תקשורת גדודית- אין תקשורת למרחב
        3.תקשורת ירוקה- מהשטח עד למטכ''ל`
      },
    
    ]
  },
  {
    id: "topic-2",
    title: "מקרא ניווט",
    image: "images/map.png",
    pages: [
      {
        title: "סד''פ פק''ל",
        text: `
לבן- דקירה ידנית עם כיתוב ידני.
אדום- אין מיקום.
לבן- מיקום עדכני ותקין.
סד''פ דקירת מיקום ידני:
נסמן- האם מיקום ידני.
נדקור מיקום
נלחץ אישור
שימוש בצ'אט- ניכנס לפקד צ'אט בסרגל הכלים או בשורת הכותרת, ניצור צ'אט חדש.
*תנאי מחייב ליצירת צ'אט- לבחור עמדה בדף הבית.`
      },
      {
        title: "המלצות להדלקת שכבות בשקף ניהוק",
        text: `
1. כוחותנו, מבצעים ראשי, מבצעים ממונה, תיאום ושליטה, איתורים
2. בפקד כלי מפה: מפת תצ"א ואפקט שליטה
3. את"ת: במידה ונתקע המסך או שלא עולים הנתונים כמו שצריך, נחזור למסך צי"ד, ונלחץ "מחיקת היסטוריה". פקד זה מבצע ריסטארט למערכת. באופן רנדומלי, יופיע חלון המבקש סיסמא, הזינו בחלון mtacti (לא קשור לnfc)`
      }
    ]
  },
  {
    id: "topic-3",
    title: "שקד דואלי",
    image: "images/shaked.png",
    pages: [
      {
        title: "השדות הרלוונטיים שיש לוודא",
        text: `
1.או"ק- אות קריאה, שם הכוח
2. מציאות- נוודא שנבחרה מציאות על פי המציאות שנכנסו בדף הבית
3. תדר/אדום: השדה מאפשר לכח לוודא עם כלל המרחב את דרכי הקשר איתו, תדר, רדיו ומס' אדום צבאי. הנתונים שהוזמנו יופיעו בתמצית מיקום הכוח`
      },
       {
        title: "הסבר",
        text: `
נורית קליטה מציגה את חיווי הקליטה בס"צ.
אדום מהבהב- אין קליטה.
כתום מהבהב- מחפש/קליטה ירודה.
כתום קבוע- המכשיר בעלייה.
ירוק קבוע- התקשורת תקינה.
נורית הסוללה- מציגה את מצה הסוללה בס"צ.
אדום/כתום קובע- הסוללה בטעינה.
אדום מהבהב במהירות- בעיית טעינה.
ירוק קבוע- הסוללה טעונה.
מצב אידיאלי של הנוריות- סוללה באדום ותקשורת בירוק.`
      }
    ]
  },
   {
    id: "topic-4",
    title: "אולר",
    image: "images/olar.png",
    pages: [
      {
        title: "אפליקציות שימושיות",
        text: `
פתקים: אפליקציה המשמשת לצורך כתיבה של סד"פים, פק"לים וכלל ההערות והדגשים החשובים מהשטח.
עמו"ד: האפליקציה הראשית שם נמצא מרשם הקרב, המפות וכלל העזרים.
ספרות מקצועית: נמצאות שם כלל הוראות ההפעלה וכמעט כל אמל"ח. קיים שם פק"לונים, הוראות בטיחות ועוד דברים לשליפה נוחה מהשטח.
     `
      },
       {
        title: "את''ת בסיסי",
        text: `
איך נגדיר שם לאולר?
בלחיצה על אייקון איש, נלחץ על עיפרון ליד השם, ונגדיר שם. (ישנה אפשרות להגדיר יחידה, לא חובה)
כאשר אפליקציה נתקעת, נבצע לחיצה ארוכה על האפליקציה ותופיע לנו אופציית "אלץ עצירה" מה שיעשה ריסטארט לאפליקציה מבלי למחוק את הנתונים שבה.`
      }
    ]
  },
  {
    id: "topic-5",
    title: "M4 / קלע",
    image: "images/m4.png",
    pages: [
      {
        title: "סד''פ פק''ל",
        text: `
M4- הינו נשק רובאי אשר ניתן לכלל חיילי הסדיר.
קלע- נשק קלעים מיוחד אשר מיועד לפק"ל קלע ומכיל כוונת מגדילה פי 4.`
      },
      {
        title: "סד''פ טעינה / פריקה",
        text: `
        סד"פ טעינה רובאי:
        1.נשק מקביל לקרקע
        2.ארבע אצבעות על ידית האחיזה
        3.וודא נצירה
        4.מכניס הכנס בהטייה
        5. נשק טען
        
        סד"פ פריקה רובאי:
        1.נשק מקביל לקרקע
        2.ארבע אצבעות על ידית האחיזה
        3.וודא נצירה
        4.מכניס הוצא בהטייה
        5. נשק פרוק
        `
      }
    ]
  },
   {
    id: "topic-6",
    title: "מקלעונים",
    image: "images/miklaonim.png",
    pages: [
      {
        title: "נגב / מאג",
        text: `
        נגב 5 - מקלע אשר יורה כדור 5.56
        נגב 7 - מקלע אשר יורה כדור 7.62
        מא"ג - מקלע אשר יורה כדור 7.62
     `
      },
       {
        title: "סד''פ טעינה ופריקה",
        text: `
        סד"פ טעינה לכלל המקלעים
        1.מקלע מקביל לקרקע
        2.העברת נצרה למצב ירי
        3.בצע דא"ן
        4.פתיחת מכסה גוף
        5.החזרת ידית לפנים
        6.הזן שרשיר
        7.סגירת מכסה גוף
        8.העבר נצרה למצב ירי
        9.בצע ירי
        
        סד"פ פריקה לכלל המקלעים
        1.מקלע מקביל לקרקע
        2.העברת נצרה למצב ירי
        3.בצע דא"ן
        4.פתיחת מכסה גוף
        5.נקה טס הזנה
        6.החזר ידית דריכה לפנים
        7.בצע בדיקה משולשת
        8.סגור מכסה גוף
        9.בצע החזרת מכלול מבוקרת
        10.בצע פד"ם`
      }
    ]
  },
  {
    id: "topic-7",
    title: "מפצח האגוזים",
    image: "images/egozim.png",
    pages: [
      {
        title: "רקע",
        text: `
טיל כתף חד פעמי, חלק ממשפחת מפצחי האגוזים. יש לו שני מצבים ייעודיים- M / B.
     `
      },
       {
        title: "סד''פ הבה''ב ד אירנ''י",
        text: `
הוצאה מהפק"ל, בחירת אפקט פגיעה, הכנת המטול לירי- פתיחת ידית אחיזה, פתיחת קט, פתיחת כוונת קליק 1, הוצאת פין אבטוח, בחירת מצב ירי, דריכה- פתיחת ידית דריכה (באישור מפקד), אומדן טווח- ניתן לאמוד טווח עם הכוונת, אישור לירי מהמפקד!, רשף לאחור- ווידוא 70 מטר לאחור ו40 מטר לצדדים. נצרה- פתיחת נצרה באישור המפקד.
ירי`
      }
    ]
  },
   {
    id: "topic-8",
    title: "מטול",
    image: "images/matol.png",
    pages: [
      {
        title: "רקע",
        text: `
מורכב על נשקים אישיים או עצמאי, נגד אדם ורק"ם רק, מהירות לוע 76 מטר לשנייה, ניתן לירות מספר סוגי רימונים בינהם- נפיץ, תאורה, עשן, גז,גבס.
     `
      },
       {
        title: "סד''פ בדיקה טעינה ופריקה",
        text: `
סד"פ בדיקה- לפני כל שימוש כללי במטול, בשטחי כינוס ומטווחים.
סד"פ בדיקה ברוסר- פרוק, נצור ואין מחסנית. פתיחת קנה, בדיקה משולשת- בית הבליעה, נוקר סטטי, מסילת דריכה. סגירת קנה,פתיחת נצרה, נקירה- לשמוע את הנקירה (כדי לשמוע שהנוקר תקין) פתיחת הקנה וסגירתו, סגירת נצרה.

טעינה- רק בסמוך לירי, אחרי סד"פ בדיקה. טעינת מחסנית ברוסר, ווידוא נצירה, פתיחת הקנה, הטענת רימון- הזרה סת"ן-סוג, בדיקה שנכנס עד הסוף, סגירת הקנה, כניסה למצב, כינון, פתיחת הנצרה- נקירה.

פריקה- בסיום ירי. פתיחת הקנה- תרמיל נופל/לחלוץ, סגירת נצרה,סגירת הקנה, פריקה חלקית: אחרי ירי, טעינת רימון נוס. המשך סד"פ טעינה.
        
       `
      }
    ]
  },
   {
    id: "topic-9",
    title: "מטולון",
    image: "images/matolon.png",
    pages: [
      {
        title: "רקע",
        text: `
מגיע בתצורה עצמאית נגד אדם או רק"ם רך. מהירות לוע 72 מטר לשנייה, ניתן לירות כמה סוגי רימונים כגון-נפיץ,תאורה,עשן גזוגבס.
     `
      },
       {
        title: "סד''פ בדיקה טעינה ופריקה",
        text: `
סד"פ בדיקה- לפני כל שימוש כללי במטול, בשטחי כינוס ומטווחים.
סד"פ בדיקה- פתיחת הקנה,  בדיקת בית הבליעה שנקי מתחמושת. סגירת הקנה, פתיחת נצרה, נקירה, סגירת נצרה.

טעינה- בסמוך לירי, אחרי סד"פ בדיקה. ווידוא נצירה, פתיחת קנה, טעינת רימון בצורת סת"ן-סוג, בדיקה שנכנס עד הסוף, סגירת נצרה, כניסה למצב, כינון, פתיחת נצרה-נקירה.
       
פריקה- בסיום הירי. סגירת נצרה, פתיחת הקנה- תרמיל נופל/ לחלוץ, סגירת הקנה.

פריקה חלקית- אחרי ירי, טעינת רימון נוסף. סגירת נצרה, פתיחת הקנה- תרמיל נופל/ לחלוץ, טעינת רימון נוסף הצורת הזרקה על פי הדגשים.
        `
      }
    ]
  }, {
    id: "topic-10",
    title: "יתד",
    image: "images/miklaonim.png",
    pages: [
      {
        title: "רקע",
        text: `
טיל כתף חד פעמי נגד בונקרים, מבים ורכבים. קיימות לו שתי צורות הפעלה- שהרקטה תפגע במטרה רכה כמו גבס, חול,זכוכית, דלת,חלון תפעיל השהייה של 40 אלפיות השנייה.
     `
      },
       {
        title: "סד''פ  ",
        text: `
        1.הוצאת פין האבטוח
        2.לחיצה על הכפתור press 
        3.פתיחת הזביל עד הפס הצהוב- סיבוב הזביל לפי כיוון החץ עד שמיעת קליק ( חצי ראשון של הדריכה)
        4.הזזת מכסי הכוונות
        5.פתיחת הקת
        6.כניסה למצב
        7.כינון ראשוני
        8.פתיחת מכסה מנגנון ונתינת מכה למכסה (החצי השני של הדריכה)
        9.בדיקת רשף לאחור
        10.כניסה בין כוונות- כינון סופי
        11.ירי- לחיצה על המשבת ואז על ההדק
       `
      }
    ]
  },  {
    id: "topic-11",
    title: "לאו",
    image: "images/miklaonim.png",
    pages: [
      {
        title: "רקע",
        text: `
טיל כתף חד פעמי בעל שלושה סוגים. לאו זרזיר A7, A4,A5-נגד רק"ם רך ושריון.     `
      },
       {
        title: "סד''פ  ",
        text: `
        1.הוצאת נצרת המכסים
        2.בדיקה ויזואלית- צינורית אבש"ש
        3.בדיקת זביל שאין פגיעות או שקעים
        4.נטייה קדימה ואחורה לבדיקה שלא יוצאים נוזלים
        5.אחיזת הזביל מול מטרות
        6.דריכה בצורת A
        7.כניסה למצב
        8.כינון ראשוני
        9.בדיקת רשף לאחור- 70 מטר לאחור ו45 לצדדים
        10.פתיחת נצרה
        11.כינון סופי
        12.ירי`
      }
    ]
  }, {
    id: "topic-12",
    title: "חולית",
    image: "images/miklaonim.png",
    pages: [
      {
        title: "רקע",
        text: `
טיל כתף חד פעמי, נגד טנקים וביצורים. ממשפחת מפצחי האגוזים, בעל 2 מצבים, נט- נגד טנקים ורק"מים, ונבר- נגד ביצורים, מבנים, עמדות ורכבים.
     `
      },
       {
        title: "סד''פ הבה''ב ד אירנ''י",
        text: `
הוצאה מהפק"ל, בחירת אפקט פגיעה, הכנת המטול לירי- פתיחת ידית אחיזה, פתיחת קת, פתיחת כוונת קליק 1, הוצאת פין אבטוח, בחירת מצב ירי, דריכה- פתיחת ידית דריכה (באישור מפקד), אומדן טווח- ניתן לאמוד טווח עם הכוונת, אישור לירי מהמפקד!, רשף לאחור- ווידוא 70 מטר לאחור ו40 מטר לצדדים. נצרה- פתיחת נצרה באישור המפקד.
ירי`
      }
    ]
  }, {
    id: "topic-13",
    title: "מקלר",
    image: "images/miklaonim.png",
    pages: [
      {
        title: "רקע",
        text: `
מקלע רימונים נגד אדם ורק"ם רך.
     `
      },
       {
        title: "סד''פ בדיקה טעינה ופריקה",
        text: `
בדיקה מס 1 מבצע נד"א- נצירה דריכה ואבטוח. מס 2 פותח מכסה גוף ומבצע בדיקה משולשת, מתאם מנופים וסוגר את מכסה הגוף. מס 1- מחזיר ידית שמאל, נועל אותה, פותח נצרה ומבצע נקירה מבוקרת עם ידית ימין וסוגר נצרה.
        
טעינה- מס 1 מוודא נצירה, מס 2 פותח מכסה גוף ומזין את השרשיר שהנקבה מובילה, רווח של אצבע בין רימון לרימון ועד שמיעת קליק, מתאם מנופים וסוגר. מס 1 - דורך, מחזיר את הידייות ונועל אותן, פותח נצרה ולוחץ על ההדק ( בשלב הזה הרימון זז ימינה) לאחר מכן הוא מבצע שוב דריכה, חזרה ונקירה (ירי).
        
פריקה- בדיקה+חליצה- מס 1- נד"א, מס 2 בעזרת חולץ דרך המסילות מפיל את התרמיל האחרון ואז פותח מכסה גוף ומבצע בדיקה משולשת, מתאם מנופים וסוגר מכסה גוף, מס1- מחזיר את ידית שמאל ונועל אותה, פותח נצרה ומבצע נקירה מבוקרת עם ידית ימין ונועל, סוגר נצרה.
        `
      }
    ]
  },
  {
    id: "topic-14",
    title: "מקלרון",
    image: "images/miklaonim.png",
    pages: [
      {
        title: "רקע",
        text: `
ייעוד- אדם ורק"ם רק.
     `
      },
       {
        title: "סד''פ",
        text: `
        בדיקה/פריקה:
        1.מס 1 מוודא נצירה
        2.מס 2 פותח מכסה הזנה, מעביר ניקוי בגלגל ההזנה וסוגר
        3.מס 1 מבצע 2 דריכות
        4.מס 2 בדיקה משולשת (בית בליעה, פני נוקר, גלגל הזנה)
        5.מס 1 פותח נצרה, נוקר,נוצר
        
        טעינה:
        1.מס 1 מוודא נצירה
        2.מס 2 פותח מכסה הזנה ומזין שרשיר עם 2 דגשים נקבה מובילה שן שמאלית ראשונה מלאה, סגירת מכסה הזנה
        3.מס 1 מבצע 2 דריכות, פותח נצרה,נוקר,סוגר נצרה
        
        `
      }
    ]
  },
];

// אפשר להוסיף תמונה גם בתוך עמוד קריאה:
// הוסיפי בתוך אובייקט עמוד שורה:
// image: "images/my-reading-image.jpg"

const topicsGrid = document.getElementById("topicsGrid");
const topicsScreen = document.getElementById("topicsScreen");
const readerScreen = document.getElementById("readerScreen");
const pageContent = document.getElementById("pageContent");

let currentTopic = null;
let currentPage = 0;
let touchStartX = 0;

function renderTopics() {
  topicsGrid.innerHTML = "";

  topics.forEach(topic => {
    const card = document.createElement("article");
    card.className = "topic-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `פתיחת ${topic.title}`);

    card.innerHTML = `
      <img src="${topic.image}" alt="" onerror="this.style.display='none'">
      <div class="topic-card-text">
        <h2>${escapeHTML(topic.title)}</h2>
        <p>${escapeHTML(topic.description)}</p>
        <span class="open-mark"></span>
      </div>
    `;

    card.addEventListener("click", () => openTopic(topic.id));

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        openTopic(topic.id);
      }
    });

    topicsGrid.appendChild(card);
  });
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function openTopic(topicId) {
  currentTopic = topics.find(topic => topic.id === topicId);

  if (!currentTopic) return;

  currentPage = 0;

  topicsScreen.classList.add("hidden");
  readerScreen.classList.remove("hidden");

  renderPage();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function renderPage() {
  const pages = currentTopic.pages;
  const page = pages[currentPage];

  document.getElementById("topicBreadcrumb").textContent =
    currentTopic.title;

  document.getElementById("pageNumber").textContent =
    `עמוד ${currentPage + 1}`;

  document.getElementById("pageCount").textContent =
    `מתוך ${pages.length}`;

  document.getElementById("progressBar").style.width =
    `${((currentPage + 1) / pages.length) * 100}%`;

  pageContent.innerHTML = `
    ${page.title ? `<h2>${escapeHTML(page.title)}</h2>` : ""}
    ${page.text ? `<p>${escapeHTML(page.text)}</p>` : ""}
    ${page.image ? `<img src="${page.image}" alt="">` : ""}
  `;

  document.getElementById("prevButton").disabled =
    currentPage === 0;

  document.getElementById("nextButton").textContent =
    currentPage === pages.length - 1
      ? "סיום "
      : "הבא ";

  const dots = document.getElementById("pageDots");

  dots.innerHTML = pages.map((_, index) => `
    <button
      class="${index === currentPage ? "active" : ""}"
      data-page="${index}"
      aria-label="מעבר לעמוד ${index + 1}">
    </button>
  `).join("");

  dots.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      currentPage = Number(button.dataset.page);
      renderPage();
    });
  });
}

function nextPage() {
  if (!currentTopic) return;

  if (currentPage < currentTopic.pages.length - 1) {
    currentPage++;
    renderPage();
  } else {
    goBack();
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

function goBack() {
  currentTopic = null;

  readerScreen.classList.add("hidden");
  topicsScreen.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// כפתורי ניווט
document.getElementById("backButton")
  .addEventListener("click", goBack);

document.getElementById("prevButton")
  .addEventListener("click", previousPage);

document.getElementById("nextButton")
  .addEventListener("click", nextPage);

// דפדוף באמצעות החלקה במסך
// החלקה ימינה = העמוד הבא
// החלקה שמאלה = העמוד הקודם

pageContent.addEventListener("touchstart", event => {
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

pageContent.addEventListener("touchend", event => {
  const difference =
    event.changedTouches[0].screenX - touchStartX;

  if (Math.abs(difference) > 55) {
    if (difference > 0) {
      nextPage();
    } else {
      previousPage();
    }
  }
}, { passive: true });

// דפדוף באמצעות מקשי החצים במחשב
document.addEventListener("keydown", event => {
  if (readerScreen.classList.contains("hidden")) return;

  if (event.key === "ArrowLeft") {
    nextPage();
  }

  if (event.key === "ArrowRight") {
    previousPage();
  }
});

// חלונית הסבר ראשונית
// מוצגת רק בביקור הראשון באותו דפדפן

const welcomePopup =
  document.getElementById("welcomePopup");

if (
  localStorage.getItem("readingSiteWelcomeSeen") === "yes"
) {
  welcomePopup.classList.add("hidden");
}

document.getElementById("closeWelcome")
  .addEventListener("click", () => {
    welcomePopup.classList.add("hidden");

    localStorage.setItem(
      "readingSiteWelcomeSeen",
      "yes"
    );
  });

// הפעלת מסך הנושאים
renderTopics();