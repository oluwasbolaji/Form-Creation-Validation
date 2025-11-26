// Step 1: Async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Step 2: API URL
    const dataContainer = document.getElementById('api-data');   // Step 3: Select container

    try {
        const response = await fetch(apiUrl); // Step 4: Fetch API data
        const users = await response.json();  // Convert to JSON

        // Step 5: Clear loading message
        dataContainer.innerHTML = '';

        // Step 6: Create a <ul> and populate with user names
        const userList = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList); // Append the list to container

    } catch (error) {
        // Step 7: Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 8: Invoke function when DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
