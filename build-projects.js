// Run from the site root:  node build-projects.js
// Reads project.js + projects/index.html and writes projects/<slug>.html for every project,
// each with its own <title> and link-preview (og:) tags.
const fs = require('fs');
const vm = require('vm');

const SITE = 'https://39gamesandbeats.com';

// Display names for previews. Anything missing falls back to the slug.
const TITLES = {
  interfaithdebate: 'Interfaith Debate',
  dread: 'Dread',
  nutriasoulrush: 'Nutria Soul Rush',
  themoon: 'The Moon',
  smashtrolls: 'Smash Trolls',
  goblinbarrage: 'Goblin Barrage',
  ogreassault: 'Ogre Assault',
  theforeigner: 'The Foreigner',
  rulersofserbia: 'Rulers of Serbia',
  rocksvsstones: 'Rocks vs Stones',
  controlbob: 'Control Bob',
  ohcrab: 'Oh Crab!',
  salesmen: 'Salesmen',
  colors: 'Colors',
  chum: 'Chum',
  moonbreaker: 'Moonbreaker',
  topdownshooter: 'Untitled Top-Down Shooter',
  gnometowerdefense: 'Untitled Tower Defense',
  termiteswarm: 'Termite Swarm',
  rng: 'RNG',
  stepwarriors: 'Step Warriors',
  parasiterun3d: 'Parasite Run 3D',
  fightinggame: 'Untitled Fighting Game',
  obsidianrift: 'Obsidian Rift',
  pasniper: 'PA Sniper',
  // add the rest: salesmen, chum, ohcrab, colors, moonbreaker, ...
};
// Optional custom descriptions (otherwise a generic one is built from status + tags)
const DESCS = {
  // dread: 'A multiplayer horror game made in Unity.',
};

// ---- pull projectsData out of project.js without running the DOM code ----
const src = fs.readFileSync('project.js', 'utf8');
const start = src.indexOf('const projectsData = {');
const end = src.indexOf('function getPlatformIcons');
if (start < 0 || end < 0) throw new Error('Could not locate projectsData in project.js');
const block = src.slice(start, end).replace('const projectsData', 'projectsData');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(block, ctx);
const projectsData = ctx.projectsData;

// ---- helpers ----
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const setMeta = (html, attr, name, value) => {
  const re = new RegExp(`(<meta ${attr}="${name}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Missing <meta ${attr}="${name}"> in projects/index.html`);
  return html.replace(re, (_, a, b) => a + esc(value) + b);
};
const absImg = rel => `${SITE}/${rel.replace(/^(\.\.\/)+/, '')}`; // ../images/games/game1.png -> SITE/images/games/game1.png

const template = fs.readFileSync('projects/index.html', 'utf8');

for (const [slug, p] of Object.entries(projectsData)) {
  const name = TITLES[slug] || slug;
  const title = `39 Games | ${name}`;
  const desc = DESCS[slug] ||
    `${name} — ${(p.status || '').trim().toLowerCase()} project by 39 Games & Beats. ${p.tags.slice(0, 4).join(', ')}.`;
  const img = absImg(p.cardImg);

  let html = template;
  html = html.replace(/<title[^>]*>.*?<\/title>/, `<title>${esc(title)}</title>`); // drops data-i18n so the tab title isn't overwritten
  html = setMeta(html, 'property', 'og:title', title);
  html = setMeta(html, 'property', 'og:description', desc);
  html = setMeta(html, 'property', 'og:image', img);
  html = setMeta(html, 'name', 'description', desc);
  html = html.replace('</head>',
    `    <meta property="og:url" content="${SITE}/projects/${slug}" />\n` +
    `    <meta name="twitter:card" content="summary_large_image" />\n</head>`);
  html = html.replace('<body class="mode-games">', `<body class="mode-games" data-project="${slug}">`);

  fs.writeFileSync(`projects/${slug}.html`, html);
  console.log(`projects/${slug}.html  ->  ${title}  [${img}]`);
}
