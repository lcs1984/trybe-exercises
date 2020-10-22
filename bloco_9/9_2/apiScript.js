// const fetch = require("node-fetch");

const API_URL = "https://icanhazdadjoke.com/";

const myObject = {
  method: "GET",
  headers: { Accept: "application/json" },
};

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      const myList = document.createElement("ul");
      const myJoke = document.createElement("li");
      const jokeContainer = document.getElementById("jokeContainer");
      myJoke.innerText = data.joke;
      myList.appendChild(myJoke);
      jokeContainer.appendChild(myList);
    });
};

// fetchJoke();
//  fetch(API_URL,myObject)
//  .then(response=>console.log(response))
window.onload = () => fetchJoke();
