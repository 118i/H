// Function to open imam modal
function openImamModal(imamId) {
    document.getElementById(imamId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal(imamId) {
    document.getElementById(imamId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Navigation active class
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Scroll to section
            const targetId = this.getAttribute('href');
            if(targetId && targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                if(targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
