// Mobile Menu Toggle
function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
}

// Tab Functionality (About Section)
function opentab(tabname) {
    const tablinks = document.querySelectorAll(".tab-links");
    const tabcontents = document.querySelectorAll(".tab-contents");

    // Remove active classes
    tablinks.forEach(tablink => tablink.classList.remove("active-link"));
    tabcontents.forEach(tabcontent => tabcontent.classList.remove("active-tab"));

    // Add active classes
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu after clicking a link
        if(window.innerWidth <= 600) {
            closemenu();
        }
    });
});
// CV Download Tracking
document.querySelector('.btn2').addEventListener('click', function() {
    // You can add analytics tracking here
    console.log('CV downloaded');
});

// Form Submission Handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const name = document.querySelector('input[name="Name"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const message = document.querySelector('textarea[name="Message"]').value;

    if(name && email && message) {
        // Replace with actual form submission logic
        alert('Message sent successfully!');
        this.reset();
    } else {
        alert('Please fill in all fields!');
    }
});

// Sticky Header on Scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if(window.scrollY > 100) {
        header.style.position = '';
        header.style.background = 'rgba(8, 8, 8, 0.9)';
    } else {
        header.style.position = 'relative';
        header.style.background = 'transparent';
    }
});

// Highlight Active Section
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(window.pageYOffset >= sectionTop - sectionHeight/3) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
});
// Video Hover Interaction
document.querySelectorAll('.media-wrapper').forEach(wrapper => {
    const video = wrapper.querySelector('video');
    
    if(video) {
        wrapper.addEventListener('mouseenter', () => {
            video.play().catch(() => {});
        });
        
        wrapper.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbwUPANXkkTYsSySIWzXXSkJvymV7eJp-BhoEDkiPEnWm7sBqZ5_1jdji_N31RR_Mayjew/exec'; // Replace with your URL
const form = document.forms['contactForm'];

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => {
        alert('Message sent successfully!');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit';
    })
    .catch(error => {
        alert('Error sending message! Please try again.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit';
    });
});
