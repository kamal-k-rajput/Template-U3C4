
import { apiCall, appendArticles } from "/scripts/main.js";



let x = localStorage.getItem("search_term");

let url = `https://shrouded-earth-23381.herokuapp.com/api/search/?q=${x}`;

let data= await apiCall(url)
 appendArticles(data, main); 
