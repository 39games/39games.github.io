// ====== GAME DATA ======
const gamesData = {
  "dread": {
    logo: "images/logos/dread.png",
    header: {
      background: "images/headers/dread-bg.png",
      accent: "#eae73d",
      class: "header-dread"
    },
    media: [
      { type: "video", src: "https://www.youtube.com/embed/VQtT93fjYdI" }
    ],
    links: { googleplay: "", steam: "", itch: "https://39games.itch.io/dread" },
    i18n: { title: "game-dread-title", description: "game-dread-desc1" }
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
    i18n: { title: "game-nutriasoulrush-title", description: "game-nutriasoulrush-desc" }
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
    links: { googleplay: "", steam: "", itch: "" },
    i18n: { title: "game-themoon-title", description: "game-themoon-desc" }
  },
  "smashtrolls": {
    logo: "images/logos/troll.png",
    header: {
      background: "images/headers/troll-bg.png",
      accent: "#1ab617",
      class: "header-trolls"
    },
    media: [],
    links: { googleplay: "", steam: "", itch: "https://39games.itch.io/smash-trolls" },
    i18n: { title: "game-smashtrolls-title", description: "game-smashtrolls-desc" }
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
    i18n: { title: "game-goblinbarrage-title", description: "game-goblinbarrage-desc" }
  },
  "ogreassault": {
    logo: "images/logos/oa.png",
    header: {
      background: "images/headers/oa-bg.png",
      accent: "#218631",
      class: "header-oa"
    },
    media: [
      { type: "video", src: "https://www.youtube.com/embed/YC6pSaAKGqA" }
    ],
    links: {
      googleplay: "https://play.google.com/store/apps/details?id=com.bruh39.OgreAssault",
      steam: "",
      itch: "https://39games.itch.io/ogre-assault"
    },
    i18n: { title: "game-ogreassault-title", description: "game-ogreassault-desc" }
  },
  "theforeigner": {
    logo: "images/logos/foreigner.png",
    header: {
      background: "images/headers/foreigner-bg.png",
      accent: "#8b2fc9",
      class: "header-foreigner"
    },
    media: [],
    links: { googleplay: "", steam: "", itch: "" },
    i18n: { title: "game-theforeigner-title", description: "game-theforeigner-desc" }
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// ====== GET GAME FROM URL ======
const urlParams = new URLSearchParams(window.location.search);
const gameKey = urlParams.get("game");
const game = gamesData[gameKey] || Object.values(gamesData)[0];

// ====== POPULATE HEADER ======
const headerEl = document.getElementById("projectHeader");
headerEl.className = '';
headerEl.style.cssText = '';

if (game.header) {
  const h = game.header;
  if (h.class) headerEl.classList.add(h.class);
  if (h.background) {
    headerEl.style.backgroundImage = `url(${h.background})`;
    headerEl.style.backgroundRepeat = 'no-repeat';
    headerEl.style.backgroundSize = 'cover';
    headerEl.style.backgroundPosition = 'center';
  }
  if (h.accent) headerEl.style.setProperty('--accent', h.accent);
}

headerEl.innerHTML = `
  <img src="${game.logo}" alt="" class="game-logo" data-i18n="${game.i18n.title}">
  <div class="project-links">
    ${game.links.googleplay ? `<a href="${game.links.googleplay}" target="_blank" class="link-btn googleplay"><i class="fab fa-google-play"></i></a>` : ''}
    ${game.links.steam    ? `<a href="${game.links.steam}"       target="_blank" class="link-btn steam"><i class="fab fa-steam"></i></a>`         : ''}
    ${game.links.itch     ? `<a href="${game.links.itch}"        target="_blank" class="link-btn itch"><i class="fab fa-itch-io"></i></a>`          : ''}
  </div>
`;

// ====== BUILD MEDIA HTML ======
const contentEl = document.getElementById("projectContent");
let mediaHTML = '';
game.media.forEach(m => {
  if (m.type === "image") mediaHTML += `<div class="media-item fade"><img src="${m.src}" alt=""></div>`;
  if (m.type === "video") mediaHTML += `<div class="media-item fade"><iframe src="${m.src}" allowfullscreen></iframe></div>`;
});

// ================================================================
//  GAME-SPECIFIC LAYOUTS
// ================================================================

// ─────────────────────────────────────────────
//  THE FOREIGNER
// ─────────────────────────────────────────────
if (gameKey === "theforeigner") {
  document.body.classList.add('pg-foreigner');
  contentEl.innerHTML = `
    <div class="foreigner-status fade">
      <div class="foreigner-status__dot"></div>
      <div class="foreigner-status__text">
        <strong>IN DEVELOPMENT</strong> &nbsp;·&nbsp;
        <strong>Beat-em-up RPG</strong> &nbsp;·&nbsp; <strong>Unity 2D</strong> &nbsp;·&nbsp;
        <strong>Demo coming before end of the year</strong>
      </div>
    </div>
    <div class="media-gallery">${mediaHTML}</div>
    <div class="foreigner-intro fade">
      <div class="foreigner-intro__text">
        <h2>ARE YOU THE MONSTER ?</h2>
        <p>The Foreigner is a dark, hand-crafted beat-em-up RPG set in a corrupt world where you play as a, well, a foreigner — an outsider everyone fears, hunts, and calls a monster.</p>
        <p>Why? Well, it is for you to find out. You find clues for who — or even what you are as you progress through.</p>
        <p>As you fight through the citizens, the line between justified violence and blind brutality erodes. The world's corruption isn't just in its enemies — it's in the player's hands.</p>
        <p>And behind all of it sits the Mayor, a corrupt and unjust politician looking to ethnically cleanse the city from the foreigners.</p>
      </div>
      <div class="foreigner-intro__art">
        <video autoplay muted loop playsinline controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture
          style="max-width:100%;image-rendering:pixelated;filter:drop-shadow(0 0 20px rgba(139,47,201,0.4));pointer-events:none;">
          <source src="images/foreigner/scene-intro.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="foreigner-features fade">
      <div class="foreigner-features__title">WHAT MAKES IT</div>
      <div class="foreigner-features__grid">
        <div class="foreigner-feature-card"><span class="foreigner-feature-card__icon">⚔️</span><div class="foreigner-feature-card__title">BRUTAL COMBAT</div><div class="foreigner-feature-card__desc">Hand-animated finishers and lots, and i mean LOTS of blood. Every kill has weight.</div></div>
        <div class="foreigner-feature-card"><span class="foreigner-feature-card__icon">🌑</span><div class="foreigner-feature-card__title">CREEPY ART STYLE</div><div class="foreigner-feature-card__desc">Unsettling horror-inspired creature design. Grotesque, hand-crafted sprites that make every enemy unforgettable, all thanks to Lumo TV.</div></div>
        <div class="foreigner-feature-card"><span class="foreigner-feature-card__icon">🧠</span><div class="foreigner-feature-card__title">FUN PUZZLES</div><div class="foreigner-feature-card__desc">Along side the gore and the murder, there are also some crazy-ass puzzles that will make you want to murder the devs when you figure out the answer!</div></div>
        <div class="foreigner-feature-card"><span class="foreigner-feature-card__icon">👾</span><div class="foreigner-feature-card__title">MULTIPLE WAYS TO PLAY</div><div class="foreigner-feature-card__desc">RPG-beat em up-platformer-puzzle hybrid. There's something for everyone! Well, not for people with hemophobia.</div></div>
        <div class="foreigner-feature-card"><span class="foreigner-feature-card__icon">📖</span><div class="foreigner-feature-card__title">ENGAGING STORY</div><div class="foreigner-feature-card__desc">You just have to trust me on this one, can't reveal too much yet...</div></div>
      </div>
    </div>
    <div class="foreigner-sprites fade">
      <div class="foreigner-sprites__title">CHARACTERS</div>
      <div class="foreigner-sprites__row">
        <div class="foreigner-sprite-card"><div class="foreigner-sprite-box"><img src="../images/foreigner/char-main.png" alt="The Foreigner"/></div><span class="foreigner-sprite-card__label">THE FOREIGNER</span></div>
        <div class="foreigner-sprite-card"><div class="foreigner-sprite-box"><img src="../images/foreigner/girl.png" alt="THE GIRL"/></div><span class="foreigner-sprite-card__label">THE GIRL</span></div>
        <div class="foreigner-sprite-card"><div class="foreigner-sprite-box"><img src="../images/foreigner/mayor.png" alt="THE MAYOR"/></div><span class="foreigner-sprite-card__label">THE MAYOR</span></div>
        <div class="foreigner-sprite-card"><div class="foreigner-sprite-box"><img src="../images/foreigner/mc.png" alt="THE CITIZENS"/></div><span class="foreigner-sprite-card__label">THE CITIZENS</span></div>
      </div>
    </div>
    <div class="fade" style="margin:60px 0;padding:40px;background:rgba(139,47,201,0.04);border:1px solid rgba(139,47,201,0.15);border-radius:4px;text-align:center;">
      <div style="font-family:var(--font-foreigner);font-size:16px;color:var(--pink);margin-bottom:16px;letter-spacing:2px;">FOLLOW DEVELOPMENT</div>
      <p style="color:rgba(255,255,255,0.5);margin-bottom:28px;max-width:500px;margin-left:auto;margin-right:auto;">The Foreigner is in active development. Follow on TikTok and YouTube for devlogs, behind-the-scenes clips, and early gameplay.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
        <a href="https://www.tiktok.com/@39games_" target="_blank" class="foreigner-btn foreigner-btn--primary" style="text-decoration:none;"><i class="fab fa-tiktok"></i> <span>@39GAMES_</span></a>
        <a href="https://www.youtube.com/@39Gamess" target="_blank" class="foreigner-btn foreigner-btn--primary" style="text-decoration:none;"><i class="fab fa-youtube"></i> <span>39 GAMES</span></a>
      </div>
    </div>
  `;

// ─────────────────────────────────────────────
//  DREAD — PS1 / VHS / amber horror
// ─────────────────────────────────────────────
} else if (gameKey === "dread") {
  document.body.classList.add('pg-dread');
  contentEl.innerHTML = `
    <div class="dread-vhs-noise" aria-hidden="true"></div>

    <div class="dread-vhs-label fade">
      <span class="dread-vhs-rec">● REC</span>
      <span class="dread-vhs-time" id="dreadClock"></span>
      <span class="dread-vhs-tape">SP · T-120</span>
    </div>

    <div class="media-gallery dread-media fade">${mediaHTML}</div>

    <div class="dread-section fade">
      <div class="dread-ps1-border">
        <div class="dread-ps1-corner tl"></div>
        <div class="dread-ps1-corner tr"></div>
        <div class="dread-ps1-corner bl"></div>
        <div class="dread-ps1-corner br"></div>
        <h2 class="dread-title">WHAT IS<br>DREAD<span class="dread-title-glitch">?</span></h2>
        <div class="dread-scanbar"></div>
        <p class="dread-body" data-i18n="${game.i18n.description}"></p>
      </div>
    </div>

    <div class="dread-section fade">
      <div class="dread-ps1-border">
        <div class="dread-ps1-corner tl"></div>
        <div class="dread-ps1-corner tr"></div>
        <div class="dread-ps1-corner bl"></div>
        <div class="dread-ps1-corner br"></div>
        <h2 class="dread-title">DEMO COMING<br>SOON<span class="dread-title-glitch">?</span></h2>
        <div class="dread-scanbar"></div>
        <p class="dread-body" data-i18n=""></p>
      </div>
    </div>

    <div class="dread-warning-strip fade">
      <div class="dread-warning-inner">
        | WARNING | CONTAINS EXTREME CONTENT | NOT FOR THE FAINT OF HEART | WARNING | CONTAINS EXTREME CONTENT |
      </div>
    </div>

    <div class="dread-features fade">
      <div class="dread-feature-card">
        <div class="dread-fc-icon">▶ 01</div>
        <div class="dread-fc-title">SOMETHING IS WATCHING</div>
        <div class="dread-fc-bar"></div>
        <p>You see multiple of them, not sure which one is watching.</p>
      </div>
      <div class="dread-feature-card">
        <div class="dread-fc-icon">▶ 02</div>
        <div class="dread-fc-title">MANAGE YOUR LIGHT</div>
        <div class="dread-fc-bar"></div>
        <p>Your flashlight is your only friend. It's batteries are finite. Choose wisely.</p>
      </div>
      <div class="dread-feature-card">
        <div class="dread-fc-icon">▶ 03</div>
        <div class="dread-fc-title">REPLAYABILITY</div>
        <div class="dread-fc-bar"></div>
        <p>Every run is different. Every room is familiar, but not quite it.</p>
      </div>
      <div class="dread-feature-card">
        <div class="dread-fc-icon">▶ 04</div>
        <div class="dread-fc-title">USE HEADPHONES</div>
        <div class="dread-fc-bar"></div>
        <p>Seriously. Do not play without headphones.</p>
      </div>
    </div>

    <div class="dread-cta fade">
      <div class="dread-cta-dither" aria-hidden="true"></div>
      <div class="dread-cta-text">ARE YOU BRAVE ENOUGH?</div>
      <a href="https://39games.itch.io/dread" target="_blank" class="dread-cta-btn">
        CHECK IT OUT ON ITCH.IO &nbsp;<i class="fab fa-itch-io"></i>
      </a>
    </div>
  `;

  // VHS clock
  function updateDreadClock() {
    const el = document.getElementById('dreadClock');
    if (!el) return;
    const n = new Date();
    el.textContent = `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`;
  }
  updateDreadClock();
  setInterval(updateDreadClock, 1000);

// ─────────────────────────────────────────────
//  NUTRIA SOUL RUSH — creepy runner, liminal, wrong
// ─────────────────────────────────────────────
} else if (gameKey === "nutriasoulrush") {
  document.body.classList.add('pg-nsr');
  contentEl.innerHTML = `
    <div class="nsr-static" aria-hidden="true"></div>

    <div class="nsr-wrong-text fade">
  
  <div class="line">
    <span class="nsr-wt-word" style="--d:0s">keep</span>
    <span class="nsr-wt-word" style="--d:0.15s">driving,</span>
    <span class="nsr-wt-word" style="--d:0.3s">don't</span>
    <span class="nsr-wt-word" style="--d:0.45s">look</span>
    <span class="nsr-wt-word" style="--d:0.6s">back</span>
  </div>

  <div class="line">
    <span class="nsr-wt-word nsr-wt-red" style="--d:0.45s">(you</span>
    <span class="nsr-wt-word nsr-wt-red" style="--d:0.6s">can't)</span>
  </div>
<br>
</div>

    <div class="media-gallery nsr-media fade">${mediaHTML}</div>

    <div class="nsr-about fade">
      <div class="nsr-about-inner">
        <div class="nsr-head-container">
  <img src="images/nsr/head.png" alt="Nutria Head" class="nsr-head-img">
  
  <div class="nsr-eye left-eye">
    <img src="images/nsr/pupil.png" alt="pupil" class="nsr-pupil">
  </div>
  
  <div class="nsr-eye right-eye">
    <img src="images/nsr/pupil.png" alt="pupil" class="nsr-pupil">
  </div>
</div>
        <div class="nsr-about-text">
          <div class="nsr-tag">YOU CAN'T STOP</div>
          <p data-i18n="${game.i18n.description}"></p>
        </div>
      </div>
    </div>

    <div class="nsr-features fade">
      <div class="nsr-feature-card">
        <div class="nsr-fc-num">01</div>
        <div class="nsr-fc-title">THE SPIRITS HAUNT YOU</div>
        <p>No matter how fast you drive, everything you run over will catch up. Always.</p>
      </div>
      <div class="nsr-feature-card">
        <div class="nsr-fc-num">02</div>
        <div class="nsr-fc-title">INFINITE DREAD</div>
        <p>The levels never end. The streets repeat. Something is very wrong.</p>
      </div>
      <div class="nsr-feature-card">
        <div class="nsr-fc-num">03</div>
        <div class="nsr-fc-title">ONE LIFE</div>
        <p>You have one life. When it ends, you'll understand why you should have kept running.</p>
      </div>
      <div class="nsr-feature-card">
        <div class="nsr-fc-num">04</div>
        <div class="nsr-fc-title">FREE TO PLAY</div>
        <p>It costs nothing to download. Some things should not be free. This is one of them.</p>
      </div>
    </div>

    <div class="nsr-drip-divider fade" aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0,0 L1200,0 L1200,20 Q1100,50 1000,20 Q900,0 800,30 Q700,55 600,25 Q500,5 400,35 Q300,60 200,30 Q100,5 0,40 Z" fill="rgba(180,20,20,0.18)"/>
      </svg>
    </div>

    <div class="nsr-cta fade">
      <div class="nsr-cta-glitch" data-text="DOWNLOAD IF YOU DARE">DOWNLOAD IF YOU DARE</div>
      <div class="nsr-cta-btns">
        <a href="https://play.google.com/store/apps/details?id=com.bruh39.drotn" target="_blank" class="nsr-btn"><i class="fab fa-google-play"></i> Google Play</a>
        <a href="https://39games.itch.io/nutriasoulrush" target="_blank" class="nsr-btn nsr-btn--ghost"><i class="fab fa-itch-io"></i> Itch.io</a>
      </div>
    </div>
  `;

  // wandering eye
// ====== EYE TRACKING ======
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const eyes = document.querySelectorAll('.nsr-eye');
  
  eyes.forEach(eye => {
    const pupil = eye.querySelector('.nsr-pupil');
    if (!pupil) return;

    // Get the exact position and size of the eye boundary on screen
    const eyeRect = eye.getBoundingClientRect();
    const pupilRect = pupil.getBoundingClientRect();

    // Find the center point of the eye
    const eyeCenterX = eyeRect.left + (eyeRect.width / 2);
    const eyeCenterY = eyeRect.top + (eyeRect.height / 2);

    // Calculate the angle between the eye center and the mouse cursor
    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

    // Calculate how far the mouse is from the eye
    const distanceToMouse = Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY);

    // Calculate the maximum distance the pupil can move without spilling out
    // (Radius of the eye socket minus the radius of the pupil)
    const maxDistance = (eyeRect.width / 2) - (pupilRect.width / 2);

    // Apply a sensitivity factor so it doesn't instantly snap to the edge 
    // unless the mouse is far away (0.1 means it tracks smoothly)
    const moveDistance = Math.min(distanceToMouse * 0.1, maxDistance);

    // Calculate the final X and Y translations based on the clamped distance
    const pupilX = Math.cos(angle) * moveDistance;
    const pupilY = Math.sin(angle) * moveDistance;

    // Apply the movement
    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});

// ─────────────────────────────────────────────
//  THE MOON — lunar, minimal, silver
// ─────────────────────────────────────────────
} else if (gameKey === "themoon") {
  document.body.classList.add('pg-moon');

  // Stars only in content, not header
  let stars = '';
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const s = (Math.random() * 2 + 0.4).toFixed(1);
    const d = (Math.random() * 5).toFixed(1);
    stars += `<div class="moon-star" style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;animation-delay:${d}s"></div>`;
  }

  contentEl.innerHTML = `
    <div class="moon-starfield" aria-hidden="true">${stars}</div>

    <!-- <div class="moon-orb-wrap fade">
      <div class="moon-orb">
      </div>
    </div> -->

    <div class="media-gallery moon-media fade">${mediaHTML}</div>

    <div class="moon-lore fade">
      <div class="moon-lore-label">— THE STORY —</div>
      <p class="moon-lore-text" data-i18n="${game.i18n.description}"></p>
    </div>

   <!-- <div class="moon-pillars fade">
      <div class="moon-pillar">
        <div class="moon-pillar-icon">🌙</div>
        <div class="moon-pillar-title">ATMOSPHERIC</div>
        <div class="moon-pillar-desc">A world soaked in silence and soft light. Every scene is a painting you can walk through.</div>
      </div>
      <div class="moon-pillar">
        <div class="moon-pillar-icon">🔭</div>
        <div class="moon-pillar-title">EXPLORATION</div>
        <div class="moon-pillar-desc">The Moon hides its secrets well. Seek them. Piece together what happened here.</div>
      </div>
      <div class="moon-pillar">
        <div class="moon-pillar-icon">🪐</div>
        <div class="moon-pillar-title">ISOLATION</div>
        <div class="moon-pillar-desc">Just you and the void. No enemies. No timer. Just the truth, waiting in the dark.</div>
      </div>
    </div> -->

    <div class="moon-quote fade">
      <div class="moon-quote-mark">"</div>
      <div class="moon-quote-text">The finger pointing at the moon is not the moon.</div>
      <div class="moon-quote-attr">— Zen Buddhist Saying</div>
    </div>
  `;

// ─────────────────────────────────────────────
//  SMASH TROLLS — pixel art comic chaos
// ─────────────────────────────────────────────
} else if (gameKey === "smashtrolls") {
  document.body.classList.add('pg-trolls');
  contentEl.innerHTML = `
    <div class="trolls-px-grid" aria-hidden="true"></div>

    <div class="trolls-title-wrap fade">
      <div class="trolls-px-title">SMASH!</div>
      <div class="trolls-px-sub">THE TROLLS WON'T STOP. NEITHER WILL YOU.</div>
    </div>

    <div class="trolls-speech-bubble fade">
      <p data-i18n="${game.i18n.description}"></p>
      <div class="trolls-bubble-tail"></div>
    </div>

    <div class="media-gallery trolls-media fade">${mediaHTML || '<div class="trolls-no-media">[ NO FOOTAGE YET — BUT TRUST THE PROCESS ]</div>'}</div>

    <div class="trolls-px-features fade">
      <div class="trolls-px-card">
        <div class="trolls-px-card-header">
          <span class="trolls-px-icon">💪</span>
          <span>SIMPLE CONTROLS</span>
        </div>
        <div class="trolls-px-card-body">Tap. Tap faster. That's it. You're already better than most players.</div>
      </div>
      <div class="trolls-px-card">
        <div class="trolls-px-card-header">
          <span class="trolls-px-icon">👹</span>
          <span>SMASH THE TROLLS</span>
        </div>
        <div class="trolls-px-card-body">Every single troll must go. No mercy. No exceptions. Pure satisfying crunch.</div>
      </div>
      <div class="trolls-px-card">
        <div class="trolls-px-card-header">
          <span class="trolls-px-icon">🏆</span>
          <span>BEAT YOUR SCORE</span>
        </div>
        <div class="trolls-px-card-body">Your high score is an insult to your future self. Keep going until it hurts.</div>
      </div>
    </div>

    <!-- Pixel art scene drawn in CSS -->
    <div class="trolls-px-scene fade" aria-hidden="true">
      <div class="trolls-px-ground"></div>
      <div class="trolls-px-troll t1"></div>
      <div class="trolls-px-troll t2"></div>
      <div class="trolls-px-troll t3"></div>
      <div class="trolls-px-fist"></div>
      <div class="trolls-px-star s1">★</div>
      <div class="trolls-px-star s2">★</div>
      <div class="trolls-px-star s3">✦</div>
    </div>

    <div class="trolls-cta fade">
      <a href="https://39games.itch.io/smash-trolls" target="_blank" class="trolls-px-btn">
        ▶ PLAY FREE ON ITCH.IO
      </a>
    </div>
  `;

// ─────────────────────────────────────────────
//  GOBLIN BARRAGE — pixel art mobile runner
// ─────────────────────────────────────────────
} else if (gameKey === "goblinbarrage") {
  document.body.classList.add('pg-gb');
  contentEl.innerHTML = `
    <!-- Pixel HUD top bar -->
    <div class="gb-px-hud fade">
      <div class="gb-px-hud-cell">
        <div class="gb-px-hud-label">FUN LEVEL</div>
        <div class="gb-px-hud-val gb-px-counter" id="gbScoreCounter">000000</div>
      </div>
      <div class="gb-px-hud-cell">
        <div class="gb-px-hud-label">PLATFORM</div>
        <div class="gb-px-hud-val">ANDROID</div>
      </div>
      <div class="gb-px-hud-cell">
        <div class="gb-px-hud-label">STATUS</div>
        <div class="gb-px-hud-val gb-px-live">● LIVE</div>
      </div>
      <div class="gb-px-hud-cell">
        <div class="gb-px-hud-label">PRICE</div>
        <div class="gb-px-hud-val">FREE</div>
      </div>
    </div>

    <div class="media-gallery gb-media fade">${mediaHTML}</div>

    <div class="gb-about fade">
      <div class="gb-px-tag">// MISSION BRIEFING</div>
      <p class="gb-about-text" data-i18n="${game.i18n.description}"></p>
    </div>

    <!-- Skins carousel -->
    <section class="skins-section gb-skins fade">
      <h2 class="gb-px-section-title">▶ UNLOCKABLE SKINS</h2>
      <div class="skin-carousel">
        <button class="skin-arrow left"><i class="fas fa-chevron-left"></i></button>
        <div class="skin-display">
          <img id="skinImage" src="" alt="Skin">
          <div id="skinName"></div>
        </div>
        <button class="skin-arrow right"><i class="fas fa-chevron-right"></i></button>
      </div>
    </section>

    <div class="gb-px-features fade">
      <div class="gb-px-card">
        <div class="gb-px-card-icon">🛸</div>
        <div class="gb-px-card-title">FLY FOREVER</div>
        <p>An endless runner that gets faster, harder, and more chaotic the longer you survive.</p>
      </div>
      <div class="gb-px-card">
        <div class="gb-px-card-icon">👑</div>
        <div class="gb-px-card-title">BOSSES</div>
        <p>Fight bosses every certain ammount of points you get, each boss is harder than the last.</p>
      </div>
      <div class="gb-px-card">
        <div class="gb-px-card-icon">🧙</div>
        <div class="gb-px-card-title">TONS OF SKINS</div>
        <p>From pirates to vikings to santa. Unlock them all. Flex on your friends with your high score.</p>
      </div>
    </div>

    <div class="gb-cta fade">
      <a href="https://play.google.com/store/apps/details?id=com.bruh39.GoblinBarrage" target="_blank" class="gb-px-btn"><i class="fab fa-google-play"></i> Google Play</a>
      <a href="https://39games.itch.io/goblin-barrage" target="_blank" class="gb-px-btn gb-px-btn--outline"><i class="fab fa-itch-io"></i> Itch.io</a>
    </div>
  `;

  // Animated score counter
  let score = 0;
  const counter = document.getElementById('gbScoreCounter');
  setInterval(() => {
    score += Math.floor(Math.random() * 47 + 3);
    if (counter) counter.textContent = String(score).padStart(6, '0');
  }, 80);

// ─────────────────────────────────────────────
//  OGRE ASSAULT — pixel art tower defense, YOU command ogres vs robots
// ─────────────────────────────────────────────
} else if (gameKey === "ogreassault") {
  document.body.classList.add('pg-oa');
  contentEl.innerHTML = `
    <!-- Pixel HP bars banner -->
    <div class="oa-px-banner fade">
      <div class="oa-px-team">
        <div class="oa-px-team-label">YOUR OGRES</div>
        <div class="oa-px-hp-bar">
          <div class="oa-px-hp-fill oa-hp-green" style="width:78%"></div>
        </div>
      </div>
      <div class="oa-px-vs">VS</div>
      <div class="oa-px-team">
        <div class="oa-px-team-label">ROBOT HORDE</div>
        <div class="oa-px-hp-bar">
          <div class="oa-px-hp-fill oa-hp-red" style="width:45%"></div>
        </div>
      </div>
    </div>

    <!-- Pixel battlefield scene -->
    <div class="oa-px-battlefield fade" aria-hidden="true">
      <!-- Castle wall left -->
      <div class="oa-px-castle"></div>
      <!-- Ogre units -->
      <div class="oa-px-ogre og1"></div>
      <div class="oa-px-ogre og2"></div>
      <div class="oa-px-ogre og3"></div>
      <!-- Robot enemies -->
      <div class="oa-px-robot rb1"></div>
      <div class="oa-px-robot rb2"></div>
      <!-- Ground -->
      <div class="oa-px-ground"></div>
    </div>

    <div class="media-gallery oa-media fade">${mediaHTML}</div>

    <!-- Lore tablet -->
    <div class="oa-px-tablet fade">
      <div class="oa-px-tablet-top">
        <span class="oa-px-tab-title">▶ MISSION LOG</span>
      </div>
      <div class="oa-px-tablet-body">
        <p data-i18n="${game.i18n.description}"></p>
      </div>
    </div>

    <!-- Stat grid -->
    <div class="oa-px-stats fade">
      <div class="oa-px-stat">
        <div class="oa-px-stat-icon">🏰</div>
        <div class="oa-px-stat-val">Tower Defense</div>
        <div class="oa-px-stat-label">GENRE</div>
      </div>
      <div class="oa-px-stat">
        <div class="oa-px-stat-icon">🤖</div>
        <div class="oa-px-stat-val">Robots</div>
        <div class="oa-px-stat-label">THE ENEMY</div>
      </div>
      <div class="oa-px-stat">
        <div class="oa-px-stat-icon">👹</div>
        <div class="oa-px-stat-val">YOUR OGRES</div>
        <div class="oa-px-stat-label">YOUR ARMY</div>
      </div>
      <div class="oa-px-stat">
        <div class="oa-px-stat-icon">📱</div>
        <div class="oa-px-stat-val">Android</div>
        <div class="oa-px-stat-label">PLATFORM</div>
      </div>
    </div>

    <!-- Features -->
    <div class="oa-px-features fade">
      <div class="oa-px-feat-card">
        <div class="oa-px-feat-num">[ 01 ]</div>
        <div class="oa-px-feat-title">COMMAND YOUR OGRES</div>
        <p>Deploy your ogre army strategically. Each unit has strengths. Know them. Use them.</p>
      </div>
      <div class="oa-px-feat-card">
        <div class="oa-px-feat-num">[ 02 ]</div>
        <div class="oa-px-feat-title">HOLD THE LINE</div>
        <p>Robot waves keep coming. Bigger, faster, meaner. Your castle falls if they break through.</p>
      </div>
      <div class="oa-px-feat-card">
        <div class="oa-px-feat-num">[ 03 ]</div>
        <div class="oa-px-feat-title">UPGRADE & CONQUER</div>
        <p>Earn upgrades between waves. Stronger ogres, tougher walls, deadlier traps.</p>
      </div>
    </div>

    <div class="oa-cta fade">
      <a href="https://play.google.com/store/apps/details?id=com.bruh39.OgreAssault" target="_blank" class="oa-px-btn"><i class="fab fa-google-play"></i> Download Free</a>
      <a href="https://39games.itch.io/ogre-assault" target="_blank" class="oa-px-btn oa-px-btn--alt"><i class="fab fa-itch-io"></i> Itch.io</a>
    </div>
  `;

// ─────────────────────────────────────────────
//  DEFAULT FALLBACK
// ─────────────────────────────────────────────
} else {
  contentEl.innerHTML = `
    <div class="media-gallery fade">${mediaHTML}</div>
    <br><br>
    <div class="description fade" data-i18n="${game.i18n.description}"></div>
  `;
}

