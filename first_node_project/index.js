// import axios from 'axios';
const axios  = require('axios'); 

async function fetch(){
const response=await axios.get(' http://www.omdbapi.com/?t=harry&apikey=b25c4682')
    console.log(response.data);
}
fetch();