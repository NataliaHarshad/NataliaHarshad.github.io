const form = document.getElementById("wedding-form");
const allergyRadios = document.querySelectorAll('input[name="allergy_choice"]');
const allergyWrap = document.getElementById("allergy-text-wrap");
const allergyText = document.getElementById("allergy-text");
const formMessage = document.getElementById("form-message");

const BOT_TOKEN = "8686926171:AAFrdwQDVzNiIS5QaRxLe1-q-Hb8425FkCQ";
const CHAT_ID = "418025019";

/* Переводы */

const translations = {
  ru: {
    page_title: "Приглашение",

    hero_name_1: "Харшад",
    hero_and: "&",
    hero_name_2: "Наталья",
    hero_date: "26.08.26",

    story_title_1: "Дорогие наши,",
    story_title_2: "близкие и родные!",
    story_letter_1: "С",
    story_short_text_1: "лучилось в нашей жизни радостное событие — <br> родилась новая семья.",
    story_main_text_1: "И как водится в добрых сказках, сначала был у нас пир на весь мир — да не где-нибудь, а на дальних берегах, по старинным индийским традициям жениха. Там звучали песни, горели огни, и было много радости и благословений.",
    story_letter_2: "А",
    story_short_text_2: "теперь пришёл черёд и славянской стороне праздновать.",
    story_main_text_2: "Зовёт невеста родных да друзей собраться вместе, чтобы по нашим обычаям да традициям отметить это счастливое событие. Пусть будет в этот день много смеха, добрых слов, тёплых объятий и радости, а также славянских традиций, песен и танцев. Будем счастливы видеть вас рядом и разделить с вами этот светлый день нашей семейной истории.",

    location_title: "Локация",
    location_subtitle: "Усадьба Мосоловых",
    location_address: "Тульская область,<br> Дубенский район, рабочий <br>посёлок Дубна, улица 50 <br> лет ВЛКСМ, 1",

    program_title: "Программа дня",

    concept_title: "Концепция праздника<br>- Дворянский вечер",
    concept_text_1: "Для нашего праздника мы <br>вдохновились атмосферой <br>русской усадьбы и дворянских <br>вечеров.",
    concept_text_2: "Будем рады видеть вас в <br>элегантных вечерних образах,<br>которые гармонично впишутся в <br>атмосферу старинной усадьбы:",
    concept_text_3: "для дам — рюши, корсеты,<br>вечерние или коктейльные платья <br>(особенно красиво будут <br>смотреться платья в пол)",
    concept_text_4: "для джентльменов — рюши, <br>костюмы или элегантные <br>классические образы",
    concept_bottom_text: "Не стесняйтесь использовать как <br>можно больше рюш, можно <br>добавить небольшие акценты в <br>образе — через перчатки и <br>романтичные аксессуары",

    palette_title: "Палитра предпочтительных цветов:",
    palette_text: "Это совсем не обязательно, но <br>такие детали помогут создать <br>атмосферу нашего праздника. <br>Если сомневаетесь в образе — <br>смело выбирайте классический <br>вечерний стиль, он идеально <br>подойдёт для нашего праздника.",
    palette_final_text: "Главное — ваше прекрасное <br>настроение и желание разделить <br>этот день вместе с нами",

    form_main_title: "Анкета",
    form_name_placeholder: "Ваше имя",
    form_attendance_title: "Подтвердите свое присутствие",
    form_attendance_yes: "Да, я с радостью приду",
    form_attendance_no: "К сожалению, не смогу присутствовать",
    form_food_title: "Есть ли у вас ограничения в питании или аллергии? (если да, то на что)",
    form_food_no: "Нет",
    form_food_yes: "Да",
    form_food_placeholder: "Напишите, пожалуйста, ограничения в питании или аллергию",

    meeting_title: "До встречи",
    countdown_days: "Дней",
    countdown_hours: "Часов",
    countdown_minutes: "Минут",
    countdown_seconds: "Секунд",
    wishlist_text: "Для тех, кто любит спрашивать <br>про список желаний",

    msg_select_name: "Пожалуйста, выберите имя",
    msg_attendance: "Пожалуйста, подтвердите присутствие",
    msg_food: "Пожалуйста, укажите информацию по ограничениям в питании",
    msg_food_details: "Пожалуйста, напишите ограничения в питании или аллергию",
    msg_sending: "Отправляем...",
    msg_success: "Анкета отправлена",
    msg_error_data: "Ошибка отправки. Проверьте токен бота и chat_id",
    msg_error_send: "Не удалось отправить анкету",

    tg_new_form: "Новая анкета с сайта",
    tg_name: "Имя",
    tg_attendance: "Присутствие",
    tg_food: "Ограничения в питании или аллергия",
    tg_details: "Подробности",

    img_5: "img/5.png",
    img_6: "img/6.png",
    img_12: "img/12.png",
    img_16: "img/16.png",

    location_map: "https://yandex.com/maps/org/usadba_mosolovykh/110497682322/"
  },

  en: {
    page_title: "Invitation",

    hero_name_1: "Harshad",
    hero_and: "&",
    hero_name_2: "Natalia",
    hero_date: "26.08.26",

    story_title_1: "Dear family",
    story_title_2: "and dear friends,",
    story_letter_1: "A",
    story_short_text_1: "beautiful and joyful chapter has begun in our lives — a new family has been born.",
    story_main_text_1: "And as in every good fairy tale, our story began with a wonderful celebration. On distant shores, according to the ancient traditions of the groom’s homeland in India, there was a feast filled with music, glowing lights, heartfelt blessings, and much joy.",
    story_letter_2: "A",
    story_short_text_2: "nd now the time has come for the Slavic side of the story to unfold.",
    story_main_text_2: "The bride warmly invites her family and dear friends to gather together and celebrate this happy occasion according to our own cherished traditions. May this day be filled with laughter, kind words, warm embraces, and joyful moments — with Slavic songs, dancing, and the spirit of celebration that brings everyone together.It would mean the world to us to have you by our side and to share this bright and magical day in the story of our family.",

    location_title: "Location",
    location_subtitle: "Mosolov Estate",
    location_address: "Tula Region,<br>Dubensky District, <br>Dubna settlement, <br>50 Let VLKSM Street, 1",

    program_title: "Program of the Day",

    concept_title: "Concept of the Celebration —<br>A Noble Evening",
    concept_text_1: "For our celebration, we were inspired by the atmosphere of a Russian country estate and the elegance of noble gatherings of the past.",
    concept_text_2: "We would be delighted to see you in elegant evening attire that harmonizes with the charm of an old manor setting.",
    concept_text_3: "For ladies — ruffles, corsets, evening or cocktail dresses (floor-length gowns would look especially beautiful).",
    concept_text_4: "For gentlemen — suits or elegant classic attire. Romantic details and decorative elements can also be a lovely touch.",
    concept_bottom_text: "Feel free to embrace ruffles and soft romantic details, and add subtle accents to your look through gloves or elegant accessories.",

    palette_title: "Preferred color palette:",
    palette_text: "Of course, this is not mandatory, but these details will help create the special atmosphere of our celebration.If you are unsure about your outfit, feel free to choose classic evening attire — it will fit the spirit of our event perfectly.",
    palette_final_text: "Most importantly, bring your wonderful mood and your wish to share this special day with us",

    form_main_title: "RSVP",
    form_name_placeholder: "Your name",
    form_attendance_title: "Will you attend our event?",
    form_attendance_yes: "I will attend with joy",
    form_attendance_no: "Regretfully, I cannot attend",
    form_food_title: "Do you have any allergies or food restrictions (if so, please give us details)?",
    form_food_no: "No",
    form_food_yes: "Yes",
    form_food_placeholder: "Please write your dietary restrictions or allergies",

    meeting_title: "See You Soon",
    countdown_days: "Days",
    countdown_hours: "Hours",
    countdown_minutes: "Minutes",
    countdown_seconds: "Seconds",
    wishlist_text: "For those who ask for our wish-list",

    msg_select_name: "Please select your name",
    msg_attendance: "Please confirm your attendance",
    msg_food: "Please specify dietary restrictions information",
    msg_food_details: "Please write your dietary restrictions or allergies",
    msg_sending: "Sending...",
    msg_success: "Form sent",
    msg_error_data: "Sending error. Check bot token and chat id",
    msg_error_send: "Could not send the form",

    tg_new_form: "New form from website",
    tg_name: "Name",
    tg_attendance: "Attendance",
    tg_food: "Dietary restrictions or allergies",
    tg_details: "Details",

    img_5: "img/5-en.png",
    img_6: "img/6-en.png",
    img_12: "img/12-en.png",
    img_16: "img/16-en.png",
    location_map: "https://maps.app.goo.gl/XyMPRUcVRVb8FWSKA?g_st=ic"
  }
};

