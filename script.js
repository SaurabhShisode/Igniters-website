document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (!target) return;

            const offset = 100; 
            let targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

           
            if (this.getAttribute("href") === "#footer") {
                targetPosition = target.offsetTop - offset;
            }

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });
});




const testimonials = [
    {
        name: "Kumarvaishnav",
        position: "President",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Mehar Parnami",
        position: "Vice-president",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "R Simran Nair",
        position: "Secretary",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Sawari Jamgaonkar",
        position: "Joint Secretary",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Vivek Kaushik",
        position: "Event Management Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Shanu Shekhar Giri",
        position: "Event Management Co-Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Amandeep Singh Khalsa",
        position: "Media & Photography Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Saurabh Shisode",
        position: "Media & Photography Co-Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Devarsh Shah",
        position: "Technical Team Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Mehul Singh",
        position: "Technical Team Co-Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Vatsal Baranwal",
        position: "Content Team Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Arnav Karn",
        position: "Content Team Co-Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Disha Gupta",
        position: "Social Media Team Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Riya Verma",
        position: "Social Media Team Co-Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Vikas Shukla",
        position: "PR & Outreach Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Harshit Gujar",
        position: "Design Team Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Maher Sarah Jafri",
        position: "Design Team Co-Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Pranav Sanjay Jahagirdar",
        position: "HR Team Lead",
        avatar: "/assets/saurabh.jpg"
    },
    {
        name: "Tushita Gakkhar",
        position: "HR Team Co-Lead",
        avatar: "/assets/saurabh.jpg"
    },
];

function loadTestimonials() {
    const track = document.getElementById("testimonialTrack");

    const allTestimonials = [...testimonials, ...testimonials,...testimonials,...testimonials,...testimonials,...testimonials,...testimonials,...testimonials,...testimonials];

    allTestimonials.forEach(t => {
        const card = document.createElement("div");
        card.classList.add("testimonial-card");
        card.innerHTML = `
            <img src="${t.avatar}" alt="${t.name}">
            <h5 class ="pooppins member-name ">${t.name}</h5>
            <p class="text-secondary poppins member-pos">${t.position}</p>
            
        `;
        track.appendChild(card);
    });
}

loadTestimonials();


const loopelements = [
    { name: "Discover new opportunities in our club!" },
    { name: "Engage in fun club workshops and sessions." },
    { name: "Network with like-minded club members." },
    { name: "Help organize our next big club project." },
    { name: "Showcase your skills at the club showcase." },
    { name: "Be a part of our club’s leadership team." }
];

function loadLooper() {
    const track = document.querySelector(".my-looper-grid");
    if (!track) return;

    const allLoopElements = [...loopelements, ...loopelements, ...loopelements, ...loopelements, ...loopelements, ...loopelements, ...loopelements, ...loopelements];

    allLoopElements.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("my-looper");
        card.innerHTML = `<p class="poppins member-pos">${item.name}</p>`;
        track.appendChild(card);
    });
}



const loopelementsRight = [
    { name: "Join our weekly club meeting!" },
    { name: "Plan the next club event with us." },
    { name: "Volunteer for upcoming club activities." },
    { name: "Share your ideas for club improvements." },
    { name: "Compete in our club challenge this month." },
    { name: "Connect with fellow club members today." }
];

function loadLooperRight() {
    const trackRight = document.querySelector(".my-looper-grid-right");
    if (!trackRight) return;

    const allLoopElementsRight = [...loopelementsRight, ...loopelementsRight, ...loopelementsRight, ...loopelementsRight, ...loopelementsRight, ...loopelementsRight, ...loopelementsRight];

    allLoopElementsRight.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("my-looper-right");
        card.innerHTML = `<p class="poppins member-pos">${item.name}</p>`;
        trackRight.appendChild(card);
    });
}

function observeLooperCards(selector) {
    const cards = document.querySelectorAll(selector);
    
    function applySmallScreenStyles() {
        cards.forEach(card => {
            card.style.background = "rgb(54, 54, 54)";
            const paragraph = card.querySelector("p");
            if (paragraph) paragraph.style.color = "white";
        });
    }

    function applyObserver() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.background = "rgb(54, 54, 54)";
                    entry.target.querySelector("p").style.color = "white";
                } else {
                    entry.target.style.background = "rgb(32, 32, 32)";
                    entry.target.querySelector("p").style.color = "rgba(121, 121, 121, 0.5)";
                }
            });
        }, { root: null, rootMargin: "0px", threshold: [1.0] });

        cards.forEach(card => observer.observe(card));

        function updateVisibility() {
            observer.takeRecords().forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.background = "rgb(54, 54, 54)";
                    entry.target.querySelector("p").style.color = "white";
                } else {
                    entry.target.style.background = "rgb(32, 32, 32)";
                    entry.target.querySelector("p").style.color = "rgba(121, 121, 121, 0.5)";
                }
            });
            requestAnimationFrame(updateVisibility);
        }

        requestAnimationFrame(updateVisibility);
    }

    function checkScreenSize() {
        if (window.innerWidth < 767) {
            applySmallScreenStyles();
        } else {
            applyObserver();
        }
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
}

window.onload = function () {
    loadLooper();
    loadLooperRight();
    observeLooperCards(".my-looper");
    observeLooperCards(".my-looper-right");
};







