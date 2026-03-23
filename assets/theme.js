// Refined Drawer Logic for Smooth Mobile Experience
function openDrawer(id) {
  const drawer = document.getElementById(id);
  const overlay = document.getElementById('PageOverlay');
  
  if (!drawer || !overlay) return;

  drawer.classList.add('is-open');
  overlay.classList.add('is-visible');
  
  // Prevent background scrolling and "rubber-banding" on iOS
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}

function closeDrawer(id) {
  const overlay = document.getElementById('PageOverlay');
  
  if (id) {
    const drawer = document.getElementById(id);
    if (drawer) drawer.classList.remove('is-open');
  } else {
    // Close all active drawers
    document.querySelectorAll('.drawer.is-open').forEach(d => d.classList.remove('is-open'));
  }

  if (overlay) overlay.classList.remove('is-visible');
  
  // Re-enable scrolling
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

// Global Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('PageOverlay');
  if (overlay) {
    overlay.addEventListener('click', () => closeDrawer());
  }

  // Handle ESC key to close drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
});

// Shopify AJAX Cart Integration Placeholder
// This will make the cart drawer open automatically when an item is added
document.addEventListener('submit', (e) => {
  if (e.target.matches('form[action="/cart/add"]')) {
     // If you implement AJAX cart later, call openDrawer('CartDrawer') here
  }
});
