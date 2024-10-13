// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select the container where blog posts will be displayed
  const postsContainer = document.getElementById('postsContainer');
  
  // Retrieve blog posts from localStorage, or set to an empty array if no posts exist
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  // Loop through each post and create a styled HTML element for it
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <p class="author">Posted by: ${post.username}</p>
    `;
    // Add each post element to the posts container
    postsContainer.appendChild(postElement);
  });

  // Add a click event listener to the "Back" button to navigate back to the form page
  document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = 'index.html';
  });
});
