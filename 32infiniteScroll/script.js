// Elements
const userContainer = document.getElementById('user-container');
const loading = document.getElementById('loading');

// API Parameters
let since = 0; // To track the user pagination
let isLoading = false; // To prevent multiple fetch calls

// Function to fetch GitHub users
const fetchUsers = async () => {
  if (isLoading) return; // Prevent multiple fetches
  isLoading = true;
  loading.style.display = 'block';

  try {
    const response = await fetch(`https://api.github.com/users?since=${since}&per_page=30`);
    const users = await response.json();

    // Append the users to the container
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      userCard.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.login}">
        <h4>${user.login}</h4>
        <a href="${user.html_url}" target="_blank">View Profile</a>
      `;
      userContainer.appendChild(userCard);
    });

    // Update the 'since' value with the ID of the last user in the current list
    since = users[users.length - 1].id;
  } catch (error) {
    console.error('Error fetching users:', error);
  }

  isLoading = false;
  loading.style.display = 'none';
};

// Infinite Scroll Logic
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // Check if the user has scrolled to the bottom
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    fetchUsers();
  }
});

// Initial Fetch
fetchUsers();
