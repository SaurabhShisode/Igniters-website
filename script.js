document.querySelectorAll('.container a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = document.querySelector('.container').offsetHeight;
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight - 20, // Adjust 20px for spacing
                behavior: 'smooth'
            });
        }
    });
});
