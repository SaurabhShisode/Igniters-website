
function toggleMenu() {
        document.querySelector('.container').classList.toggle('show');
    }

    document.addEventListener("DOMContentLoaded", () => {
        const carousel = document.querySelector(".team-carousel");
        const members = Array.from(carousel.children);
    
        members.forEach(member => {
            const clone = member.cloneNode(true);
            carousel.appendChild(clone);
        });
});
    