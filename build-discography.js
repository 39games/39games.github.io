// Run from the site root:  node build-discography.js
// Reads discography.js + discography/index.html and writes discography/<slug>.html for every
// release that isn't hidden, each with its own <title> and link-preview (og:) tags.
// Also refreshes the discography block in sitemap.xml.
const fs = require('fs');
const vm = require('vm');

const SITE = 'https://39gamesandbeats.com';

// ---- pull releasesData out of discography.js without running the DOM code ----
const src = fs.readFileSync('discography.js', 'utf8');
const start = src.indexOf('const releasesData = {');
const end = src.indexOf('// ====== END DATA ======');
if (start < 0 || end < 0) throw new Error('Could not locate releasesData in discography.js');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(src.slice(start, end).replace('const releasesData', 'releasesData'), ctx);
const releasesData = ctx.releasesData;

// ---- helpers ----
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const setMeta = (html, attr, name, value) => {
  const re = new RegExp(`(<meta ${attr}="${name}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Missing <meta ${attr}="${name}"> in discography/index.html`);
  return html.replace(re, (_, a, b) => a + esc(value) + b);
};

const template = fs.readFileSync('discography/index.html', 'utf8');
const liveSlugs = [];

for (const [slug, r] of Object.entries(releasesData)) {
  if (r.hidden) { console.log(`skip (hidden)  ${slug}`); continue; }
  liveSlugs.push(slug);

  const artists = r.artists.join(', ');
  const title = `39 Beats | ${r.title}`;
  const desc = r.desc
    ? `${r.title} by ${artists} — ${r.desc} Listen on Spotify, Apple Music, YouTube Music and more.`
    : `${r.title} — ${r.type.toLowerCase()} by ${artists}${r.date ? ` (${r.date.slice(0, 4)})` : ''}. Listen on Spotify, Apple Music, YouTube Music and more.`;
  const img = `${SITE}/images/discography/${slug}.png`;

  const ld = {
    '@context': 'https://schema.org',
    '@type': r.type === 'Single' ? 'MusicRecording' : 'MusicAlbum',
    name: r.title,
    url: `${SITE}/discography/${slug}`,
    image: img,
    byArtist: r.artists.map(a => ({ '@type': 'MusicGroup', name: a })),
  };
  if (r.date) ld.datePublished = r.date;
  if (r.tracks) ld.numTracks = r.tracks;
  const sameAs = Object.values(r.links || {}).filter(Boolean);
  if (sameAs.length) ld.sameAs = sameAs;

  let html = template;
  html = html.replace(/<title[^>]*>.*?<\/title>/, `<title>${esc(title)}</title>`);
  html = setMeta(html, 'property', 'og:title', title);
  html = setMeta(html, 'property', 'og:description', desc);
  html = setMeta(html, 'property', 'og:image', img);
  html = setMeta(html, 'property', 'og:url', `${SITE}/discography/${slug}`);
  html = setMeta(html, 'name', 'description', desc);
  html = html.replace('</head>',
    `    <link rel="canonical" href="${SITE}/discography/${slug}" />\n` +
    `    <script type="application/ld+json">${JSON.stringify(ld)}</script>\n</head>`);
  html = html.replace('<body class="mode-beats beats-page disco-page">',
    `<body class="mode-beats beats-page disco-page" data-release="${slug}">`);

  fs.writeFileSync(`discography/${slug}.html`, html);
  console.log(`discography/${slug}.html  ->  ${title}  [${img}]`);
}

// ---- sitemap ----
if (fs.existsSync('sitemap.xml')) {
  let sm = fs.readFileSync('sitemap.xml', 'utf8');
  const nl = sm.includes('\r\n') ? '\r\n' : '\n';
  const urls = [['', 0.9], ...liveSlugs.map(s => [s, 0.7])].map(([s, p]) =>
    `    <url>${nl}        <loc>${SITE}/discography/${s}</loc>${nl}        <changefreq>monthly</changefreq>${nl}        <priority>${p}</priority>${nl}    </url>`
  ).join(nl);
  const block = `    <!-- discography:start -->${nl}${urls}${nl}    <!-- discography:end -->`;
  const re = /[ \t]*<!-- discography:start -->[\s\S]*?<!-- discography:end -->/;
  sm = re.test(sm) ? sm.replace(re, block) : sm.replace('</urlset>', `${block}${nl}</urlset>`);
  fs.writeFileSync('sitemap.xml', sm);
  console.log('sitemap.xml updated');
}
