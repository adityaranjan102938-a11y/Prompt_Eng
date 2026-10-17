// ==========================================
// 1. TYPEWRITER EFFECT FOR TAGLINES
// ==========================================
const taglines = [
    "AI & Data Science Student",
    "Python Programmer",
    "Web Developer",
    "Problem Solver"
];

const typedTextElement = document.getElementById("typed-text");
let taglineIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentTagline = taglines[taglineIndex];

    if (isDeleting) {
        typedTextElement.textContent = currentTagline.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentTagline.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    // When word is complete
    if (!isDeleting && charIndex === currentTagline.length) {
        typingSpeed = 1800; // Pause at the end of phrase
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        taglineIndex = (taglineIndex + 1) % taglines.length;
        typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect when DOM loads
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    document.getElementById("year").textContent = new Date().getFullYear();
});

// ==========================================
// 2. MOBILE NAVIGATION MENU TOGGLE
// ==========================================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navLinkItems = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const icon = hamburger.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
});

// Close mobile menu when a link is clicked
navLinkItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        const icon = hamburger.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    });
});

// ==========================================
// 3. SCROLL REVEAL & ACTIVE NAV HIGHLIGHT
// ==========================================
const revealElements = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section");

function handleScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add("active");
        }
    });

    // Highlight active section in navbar
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 130;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinkItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// ==========================================
// 4. CONTACT FORM HANDLER (MAILTO INTEGRATION)
// ==========================================
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Opens user's default email client addressed to your email
    window.location.href = `mailto:adityaranjan102938@gmail.com?subject=${subject}&body=${body}`;

    formStatus.textContent = "✨ Opening your email client... Thank you for reaching out!";
    contactForm.reset();
});
// ==========================================
// 5. DIRECT DEVICE PHOTO PICKER & SAVE
// ==========================================
const photoUploadInput = document.getElementById("photo-upload");
const profileImg = document.getElementById("profile-img");
const avatarInitials = document.getElementById("avatar-initials");

// Load saved photo from browser memory when page opens
window.addEventListener("DOMContentLoaded", () => {
    const savedPhoto = localStorage.getItem("adityaPortfolioPhoto");
    if (savedPhoto) {
        profileImg.src = savedPhoto;
        profileImg.style.display = "block";
        avatarInitials.style.display = "none";
    }
});

// When user selects a photo from their device
photoUploadInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            const imageDataUrl = reader.result;

            // Display the selected photo
            profileImg.src = imageDataUrl;
            profileImg.style.display = "block";
            avatarInitials.style.display = "none";

            // Save to browser localStorage so it stays after page refresh
            try {
                localStorage.setItem("adityaPortfolioPhoto", imageDataUrl);
            } catch (e) {
                console.warn("Image is shown, but too large to save permanently in localStorage.");
            }
        });

        reader.readAsDataURL(file);
    }
});
