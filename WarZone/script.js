document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const texts = [
        "Welcome to EduSphere",
        "Explore EduAI Mentor",
        "Explore Career AI",
        "Explore SkillForge",
        "Explore EduConnect",
        "Explore Immersive Learning"
    ];
    
    let textIndex = 0; 
    let charIndex = 0;
    const speed = 100; 
    const delayBetweenTexts = 1500; 
    const typingElement = document.getElementById("typing-text");

    function typeText() {
        if (charIndex < texts[textIndex].length) {
            typingElement.innerHTML = texts[textIndex].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeText, speed);
        } else {
            setTimeout(() => {
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length; 
                typeText();
            }, delayBetweenTexts);
        }
    }

    setTimeout(typeText, 2000);

    // Back To Top
    let backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Scroll Reveal
    const sr = ScrollReveal({
        duration: 1200, 
        distance: "60px", 
        easing: "ease-in-out",
        origin: "bottom",
        interval: 150,
        reset: false 
    });

    // Apply reveal effect to sections
    sr.reveal("#home p, #home a", { origin: "right", distance: "80px", delay: 500 });

    sr.reveal("section h2", { origin: "top", distance: "50px", delay: 300 });
    sr.reveal("section p, section ul, section .explore-link", { delay: 500 });

    sr.reveal(".skillforge-marquee ul li", { origin: "left", interval: 100 });
    sr.reveal("#global-flags img", { origin: "top", interval: 150 });

    

});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
