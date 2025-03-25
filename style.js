// Alert Button Functionality
document.getElementById('alertBtn').addEventListener('click', () => {
    alert('🚀 You clicked the button!');
});

// Change Background Color Functionality
document.getElementById('changeColorBtn').addEventListener('click', () => {
    document.body.style.background = 
        document.body.style.background.includes('#0a0a0a') ? 
        "linear-gradient(145deg, #1a1a1a, #0a0a0a)" : 
        "linear-gradient(145deg, #0a0a0a, #1a1a1a)";
});

// Form Submission Functionality
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Thank you for reaching out!');
    document.getElementById('contactForm').reset();
});