// ====== GOBLIN BARRAGE SKINS ======
if (gameKey === "goblinbarrage") {
  const skins = [
    "default.png","potion.png","homeless.png","red.png","pirate.png",
    "osama.png","doom.png","demoman.png","chemist.png","dave.png",
    "skeleton.png","vampire.png","bunny.png","santa.png","ghost.png",
    "zombie.png","viking.png","executioner.png","robot.png"
  ];
  let currentSkin = 0;
  const skinImg  = document.getElementById("skinImage");
  const skinName = document.getElementById("skinName");
  function formatName(f) { return f.replace(".png","").replace(/[-_]/g," ").replace(/\b\w/g,c=>c.toUpperCase()); }
  function showSkin(idx, dir=1) {
    skinImg.classList.remove("show");
    skinImg.classList.add(dir>0?"slide-left":"slide-right");
    setTimeout(()=>{
      skinImg.src = `images/gbskins/${skins[idx]}`;
      skinName.textContent = formatName(skins[idx]);
      skinImg.classList.remove("slide-left","slide-right");
      skinImg.classList.add("show");
    },200);
  }
  showSkin(currentSkin);
  document.querySelector(".skin-arrow.left").addEventListener("click",()=>{ currentSkin=(currentSkin-1+skins.length)%skins.length; showSkin(currentSkin,-1); });
  document.querySelector(".skin-arrow.right").addEventListener("click",()=>{ currentSkin=(currentSkin+1)%skins.length; showSkin(currentSkin,1); });
}

// ====== OBSERVE FADES ======
function observeFades(root=document) { root.querySelectorAll('.fade').forEach(el=>observer.observe(el)); }
observeFades(contentEl);

// ====== TRANSLATIONS ======
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if (translations[lang]&&translations[lang][key]) el.innerHTML = translations[lang][key];
  });
}
let currentLang = localStorage.getItem('lang')||'en';
applyTranslations(currentLang);
document.getElementById('langSwitch')?.addEventListener('click',()=>{
  currentLang = currentLang==='en'?'sr':'en';
  localStorage.setItem('lang',currentLang);
  applyTranslations(currentLang);
});

// ====== PARALLAX LOGO ======
const logos = document.querySelectorAll('.game-logo');
window.addEventListener('scroll',()=>{
  const scrollY = window.scrollY;
  logos.forEach((logo,i)=>{
    const speed = 0.04+(i%5)*0.01;
    logo.style.setProperty('--parallax',`${scrollY*speed}px`);
  });
});

