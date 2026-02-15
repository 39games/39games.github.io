// ====== GAME DATA ======
const gamesData = {
  "dread": {
    logo: "images/logos/dread.png",
    header: {
      background: "images/headers/dread-bg.png",
      size: "750px",
      accent: "#eae73d",
      class: "header-dread"
    },
    media: [
      { type: "video", src: "https://www.youtube.com/embed/VQtT93fjYdI" }
    ],
    links: {
      googleplay: "",
      steam: "",
      itch: "https://39games.itch.io/dread"
    },
    i18n: {
      title: "game-dread-title",
      description: "game-dread-desc1"
    }
  },

  "nutriasoulrush": {
    logo: "images/logos/nsr.png",
    header: {
      background: "images/headers/nsr-bg.png",
      accent: "#e63946",
      class: "header-nsr"
    },
    media: [
      { type: "video", src: "https://www.youtube.com/embed/jwONLTwq24E" }
    ],
    links: {
      googleplay: "https://play.google.com/store/apps/details?id=com.bruh39.drotn",
      steam: "",
      itch: "https://39games.itch.io/nutriasoulrush"
    },
    i18n: {
      title: "game-nutriasoulrush-title",
      description: "game-nutriasoulrush-desc"
    }
  },

  "themoon": {
    logo: "images/logos/moon.png",
    header: {
      background: "images/headers/moon-bg.png",
      accent: "#ffffff",
      class: "header-moon"
    },
    media: [
      { type: "video", src: "https://www.youtube.com/embed/qcjvQ-SErNI" }
    ],
    links: {
      googleplay: "",
      steam: "",
      itch: ""
    },
    i18n: {
      title: "game-themoon-title",
      description: "game-themoon-desc"
    }
  },

  "smashtrolls": {
    logo: "images/logos/troll.png",
    header: {
      background: "images/headers/troll-bg.png",
      accent: "#1ab617",
      class: "header-gb"
    },
    media: [],
    links: {
      googleplay: "",
      steam: "",
      itch: "https://39games.itch.io/smash-trolls"
    },
    i18n: {
      title: "game-smashtrolls-title",
      description: "game-smashtrolls-desc"
    }
  },

  "goblinbarrage": {
    logo: "images/logos/gb.png",
    header: {
      background: "images/headers/gb-bg.png",
      accent: "#e2801d",
      class: "header-gb"
    },
    media: [
      { type: "video", src: "https://www.youtube.com/embed/3IjSDXVTHQg" }
    ],
    links: {
      googleplay: "https://play.google.com/store/apps/details?id=com.bruh39.GoblinBarrage",
      steam: "",
      itch: "https://39games.itch.io/goblin-barrage"
    },
    i18n: {
      title: "game-goblinbarrage-title",
      description: "game-goblinbarrage-desc"
    }
  },

  "ogreassault": {
    logo: "images/logos/oa.png",
    header: {
      background: "images/headers/oa-bg.png",
      accent: "#218631",
      class: "header-gb"
    },
    media: [
      { type: "video", src: "https://www.youtube.com/embed/YC6pSaAKGqA" }
    ],
    links: {
      googleplay: "https://play.google.com/store/apps/details?id=com.bruh39.OgreAssault",
      steam: "",
      itch: "https://39games.itch.io/ogre-assault"
    },
    i18n: {
      title: "game-ogreassault-title",
      description: "game-ogreassault-desc"
    }
  }
};

// ====== GET GAME FROM URL ======
const urlParams = new URLSearchParams(window.location.search);
const gameKey = urlParams.get("game");
const game = gamesData[gameKey] || Object.values(gamesData)[0]; // default first game if invalid

// ====== POPULATE HEADER ======
const headerEl = document.getElementById("projectHeader");
headerEl.className = '';
headerEl.style.backgroundImage = '';
headerEl.style.setProperty('--accent', '');

if (game.header) {
  const h = game.header;
  if (h.class) headerEl.classList.add(h.class);

  if (h.background) {
    headerEl.style.backgroundImage = `url(${h.background})`;
    if (h.repeat) {
      headerEl.style.backgroundRepeat = 'repeat';
      headerEl.style.backgroundSize = h.size || 'auto';
      headerEl.style.backgroundPosition = 'top left';
    } else {
      headerEl.style.backgroundRepeat = 'no-repeat';
      headerEl.style.backgroundSize = 'cover';
      headerEl.style.backgroundPosition = 'center';
    }
  }

  if (h.accent) headerEl.style.setProperty('--accent', h.accent);
}

// Use translations for title
headerEl.innerHTML = `
  <img src="${game.logo}" alt="" class="game-logo" data-i18n="${game.i18n.title}">
  <div class="project-links">
    ${game.links.googleplay ? `<a href="${game.links.googleplay}" target="_blank" class="link-btn googleplay"><i class="fab fa-google-play"></i></a>` : ''}
    ${game.links.steam ? `<a href="${game.links.steam}" target="_blank" class="link-btn steam"><i class="fab fa-steam"></i></a>` : ''}
    ${game.links.itch ? `<a href="${game.links.itch}" target="_blank" class="link-btn itch"><i class="fab fa-itch-io"></i></a>` : ''}
  </div>
`;

// ====== POPULATE CONTENT ======
const contentEl = document.getElementById("projectContent");

let mediaHTML = '';
game.media.forEach(m => {
  if (m.type === "image") mediaHTML += `<div class="media-item fade"><img src="${m.src}" alt=""></div>`;
  if (m.type === "video") mediaHTML += `<div class="media-item fade"><iframe src="${m.src}" allowfullscreen></iframe></div>`;
});

const isGoblinBarrage = gameKey === "goblinbarrage";

contentEl.innerHTML = `
  <div class="media-gallery">
    ${mediaHTML}
  </div>

  ${isGoblinBarrage ? `
  <section class="skins-section fade">
    <h2>Skins</h2>

    <div class="skin-carousel">
      <button class="skin-arrow left"><i class="fas fa-chevron-left"></i></button>

      <div class="skin-display">
        <img id="skinImage" src="" alt="Skin">
        <div id="skinName"></div>
      </div>

      <button class="skin-arrow right"><i class="fas fa-chevron-right"></i></button>
    </div>
  </section>
  ` : ''}

  <br><br>
  <div class="description fade" data-i18n="${game.i18n.description}"></div>
`;




// ====== FADE IN ======
const faders = document.querySelectorAll('.fade');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:0.1});
faders.forEach(fader => observer.observe(fader));

// ====== LANGUAGE SWITCH ======
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// Load default language
let currentLang = localStorage.getItem('lang') || 'en';
applyTranslations(currentLang);

// Optional: language toggle button
document.getElementById('langSwitch').addEventListener('click', ()=>{
  currentLang = currentLang === 'en' ? 'sr' : 'en';
  localStorage.setItem('lang', currentLang);
  applyTranslations(currentLang);
});

// ====== GOBLIN BARRAGE SKINS ======



// ====== PARALLAX LOGO ======
const logos = document.querySelectorAll('.game-logo');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  logos.forEach((logo, i) => {
    const speed = 0.04 + (i % 5) * 0.01;
    const offset = scrollY * speed;
    logo.style.setProperty('--parallax', `${offset}px`);
  });
});
