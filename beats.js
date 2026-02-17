const switchBtn1 = document.getElementById('modeSwitch1');
const body = document.body;

switchBtn1.addEventListener('click', () => {
    body.classList.add('switching');
    switchBtn1.classList.add('switch-animate');
    
    setTimeout(() => {
        const isBeats = body.classList.contains('mode-beats');

        // Toggle modes
        body.classList.toggle('mode-games');
        body.classList.toggle('mode-beats');

        // Update URL without reloading the page
        const url = new URL(window.location);
        if (isBeats) {
            url.searchParams.delete('mode'); // switching to games
        } else {
            url.searchParams.set('mode', 'beats'); // switching to beats
        }
        window.history.replaceState({}, '', url);

        // Force-check elements in view after the switch
        const visibleFaders = document.querySelectorAll('.fade');
        visibleFaders.forEach(fader => {
            const rect = fader.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                fader.classList.add('show');
            } else {
                fader.classList.remove('show');
            }
        });

        switchBtn1.classList.remove('switch-animate');
    }, 300);

    setTimeout(() => {
        body.classList.remove('switching');
        // Navigate back to index.html after the animation
        window.location.href = 'index.html';
    }, 600);
});

// Intersection Observer for Smooth Fades
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

faders.forEach(fader => {
    observer.observe(fader);
});

// Check if URL has ?mode=beats
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("mode") === "beats") {
    document.body.classList.add("mode-beats");
    document.body.classList.remove("mode-games");
    
    // Optional: if you have nav switches
    const modeSwitch = document.getElementById("modeSwitch1");
    if (modeSwitch) {
        modeSwitch.classList.add("active"); // update toggle UI if needed
    }
}

document.querySelectorAll('.audio-player').forEach(player => {
    const audio = player.querySelector('audio');
    const btn = player.querySelector('.play-btn');
    const progress = player.querySelector('.progress');
    const time = player.querySelector('.time');

    btn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            btn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            btn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    audio.addEventListener('timeupdate', () => {
        const pct = (audio.currentTime / audio.duration) * 100;
        progress.value = pct || 0;

        const mins = Math.floor(audio.currentTime / 60);
        const secs = Math.floor(audio.currentTime % 60);
        time.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    });

    progress.addEventListener('input', () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });
});

document.querySelectorAll('.beat-card').forEach(card => {
    const audio = card.querySelector('audio');
    const btn = card.querySelector('.play-overlay');

    btn.addEventListener('click', () => {
        // Pause other audios
        document.querySelectorAll('.beat-card audio').forEach(a => {
            if (a !== audio) a.pause();
        });
        document.querySelectorAll('.beat-card .play-overlay i').forEach(icon => {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        });

        if (audio.paused) {
            audio.play();
            btn.querySelector('i').classList.remove('fa-play');
            btn.querySelector('i').classList.add('fa-pause');
        } else {
            audio.pause();
            btn.querySelector('i').classList.remove('fa-pause');
            btn.querySelector('i').classList.add('fa-play');
        }

        // When audio ends, reset icon
        audio.onended = () => {
            btn.querySelector('i').classList.remove('fa-pause');
            btn.querySelector('i').classList.add('fa-play');
        };
    });
});

function setupBeatPlayers() {
    document.querySelectorAll('.beat-card').forEach(card => {
        const audio = card.querySelector('audio');
        const playBtn = card.querySelector('.play-overlay');
        const progress = card.querySelector('.progress');
        const currentTimeEl = card.querySelector('.current-time');
        const durationEl = card.querySelector('.duration');

        // Metadata loaded → get duration
        audio.addEventListener('loadedmetadata', () => {
            durationEl.textContent = formatTime(audio.duration);
        });

        // Update timeline while playing
        audio.addEventListener('timeupdate', () => {
            progress.value = (audio.currentTime / audio.duration) * 100 || 0;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        });

        // Scrub
        progress.addEventListener('input', () => {
            audio.currentTime = (progress.value / 100) * audio.duration;
        });

        // Play / pause
        playBtn.addEventListener('click', () => {
            document.querySelectorAll('.beat-card audio').forEach(a => {
                if (a !== audio) a.pause();
            });

            document.querySelectorAll('.play-overlay i').forEach(i => {
                i.classList.remove('fa-pause');
                i.classList.add('fa-play');
            });

            if (audio.paused) {
                audio.play();
                playBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');
            } else {
                audio.pause();
                playBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
            }
        });

        audio.addEventListener('ended', () => {
            playBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
            progress.value = 0;
        });
    });
}

document.addEventListener("click", e => {
    const btn = e.target.closest(".buy-btn");
    if(!btn) return;

    const params = new URLSearchParams({
        beat: btn.dataset.title,
        price: btn.dataset.price,
        paypal: btn.dataset.paypal
    });

    window.location.href = `checkout.html?${params.toString()}`;
});


function formatTime(time) {
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

renderBeats();
setupBeatPlayers();

