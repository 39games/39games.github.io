const switchBtn1 = document.getElementById('modeSwitch1');
const body = document.body;

if (switchBtn1) {
    switchBtn1.addEventListener('click', () => {
        body.classList.add('switching');
        switchBtn1.classList.add('switch-animate');
        
        setTimeout(() => {
            const isBeats = body.classList.contains('mode-beats');
            body.classList.toggle('mode-games');
            body.classList.toggle('mode-beats');

            const url = new URL(window.location);
            if (isBeats) url.searchParams.delete('mode'); 
            else url.searchParams.set('mode', 'beats'); 
            window.history.replaceState({}, '', url);

            const visibleFaders = document.querySelectorAll('.fade');
            visibleFaders.forEach(fader => {
                const rect = fader.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) fader.classList.add('show');
                else fader.classList.remove('show');
            });

            switchBtn1.classList.remove('switch-animate');
        }, 300);

        setTimeout(() => {
            body.classList.remove('switching');
            window.location.href = '../index.html?mode=beats';
        }, 600);
    });
}

// ====== PROJECTS DATA (WITH NEW TAGS) ======
const projectsData = {
  "interfaithdebate": {
    status: "IN DEVELOPMENT",
    cardImg: "../images/games/project1.png",
    tags: ["Site", "Web App", "Theology", "Philosophy", "Chat", "Video Chat", "HTML", "CSS", "JavaScript", "EmailJS"],
    logo: "../images/logos/interfaith.png",
    header: {
      background: "../images/headers/interfaith-bg.png", // Your provided banner
      accent: "#3498db",
      class: "header-interfaith"
    },
    media: [],
    links: { website: "https://interfaith.up.railway.app/" },
    i18n: { 
        title: "project-interfaith-title", 
        description: "project-interfaith-desc", 
        cardDesc: "project-interfaith-card-desc" 
    }
  },
  "dread": {
    status: "IN DEVELOPMENT",
    cardImg: "../images/games/game1.png",
    tags: ["Game", "Horror", "Multiplayer", "Unity", "C#", "Blender", "3D"],
    logo: "../images/logos/dread.png",
    header: { background: "../images/headers/dread-bg.png", accent: "#eae73d", class: "header-dread" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/VQtT93fjYdI" }],
    links: { googleplay: "", steam: "", itch: "https://39games.itch.io/dread" },
    i18n: { title: "game-dread-title", description: "game-dread-desc1", cardDesc: "game-dread-desc" }
  },
  "nutriasoulrush": {
    status: "RELEASED",
    cardImg: "../images/games/game2.png",
    tags: ["Game", "Arcade", "Mobile", "Unity", "C#", "2D", "Lumo TV"],
    logo: "../images/logos/nsr.png",
    header: { background: "../images/headers/nsr-bg.png", accent: "#e63946", class: "header-nsr" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/jwONLTwq24E" }],
    links: { googleplay: "https://play.google.com/store/apps/details?id=com.bruh39.drotn", steam: "", itch: "https://39games.itch.io/nutriasoulrush" },
    i18n: { title: "game-nutriasoulrush-title", description: "game-nutriasoulrush-desc", cardDesc: "game-nsr-desc" }
  },
  "themoon": {
    status: "IN DEVELOPMENT",
    cardImg: "../images/games/game3.png",
    tags: ["Game", "Atmospheric", "3D", "Unity", "C#", "Blender"],
    logo: "../images/logos/moon.png",
    header: { background: "../images/headers/moon-bg.png", accent: "#ffffff", class: "header-moon" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/qcjvQ-SErNI" }],
    links: { googleplay: "", steam: "", itch: "" },
    i18n: { title: "game-themoon-title", description: "game-themoon-desc", cardDesc: "game-moon-desc" }
  },
  "smashtrolls": {
    status: "RELEASED",
    cardImg: "../images/games/game4.png",
    tags: ["Game", "2D", "Multiplayer", "Unity", "C#", "Pixel Art"],
    logo: "../images/logos/troll.png",
    header: { background: "../images/headers/troll-bg.png", accent: "#1ab617", class: "header-trolls" },
    media: [],
    links: { googleplay: "", steam: "", itch: "https://39games.itch.io/smash-trolls" },
    i18n: { title: "game-smashtrolls-title", description: "game-smashtrolls-desc", cardDesc: "game-smash-desc" }
  },
  "goblinbarrage": {
    status: "RELEASED",
    cardImg: "../images/games/game5.png",
    tags: ["Game", "Arcade", "Mobile", "Pixel Art", "Unity", "C#", "2D"],
    logo: "../images/logos/gb.png",
    header: { background: "../images/headers/gb-bg.png", accent: "#e2801d", class: "header-gb" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/3IjSDXVTHQg" }],
    links: { googleplay: "https://play.google.com/store/apps/details?id=com.bruh39.GoblinBarrage", steam: "", itch: "https://39games.itch.io/goblin-barrage" },
    i18n: { title: "game-goblinbarrage-title", description: "game-goblinbarrage-desc", cardDesc: "game-gb-desc" }
  },
  "ogreassault": {
    status: "RELEASED",
    cardImg: "../images/games/game6.png",
    tags: ["Game", "Strategy", "Mobile", "Pixel Art", "Unity", "C#"],
    logo: "../images/logos/oa.png",
    header: { background: "../images/headers/oa-bg.png", accent: "#218631", class: "header-oa" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/YC6pSaAKGqA" }],
    links: { googleplay: "https://play.google.com/store/apps/details?id=com.bruh39.OgreAssault", steam: "", itch: "https://39games.itch.io/ogre-assault" },
    i18n: { title: "game-ogreassault-title", description: "game-ogreassault-desc", cardDesc: "game-oa-desc" }
  },
  "theforeigner": {
    status: "IN DEVELOPMENT",
    cardImg: "../images/games/game7.png",
    tags: ["Game", "RPG", "2D", "Pixel Art", "Unity", "C#", "Lumo TV"],
    logo: "../images/logos/foreigner.png",
    header: { background: "../images/headers/foreigner-bg.png", accent: "#8b2fc9", class: "header-foreigner" },
    media: [],
    links: { googleplay: "", steam: "", itch: "" },
    i18n: { title: "game-theforeigner-title", description: "game-theforeigner-desc", cardDesc: "game-foreigner-card-desc" }
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

const urlParams = new URLSearchParams(window.location.search);
const projectKey = urlParams.get("project"); // Note: changed from game to project

// ====== ROUTER ======
if (!projectKey) {
    renderProjectDirectory();
} else if (!projectsData[projectKey]) {
    window.location.replace("/projects/");
} else {
    renderSingleProject(projectKey);
}


// ================================================================
//  DIRECTORY VIEW (List of all projects)
// ================================================================
function renderProjectDirectory() {
    const headerEl = document.getElementById("projectHeader");
    const contentEl = document.getElementById("projectContent");
    
    // Set up basic header
    headerEl.innerHTML = `
        <h1 class="project-title" style="font-size: 56px;" data-i18n="directory-title">Project Directory</h1>
    `;
    
    // Build unique tags array from all projects
    const allTags = new Set();
    Object.values(projectsData).forEach(proj => {
        if(proj.tags) proj.tags.forEach(t => allTags.add(t));
    });
    const sortedTags = Array.from(allTags).sort();
    
    // Inject controls and grid
    contentEl.innerHTML = `
        <div class="directory-controls fade show">
            <input type="text" id="search-projects" data-i18n="search-projects" placeholder="Search projects, tags, or tools..." />
            <div class="filter-tags" id="filter-tags">
                <div class="filter-tag active" data-tag="all">All</div>
                ${sortedTags.map(tag => `<div class="filter-tag" data-tag="${tag}">${tag}</div>`).join("")}
            </div>
        </div>
        <div class="games-grid fade show" id="projects-grid"></div>
    `;

    const searchInput = document.getElementById("search-projects");
    const filterContainer = document.getElementById("filter-tags");
    const projectsGrid = document.getElementById("projects-grid");
    
    let currentFilter = "all";
    
    function updateGrid() {
        const query = searchInput.value.toLowerCase();
        projectsGrid.innerHTML = "";
        
        Object.keys(projectsData).forEach(key => {
            const p = projectsData[key];
            const title = p.i18n.title.toLowerCase(); // simplified fallback matching
            const tagStr = p.tags ? p.tags.join(" ").toLowerCase() : "";
            
            // Check Tag filter
            const matchesTag = (currentFilter === "all") || (p.tags && p.tags.includes(currentFilter));
            // Check Search query
            const matchesSearch = title.includes(query) || tagStr.includes(query) || key.includes(query);
            
            if (matchesTag && matchesSearch) {
                const tagClass = p.status === "IN DEVELOPMENT" ? "dev" : "released";
                const tagsHTML = p.tags ? p.tags.slice(0,3).map(t => `<span class="tag">${t}</span>`).join("") : "";
                
                projectsGrid.innerHTML += `
                    <a class="game-card ${tagClass}" href="?project=${key}">
                        <div class="game-tag" data-i18n="${p.status === 'IN DEVELOPMENT' ? 'tag-dev' : 'tag-released'}">${p.status}</div>
                        <img src="${p.cardImg}" alt="" onerror="this.src='../images/herogames-alt.png'" />
                        <div class="game-info">
                            <h3 data-i18n="${p.i18n.title}">Project</h3>
                            <div class="beat-tags">${tagsHTML}</div>
                            <p data-i18n="${p.i18n.cardDesc}">Description</p>
                        </div>
                    </a>
                `;
            }
        });
        
        // Re-trigger translation if script is loaded
        if (typeof setLanguage === 'function') {
            const savedLang = localStorage.getItem('preferredLang') || 'en';
            setLanguage(savedLang);
        }
    }

    // Event Listeners for filtering
    searchInput.addEventListener("input", updateGrid);
    
    filterContainer.addEventListener("click", e => {
        if (e.target.classList.contains("filter-tag")) {
            document.querySelectorAll(".filter-tag").forEach(el => el.classList.remove("active"));
            e.target.classList.add("active");
            currentFilter = e.target.dataset.tag;
            updateGrid();
        }
    });

    updateGrid();
}

// ================================================================
//  SINGLE PROJECT VIEW (Your existing project.js logic)
// ================================================================
function renderSingleProject(gameKey) {
    const game = projectsData[gameKey];
    const headerEl = document.getElementById("projectHeader");
    const contentEl = document.getElementById("projectContent");

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

    // Fallback if there's no logo image
    const logoHtml = game.logo 
        ? `<img src="${game.logo}" alt="" class="game-logo" data-i18n="${game.i18n.title}">` 
        : `<h1 class="project-title" data-i18n="${game.i18n.title}"></h1>`;

    headerEl.innerHTML = logoHtml;

    let mediaHTML = '';
    if(game.media) {
        game.media.forEach(m => {
          if (m.type === "image") mediaHTML += `<div class="media-item fade"><img src="${m.src}" alt=""></div>`;
          if (m.type === "video") mediaHTML += `<div class="media-item fade"><iframe src="${m.src}" allowfullscreen></iframe></div>`;
        });
    }

    // --- YOUR SPECIFIC GAME LOGIC BELOW ---
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
              <source src="../images/foreigner/scene-intro.mp4" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="foreigner-features fade">
          <div class="foreigner-features__title">WHAT MAKES IT</div>
          <div class="foreigner-features__grid">
            <div class="foreigner-feature-card"><img class="foreigner-feature-card__icon" src="../images/icons/combat.png" alt=""><div class="foreigner-feature-card__title">BRUTAL COMBAT</div><div class="foreigner-feature-card__desc">Hand-animated finishers and lots, and i mean LOTS of blood. Every kill has weight.</div></div>
            <div class="foreigner-feature-card"><img class="foreigner-feature-card__icon" src="../images/icons/creepy.png" alt=""><div class="foreigner-feature-card__title">CREEPY ART STYLE</div><div class="foreigner-feature-card__desc">Unsettling horror-inspired creature design. Grotesque, hand-crafted sprites that make every enemy unforgettable, all thanks to Lumo TV.</div></div>
            <div class="foreigner-feature-card"><img class="foreigner-feature-card__icon" src="../images/icons/puzzle.png" alt=""><div class="foreigner-feature-card__title">FUN PUZZLES</div><div class="foreigner-feature-card__desc">Along side the gore and the murder, there are also some crazy-ass puzzles that will make you want to murder the devs when you figure out the answer!</div></div>
            <div class="foreigner-feature-card"><img class="foreigner-feature-card__icon" src="../images/icons/multiple.png" alt=""><div class="foreigner-feature-card__title">MULTIPLE WAYS TO PLAY</div><div class="foreigner-feature-card__desc">RPG-beat em up-platformer-puzzle hybrid. There's something for everyone! Well, not for people with hemophobia.</div></div>
            <div class="foreigner-feature-card"><img class="foreigner-feature-card__icon" src="../images/icons/story.png" alt=""><div class="foreigner-feature-card__title">ENGAGING STORY</div><div class="foreigner-feature-card__desc">You just have to trust me on this one, can't reveal too much yet...</div></div>
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
    } else if (gameKey === "dread") {
      document.body.classList.add('pg-dread');
      contentEl.innerHTML = `
        <div class="dread-vhs-noise" aria-hidden="true"></div>
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
            <div class="media-gallery nsr-media fade">${mediaHTML}</div>
        </div>
        <div class="nsr-about fade">
          <div class="nsr-about-inner">
            <div class="nsr-head-container">
              <img src="../images/nsr/head.png" alt="Nutria Head" class="nsr-head-img">
              <div class="nsr-eye left-eye"><img src="../images/nsr/pupil.png" alt="pupil" class="nsr-pupil"></div>
              <div class="nsr-eye right-eye"><img src="../images/nsr/pupil.png" alt="pupil" class="nsr-pupil"></div>
            </div>
            <div class="nsr-about-text">
              <div class="nsr-tag">YOU CAN'T STOP</div>
              <p data-i18n="${game.i18n.description}"></p>
            </div>
          </div>
        </div>
        <div class="nsr-features fade">
          <div class="nsr-feature-card"><div class="nsr-fc-num">01</div><div class="nsr-fc-title">THE SPIRITS HAUNT YOU</div><p>No matter how fast you drive, everything you run over will catch up. Always.</p></div>
          <div class="nsr-feature-card"><div class="nsr-fc-num">02</div><div class="nsr-fc-title">INFINITE DREAD</div><p>The levels never end. The streets repeat. Something is very wrong.</p></div>
          <div class="nsr-feature-card"><div class="nsr-fc-num">03</div><div class="nsr-fc-title">ONE LIFE</div><p>You have one life. When it ends, you'll understand why you should have kept running.</p></div>
          <div class="nsr-feature-card"><div class="nsr-fc-num">04</div><div class="nsr-fc-title">FREE TO PLAY</div><p>It costs nothing to download. Some things should not be free. This is one of them.</p></div>
        </div>
        <div class="nsr-drip-divider fade" aria-hidden="true"><svg viewBox="0 0 1200 60" preserveAspectRatio="none"><path d="M0,0 L1200,0 L1200,20 Q1100,50 1000,20 Q900,0 800,30 Q700,55 600,25 Q500,5 400,35 Q300,60 200,30 Q100,5 0,40 Z" fill="rgba(180,20,20,0.18)"/></svg></div>
        <div class="nsr-cta fade">
          <div class="nsr-cta-glitch" data-text="DOWNLOAD IF YOU DARE">DOWNLOAD IF YOU DARE</div>
          <div class="nsr-cta-btns">
            <a href="https://play.google.com/store/apps/details?id=com.bruh39.drotn" target="_blank" class="nsr-btn"><i class="fab fa-google-play"></i> Google Play</a>
            <a href="https://39games.itch.io/nutriasoulrush" target="_blank" class="nsr-btn nsr-btn--ghost"><i class="fab fa-itch-io"></i> Itch.io</a>
          </div>
        </div>
      `;

      document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const eyes = document.querySelectorAll('.nsr-eye');
        eyes.forEach(eye => {
          const pupil = eye.querySelector('.nsr-pupil');
          if (!pupil) return;
          const eyeRect = eye.getBoundingClientRect();
          const pupilRect = pupil.getBoundingClientRect();
          const eyeCenterX = eyeRect.left + (eyeRect.width / 2);
          const eyeCenterY = eyeRect.top + (eyeRect.height / 2);
          const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
          const distanceToMouse = Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY);
          const maxDistance = (eyeRect.width / 2) - (pupilRect.width / 2);
          const moveDistance = Math.min(distanceToMouse * 0.1, maxDistance);
          const pupilX = Math.cos(angle) * moveDistance;
          const pupilY = Math.sin(angle) * moveDistance;
          pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });
      });

    } else if (gameKey === "themoon") {
      document.body.classList.add('pg-moon');
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
        <div class="media-gallery moon-media fade">${mediaHTML}</div>
        <div class="moon-lore fade">
          <div class="moon-lore-label">— THE STORY —</div>
          <p class="moon-lore-text" data-i18n="${game.i18n.description}"></p>
        </div>
        <div class="moon-quote fade">
          <div class="moon-quote-mark">"</div>
          <div class="moon-quote-text">The finger pointing at the moon is not the moon.</div>
          <div class="moon-quote-attr">— Zen Buddhist Saying</div>
        </div>
      `;
    } else if (gameKey === "smashtrolls") {
      document.body.classList.add('pg-trolls');
      contentEl.innerHTML = `
        <div id="st-game-launcher" class="fade">
          <div class="st-play-now-label"><span class="st-play-now-text">PLAY NOW</span><div class="st-arrows"></div></div>
          <br><br><br><br><button id="st-play-btn" onclick="launchSTGame()"><img src="../images/smashtrolls/play-button.png" alt="Play" id="st-play-img"></button>
        </div>
        <div id="st-game-container" style="display:none;">
          <div id="st-game-frame-wrap">
            <div id="st-game-topbar"><span class="st-game-title">▶ SMASH TROLLS</span><div class="st-game-controls"><button id="st-fullscreen-btn" onclick="goSTFullscreen()"><img src="../images/smashtrolls/fullscreen.png" alt="" onerror="this.style.display='none';this.parentElement.innerHTML='⛶ FULLSCREEN';"><span>FULLSCREEN</span></button></div></div>
            <canvas id="unity-canvas"></canvas>
            <div id="st-unity-loading"><div class="st-loading-bar-wrap"><div class="st-loading-label">LOADING GAME...</div><div class="st-loading-bar"><div class="st-loading-fill" id="st-loading-fill"></div></div><div class="st-loading-pct" id="st-loading-pct">0%</div></div></div>
          </div>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div id="st-scene">
          <div class="st-bubble-layer" id="st-bubbles"></div>
          <div id="st-arena"><div id="st-impact-flash"></div><div id="st-smash-text">SMASH!</div></div>
          <div id="st-troll-wrap"><img id="st-troll-img" src="../images/smashtrolls/troll1.png" alt=""></div>
          <div id="st-hud">STOMPS: <span id="st-cnt">0</span></div>
        </div>
        <div class="trolls-speech-bubble fade"><p data-i18n="${game.i18n.description}"></p></div>
        <div class="media-gallery trolls-media fade">${mediaHTML || '<div class="trolls-no-media">[ NO FOOTAGE YET — BUT TRUST THE PROCESS ]</div>'}</div>
        <div class="trolls-px-features fade">
          <div class="trolls-px-card"><div class="trolls-px-card-header"><img class="trolls-px-icon" src="../images/icons/stomp.png" alt=""><p>SIMPLE CONTROLS</p></div><div class="trolls-px-card-body"><p>Go up to jump, go down to smash, go to the side to push, easy.</p></div></div>
          <div class="trolls-px-card"><div class="trolls-px-card-header"><img class="trolls-px-icon" src="../images/icons/2player.png" alt=""><p>2 PLAYER ACTION</p></div><div class="trolls-px-card-body"><p>Choose your favourite troll and battle with your friends.</p></div></div>
          <div class="trolls-px-card"><div class="trolls-px-card-header"><img class="trolls-px-icon" src="../images/icons/ability.png" alt=""><p>SPECIAL ABILITIES</p></div><div class="trolls-px-card-body"><p>Each troll has a unique ability, try them all out!</p></div></div>
        </div>
        <div class="trolls-cta fade"><a href="https://39games.itch.io/smash-trolls" target="_blank" class="trolls-px-btn">▶ PLAY FREE ON ITCH.IO TOO</a></div>
      `;
    } else if (gameKey === "goblinbarrage") {
      document.body.classList.add('pg-gb');
      contentEl.innerHTML = `
        <div class="gb-px-hud fade">
          <div class="gb-px-hud-cell"><div class="gb-px-hud-label">SCORE</div><div class="gb-px-hud-val gb-px-counter" id="gbScoreCounter">000000</div></div>
          <div class="gb-px-hud-cell"><div class="gb-px-hud-label">PLATFORM</div><div class="gb-px-hud-val">ANDROID</div></div>
          <div class="gb-px-hud-cell"><div class="gb-px-hud-label">STATUS</div><div class="gb-px-hud-val gb-px-live">● LIVE</div></div>
          <div class="gb-px-hud-cell"><div class="gb-px-hud-label">PRICE</div><div class="gb-px-hud-val">FREE</div></div>
        </div>
        <div class="media-gallery gb-media fade">${mediaHTML}</div>
        <div class="gb-about fade"><div class="gb-px-tag">▶ MISSION BRIEFING</div><p class="gb-about-text" data-i18n="${game.i18n.description}"></p></div>
        <section class="skins-section gb-skins fade">
          <h2 class="gb-px-section-title">▶ UNLOCKABLE SKINS</h2>
          <div class="skin-carousel">
            <button class="skin-arrow left" aria-label="Previous skin"><i class="fas fa-chevron-left"></i></button>
            <div class="skin-display"><img id="skinImage" src="" alt="Goblin skin"><div id="skinName"></div></div>
            <button class="skin-arrow right" aria-label="Next skin"><i class="fas fa-chevron-right"></i></button>
          </div>
        </section>
        <div class="gb-px-features fade">
          <div class="gb-px-card"><div class="gb-px-card-icon">🛸</div><div class="gb-px-card-title">FLY FOREVER</div><p>An endless runner that gets faster, harder, and more chaotic the longer you survive.</p></div>
          <div class="gb-px-card"><div class="gb-px-card-icon">👑</div><div class="gb-px-card-title">BOSS FIGHTS</div><p>Fight bosses every certain amount of points. Each one harder than the last.</p></div>
          <div class="gb-px-card"><div class="gb-px-card-icon">🧙</div><div class="gb-px-card-title">TONS OF SKINS</div><p>Pirates, vikings, santa and more. Unlock them all and flex your high score.</p></div>
        </div>
        <div class="gb-cta-section fade" id="gbCtaSection">
          <div class="gb-cta-label">AVAILABLE NOW</div><div class="gb-cta-headline">DOWNLOAD FREE</div>
          <div class="gb-app-icon-wrap">
            <video id="gbAppIconVideo" class="gb-app-icon-video" src="../images/gbskins/icon-animated.mp4" autoplay muted loop playsinline preload="auto" disablepictureinpicture controlslist="nodownload nofullscreen noremoteplayback" style="pointer-events:none;"></video>
            <div class="gb-cta-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.bruh39.GoblinBarrage" target="_blank" class="gb-px-btn"><i class="fab fa-google-play"></i> Google Play</a>
              <a href="https://39games.itch.io/goblin-barrage" target="_blank" class="gb-px-btn gb-px-btn--outline"><i class="fab fa-itch-io"></i> Itch.io</a>
            </div>
          </div>
        </div>
      `;

      let score = 0;
      const counter = document.getElementById('gbScoreCounter');
      setInterval(() => {
        score += Math.floor(Math.random() * 47 + 3);
        if (counter) counter.textContent = String(score).padStart(6, '0');
      }, 80);

      const skins = ["default.png","potion.png","homeless.png","red.png","pirate.png","osama.png","doom.png","demoman.png","chemist.png","dave.png","skeleton.png","vampire.png","bunny.png","santa.png","ghost.png","zombie.png","viking.png","executioner.png","robot.png"];
      let currentSkin = 0;
      const skinImg  = document.getElementById("skinImage");
      const skinName = document.getElementById("skinName");
      function formatName(f) { return f.replace(".png","").replace(/[-_]/g," ").replace(/\b\w/g,c=>c.toUpperCase()); }
      function showSkin(idx, dir=1) {
        if(!skinImg) return;
        skinImg.classList.remove("show");
        skinImg.classList.add(dir>0?"slide-left":"slide-right");
        setTimeout(()=>{
          skinImg.src = `../images/gbskins/${skins[idx]}`;
          if(skinName) skinName.textContent = formatName(skins[idx]);
          skinImg.classList.remove("slide-left","slide-right");
          skinImg.classList.add("show");
        },200);
      }
      setTimeout(() => showSkin(currentSkin), 100);
      
      const leftArr = document.querySelector(".skin-arrow.left");
      const rightArr = document.querySelector(".skin-arrow.right");
      if(leftArr) leftArr.addEventListener("click",()=>{ currentSkin=(currentSkin-1+skins.length)%skins.length; showSkin(currentSkin,-1); });
      if(rightArr) rightArr.addEventListener("click",()=>{ currentSkin=(currentSkin+1)%skins.length; showSkin(currentSkin,1); });

    } else if (gameKey === "ogreassault") {
      document.body.classList.add('pg-oa');
      contentEl.innerHTML = `
        <div class="oa-px-banner fade">
          <div class="oa-px-team"><div class="oa-px-team-label">YOUR OGRES</div><div class="oa-px-hp-bar"><div class="oa-px-hp-fill oa-hp-green" style="width:78%"></div></div></div>
          <div class="oa-px-vs">VS</div>
          <div class="oa-px-team"><div class="oa-px-team-label">ROBOT HORDE</div><div class="oa-px-hp-bar"><div class="oa-px-hp-fill oa-hp-red" style="width:45%"></div></div></div>
        </div>
        <div class="media-gallery oa-media fade">${mediaHTML}</div>
        <div class="oa-px-tablet fade"><div class="oa-px-tablet-top"><span class="oa-px-tab-title">▶ MISSION LOG</span></div><div class="oa-px-tablet-body"><p data-i18n="${game.i18n.description}"></p></div></div>
        <div class="oa-px-stats fade">
          <div class="oa-px-stat"><div class="oa-px-stat-icon">🏰</div><div class="oa-px-stat-val">Tower Defense</div><div class="oa-px-stat-label">GENRE</div></div>
          <div class="oa-px-stat"><div class="oa-px-stat-icon">🤖</div><div class="oa-px-stat-val">Robots</div><div class="oa-px-stat-label">THE ENEMY</div></div>
          <div class="oa-px-stat"><div class="oa-px-stat-icon">👹</div><div class="oa-px-stat-val">YOUR OGRES</div><div class="oa-px-stat-label">YOUR ARMY</div></div>
          <div class="oa-px-stat"><div class="oa-px-stat-icon">📱</div><div class="oa-px-stat-val">Android</div><div class="oa-px-stat-label">PLATFORM</div></div>
        </div>
        <div class="oa-px-features fade">
          <div class="oa-px-feat-card"><div class="oa-px-feat-num">[ 01 ]</div><div class="oa-px-feat-title">COMMAND YOUR OGRES</div><p>Deploy your ogre army strategically. Each unit has strengths. Know them. Use them.</p></div>
          <div class="oa-px-feat-card"><div class="oa-px-feat-num">[ 02 ]</div><div class="oa-px-feat-title">HOLD THE LINE</div><p>Robot waves keep coming. Bigger, faster, meaner. Your king falls if they break through.</p></div>
          <div class="oa-px-feat-card"><div class="oa-px-feat-num">[ 03 ]</div><div class="oa-px-feat-title">UPGRADE & CONQUER</div><p>Buy upgrades between waves. Stronger ogres, tougher walls, deadlier weapons.</p></div>
        </div>
        <div class="oa-cta fade"><a href="https://play.google.com/store/apps/details?id=com.bruh39.OgreAssault" target="_blank" class="oa-px-btn"><i class="fab fa-google-play"></i> Download Free</a><a href="https://39games.itch.io/ogre-assault" target="_blank" class="oa-px-btn oa-px-btn--alt"><i class="fab fa-itch-io"></i> Itch.io</a></div>
      `;
    // Add this inside renderSingleProject(gameKey) ...
// Add this inside your renderSingleProject(gameKey) function in project.js
} else if (gameKey === "interfaithdebate") {
contentEl.innerHTML = `

<section class="interfaith-hero fade-up">


<div class="interfaith-bg-glow"></div>

<div class="interfaith-content">



    <p class="interfaith-desc">
        A modern platform built for respectful religious discussion,
        philosophy, theology, and debate. Explore different beliefs,
        challenge ideas, and connect with people from around the world
        through structured anonymous conversations.
    </p>

    <div class="interfaith-buttons">
        <a href="${game.links.website}" target="_blank" class="btn-primary">
            ENTER DEBATE
        </a>

        <a href="#interfaith-features" class="btn-secondary">
            LEARN MORE
        </a>
    </div>

    <div class="stats-strip">

        <div class="stat">
            <span class="stat-num">34+</span>
            <span class="stat-label">FAITHS COVERED</span>
        </div>

        <div class="stat-divider"></div>

        <div class="stat">
            <span class="stat-num">LIVE</span>
            <span class="stat-label">MATCHING ENGINE</span>
        </div>

        <div class="stat-divider"></div>

        <div class="stat">
            <span class="stat-num">100%</span>
            <span class="stat-label">ANONYMOUS</span>
        </div>

    </div>
</div>


</section>

<section id="interfaith-features" class="interfaith-features fade-up">


<div class="section-title">
    <h2>WHY THIS EXISTS</h2>
    <p>
        Most online religious discussions become hostile instantly.
        Interfaith Debate was designed to create a cleaner and more
        thoughtful space for genuine discussion and understanding.
    </p>
</div>

<div class="interfaith-grid">

    <div class="interfaith-card">
        <h3>Respectful Debate</h3>
        <p>
            Structured conversations focused on understanding instead
            of insults and chaos.
        </p>
    </div>

    <div class="interfaith-card">
        <h3>Anonymous Discussion</h3>
        <p>
            Debate ideas freely without pressure, status, or social bias.
        </p>
    </div>

    <div class="interfaith-card">
        <h3>Different Perspectives</h3>
        <p>
            Explore theology, philosophy, atheism, spirituality,
            morality, and more.
        </p>
    </div>

</div>


</section>

<section class="interfaith-quote fade-up">


<div class="quote-line"></div>

<p class="quote-text">
    “The goal is not to win arguments. The goal is to understand
    perspectives you would never normally encounter.”
</p>


</section>

`;
}
else {
      contentEl.innerHTML = `
        <div class="media-gallery fade">${mediaHTML}</div>
        <br><br>
        <div class="description fade" data-i18n="${game.i18n.description}"></div>
      `;
    }

    // Parallax
    const logos = document.querySelectorAll('.game-logo');
    window.addEventListener('scroll',()=>{
      const scrollY = window.scrollY;
      logos.forEach((logo,i)=>{
        const speed = 0.04+(i%5)*0.01;
        logo.style.setProperty('--parallax',`${scrollY*speed}px`);
      });
    });

    // Fades
    function observeFades(root=document) { root.querySelectorAll('.fade').forEach(el=>observer.observe(el)); }
    observeFades(contentEl);
}