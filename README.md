👋 Hi, I'm @meetchopra-me

🔍 About Me:

🌟 I'm interested in technology, web development, and innovative solutions.

🎯 Currently learning Web Development, Automation, and Problem-Solving.

🤝 Looking to collaborate on open-source projects and creative tech solutions.

📫 How to reach me:

Twitter:-   meetchopra_me

Instagram:- meetchopra_me

GitHub:-    meetchopra-me

📧 meetchopra262@gmail.com 



🏷️ Pronouns:

He/Him


🎉 Fun Fact:

🚀 I thrive on learning and exploring new technologies while turning ideas into reality.



---

✅ Let's build something amazing together!

---

🚀 Features

Multi-Page Layout: Separate pages for Home, About, Projects, and Contact.

Dark Theme: Clean, modern dark interface with neon cyan highlights.

Dynamic Year: Footer year updates automatically using JavaScript.

Smooth Navigation: Button-based navigation across pages.



---

📁 File Breakdown

1. index.html (Home Page)

<!-- # Header Section -->
<header>
    <h1>🌟 Meet Chopra</h1> <!-- Main title -->
    <p>Innovating with Ideas, Building with Passion.</p> <!-- Tagline -->
</header>

<!-- # Navigation Section -->
<nav>
    <button onclick="location.href='index.html'">Home</button>
    <button onclick="location.href='about.html'">About</button>
    <button onclick="location.href='projects.html'">Projects</button>
    <button onclick="location.href='contact.html'">Contact</button>
</nav>

<!-- # Main Content -->
<section>
    <h2>🚀 Welcome to My World</h2> <!-- Section title -->
    <p>Explore my journey through technology, web development, and creative solutions.</p>
</section>

<!-- # Footer Section -->
<footer>
    <p>&copy; <span id="year"></span> Meet Chopra — Built with ❤️</p> <!-- Dynamic year -->
</footer>


---

📜 styles.css (Global Styles)

/* ✅ General Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* 🌍 Body */
body {
    background: linear-gradient(145deg, #0a0a0a, #1a1a1a); /* Dark gradient background */
    color: #e0e0e0; /* Light text for better readability */
    font-family: Arial, sans-serif; /* Clean font */
}

/* 🌟 Header */
header {
    background-color: #1a1a1a;
    text-align: center;
    padding: 20px;
    border-bottom: 2px solid #00ffcc; /* Neon border */
}

/* 🚦 Navigation */
nav {
    background-color: #1a1a1a;
    padding: 15px;
    display: flex;
    justify-content: center;
    gap: 10px; /* Space between buttons */
}
nav button {
    background-color: #00ffcc; /* Cyan button */
    color: #121212; /* Dark text */
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    transition: 0.3s ease; /* Smooth hover effect */
}
nav button:hover {
    background-color: #00ffaa; /* Lighter cyan on hover */
}

/* 📜 Section */
section {
    padding: 20px;
    text-align: center;
    max-width: 900px;
    margin: auto;
}

/* 📅 Footer */
footer {
    background-color: #1a1a1a;
    padding: 15px;
    text-align: center;
    border-top: 2px solid #00ffcc;
}


---

📂 script.js (JavaScript File)

// ✅ Dynamic Year for Footer
document.getElementById('year').textContent = new Date().getFullYear(); 
// Automatically updates the year


---

📌 Future Improvements

[ ] Add animations for smoother transitions.

[ ] Include a blog or insights section.

[ ] Add backend support for the contact form.



---
