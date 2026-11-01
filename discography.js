// ════════════════════════════════════════════
// MODE SWITCH (discography is a beats page → switch goes to the games side)
// ════════════════════════════════════════════
const switchBtn1 = document.getElementById('modeSwitch1');
if (switchBtn1) {
  switchBtn1.addEventListener('click', () => {
    document.body.classList.add('switching');
    switchBtn1.classList.add('switch-animate');
    setTimeout(() => { window.location.href = '../index.html'; }, 600);
  });
}

// ════════════════════════════════════════════
// RELEASES DATA
//  - Sorted automatically by date (newest first). Releases with no date go on top.
//  - cover: put the file in /images/discography/<slug>.png
//  - links: paste the direct URL for each platform. Anything left "" falls back to a
//    search link on that platform, so the buttons always work until you fill them in.
//  - hidden: true  → not shown anywhere and no page is built (drafts / not live yet).
//  - After editing: run  node build-discography.js
// ════════════════════════════════════════════
const releasesData = {
  "39beattapevol2": {
    title: "39 Beat Tape, Vol. 2",
    artists: ["39 Beats"],
    type: "Album",
    date: "",
    hidden: true,            // draft — remove this line when it goes live
    desc: "",
    links: { spotify: "", apple: "", youtube: "", amazon: "", deezer: "", tidal: "", soundcloud: "" }
  },
  "alongtheway": {
    title: "along the way",
    artists: ["39 Beats"],
    type: "Album",
    date: "",
    hidden: true,            // delivered to stores, not live yet — remove this line once it is
    desc: "",
    links: { spotify: "", apple: "", youtube: "", amazon: "", deezer: "", tidal: "", soundcloud: "" }
  },
  "39beattapevol1": {
    title: "39 Beat Tape, Vol. 1",
    artists: ["39 Beats"],
    type: "Album",
    date: "2025-10-24",
    tracks: 13,
    desc: "Old-school boom-bap beat tape — 13 instrumentals.",
    links: {
      spotify: "https://open.spotify.com/album/5LfV4LV8UYpPm7OLuvAA7B",
      apple: "", youtube: "", amazon: "", deezer: "", tidal: "", soundcloud: ""
    }
  },
  "od1do10": {
    title: "Od 1 do 10",
    artists: ["Ukov", "39 Beats"],
    type: "Single",
    date: "2026-10-02",
    desc: "",
    links: { spotify: "https://open.spotify.com/track/57Kzyx3ahAi3I5BDPvrgb1", apple: "", youtube: "", amazon: "", deezer: "", tidal: "", soundcloud: "" }
  },
  "baustela": {
    title: "Bauštela",
    artists: ["Brat Cigi", "39 Beats"],
    type: "Single",
    date: "2026-08-13",
    desc: "",
    links: { spotify: "https://open.spotify.com/track/4ZnxpYh704F0IQ8H4cWOdF", apple: "", youtube: "", amazon: "", deezer: "", tidal: "", soundcloud: "" }
  },
  "skit": {
    title: "Skit",
    artists: ["The Mitrije", "39 Beats"],
    type: "Single",
    date: "2026-08-10",
    desc: "",
    links: { spotify: "https://open.spotify.com/track/2zd89s2E4MjHz0l639qe3i", apple: "", youtube: "", amazon: "", deezer: "", tidal: "", soundcloud: "" }
  },
  "konjskasnaga": {
    title: "Konjska Snaga",
    artists: ["Brat Cigi", "39 Beats"],
    type: "Single",
    date: "2026-05-04",
    desc: "",
    links: { spotify: "https://open.spotify.com/track/6DCZJxywBFcXRwWbd3jt1q", apple: "", youtube: "", amazon: "", deezer: "", tidal: "", soundcloud: "" }
  },
  "realciggaintro": {
    title: "Real Cigga (Intro)",
    artists: ["Brat Cigi", "39 Beats"],
    type: "Single",
    date: "2026-04-04",
    desc: "",
    links: { spotify: "https://open.spotify.com/track/4yi4lthh26lGeg7yVZ7o5J", apple: "", youtube: "", amazon: "", deezer: "", tidal: "", soundcloud: "" }
  },
};
// ====== END DATA ======

