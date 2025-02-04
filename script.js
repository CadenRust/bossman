// Smooth fade-in effect when scrolling
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".about, .roadmap, .community");
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        observer.observe(section);
    });
});

// Button hover effects
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});
