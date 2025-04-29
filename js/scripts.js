// Handle Mentor Matching Form Submission
document.getElementById('matchForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const careerGoals = document.getElementById('careerGoals').value;
    const industry = document.getElementById('industry').value;
    const availability = document.getElementById('availability').value;

    // Simulated Mentor Matching Result (Can be connected to backend later)
    const mentorResults = `
        <h3>Matched Mentors:</h3>
        <ul class="mentor-list">
            <li>John Doe - Software Engineering (Available: ${availability})</li>
            <li>Jane Smith - Data Science (Available: ${availability})</li>
        </ul>
        <a href="booking.html" class="cta-button">Schedule a Session</a>
    `;

    document.getElementById('mentorResults').innerHTML = mentorResults;
    smoothScrollTo(document.getElementById('mentorResults'));
});

// Handle Session Booking Form Submission
document.getElementById('bookingForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mentor = document.getElementById('mentor').value;
    const schedule = document.getElementById('schedule').value;

    alert(`Session booked with ${mentor} on ${schedule}`);
    // Here you can send the booking data to a backend server for processing
});

// Handle Feedback Form Submission
document.getElementById('feedbackForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mentor = document.getElementById('mentor').value;
    const feedback = document.getElementById('feedback').value;
    const rating = document.getElementById('rating').value;

    alert(`Feedback submitted for ${mentor}. Rating: ${rating}/5.\nFeedback: ${feedback}`);
    // You can connect this to a backend for storing feedback.
});

// Smooth scroll to a target element
function smoothScrollTo(target) {
    window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
    });
}

// Navigation links smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                smoothScrollTo(targetElement);
            }
        }
    });
});

// On Page Load Animations (optional)
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 1s ease';
});

// Mentor Profile Listing (Simulated Data, can be connected to backend)
const mentors = [
    { name: 'John Doe', field: 'Software Engineering', availability: '2024-09-15' },
    { name: 'Jane Smith', field: 'Data Science', availability: '2024-09-16' },
    { name: 'Mark Johnson', field: 'Product Management', availability: '2024-09-18' }
];

// Dynamic Mentor Listings (on relevant pages)
const mentorContainer = document.getElementById('mentorResults');
if (mentorContainer) {
    let mentorList = '<h3>Available Mentors:</h3><ul>';
    mentors.forEach(mentor => {
        mentorList += `<li>${mentor.name} - ${mentor.field} (Available: ${mentor.availability})</li>`;
    });
    mentorList += '</ul>';
    mentorContainer.innerHTML = mentorList;
}

// Handle Mentor Sign-Up Form Submission
document.getElementById('mentorSignUpForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Form Data
    const name = document.getElementById('name').value;
    const field = document.getElementById('field').value;
    const availability = document.getElementById('availability').value;
    const experience = document.getElementById('experience').value;
    const bio = document.getElementById('bio').value;

    // Simulate API call (Replace this with actual backend API call)
    console.log("Mentor Signup Submitted:", { name, field, availability, experience, bio });

    // Show success message
    document.getElementById('mentorSignUpForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
});