const PLATFORMS = [
  { key: "spotify",    name: "Spotify",       icon: "fab fa-spotify",    search: q => `https://open.spotify.com/search/${q}` },
  { key: "apple",      name: "Apple Music",   icon: "fab fa-apple",      search: q => `https://music.apple.com/search?term=${q}` },
  { key: "youtube",    name: "YouTube Music", icon: "fab fa-youtube",    search: q => `https://music.youtube.com/search?q=${q}` },
  { key: "amazon",     name: "Amazon Music",  icon: "fab fa-amazon",     search: q => `https://music.amazon.com/search/${q}` },
  { key: "deezer",     name: "Deezer",        icon: "fab fa-deezer",     search: q => `https://www.deezer.com/search/${q}` },
  { key: "tidal",      name: "Tidal",         icon: "fas fa-wave-square", search: q => `https://tidal.com/search?q=${q}` },
  { key: "soundcloud", name: "SoundCloud",    icon: "fab fa-soundcloud", search: q => `https://soundcloud.com/search?q=${q}` },
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const PLACEHOLDER_COVER = "../beats/default.png";

const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const visible = () => Object.entries(releasesData)
  .filter(([, r]) => !r.hidden)
  .sort((a, b) => (b[1].date || "9999").localeCompare(a[1].date || "9999"));
const artistLine = r => r.artists.join(", ");
const coverOf = slug => `../images/discography/${slug}.png`;

function formatDate(str) {
  if (!str) return "";
  const [y, m, d] = String(str).split("-");
  if (m && +m >= 1 && +m <= 12) return d ? `${+d} ${MONTHS[+m - 1]} ${y}` : `${MONTHS[+m - 1]} ${y}`;
  return y;
}

function spotifyEmbed(r) {
  const m = (r.links.spotify || "").match(/open\.spotify\.com\/(album|track)\/([A-Za-z0-9]+)/);
  if (!m) return "";
  const h = m[1] === "album" ? 352 : 152;
  return `<iframe class="dr-embed" src="https://open.spotify.com/embed/${m[1]}/${m[2]}?utm_source=generator&theme=0" height="${h}" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

function listenLinksHTML(r) {
  const q = encodeURIComponent(`${r.artists[0]} ${r.title}`);
  return PLATFORMS.map(p => {
    const direct = (r.links[p.key] || "").trim();
    const href = direct || p.search(q);
    return `<a class="dr-link${direct ? "" : " is-search"}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">
      <i class="${p.icon}" aria-hidden="true"></i>
      <span class="dr-link-name">${p.name}</span>
      <span class="dr-link-act">${direct ? "Listen" : "Search"} <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
    </a>`;
  }).join("");
}

// ════════════════════════════════════════════
// ROUTER
// ════════════════════════════════════════════
const releaseKey = document.body.dataset.release;
const root = document.getElementById("discoRoot");

if (!releaseKey) renderIndex();
else if (!releasesData[releaseKey] || releasesData[releaseKey].hidden) window.location.replace("/discography/");
else renderRelease(releaseKey);

// ════════════════════════════════════════════
// INDEX
// ════════════════════════════════════════════
function renderIndex() {
  const types = [...new Set(visible().map(([, r]) => r.type))];
  root.innerHTML = `
    <header class="dg-head">
      <h1>Discography</h1>
      <p>Everything released on streaming</p>
    </header>
    <div class="dg-tools">
      <input type="text" id="dg-search" placeholder="Search releases..." aria-label="Search releases" />
      <div class="dg-filters" id="dg-filters">
        <button type="button" class="on" data-type="all">all</button>
        ${types.map(t => `<button type="button" data-type="${esc(t)}">${esc(t.toLowerCase())}s</button>`).join("")}
      </div>
    </div>
    <div class="dg-grid" id="dg-grid"></div>`;

  const grid = document.getElementById("dg-grid");
  const search = document.getElementById("dg-search");
  let type = "all";

  function draw() {
    const q = search.value.toLowerCase();
    const list = visible().filter(([slug, r]) =>
      (type === "all" || r.type === type) &&
      (r.title.toLowerCase().includes(q) || artistLine(r).toLowerCase().includes(q)));
    grid.innerHTML = list.length ? list.map(([slug, r]) => `
      <a class="dg-item" href="${slug}">
        <div class="dg-cover"><img src="${coverOf(slug)}" alt="${esc(r.title)} cover" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER_COVER}'" /></div>
        <div class="dg-title">${esc(r.title)}</div>
        <div class="dg-sub">${esc(artistLine(r))}</div>
        <div class="dg-sub dg-kind">${esc(r.type)}${r.date ? " · " + formatDate(r.date.slice(0, 7)) : ""}</div>
      </a>`).join("") : `<p class="dg-empty">Nothing matches that.</p>`;
  }
  search.addEventListener("input", draw);
  document.getElementById("dg-filters").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    document.querySelectorAll("#dg-filters button").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    type = b.dataset.type;
    draw();
  });
  draw();
}

// ════════════════════════════════════════════
// SINGLE RELEASE
// ════════════════════════════════════════════
function renderRelease(slug) {
  const r = releasesData[slug];
  const facts = [
    ["Type", r.type],
    r.date ? ["Released", formatDate(r.date)] : null,
    r.tracks ? ["Tracks", r.tracks] : null,
    ["Produced by", "39 Beats"],
  ].filter(Boolean);

  const others = visible().filter(([s]) => s !== slug).slice(0, 4);

  root.innerHTML = `
    <a class="dr-back" href="./"><i class="fas fa-arrow-left" aria-hidden="true"></i> All releases</a>
    <div class="dr">
      <div class="dr-cover"><img src="${coverOf(slug)}" alt="${esc(r.title)} cover" onerror="this.onerror=null;this.src='${PLACEHOLDER_COVER}'" /></div>
      <div class="dr-info">
        <div class="dr-type">${esc(r.type)}</div>
        <h1>${esc(r.title)}</h1>
        <div class="dr-artists">${esc(artistLine(r))}</div>
        <dl class="dr-facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        ${r.desc ? `<p class="dr-desc">${esc(r.desc)}</p>` : ""}
        <h2 class="dr-h">Listen</h2>
        <div class="dr-links">${listenLinksHTML(r)}</div>
        ${spotifyEmbed(r)}
      </div>
    </div>
    ${others.length ? `
    <section class="dr-more">
      <h2 class="dr-h">More releases</h2>
      <div class="dg-grid dg-grid--small">
        ${others.map(([s, o]) => `
        <a class="dg-item" href="${s}">
          <div class="dg-cover"><img src="${coverOf(s)}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER_COVER}'" /></div>
          <div class="dg-title">${esc(o.title)}</div>
          <div class="dg-sub">${esc(artistLine(o))}</div>
        </a>`).join("")}
      </div>
    </section>` : ""}`;
}
