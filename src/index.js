function displayComment(response) {
  console.log(response.data[0].email);
}

let apiUrl = "https://jsonplaceholder.typicode.com/comments";
const axios = require("axios");

axios.get(apiUrl).then(displayComment);
