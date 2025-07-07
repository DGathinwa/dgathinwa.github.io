// ========= EmailJS Integration =========
// Replace the below values with your actual EmailJS keys

(function(){
  emailjs.init(hRWqjVvUufsLDea_g); // Replace this with your public key
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const status = document.getElementById("form-status");

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      status.textContent = "Message sent successfully! ✅";
      this.reset();
    }, (error) => {
      status.textContent = "Oops! Something went wrong. ❌";
      console.error(error);
    });
});

// ========= Smooth Scrolling =========
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// ========= Sticky Nav Shadow on Scroll =========
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ========= Placeholder for Form Validation =========
function validateForm() {
  alert("Contact form functionality coming soon!");
}

// ========= Future: Dark Mode Toggle =========
// You can later add a button and toggle class on body
