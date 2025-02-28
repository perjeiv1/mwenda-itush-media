document.addEventListener("DOMContentLoaded", function () {
  // Toggle mobile menu (for future implementation)
  const navLinks = document.querySelector('.nav-links');
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Menu';
  document.querySelector('nav').appendChild(toggleButton);

  toggleButton.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});