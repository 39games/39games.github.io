// Mode Switching Logic
const switchBtn = document.getElementById('modeSwitch');
const body = document.body;

const favicon = document.getElementById("favicon");

function updateFavicon(){
    if(!favicon) return;

    if(body.classList.contains("mode-beats")){
        favicon.href = "images/herobeats-alt.png";
    }else{
        favicon.href = "images/herogames-alt.png";
    }
}


switchBtn.addEventListener('click', () => {
    body.classList.add('switching');
    switchBtn.classList.add('switch-animate');
    
    setTimeout(() => {
        const isBeats = body.classList.contains('mode-beats');

        // Toggle modes
        // Toggle modes
body.classList.toggle('mode-games');
body.classList.toggle('mode-beats');

updateFavicon(); // <-- ADD THIS


        // Update URL without reloading the page
        const url = new URL(window.location);
        if (isBeats) {
            url.searchParams.delete('mode'); // switching to games
        } else {
            url.searchParams.set('mode', 'beats'); // switching to beats
        }
        window.history.replaceState({}, '', url);

        // NEW: Force-check elements in view after the switch
        const visibleFaders = document.querySelectorAll('.fade');
        visibleFaders.forEach(fader => {
            const rect = fader.getBoundingClientRect();
            // If the element is within the vertical bounds of the screen
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                fader.classList.add('show');
            } else {
                // Optional: remove 'show' if you want them to re-animate when scrolling back
                fader.classList.remove('show'); 
            }
        });
        switchBtn.classList.remove('switch-animate');
    }, 300);

    setTimeout(() => {
        body.classList.remove('switching');
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

// Fix for YouTube Iframe Reloading
// This ensures that when switching modes, the iframes in the hidden section don't cause errors
const handleIframeVisibility = () => {
    const beatsSection = document.getElementById('library');
    const iframes = beatsSection.querySelectorAll('iframe');
    if (body.classList.contains('mode-beats')) {
        iframes.forEach(iframe => {
            const src = iframe.getAttribute('src');
            iframe.setAttribute('src', src); // Refresh src to trigger reload on show
        });
    }
};

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_tfwmdxm', 'template_qa13arh', this)
        .then(() => {
            formStatus.textContent = "✅ Message sent!";
            contactForm.reset();
        }, (error) => {
            console.error(error);
            formStatus.textContent = "❌ Failed to send. Please try again.";
        });
});

// Check if URL has ?mode=beats
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("mode") === "beats") {
    document.body.classList.add("mode-beats");
    document.body.classList.remove("mode-games");
    
    // Optional: if you have nav switches
    const modeSwitch = document.getElementById("modeSwitch");
    if (modeSwitch) {
        modeSwitch.classList.add("active"); // update toggle UI if needed
    }
    updateFavicon();

}

/* ================= PARALLAX HERO SCROLL ================= */

const parallaxItems = document.querySelectorAll('.parallax-item');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxItems.forEach(item => {
        const speed = parseFloat(item.dataset.speed);
        item.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

const char1 = document.querySelector('.character1');
const char2 = document.querySelector('.character2');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    char1.style.transform = `translateY(${scrollY * 0.08}px)`;
    char2.style.transform = `translateY(${scrollY * 0.55}px)`;
  });

  const parallax = document.querySelector('.character2-parallax');

  window.addEventListener('scroll', () => {
    parallax.style.setProperty(
      '--parallaxY',
      `${window.scrollY * 0.12}px`
    );
  });

  updateFavicon();
