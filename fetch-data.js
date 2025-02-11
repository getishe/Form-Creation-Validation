// Step 1: Initialize the Async Function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    // Step 3: Select the Data Container Element
    const dataContainer = document.getElementById('api-data');
  
    try {
      // Step 4: Fetch Data Using try-catch
      const response = await fetch(apiUrl);
      const users = await response.json();
  
      // Step 5: Clear the Loading Message
      dataContainer.innerHTML = '';
  
      // Step 6: Create and Append User List
      const userList = document.createElement('ul');
  
      // Loop through users and create <li> elements
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
  
      // Append the user list to the container
      dataContainer.appendChild(userList);
    } catch (error) {
      // Step 7: Error Handling
      dataContainer.innerHTML = 'Failed to load user data.';
      console.error('Error fetching data:', error);
    }
  }
  
  // Step 8: Invoke fetchUserData on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', fetchUserData);
  