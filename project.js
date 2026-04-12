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
  },
  "theforeigner": {
    logo: "images/logos/foreigner.png",   // your logo PNG here
    header: {
      background: "images/headers/foreigner-bg.png",
      accent: "#8b2fc9",
      class: "header-foreigner"
    },
    media: [
      // Add a YouTube devlog when you have one:
      // { type: "video", src: "https://www.youtube.com/embed/YOUR_VIDEO_ID" }
    ],
    links: {
      googleplay: "",
      steam: "",
      itch: ""    // add when ready
    },
    i18n: {
      title: "game-theforeigner-title",
      description: "game-theforeigner-desc"
    }
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // optional but recommended
    }
  });
}, { threshold: 0.1 });

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

const isTheforeigner = gameKey === "theforeigner";
 
if (isTheforeigner) {
  // Override the whole content with the foreigner special layout
  contentEl.innerHTML = `
    <div class="foreigner-status fade">
      <div class="foreigner-status__dot"></div>
      <div class="foreigner-status__text">
        <strong>IN DEVELOPMENT</strong> &nbsp;·&nbsp; 
        <strong>Beat-em-up RPG</strong> &nbsp;·&nbsp; <strong>Unity 2D</strong> &nbsp;·&nbsp; <strong>Demo targeted for end of year</strong>
      </div>
    </div>
 
    <!-- MEDIA (add your devlog video here when ready) -->
    <div class="media-gallery">
      ${mediaHTML || ''}
    </div>
 
    <!-- INTRO -->
    <div class="foreigner-intro fade">
      <div class="foreigner-intro__text">
        <h2>ARE YOU THE MONSTER ?</h2>
        <p>
          The Foreigner is a dark, hand-crafted beat-em-up RPG set in a corrupt world
          where you play as a, well, a foreigner - an outsider everyone fears, hunts, and calls a monster.
        </p>
        <p>
          Why? Well, it is for you to find out. You find clues for who - or even what you are as you progress through.
        </p>
        <p>
          As you fight through the citizens, the line between justified violence
          and blind brutality erodes. The world's corruption isn't just in its enemies —
          it's in the player's hands.
        </p>
        <p>
          And behind all of it sits the Mayor, a corrupt and unjust politican looking
          to ethnically cleanse the city from the foreigners.
        </p>
      </div>
      <div class="foreigner-intro__art">
        <!--
          SPRITES FOR THIS SECTION:
          <img src="images/foreigner/scene-intro.png" 
               style="max-width:100%; image-rendering:pixelated; 
                      filter:drop-shadow(0 0 20px rgba(139,47,201,0.4));" 
               alt="The Foreigner scene">
        -->
        <img src="images/foreigner/scene-intro.png" 
               style="max-width:100%; image-rendering:pixelated; 
                      filter:drop-shadow(0 0 20px rgba(139,47,201,0.4));" 
               alt="The Foreigner scene">
      </div>
    </div>
 
    <!-- FEATURES -->
    <div class="foreigner-features fade">
      <div class="foreigner-features__title">WHAT MAKES IT</div>
      <div class="foreigner-features__grid">
        <div class="foreigner-feature-card">
          <span class="foreigner-feature-card__icon">⚔️</span>
          <div class="foreigner-feature-card__title">BRUTAL COMBAT</div>
          <div class="foreigner-feature-card__desc">
            Hand-animated finishers and lots, and i mean LOTS of blood.
            Every kill has weight.
          </div>
        </div>
        <div class="foreigner-feature-card">
          <span class="foreigner-feature-card__icon">🌑</span>
          <div class="foreigner-feature-card__title">CREEPY ART STYLE</div>
          <div class="foreigner-feature-card__desc">
            Unsettling horror-inspired creature design. Grotesque, hand-crafted sprites
            that make every enemy unforgettable, all thanks to Lumo TV (the artist).
          </div>
        </div>
        <div class="foreigner-feature-card">
          <span class="foreigner-feature-card__icon">🧠</span>
          <div class="foreigner-feature-card__title">FUN PUZZLES</div>
          <div class="foreigner-feature-card__desc">
            Along side the gore and the murder, there are also some crazy-ass puzzles that will make you want to murder the devs when you figure out the answer!
          </div>
        </div>
        <div class="foreigner-feature-card">
          <span class="foreigner-feature-card__icon">👾</span>
          <div class="foreigner-feature-card__title">MULTIPLE WAYS TO PLAY</div>
          <div class="foreigner-feature-card__desc">
            The game is an RPG-beat em up-platformer-puzzle game hybrid, there's something for everyone! Well, not really everyone, I doubt people with hemophobia would want to play it.
          </div>
        </div>
        <div class="foreigner-feature-card">
          <span class="foreigner-feature-card__icon">📖</span>
          <div class="foreigner-feature-card__title">ENGAGING STORY</div>
          <div class="foreigner-feature-card__desc">
            Zou just have to trust me on this one, can't reveal too much yet...
          </div>
        </div>
      </div>
    </div>
 
    <!-- SPRITE SHOWCASE -->
    <div class="foreigner-sprites fade">
      <div class="foreigner-sprites__title">CHARACTERS</div>
      <div class="foreigner-sprites__row">
        <!--
          ADD YOUR SPRITES HERE. Recommended sprites to ask your artist for:
          
          1. char-main.png      → Main character, idle or combat pose, ~300px tall
          2. enemy-basic.png         → Common enemy type
          3. enemy-boss.png          → BigMonsterController2D or another boss
          4. enemy-tentacle.png      → Tentacle mouth creature
          5. enemy-poison.png        → Poison finisher creature
          
          Example:
          <div class="foreigner-sprite-card">
            <img src="../images/foreigner/char-main.png" alt="The Foreigner">
            <span class="foreigner-sprite-card__label">THE FOREIGNER</span>
          </div>
          <div class="foreigner-sprite-card">
            <img src="images/foreigner/enemy-basic.png" alt="Creature">
            <span class="foreigner-sprite-card__label">CREATURE TYPE 1</span>
          </div>
        -->
        
        <!-- Placeholder cards until sprites are added -->
        <div class="foreigner-sprite-card">
  <div class="foreigner-sprite-box">
    <img src="../images/foreigner/char-main.png" alt="The Foreigner" />
  </div>

  <span class="foreigner-sprite-card__label">THE FOREIGNER</span>
</div>
        <div class="foreigner-sprite-card">
  <div class="foreigner-sprite-box">
    <img src="../images/foreigner/girl.png" alt="THE GIRL" />
  </div>

  <span class="foreigner-sprite-card__label">THE GIRL</span>
</div>
        <div class="foreigner-sprite-card">
  <div class="foreigner-sprite-box">
    <img src="../images/foreigner/mayor.png" alt="THE MAYOR" />
  </div>

  <span class="foreigner-sprite-card__label">THE MAYOR</span>
</div>
        <div class="foreigner-sprite-card">
  <div class="foreigner-sprite-box">
    <img src="../images/foreigner/mc.png" alt="THE CITIZENS" />
  </div>

  <span class="foreigner-sprite-card__label">THE CITIZENS</span>
      </div>
    </div>
    </div>
 
    <!-- DEVLOG / FOLLOW SECTION -->
    <div class="fade" style="
      margin: 60px 0;
      padding: 40px;
      background: rgba(139,47,201,0.04);
      border: 1px solid rgba(139,47,201,0.15);
      border-radius: 4px;
      text-align: center;
    ">
      <div style="font-family:var(--font-foreigner); font-size:16px; color:var(--pink); margin-bottom:16px; letter-spacing:2px;">
        FOLLOW DEVELOPMENT
      </div>
      <p style="color:rgba(255,255,255,0.5); margin-bottom:28px; max-width:500px; margin-left:auto; margin-right:auto;">
        The Foreigner is in active development. Follow on TikTok and YouTube for devlogs, 
        behind-the-scenes clips, and early gameplay.
      </p>
      <div style="display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">
        <a href="https://www.tiktok.com/@39games_" target="_blank" 
           class="foreigner-btn foreigner-btn--primary" style="text-decoration:none;">
          <i class="fab fa-tiktok"></i> <span>@39GAMES_</span>
        </a>
        <a href="https://www.youtube.com/@39Gamess" target="_blank" 
           class="foreigner-btn foreigner-btn--primary" style="text-decoration:none;">
          <i class="fab fa-youtube"></i> <span>39 GAMES</span>
        </a>
      </div>
    </div>
  `;
 
}

function observeFades(root = document) {
  root.querySelectorAll('.fade').forEach(el => {
    observer.observe(el);
  });
}

observeFades(contentEl);
// ====== FADE IN ======
const faders = document.querySelectorAll('.fade');



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
