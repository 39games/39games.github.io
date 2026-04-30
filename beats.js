// ════════════════════════════════════════════
// MODE SWITCH (beats.html → index.html)
// ════════════════════════════════════════════
const switchBtn1 = document.getElementById('modeSwitch1');
const body = document.body;

if (switchBtn1) {
    switchBtn1.addEventListener('click', () => {
        body.classList.add('switching');
        switchBtn1.classList.add('switch-animate');

        setTimeout(() => {
            switchBtn1.classList.remove('switch-animate');
        }, 300);

        setTimeout(() => {
            body.classList.remove('switching');
            window.location.href = 'index.html';
        }, 600);
    });
}

// ════════════════════════════════════════════
// INTERSECTION OBSERVER — FADE IN
// ════════════════════════════════════════════
const faders = document.querySelectorAll('.fade');
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

faders.forEach(fader => observer.observe(fader));

// ════════════════════════════════════════════
// BUY BUTTON → CHECKOUT
// ════════════════════════════════════════════
document.addEventListener("click", e => {
    const btn = e.target.closest(".buy-btn");
    if (!btn) return;

    const params = new URLSearchParams({
        beat:   btn.dataset.title,
        price:  btn.dataset.price  || "20",
        paypal: btn.dataset.paypal || ""
    });

    window.location.href = `checkout.html?${params.toString()}`;
});

// ════════════════════════════════════════════
// BEAT PLAYER SETUP
// (called after renderBeats() populates the grid)
// ════════════════════════════════════════════
function formatTime(time) {
    if (!isFinite(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function setupBeatPlayers() {
    document.querySelectorAll('.beat-card').forEach(card => {
        const audio      = card.querySelector('audio');
        const playBtn    = card.querySelector('.play-overlay');
        const progress   = card.querySelector('.progress');
        const currentEl  = card.querySelector('.current-time');
        const durationEl = card.querySelector('.duration');

        // Duration once metadata loads
        audio.addEventListener('loadedmetadata', () => {
            durationEl.textContent = formatTime(audio.duration);
        });

        // Timeline scrub
        progress.addEventListener('input', () => {
            if (audio.duration) {
                audio.currentTime = (progress.value / 100) * audio.duration;
            }
        });

        // Time update
        audio.addEventListener('timeupdate', () => {
            progress.value = (audio.currentTime / audio.duration) * 100 || 0;
            currentEl.textContent = formatTime(audio.currentTime);
        });

        // Reset on end
        audio.addEventListener('ended', () => {
            playBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
            playBtn.setAttribute('aria-label', playBtn.getAttribute('aria-label')?.replace('Pause', 'Play') || 'Play');
            progress.value = 0;
            currentEl.textContent = "0:00";
        });

        // Play / Pause
        playBtn.addEventListener('click', () => {
            const isPlaying = !audio.paused;

            // Pause ALL other cards first
            document.querySelectorAll('.beat-card').forEach(otherCard => {
                if (otherCard === card) return;
                const otherAudio = otherCard.querySelector('audio');
                const otherBtn   = otherCard.querySelector('.play-overlay i');
                otherAudio.pause();
                otherBtn.classList.replace('fa-pause', 'fa-play');
            });

            if (isPlaying) {
                audio.pause();
                playBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
            } else {
                audio.play();
                playBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');
            }
        });
    });
}

// ════════════════════════════════════════════
// INIT — render grid then wire up players
// ════════════════════════════════════════════
renderBeats();
setupBeatPlayers();