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

// ====== PROJECTS DATA ======
const projectsData = {
  "interfaithdebate": {
    status: "IN DEVELOPMENT",
    cardImg: "../images/games/project1.png",
    tags: ["Site", "Web App", "Theology", "Philosophy", "Chat", "Video Chat", "HTML", "CSS", "JavaScript", "EmailJS"],
    logo: "../images/logos/interfaith.png",
    header: {
      background: "../images/headers/interfaith-bg.png",
      accent: "#3498db",
      class: "header-interfaith"
    },
    media: [],
    links: { website: "https://interfaith.up.railway.app/" },
    dates: { start: "2026-05", end: "" },
    i18n: { 
        title: "project-interfaith-title", 
        description: "project-interfaith-desc", 
        cardDesc: "project-interfaith-card-desc" 
    }
  },
  "dread": {
    status: "PAUSED",
    cardImg: "../images/games/game1.png",
    tags: ["Game", "Horror", "Multiplayer", "Unity", "C#", "Blender", "3D", "Servers"],
    logo: "../images/logos/dread.png",
    header: { background: "../images/headers/dread-bg.png", accent: "#eae73d", class: "header-dread" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/VQtT93fjYdI" }],
    links: { googleplay: "", steam: "", itch: "https://39games.itch.io/dread" },
    dates: { start: "2025-09", end: "" },
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
    dates: { start: "2024-05", end: "" },
    i18n: { title: "game-nutriasoulrush-title", description: "game-nutriasoulrush-desc", cardDesc: "game-nsr-desc" }
  },
  "themoon": {
    status: "PAUSED",
    cardImg: "../images/games/game3.png",
    tags: ["Game", "Atmospheric", "3D", "Unity", "C#", "Blender"],
    logo: "../images/logos/moon.png",
    header: { background: "../images/headers/moon-bg.png", accent: "#ffffff", class: "header-moon" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/qcjvQ-SErNI" }],
    links: { googleplay: "", steam: "", itch: "" },
    dates: { start: "2026-02", end: "" },
    i18n: { title: "game-themoon-title", description: "game-themoon-desc", cardDesc: "game-moon-desc" }
  },
  "smashtrolls": {
    status: "RELEASED",
    cardImg: "../images/games/game4.png",
    tags: ["Game", "2D", "Multiplayer", "Unity", "C#", "Pixel Art", "1v1"],
    logo: "../images/logos/troll.png",
    header: { background: "../images/headers/troll-bg.png", accent: "#1ab617", class: "header-trolls" },
    media: [],
    links: { googleplay: "", steam: "", itch: "https://39games.itch.io/smash-trolls" },
    dates: { start: "2024-04", end: "" },
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
    dates: { start: "2022-02", end: "2022-05" },
    i18n: { title: "game-goblinbarrage-title", description: "game-goblinbarrage-desc", cardDesc: "game-gb-desc" }
  },
  "ogreassault": {
    status: "RELEASED",
    cardImg: "../images/games/game6.png",
    tags: ["Game", "Strategy", "Mobile", "Pixel Art", "Unity", "C#", "Robots", "Tower Defense", "2D"],
    logo: "../images/logos/oa.png",
    header: { background: "../images/headers/oa-bg.png", accent: "#218631", class: "header-oa" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/YC6pSaAKGqA" }],
    links: { googleplay: "https://play.google.com/store/apps/details?id=com.bruh39.OgreAssault", steam: "", itch: "https://39games.itch.io/ogre-assault" },
    dates: { start: "2024-02", end: "2024-04" },
    i18n: { title: "game-ogreassault-title", description: "game-ogreassault-desc", cardDesc: "game-oa-desc" }
  },
  "theforeigner": {
    status: "IN DEVELOPMENT",
    cardImg: "../images/games/game7.png",
    tags: ["Game", "RPG", "2D", "Unity", "C#", "Lumo TV"],
    logo: "../images/logos/foreigner.png",
    header: { background: "../images/headers/foreigner-bg.png", accent: "#8b2fc9", class: "header-foreigner" },
    media: [],
    links: { googleplay: "", steam: "", itch: "" },
    dates: { start: "2025-11", end: "" },
    i18n: { title: "game-theforeigner-title", description: "game-theforeigner-desc", cardDesc: "game-theforeigner-card-desc" }
  },
  "salesmen": {
    status: "DEMO",
    cardImg: "../images/games/game9.png",
    tags: ["Game", "Simulation", "Sandbox", "Robots", "Futuristic", "Unity", "C#", "Pixel Art", "2D"],
    logo: "../images/logos/salesmen.png",
    header: { background: "../images/headers/salesmen-bg.png", accent: "#e2a33d", class: "header-salesmen" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/G9Gn5TNlHI0" }],
    links: { itch: "https://39games.itch.io/salesmen" },
    dates: { start: "2023-12", end: "2024-06" },
    i18n: { title: "game-salesmen-title", description: "game-salesmen-desc", cardDesc: "game-salesmen-card-desc" }
  },
  "rulersofserbia": {
    status: "DEMO",
    cardImg: "../images/games/game10.png",
    tags: ["Game", "Historical", "Medieval", "Story Rich", "Top-Down", "Adventure", "Unity", "C#", "Pixel Art", "2D"],
    logo: "../images/logos/ros.png",
    header: { background: "../images/headers/ros-bg.png", accent: "#c9a227", class: "header-ros" },
    media: [],
    links: { itch: "https://39games.itch.io/ros-nemanjic" },
    dates: { start: "2023-10", end: "2023-12" },
    i18n: { title: "game-ros-title", description: "game-ros-desc", cardDesc: "game-ros-card-desc" }
  },
  "chum": {
    status: "DEMO",
    cardImg: "../images/games/game11.png",
    tags: ["Game", "Card Game", "1v1", "2D", "Multiplayer", "Pixel Art", "Unity", "C#", "Servers"],
    logo: "../images/logos/chum.png",
    header: { background: "../images/headers/chum-bg.png", accent: "#c98a3c", class: "header-chum" },
    media: [],
    links: { itch: "https://39games.itch.io/chum" },
    dates: { start: "2021-10", end: "2022-02" },
    i18n: { title: "game-chum-title", description: "game-chum-desc", cardDesc: "game-chum-card-desc" }
  },
  "ohcrab": {
    status: "DEMO",
    cardImg: "../images/games/game12.png",
    tags: ["Game", "Tower Defense", "2D", "Pygame", "Game Jam", "Pixel Art"],
    logo: "../images/logos/ohcrab.png",
    header: { background: "../images/headers/ohcrab-bg.png", accent: "#e81e00", class: "header-ohcrab" },
    media: [],
    links: { itch: "https://39games.itch.io/oh-crab" },
    dates: { start: "2020-05", end: "2020-07" },
    i18n: { title: "game-ohcrab-title", description: "game-ohcrab-desc", cardDesc: "game-ohcrab-card-desc" }
  },
  "colors": {
    status: "DEMO",
    cardImg: "../images/games/game13.png",
    tags: ["Game", "Puzzle", "Mobile", "Android", "Unity", "C#", "Pixel Art", "Colorful", "2D"],
    logo: "../images/logos/colors.png",
    header: { background: "../images/headers/colors-bg.png", accent: "#8b2fc9", class: "header-colors" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/NBGup5VyUxU" }],
    links: { itch: "https://39games.itch.io/colors" },
    dates: { start: "2021-01", end: "2021-02" },
    i18n: { title: "game-colors-title", description: "game-colors-desc", cardDesc: "game-colors-card-desc" }
  },
  "moonbreaker": {
    status: "DEMO",
    cardImg: "../images/games/game14.png",
    tags: ["Game", "Space", "Arcade", "Game Jam", "Pygame", "Aliens", "2D", "Pixel Art"],
    logo: "../images/logos/moonbreaker.png",
    header: { background: "../images/headers/moonbreaker-bg.png", accent: "#4dff9e", class: "header-moonbreaker" },
    media: [],
    links: { itch: "https://39games.itch.io/moonbreaker" },
    dates: { start: "2020-11", end: "2020-11" },
    i18n: { title: "game-moonbreaker-title", description: "game-moonbreaker-desc", cardDesc: "game-moonbreaker-card-desc" }
  },
  "termiteswarm": {
    status: "DEMO",
    cardImg: "../images/games/game15.png",
    tags: ["Game", "Arcade", "Game Jam", "2D", "Pixel Art", "Short", "Unity", "C#"],
    logo: "../images/logos/termiteswarm.png",
    header: { background: "../images/headers/termiteswarm-bg.png", accent: "#f7b079", class: "header-termiteswarm" },
    media: [],
    links: { itch: "https://39games.itch.io/termites" },
    dates: { start: "2021-02", end: "2021-02" },
    i18n: { title: "game-termiteswarm-title", description: "game-termiteswarm-desc", cardDesc: "game-termiteswarm-card-desc" }
  },
  "rng": {
    status: "DEMO",
    cardImg: "../images/games/game16.png",
    tags: ["Game", "Shooter", "Top-Down", "Game Jam", "2D", "Pixel Art", "Unity", "C#"],
    logo: "../images/logos/rng.png",
    header: { background: "../images/headers/rng-bg.png", accent: "#00e5ff", class: "header-rng" },
    media: [],
    links: { itch: "https://39games.itch.io/rng" },
    dates: { start: "2021-08", end: "2021-08" },
    i18n: { title: "game-rng-title", description: "game-rng-desc", cardDesc: "game-rng-card-desc" }
  },
  "stepwarriors": {
    status: "PAUSED",
    cardImg: "../images/games/game8.png",
    tags: ["Game", "RPG", "Mobile", "Android", "Walking", "Turn-Based", "PvP", "Unity", "C#", "3D", "Blender", "Multiplayer", "1v1", "Fitness", "Game Jam"],
    logo: "../images/logos/stepwarriors.png",
    header: { background: "../images/headers/stepwarriors-bg.png", accent: "#5ecb3d", class: "header-stepwarriors" },
    media: [],
    links: { itch: "https://39games.itch.io/step-warriors" },
    dates: { start: "2026-01", end: "" },
    i18n: { title: "game-stepwarriors-title", description: "game-stepwarriors-desc", cardDesc: "game-stepwarriors-card-desc" }
  },
  "obsidianrift": {
    status: "DEMO",
    cardImg: "../images/games/game17.png",
    tags: ["Game", "Adventure", "Dungeon Crawler", "Dark Fantasy", "Fantasy", "Mystery", "Stealth", "2D", "Unity", "C#", "Pixel Art"],
    logo: "../images/logos/obsidianrift.png",
    header: { background: "../images/headers/obsidianrift-bg.png", accent: "#7c5cff", class: "header-obsidianrift" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/Ws0C8cRk0xM" }],
    links: { itch: "https://39games.itch.io/obsidian-rift" },
    dates: { start: "2025-11", end: "2025-11" },
    i18n: { title: "game-obsidianrift-title", description: "game-obsidianrift-desc", cardDesc: "game-obsidianrift-card-desc" }
  },
  "gnometowerdefense": {
    status: "DEMO",
    cardImg: "../images/games/game18.png",
    tags: ["Game", "Tower Defense", "Strategy", "Gnomes", "Goblins", "Pixel Art", "Blender", "2D", "Untitled"],
    logo: "../images/logos/gnometowerdefense.png",
    header: { background: "../images/headers/gnometowerdefense-bg.png", accent: "#6fae3d", class: "header-gnometowerdefense" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/cYAlBGVIxsM" }, { type: "video", src: "https://www.youtube.com/embed/HPsGhSKUwnA" }, { type: "video", src: "https://youtube.com/embed/cgdrkBBhI5w" }],
    links: { itch: "" },
    dates: { start: "2026-05", end: "" },
    i18n: { title: "game-gnometowerdefense-title", description: "game-gnometowerdefense-desc", cardDesc: "game-gnometowerdefense-card-desc" }
  },
  "parasiterun3d": {
    status: "DEMO",
    cardImg: "../images/games/game19.png",
    tags: ["Game", "Hypercasual", "Runner", "Mobile", "3D", "Parasite", "Unity", "C#"],
    logo: "../images/logos/parasiterun3d.png",
    header: { background: "../images/headers/parasiterun3d-bg.png", accent: "#a63dae", class: "header-parasiterun3d" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/1hdFOpgF3Ok" }, { type: "video", src: "https://www.youtube.com/embed/e-Wv32FY2U0" }],
    links: { itch: "" },
    dates: { start: "2025-09", end: "" },
    i18n: { title: "game-parasiterun3d-title", description: "game-parasiterun3d-desc", cardDesc: "game-parasiterun3d-card-desc" }
  },
  "topdownshooter": {
    status: "DEMO",
    cardImg: "../images/games/game20.png",
    tags: ["Game", "Top-Down", "Shooter", "Survival", "Pixel Art", "Unity", "C#", "Robot", "Game Jam", "2D", "Untitled"],
    logo: "../images/logos/topdownshooter.png",
    header: { background: "../images/headers/topdownshooter-bg.png", accent: "#ff4d4d", class: "header-topdownshooter" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/ltUz94avdow" }],
    links: { itch: "" },
    dates: { start: "2023-12", end: "2023-12" },
    i18n: { title: "game-topdownshooter-title", description: "game-topdownshooter-desc", cardDesc: "game-topdownshooter-card-desc" }
  },
  "fightinggame": {
    status: "DEMO",
    cardImg: "../images/games/game21.png",
    tags: ["Game", "Fighting", "Pixel Art", "Unity", "C#", "2D", "Game Jam", "Arcade", "Untitled"],
    logo: "../images/logos/fightinggame.png",
    header: { background: "../images/headers/fightinggame-bg.png", accent: "#e5a93b", class: "header-fightinggame" },
    media: [{ type: "video", src: "https://www.youtube.com/embed/EdCo8MHVrBA" }],
    links: { itch: "" },
    dates: { start: "2024-01", end: "2024-01" },
    i18n: { title: "game-fightinggame-title", description: "game-fightinggame-desc", cardDesc: "game-fightinggame-card-desc" }
  }
};

// ====== STATUS TYPES ======
const STATUS_META = {
  "IN DEVELOPMENT": { cls: "dev",      i18n: "tag-dev" },
  "RELEASED":       { cls: "released", i18n: "tag-released" },
  "DEMO":           { cls: "demo",     i18n: "tag-demo" },
  "PAUSED":         { cls: "paused",   i18n: "tag-paused" }
};

function getStatusMeta(status) {
  return STATUS_META[status] || STATUS_META["IN DEVELOPMENT"];
}

// ====== DATE HELPERS ======
const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function formatProjectDate(str) {
  if (!str) return "";
  const parts = String(str).split("-");
  const year = parts[0];
  const month = parts.length >= 2 ? parseInt(parts[1], 10) : null;
  if (month && month >= 1 && month <= 12) return `${MONTH_NAMES[month - 1]} ${year}`;
  return year;
}

function getProjectSortValue(project) {
  const start = project.dates && project.dates.start;
  if (!start) return -Infinity;
  const t = Date.parse(start);
  return isNaN(t) ? -Infinity : t;
}

function getDateRangeText(project) {
  const d = project.dates;
  if (!d || (!d.start && !d.end)) return "";
  if (d.start && d.end) {
    if (d.start === d.end) return formatProjectDate(d.start);
    return `${formatProjectDate(d.start)} — ${formatProjectDate(d.end)}`;
  }
  if (d.start) return `Started ${formatProjectDate(d.start)}`;
  return `Finished ${formatProjectDate(d.end)}`;
}

function buildDateBadgeHTML(project) {
  const text = getDateRangeText(project);
  return text ? `<div class="project-date-badge">${text}</div>` : "";
}

function buildCardDateHTML(project) {
  const text = getDateRangeText(project);
  return text ? `<div class="game-card-date"><i class="far fa-calendar-alt"></i> ${text}</div>` : "";
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const urlParams = new URLSearchParams(window.location.search);
const projectKey = urlParams.get("project");

// ====== ROUTER ======
if (!projectKey) {
    renderProjectDirectory();
} else if (!projectsData[projectKey]) {
    window.location.replace("/projects/");
} else {
    renderSingleProject(projectKey);
}

// ================================================================
//  DIRECTORY VIEW
// ================================================================
function renderProjectDirectory() {
    const headerEl = document.getElementById("projectHeader");
    const contentEl = document.getElementById("projectContent");

    headerEl.className = '';
    headerEl.style.cssText = '';
    headerEl.classList.add('header-directory');
    headerEl.style.backgroundImage = 'url(../images/headers/project-bg.png)';
    headerEl.style.backgroundRepeat = 'no-repeat';
    headerEl.style.backgroundSize = 'cover';
    headerEl.style.backgroundPosition = 'center';

    headerEl.innerHTML = `
        <h1 class="project-title" style="font-size: 56px;" data-i18n="directory-title">Project Directory</h1>
    `;
    
    const allTags = new Set();
    Object.values(projectsData).forEach(proj => {
        if(proj.tags) proj.tags.forEach(t => allTags.add(t));
    });
    const sortedTags = Array.from(allTags).sort();
    
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

        const sortedKeys = Object.keys(projectsData).sort((a, b) => {
            return getProjectSortValue(projectsData[b]) - getProjectSortValue(projectsData[a]);
        });

        sortedKeys.forEach(key => {
            const p = projectsData[key];
            const title = p.i18n.title.toLowerCase();
            const tagStr = p.tags ? p.tags.join(" ").toLowerCase() : "";
            
            const matchesTag = (currentFilter === "all") || (p.tags && p.tags.includes(currentFilter));
            const matchesSearch = title.includes(query) || tagStr.includes(query) || key.includes(query);
            
            if (matchesTag && matchesSearch) {
                const meta = getStatusMeta(p.status);
                const tagsHTML = p.tags ? p.tags.slice(0,3).map(t => `<span class="tag">${t}</span>`).join("") : "";
                const dateHTML = buildCardDateHTML(p);
                
                projectsGrid.innerHTML += `
                    <a class="game-card ${meta.cls}" href="?project=${key}">
                        <div class="game-tag" data-i18n="${meta.i18n}">${p.status}</div>
                        <img src="${p.cardImg}" alt="" onerror="this.src='../images/herogames-alt.png'" />
                        <div class="game-info">
                            <h3 data-i18n="${p.i18n.title}">Project</h3>
                            <div class="beat-tags">${tagsHTML}</div>
                            <p data-i18n="${p.i18n.cardDesc}">Description</p>
                            ${dateHTML}
                        </div>
                    </a>
                `;
            }
        });
        
        if (typeof setLanguage === 'function') {
            const savedLang = localStorage.getItem('preferredLang') || 'en';
            setLanguage(savedLang);
        }
    }

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
//  SINGLE PROJECT VIEW
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

    const logoHtml = game.logo 
        ? `<img src="${game.logo}" alt="" class="game-logo" data-i18n="${game.i18n.title}">` 
        : `<h1 class="project-title" data-i18n="${game.i18n.title}"></h1>`;

    headerEl.innerHTML = logoHtml + buildDateBadgeHTML(game);

    let mediaHTML = '';
    if(game.media) {
        game.media.forEach(m => {
          if (m.type === "image") mediaHTML += `<div class="media-item fade"><img src="${m.src}" alt=""></div>`;
          if (m.type === "video") mediaHTML += `<div class="media-item fade"><iframe src="${m.src}" allowfullscreen></iframe></div>`;
        });
    }

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
                <a href="${game.links.website}" target="_blank" class="btn-primary">ENTER DEBATE</a>
                <a href="#interfaith-features" class="btn-secondary">LEARN MORE</a>
            </div>
            <div class="stats-strip">
                <div class="stat"><span class="stat-num">34+</span><span class="stat-label">FAITHS COVERED</span></div>
                <div class="stat-divider"></div>
                <div class="stat"><span class="stat-num">LIVE</span><span class="stat-label">MATCHING ENGINE</span></div>
                <div class="stat-divider"></div>
                <div class="stat"><span class="stat-num">100%</span><span class="stat-label">ANONYMOUS</span></div>
            </div>
        </div>
        </section>
        <section id="interfaith-features" class="interfaith-features fade-up">
        <div class="section-title">
            <h2>WHY THIS EXISTS</h2>
            <p>Most online religious discussions become hostile instantly. Interfaith Debate was designed to create a cleaner and more thoughtful space for genuine discussion and understanding.</p>
        </div>
        <div class="interfaith-grid">
            <div class="interfaith-card"><h3>Respectful Debate</h3><p>Structured conversations focused on understanding instead of insults and chaos.</p></div>
            <div class="interfaith-card"><h3>Anonymous Discussion</h3><p>Debate ideas freely without pressure, status, or social bias.</p></div>
            <div class="interfaith-card"><h3>Different Perspectives</h3><p>Explore theology, philosophy, atheism, spirituality, morality, and more.</p></div>
        </div>
        </section>
        <section class="interfaith-quote fade-up">
        <div class="quote-line"></div>
        <p class="quote-text">"The goal is not to win arguments. The goal is to understand perspectives you would never normally encounter."</p>
        </section>
      `;
    } else if (gameKey === "salesmen") {
      document.body.classList.add('pg-salesmen');
      contentEl.innerHTML = `
        <div class="salesmen-pitch fade-up">
          <div class="salesmen-pitch__tag">▶ STEP RIGHT UP</div>
          <p class="salesmen-pitch__text" data-i18n="${game.i18n.description}"></p>
        </div>
        <div class="media-gallery salesmen-media fade-up">${mediaHTML}</div>
        <div class="salesmen-price-divider fade-up">— choose how you'll build your empire —</div>
        <div class="salesmen-paths fade-up">
          <div class="salesmen-path-card"><div class="salesmen-path-card__icon">💰</div><div class="salesmen-path-card__title">The Tycoon</div><p>Climb from scrap-heap trader to respected business mogul. Every deal counts, every upgrade matters.</p></div>
          <div class="salesmen-path-card"><div class="salesmen-path-card__icon">🃏</div><div class="salesmen-path-card__title">The Renegade</div><p>Cut corners, con customers, and claw your way up any way you can. Scrapropolis won't play fair with you either.</p></div>
          <div class="salesmen-path-card"><div class="salesmen-path-card__icon">🤝</div><div class="salesmen-path-card__title">The Kind Machine</div><p>Build a business that actually helps the neighborhood. Slower, harder, but somebody has to care.</p></div>
        </div>
        <div class="salesmen-shop-strip fade-up">
          <div class="salesmen-shop-card"><div class="salesmen-shop-card__num">01</div><div class="salesmen-shop-card__title">START WITH NOTHING</div><p>A cardboard box, a dirty shell, and whatever you can scavenge off the street. Scrapropolis doesn't hand out sympathy.</p></div>
          <div class="salesmen-shop-card"><div class="salesmen-shop-card__num">02</div><div class="salesmen-shop-card__title">MEET THE LOCALS</div><p>A whole cast of citizens with their own wants, quirks, and price points. Learn what sells and to whom.</p></div>
          <div class="salesmen-shop-card"><div class="salesmen-shop-card__num">03</div><div class="salesmen-shop-card__title">BUILD YOUR SHOP</div><p>Upgrade your stall into a storefront, and your storefront into whatever kind of empire you can imagine.</p></div>
        </div>
        <div class="salesmen-quote fade-up"><div class="salesmen-quote-mark">"</div><div class="salesmen-quote-text">Every robot in Scrapropolis is selling something. The only question is what you're willing to sell.</div></div>
        <div class="salesmen-cta fade-up"><p class="salesmen-cta__sub">Currently just a demo — development is paused.</p><a href="https://39games.itch.io/salesmen" target="_blank" class="salesmen-btn"><i class="fab fa-itch-io"></i> Follow it on Itch.io</a></div>
      `;
    } else if (gameKey === "rulersofserbia") {
      document.body.classList.add('pg-ros');
      contentEl.innerHTML = `
        <div class="ros-intro fade-up"><div class="ros-intro__crest">☨</div><p class="ros-intro__text" data-i18n="${game.i18n.description}"></p></div>
        <div class="ros-honest fade-up"><div class="ros-honest__tag">A NOTE ON THIS ONE</div><p>Rulers of Serbia was an ambitious attempt to turn 200 years of Serbian medieval history into a playable strategy game. It grew bigger than one person could realistically finish, and development is currently paused. The project file's still here though, and it might get picked back up one day.</p></div>
        <div class="ros-timeline fade-up">
          <div class="ros-timeline__title">THE NEMANJIĆ DYNASTY <span>1166 – 1371</span></div>
          <div class="ros-timeline__line"></div>
          <div class="ros-timeline__items">
            <div class="ros-tl-item"><div class="ros-tl-item__year">1166</div><div class="ros-tl-item__name">Stefan Nemanja</div><div class="ros-tl-item__desc">Grand Prince who united the Serbian lands and founded the dynasty.</div></div>
            <div class="ros-tl-item"><div class="ros-tl-item__year">1217</div><div class="ros-tl-item__name">Stefan the First-Crowned</div><div class="ros-tl-item__desc">Crowned the first King of Serbia, cementing the kingdom's place in Europe.</div></div>
            <div class="ros-tl-item"><div class="ros-tl-item__year">1282</div><div class="ros-tl-item__name">King Milutin</div><div class="ros-tl-item__desc">Expanded the kingdom's borders and built dozens of monasteries.</div></div>
            <div class="ros-tl-item"><div class="ros-tl-item__year">1346</div><div class="ros-tl-item__name">Emperor Dušan</div><div class="ros-tl-item__desc">Crowned Emperor, ruling over the largest Serbian empire in history.</div></div>
            <div class="ros-tl-item"><div class="ros-tl-item__year">1371</div><div class="ros-tl-item__name">Uroš the Weak</div><div class="ros-tl-item__desc">The last Nemanjić ruler. His death fractured the empire into rival lords.</div></div>
          </div>
        </div>
        <div class="ros-vision fade-up">
          <div class="ros-vision__title">WHAT IT WAS GOING FOR</div>
          <div class="ros-vision__grid">
            <div class="ros-vision-card"><div class="ros-vision-card__icon">🏰</div><div class="ros-vision-card__title">RULE A KINGDOM</div><p>Manage territory, alliances, and succession across generations of Nemanjić rulers.</p></div>
            <div class="ros-vision-card"><div class="ros-vision-card__icon">⛪</div><div class="ros-vision-card__title">BUILD MONASTERIES</div><p>Fund the same real monastic complexes the Nemanjići actually built, from Studenica to Visoki Dečani.</p></div>
            <div class="ros-vision-card"><div class="ros-vision-card__icon">⚔️</div><div class="ros-vision-card__title">EXPAND THE BORDERS</div><p>Push into Byzantine territory, fend off rival kingdoms, and grow Serbia into an empire.</p></div>
          </div>
        </div>
        <div class="ros-cta fade-up"><p class="ros-cta__sub">Extract the .zip, run the .exe, and see how far it got.</p><a href="https://39games.itch.io/ros-nemanjic" target="_blank" class="ros-btn"><i class="fab fa-itch-io"></i> Play it on Itch.io</a></div>
      `;
    } else if (gameKey === "chum") {
      document.body.classList.add('pg-chum');
      contentEl.innerHTML = `
        <div class="chum-intro fade-up"><div class="chum-suits">♠ ♥ ♦ ♣</div><p class="chum-intro__text" data-i18n="${game.i18n.description}"></p></div>
        <div class="chum-rules fade-up">
          <div class="chum-rule-card"><div class="chum-rule-card__icon">📦</div><div class="chum-rule-card__title">OPEN A CHEST</div><p>Crack one open on your turn for a random item to add to your hand. You never know what you'll get.</p></div>
          <div class="chum-rule-card"><div class="chum-rule-card__icon">⚔️</div><div class="chum-rule-card__title">OR ATTACK</div><p>Already holding something useful? Click it to strike your opponent instead of drawing.</p></div>
          <div class="chum-rule-card"><div class="chum-rule-card__icon">🏆</div><div class="chum-rule-card__title">LAST ONE STANDING</div><p>Whoever runs their opponent's health to zero first wins the match. Simple as that.</p></div>
        </div>
        <div class="chum-honest fade-up"><div class="chum-honest__tag">WHY IT'S DISCONTINUED</div><p>Chum needed a server to match players up, and I didn't want to keep paying to keep it running. I leaned on some free server options for a while, but I'm honestly not sure they still work. On top of that, the code behind it turned into a mess that got harder and harder to touch. It was a fun one to make, but this one's retired.</p></div>
        <div class="chum-cta fade-up"><p class="chum-cta__sub">Still downloadable, name your own price.</p><a href="https://39games.itch.io/chum" target="_blank" class="chum-btn"><i class="fab fa-itch-io"></i> Grab it on Itch.io</a></div>
      `;
    } else if (gameKey === "ohcrab") {
      document.body.classList.add('pg-ohcrab');
      contentEl.innerHTML = `
        <div class="crab-intro fade-up"><p class="crab-intro__text" data-i18n="${game.i18n.description}"></p></div>
        <div class="crab-tags fade-up"><span class="crab-tag">🦀 crab</span><span class="crab-tag">🦞 lobster</span><span class="crab-tag">🏰 tower defense</span><span class="crab-tag">🤷 idk</span></div>
        <div class="crab-honest fade-up"><div class="crab-honest__tag">A NOTE FROM THE PAST</div><p>Oh Crab! was one of the very first games I ever finished, made for a game jam back when I was just starting to learn Pygame. It's rough, it's held together with duct tape, and it's absolutely not representative of what I make now. I'm keeping it up anyway — everyone's first game is a little embarrassing, and this one's mine.</p></div>
        <div class="crab-cta fade-up"><p class="crab-cta__sub">You've been warned. Download at your own risk.</p><a href="https://39games.itch.io/oh-crab" target="_blank" class="crab-btn"><i class="fab fa-itch-io"></i> Brave it on Itch.io</a></div>
      `;
    } else if (gameKey === "colors") {
      document.body.classList.add('pg-colors');
      contentEl.innerHTML = `
        <div class="colors-blend fade-up" aria-hidden="true"><div class="colors-blend__blob colors-blend__blob--a"></div><div class="colors-blend__blob colors-blend__blob--b"></div><div class="colors-blend__blob colors-blend__blob--c"></div></div>
        <div class="colors-intro fade-up"><div class="colors-intro__tag">MY FIRST UNITY GAME EVER</div><p class="colors-intro__text" data-i18n="${game.i18n.description}"></p></div>
        <div class="media-gallery colors-media fade-up">${mediaHTML}</div>
        <div class="colors-mix fade-up">
          <div class="colors-mix__title">MIX. MATCH. SOLVE.</div>
          <div class="colors-mix__row"><div class="colors-mix__swatch" style="background:#e63946"></div><div class="colors-mix__op">+</div><div class="colors-mix__swatch" style="background:#3d5ee2"></div><div class="colors-mix__op">=</div><div class="colors-mix__swatch colors-mix__swatch--result" style="background:#8b2fc9"></div></div>
          <p class="colors-mix__desc">The whole game is built around one simple idea: combine colors to hit a target shade. No more, no less.</p>
        </div>
        <div class="colors-honest fade-up"><div class="colors-honest__tag">A NOTE FROM THE PAST</div><p>Colors was the very first thing I ever finished in Unity, made before I had any idea what I was doing. It's rough, it's simple, and it's absolutely not representative of what I make now — but everything else on this site started because of it. Kept up here the way a first drawing stays on the fridge.</p></div>
        <div class="colors-cta fade-up"><p class="colors-cta__sub">Free, Android and PC only.</p><a href="https://39games.itch.io/colors" target="_blank" class="colors-btn"><i class="fab fa-itch-io"></i> Download it on Itch.io</a></div>
      `;
    } else if (gameKey === "moonbreaker") {
      document.body.classList.add('pg-moonbreaker');
      contentEl.innerHTML = `
        <div class="moonbreak-intro fade-up"><div class="moonbreak-intro__tag">YEAR 2999</div><p class="moonbreak-intro__text" data-i18n="${game.i18n.description}"></p></div>
        <div class="media-gallery moonbreak-media fade-up">${mediaHTML}</div>
        <div class="moonbreak-brief fade-up">
          <div class="moonbreak-brief__title">THE MISSION</div>
          <div class="moonbreak-brief__grid">
            <div class="moonbreak-brief-card"><div class="moonbreak-brief-card__icon">🪐</div><div class="moonbreak-brief-card__title">FIND A PLANET</div><p>The green people want it. There's just one problem orbiting in the way.</p></div>
            <div class="moonbreak-brief-card"><div class="moonbreak-brief-card__icon">🌕</div><div class="moonbreak-brief-card__title">SPOT THE MOON</div><p>Every planet's got one, and every single one stands between you and conquest.</p></div>
            <div class="moonbreak-brief-card"><div class="moonbreak-brief-card__icon">💥</div><div class="moonbreak-brief-card__title">BREAK IT</div><p>Shoot it until it isn't there anymore. That's really the whole game.</p></div>
          </div>
        </div>
        <div class="moonbreak-honest fade-up"><div class="moonbreak-honest__tag">STRAIGHT FROM THE ITCH PAGE</div><p>Moonbreaker was thrown together in a few days for the Game Off 2020 game jam, and it has not aged well. It's short, it's rough, and even the original itch.io page tells you flat out not to download it. It's kept up here purely for the nostalgia of an old jam project — consider yourself warned.</p></div>
        <div class="moonbreak-cta fade-up"><p class="moonbreak-cta__sub">Free download, source code included, Windows only.</p><div class="moonbreak-cta__btns"><a href="https://39games.itch.io/moonbreaker" target="_blank" class="moonbreak-btn"><i class="fab fa-itch-io"></i> Download it on Itch.io</a><a href="https://github.com/ChocoFry/Moonbreaker" target="_blank" class="moonbreak-btn moonbreak-btn--outline"><i class="fab fa-github"></i> View the Source</a></div></div>
      `;
    } else if (gameKey === "termiteswarm") {
      document.body.classList.add('pg-termiteswarm');
      contentEl.innerHTML = `
        <div class="termite-intro fade-up"><div class="termite-intro__tag">THE OBJECTIVE</div><p class="termite-intro__text" data-i18n="${game.i18n.description}"></p></div>
        <div class="media-gallery termite-media fade-up">${mediaHTML}</div>
        <div class="termite-brief fade-up">
          <div class="termite-brief__title">HOW TO BULLY AN OLD MAN</div>
          <div class="termite-brief__grid">
            <div class="termite-brief-card"><div class="termite-brief-card__icon">🌿</div><div class="termite-brief-card__title">EAT THE PLANTS</div><p>Chew through the greenery to grow your swarm. The bigger it gets, the scarier it looks.</p></div>
            <div class="termite-brief-card"><div class="termite-brief-card__icon">🏚️</div><div class="termite-brief-card__title">EAT THE CABIN</div><p>Once your swarm is big enough, start gnawing through the old man's home. He's still asleep.</p></div>
            <div class="termite-brief-card"><div class="termite-brief-card__icon">👴</div><div class="termite-brief-card__title">BITE HIM TO DEATH</div><p>Or something. The old man never really stood a chance against an entire swarm of termites.</p></div>
          </div>
        </div>
        <div class="termite-honest fade-up"><div class="termite-honest__tag">WHAT THIS ACTUALLY IS</div><p>Termite Swarm was made for the Brackeys Game Jam 2021.1, and it's exactly as silly as it sounds — control a growing termite swarm, eat everything in sight, and take down an old man in front of his cabin. It's short, it's a bit chaotic, and it hasn't been touched since. A weirdly satisfying little prototype.</p></div>
        <div class="termite-cta fade-up"><p class="termite-cta__sub">Free download, Windows only.</p><a href="https://39games.itch.io/termites" target="_blank" class="termite-btn"><i class="fab fa-itch-io"></i> Download it on Itch.io</a></div>
      `;
    } else if (gameKey === "rng") {
      document.body.classList.add('pg-rng');
      contentEl.innerHTML = `
        <div class="rng-intro fade-up"><p class="rng-intro__text" data-i18n="${game.i18n.description}"></p></div>
        <div class="rng-honest fade-up"><div class="rng-honest__tag">A NOTE FROM THE PAST</div><p>RNG was made in one week for the Brackeys Game Jam 2021.2, built around taking the word "random" as literally as possible — gun color, player size, damage, all rolled on the spot. It's chaotic, unbalanced on purpose, and not meant to be taken seriously. A weird little jam experiment kept up for the memories.</p></div>
        <div class="rng-cta fade-up"><p class="rng-cta__sub">Free download, Windows only.</p><a href="https://39games.itch.io/rng" target="_blank" class="rng-btn"><i class="fab fa-itch-io"></i> Download it on Itch.io</a></div>
      `;
    } else if (gameKey === "stepwarriors") {
      document.body.classList.add('pg-stepwarriors');
      contentEl.innerHTML = `
        <div class="sw-status fade"><div class="sw-status__dot"></div><div class="sw-status__text"><strong>IN DEVELOPMENT</strong> &nbsp;·&nbsp; <strong>Made for the mts app konkurs</strong> &nbsp;·&nbsp; <strong>Walking RPG</strong> &nbsp;·&nbsp; <strong>Unity · Android</strong></div></div>
        <div class="sw-hero fade-up">
          <h2 class="sw-hero__tagline">Walk in real life.<br>Collect cursed feet.<br>Destroy your enemies.</h2>
          <p class="sw-hero__sub" data-i18n="${game.i18n.description}"></p>
        </div>
        <div class="sw-hud fade-up">
          <div class="sw-hud-cell"><div class="sw-hud-label">STEPS TODAY</div><div class="sw-hud-val">???</div></div>
          <div class="sw-hud-cell"><div class="sw-hud-label">PLATFORM</div><div class="sw-hud-val">ANDROID</div></div>
          <div class="sw-hud-cell"><div class="sw-hud-label">MODE</div><div class="sw-hud-val">ONLINE PVP</div></div>
          <div class="sw-hud-cell"><div class="sw-hud-label">STATUS</div><div class="sw-hud-val sw-hud-live">● PROTOTYPE</div></div>
        </div>
        <div class="media-gallery sw-media fade">${mediaHTML || '<div class="sw-no-media">[ NO FOOTAGE YET — GO OUTSIDE AND WALK INSTEAD ]</div>'}</div>
        <div class="sw-features fade-up">
          <div class="sw-features__title">HOW IT WORKS</div>
          <div class="sw-features__grid">
            <div class="sw-feature-card"><div class="sw-feature-card__icon">🌍</div><div class="sw-feature-card__title">REAL WORLD BATTLES</div><p>Walk around in real life to uncover battles and boss fights scattered across an actual map.</p></div>
            <div class="sw-feature-card"><div class="sw-feature-card__icon">⚔️</div><div class="sw-feature-card__title">TURN-BASED COMBAT</div><p>Build a team of feet and take down enemy feet using different attacks and strategies.</p></div>
            <div class="sw-feature-card"><div class="sw-feature-card__icon">📦</div><div class="sw-feature-card__title">UNLOCK RARE FEET</div><p>Earn currency from walking and battles to crack open boxes and unlock stronger, weirder foot warriors.</p></div>
            <div class="sw-feature-card"><div class="sw-feature-card__icon">👥</div><div class="sw-feature-card__title">ONLINE PVP</div><p>Fight real players with automatic matchmaking and player-hosted servers.</p></div>
          </div>
        </div>
        <div class="sw-honest fade-up"><div class="sw-honest__tag">WHY THIS EXISTS</div><p>Step Warriors was built for the <strong>mts app konkurs</strong> — a mobile app development competition run by Telekom Srbija for high school students specializing in math and computer science. It isn't released anywhere yet, but it should be soon.</p></div>
        <div class="sw-cta fade-up"><p class="sw-cta__sub">Not out anywhere yet — but you can follow along.</p><a href="https://39games.itch.io/step-warriors" target="_blank" class="sw-btn"><i class="fab fa-itch-io"></i> View it on Itch.io</a></div>
      `;
    } else if (gameKey === "obsidianrift") {
      document.body.classList.add('pg-rift');
      contentEl.innerHTML = `
        <div class="rift-status fade"><div class="rift-status__dot"></div><div class="rift-status__text"><strong>PROTOTYPE</strong> &nbsp;·&nbsp; <strong>Dungeon Crawler</strong> &nbsp;·&nbsp; <strong>Stealth</strong> &nbsp;·&nbsp; <strong>Portals & Teleportation</strong></div></div>
        <div class="media-gallery rift-media fade">${mediaHTML}</div>
        <div class="rift-intro fade-up"><div class="rift-intro__label">— THE CONCEPT —</div><p class="rift-intro__text" data-i18n="${game.i18n.description}"></p></div>
        <div class="rift-tags fade-up"><div class="rift-tag">Dark Fantasy</div><div class="rift-tag">Dungeon Crawler</div><div class="rift-tag">Fantasy</div><div class="rift-tag">Mystery</div><div class="rift-tag">Stealth</div></div>
        <div class="rift-honest fade-up"><div class="rift-honest__tag">AN HONEST NOTE</div><p>Obsidian Rift is an early prototype built around a concept I liked, but haven't had the time to fully develop yet: sneaking through dark, obsidian-black dungeons and using portals and teleportation to slip past enemies and solve your way through.</p></div>
        <div class="rift-cta fade-up"><p class="rift-cta__sub">Free download, playable now.</p><a href="https://39games.itch.io/obsidian-rift" target="_blank" class="rift-btn"><i class="fab fa-itch-io"></i> Download it on Itch.io</a></div>
      `;
    } else if (gameKey === "gnometowerdefense") {
      document.body.classList.add('pg-gnometowerdefense');
      contentEl.innerHTML = `
        <div class="rift-status fade"><div class="rift-status__dot"></div><div class="rift-status__text"><strong>DEMO</strong> &nbsp;·&nbsp; <strong>Tower Defense</strong> &nbsp;·&nbsp; <strong>Gnomes vs Goblins</strong> &nbsp;·&nbsp; <strong>Blender → 2D Pixel Art</strong></div></div>
        <div class="media-gallery rift-media fade">${mediaHTML}</div>
        <div class="rift-intro fade-up"><div class="rift-intro__label">— THE CONCEPT —</div><p class="rift-intro__text" data-i18n="${game.i18n.description}"></p></div>
        <div class="rift-tags fade-up"><div class="rift-tag">Tower Defense</div><div class="rift-tag">Gnomes</div><div class="rift-tag">Goblins</div><div class="rift-tag">Pixel Art</div><div class="rift-tag">Blender</div></div>
        <div class="rift-honest fade-up"><div class="rift-honest__tag">INFO</div><p>The game is a PvZ-style tower defense prototype where you place gnome-themed towers to fight off waves of goblins. All the assets were fully modeled and animated in Blender, then rendered out as 2D pixel art.</p></div>
        <div class="rift-cta fade-up"><p class="rift-cta__sub">A couple of short clips are up on YouTube if you want to see it in motion.</p><a href="https://www.youtube.com/shorts/HPsGhSKUwnA" target="_blank" class="rift-btn"><i class="fab fa-youtube"></i> Watch it on YouTube</a></div>
      `;
    } else if (gameKey === "parasiterun3d") {
      document.body.classList.add('pg-parasiterun3d');
      contentEl.innerHTML = `
        <div class="rift-status fade"><div class="rift-status__dot"></div><div class="rift-status__text"><strong>DEMO</strong> &nbsp;·&nbsp; <strong>Hypercasual Runner</strong> &nbsp;·&nbsp; <strong>3D</strong> &nbsp;·&nbsp; <strong>Mobile</strong></div></div>
        <div class="media-gallery rift-media fade">${mediaHTML}</div>
        <div class="rift-intro fade-up"><div class="rift-intro__label">— THE CONCEPT —</div><p class="rift-intro__text" data-i18n="${game.i18n.description}"></p></div>
        <div class="rift-tags fade-up"><div class="rift-tag">Hypercasual</div><div class="rift-tag">Runner</div><div class="rift-tag">Mobile</div><div class="rift-tag">3D</div></div>
        <div class="rift-honest fade-up"><div class="rift-honest__tag">SOME INFO ABOUT THIS ONE</div><p>Parasite Run 3D is a hypercasual runner prototype where you control a parasite attaching itself to the people running in front of you. Jump between different types of people to get past different obstacles.</p></div>
        <div class="rift-cta fade-up"><p class="rift-cta__sub">A couple of short clips are up on YouTube if you want to see it in motion.</p><a href="https://www.youtube.com/shorts/1hdFOpgF3Ok" target="_blank" class="rift-btn"><i class="fab fa-youtube"></i> Watch it on YouTube</a></div>
      `;
    } else if (gameKey === "topdownshooter") {
      document.body.classList.add('pg-shooter');
      contentEl.innerHTML = `
        <div class="shooter-status fade">
          <div class="shooter-status__dot"></div>
          <div class="shooter-status__text"><strong>MET Game Hackathon 2023 Entry</strong> &nbsp;·&nbsp; <strong>2nd Place Winner</strong> &nbsp;·&nbsp; <strong>Built in 1 Day</strong></div>
        </div>
        <div class="media-gallery shooter-media fade">${mediaHTML}</div>
        <div class="shooter-intro fade-up">
          <div class="shooter-label">SYSTEM OVERVIEW</div>
          <p class="shooter-text" data-i18n="${game.i18n.description}"></p>
        </div>
        <div class="shooter-honest fade-up">
          <div class="shooter-honest__tag">DEVELOPMENT OVERVIEW</div>
          <p>This project was thrown together under a tight 24-hour deadline for the MET Game Hackathon 2023. It reuses the signature robot character type found in Ogre Assault and Salesmen. Though mechanics remain straightforward and clean, the loops and progressive character upgrades landed it a 2nd place spot in the competition judgment matrix.</p>
        </div>
      `;
    } else if (gameKey === "fightinggame") {
      document.body.classList.add('pg-fighter');
      contentEl.innerHTML = `
        <div class="fighter-status fade">
          <div class="fighter-status__dot"></div>
          <div class="fighter-status__text"><strong>Global Game Jam 2024 Entry</strong> &nbsp;·&nbsp; <strong>Theme: "Make Me Laugh"</strong> &nbsp;·&nbsp; <strong>Built in 2 Days</strong></div>
        </div>
        <div class="media-gallery fighter-media fade">${mediaHTML}</div>
        <div class="fighter-intro fade-up">
          <div class="fighter-label">MATCH BRIEFING</div>
          <p class="fighter-text" data-i18n="${game.i18n.description}"></p>
        </div>
        <div class="fighter-honest fade-up">
          <div class="fighter-honest__tag">BEHIND THE SCENES</div>
          <p>Created across a frantic 48-hour development window during Global Game Jam 2024. Because the core jam parameter was focused entirely on amusement or laughter generation, the focal goal became entertaining the dark lord overlooking the arena. Heavy prioritization was thrown directly into execution loops, hand-drawn fighting physics, blocks, and punch-to-uppercut combo states.</p>
        </div>
      `;
    } else {
      contentEl.innerHTML = `
        <div class="media-gallery fade">${mediaHTML}</div>
        <br><br>
        <div class="description fade" data-i18n="${game.i18n.description}"></div>
      `;
    }

    const logos = document.querySelectorAll('.game-logo');
    window.addEventListener('scroll',()=>{
      const scrollY = window.scrollY;
      logos.forEach((logo,i)=>{
        const speed = 0.04+(i%5)*0.01;
        logo.style.setProperty('--parallax',`${scrollY*speed}px`);
      });
    });

    function observeFades(root=document) { root.querySelectorAll('.fade, .fade-up').forEach(el=>observer.observe(el)); }
    observeFades(contentEl);
}