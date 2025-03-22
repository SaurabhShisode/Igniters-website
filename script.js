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