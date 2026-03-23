// Generic Drawer Logic
function openDrawer(id) {
  document.getElementById(id).classList.add('is-open');
  document.getElementById('PageOverlay').classList.add('is-visible');
  document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeDrawer(id) {
  if (id) {
    document.getElementById(id).classList.remove('is-open');
  } else {
    // Close all
    document.querySelectorAll('.drawer').forEach(d => d.classList.remove('is-open'));
  }
  document.getElementById('PageOverlay').classList.remove('is-visible');
  document.body.style.overflow = '';
}

// Close on overlay click
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('PageOverlay');
  if (overlay) {
    overlay.addEventListener('click', () => closeDrawer());
  }
});

// Update ATC button to open drawer (Demo Logic)
document.addEventListener('submit', (e) => {
  if (e.target.matches('.product-form-refined')) {
    // In a real AJAX implementation, we would prevent default and use fetch
    // For now, we'll let it submit, but this is where the AJAX Cart logic starts
    console.log("Adding to cart...");
  }
});
