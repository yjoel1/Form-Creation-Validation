// 1. Initialize the async function
async function fetchUserData() {
    // 2. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // 4. Fetch data using await
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 5. Clear the loading message
        dataContainer.innerHTML = '';

        // 6. Create and append the user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// 8. Invoke function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