/* Текущий язык */

function getCurrentLanguage() {
  return localStorage.getItem("siteLanguage") || "ru";
}

/* Применение языка */

function applyLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  document.querySelectorAll("[data-i18n-link]").forEach((element) => {
  const key = element.dataset.i18nLink;
  if (dictionary[key] !== undefined) {
    element.href = dictionary[key];
  }
});

  document.documentElement.lang = lang;
  document.body.classList.remove("lang-ru", "lang-en");
  document.body.classList.add(`lang-${lang}`);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key] !== undefined) {
      element.placeholder = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-image]").forEach((element) => {
    const key = element.dataset.i18nImage;
    if (dictionary[key] !== undefined) {
      element.src = dictionary[key];
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((button) => {
    button.classList.toggle("active", button.dataset.langBtn === lang);
  });

  if (dictionary.page_title) {
    document.title = dictionary.page_title;
  }

  localStorage.setItem("siteLanguage", lang);
}

document.querySelectorAll("[data-lang-btn]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langBtn);
  });
});

/* Показ поля аллергии */

function toggleAllergyField() {
  if (!allergyWrap || !allergyText) return;

  const selected = document.querySelector('input[name="allergy_choice"]:checked');

  if (!selected) {
    allergyWrap.classList.remove("show");
    allergyText.required = false;
    allergyText.value = "";
    return;
  }

  const currentLang = getCurrentLanguage();
  const yesValue = currentLang === "en" ? "Yes" : "Да";

  if (selected.value === yesValue) {
    allergyWrap.classList.add("show");
    allergyText.required = true;
  } else {
    allergyWrap.classList.remove("show");
    allergyText.required = false;
    allergyText.value = "";
  }
}

