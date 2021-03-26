const axios = require('axios');

async function getUserRepos() {
  const response = await axios.get('https://api.github.com/users/Elusionz243');
  console.log(response);
  return response;
}

getUserRepos();
