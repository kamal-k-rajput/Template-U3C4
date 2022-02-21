
import { apiCall, appendArticles } from "/scripts/main.js";

console.log("kamal");


let x = localStorage.getItem("searchterm");

console.log(x);

let url = `https://shrouded-earth-23381.herokuapp.com/api/search/?q=${x}`;

let data= apiCall(url)
console.log(data);

console.log(url);