/* Обновление значений radio после смены языка */

function updateFormValuesByLanguage(lang) {
  const attendanceRadios = document.querySelectorAll('input[name="attendance"]');
  const allergyChoiceRadios = document.querySelectorAll('input[name="allergy_choice"]');

  if (attendanceRadios.length >= 2) {
    attendanceRadios[0].value = translations[lang].form_attendance_yes;
    attendanceRadios[1].value = translations[lang].form_attendance_no;
  }

  if (allergyChoiceRadios.length >= 2) {
    allergyChoiceRadios[0].value = translations[lang].form_food_no;
    allergyChoiceRadios[1].value = translations[lang].form_food_yes;
  }
}

/* Первый запуск языка */

const savedLanguage = getCurrentLanguage();
applyLanguage(savedLanguage);
updateFormValuesByLanguage(savedLanguage);

/* Переключение языка + обновление значений формы */

document.querySelectorAll("[data-lang-btn]").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.langBtn;
    applyLanguage(lang);
    updateFormValuesByLanguage(lang);
    toggleAllergyField();
  });
});

/* Слушатели на radio */

allergyRadios.forEach((radio) => {
  radio.addEventListener("change", toggleAllergyField);
});

/* Отправка формы в телеграм */

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const lang = getCurrentLanguage();
    const t = translations[lang];

    const guestName = document.getElementById("guest-name")?.value || "";
    const attendance = document.querySelector('input[name="attendance"]:checked')?.value || "";
    const allergyChoice = document.querySelector('input[name="allergy_choice"]:checked')?.value || "";
    const allergyDetails = allergyText ? allergyText.value.trim() : "";

    if (!guestName) {
      if (formMessage) formMessage.textContent = t.msg_select_name;
      return;
    }

    if (!attendance) {
      if (formMessage) formMessage.textContent = t.msg_attendance;
      return;
    }

    if (!allergyChoice) {
      if (formMessage) formMessage.textContent = t.msg_food;
      return;
    }

    if (allergyChoice === t.form_food_yes && !allergyDetails) {
      if (formMessage) formMessage.textContent = t.msg_food_details;
      return;
    }

    const text =
`${t.tg_new_form}

${t.tg_name}: ${guestName}

${t.tg_attendance}: ${attendance}

${t.tg_food}: ${allergyChoice}${allergyChoice === t.form_food_yes ? `

${t.tg_details}: ${allergyDetails}` : ""}`;

    if (formMessage) formMessage.textContent = t.msg_sending;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text
        })
      });

      const result = await response.json();

      if (result.ok) {
        if (formMessage) formMessage.textContent = t.msg_success;
        form.reset();
        toggleAllergyField();
      } else {
        if (formMessage) formMessage.textContent = t.msg_error_data;
        console.error(result);
      }
    } catch (error) {
      if (formMessage) formMessage.textContent = t.msg_error_send;
      console.error(error);
    }
  });
}

/* Обратный отсчет */

const weddingDate = new Date("2026-08-26T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* Музыка */

const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const musicDisc = document.getElementById("music-disc");

let musicStarted = false;

function setMusicPlayingState(isPlaying) {
  if (!musicDisc) return;

  if (isPlaying) {
    musicDisc.classList.add("is-playing");
  } else {
    musicDisc.classList.remove("is-playing");
  }
}

function playMusic() {
  if (!music) return Promise.resolve();

  if (!musicStarted) {
    music.currentTime = 8;
    musicStarted = true;
  }

  return music.play()
    .then(() => {
      setMusicPlayingState(true);
    })
    .catch((error) => {
      setMusicPlayingState(false);
      throw error;
    });
}

function pauseMusic() {
  if (!music) return;
  music.pause();
  setMusicPlayingState(false);
}

function toggleMusic() {
  if (!music) return;

  if (music.paused) {
    playMusic().catch(() => {});
  } else {
    pauseMusic();
  }
}

function tryAutoplayMusic() {
  if (!music) return;

  playMusic().catch(() => {
    const startOnFirstInteraction = () => {
      playMusic().catch(() => {});
    };

    document.addEventListener("click", startOnFirstInteraction, { once: true });
    document.addEventListener("touchstart", startOnFirstInteraction, { once: true });
  });
}

if (musicToggle) {
  musicToggle.addEventListener("click", toggleMusic);
}

if (music) {
  music.addEventListener("play", () => setMusicPlayingState(true));
  music.addEventListener("pause", () => setMusicPlayingState(false));
  music.addEventListener("ended", () => setMusicPlayingState(false));
}

window.addEventListener("load", tryAutoplayMusic);