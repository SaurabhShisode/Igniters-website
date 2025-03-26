const testimonials = [
    {
        name: "Kumarvaishnav",
        position: "President",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Mehar Parnami",
        position: "Vice-president",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "R Simran Nair",
        position: "Secretary",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Sawari Jamgaonkar",
        position: "Joint Secretary",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Vivek Kaushik",
        position: "Event Management Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Shanu Shekhar Giri",
        position: "Event Management Co-Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Amandeep Singh Khalsa",
        position: "Media & Photography Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Saurabh Shisode",
        position: "Media & Photography Co-Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Devarsh Shah",
        position: "Technical Team Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Mehul Singh",
        position: "Technical Team Co-Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Vatsal Baranwal",
        position: "Content Team Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Arnav Karn",
        position: "Content Team Co-Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Disha Gupta",
        position: "Social Media Team Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Riya Verma",
        position: "Social Media Team Co-Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Vikas Shukla",
        position: "PR & Outreach Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Harshit Gujar",
        position: "Design Team Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Maher Sarah Jafri",
        position: "Design Team Co-Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Pranav Sanjay Jahagirdar",
        position: "HR Team Lead",
        avatar: "/assets/kv.jpg"
    },
    {
        name: "Tushita Gakkhar",
        position: "HR Team Co-Lead",
        avatar: "/assets/kv.jpg"
    },
];

function loadTestimonials() {
    const track = document.getElementById("testimonialTrack");

    const allTestimonials = [...testimonials, ...testimonials,...testimonials];

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
    { name: "Help me study vocabulary for a college entrance exam" },
    { name: "Write a message that goes with a kitten gif " },
    { name: "Test my knowledge on ancient civilizations" },
    { name: "Write a text asking a friend to be my plus" },
    { name: "Improve my essay writing ask me to outline " },
    { name: "Plan a ‘mental health day’ to help me relax" }
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
    { name: "Help me study vocabulary for a college entrance exam" },
    { name: "Write a message that goes with a kitten gif " },
    { name: "Test my knowledge on ancient civilizations" },
    { name: "Write a text asking a friend to be my plus" },
    { name: "Improve my essay writing ask me to outline " },
    { name: "Plan a ‘mental health day’ to help me relax" }
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

// Function to observe elements and change background color
// Function to observe elements and change background color continuously
function observeLooperCards(selector) {
    const cards = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.background = "rgb(54, 54, 54)";
                entry.target.querySelector("p").style.color = "white"; // Highlight as soon as visible
            } else {
                entry.target.style.background = "rgb(32, 32, 32)";
                entry.target.querySelector("p").style.color = "rgba(121, 121, 121, 0.5)"; // Revert when not visible
            }
        });
    }, { root: null, rootMargin: "0px", threshold: [1.0] });

    // Observe each card
    cards.forEach(card => observer.observe(card));

    // 🔄 Continuous update using requestAnimationFrame
    function updateVisibility() {
        observer.takeRecords().forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.background = "rgb(121, 119, 119)";
            } else {
                entry.target.style.background = "rgb(56, 56, 56)";
            }
        });
        requestAnimationFrame(updateVisibility); // Keeps checking frequently
    }

    requestAnimationFrame(updateVisibility);
}
window.onload = function () {
    loadLooper(); 
    loadLooperRight(); 
    observeLooperCards(".my-looper");
    observeLooperCards(".my-looper-right");
    
};