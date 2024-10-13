// Select the toggle button for dark mode using its ID
const toggleButton = document.getElementById('toggleMode');

// Add an event listener to the toggle button to listen for "click" events
toggleButton.addEventListener('click', function () {
  // Toggle the 'dark-mode' class on the body element
  // This will switch the page between light and dark modes
  document.body.classList.toggle('dark-mode');

  // Log the current list of classes on the body element to the console
  // This helps us verify that 'dark-mode' is being added or removed
  console.log(document.body.classList);

  // Store the current theme in localStorage
  // If 'dark-mode' is active, store 'dark' as the theme; otherwise, store 'light'
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Add an event listener to the document to run once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Check if the stored theme in localStorage is 'dark'
  // If it is, add the 'dark-mode' class to the body to enable dark mode on page load
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');

    // Log a message to the console confirming that dark mode was enabled on load
    console.log("Dark mode enabled on load");
  }
});
