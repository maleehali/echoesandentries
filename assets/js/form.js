document.getElementById('blogForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission
  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (!username || !title || !content) {
    document.getElementById('error-message').textContent = "Please fill out all fields.";
    return;
  }

  // Create a new blog post object
  const newPost = { username, title, content };
  
  // Retrieve existing posts from localStorage
  let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
  // Add the new post to the array
  posts.push(newPost);
  
  // Save the updated array back to localStorage
  localStorage.setItem('blogPosts', JSON.stringify(posts));
  
  // Redirect to the blog posts page
  window.location.href = 'blog.html';
});
