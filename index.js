const fs = require("fs");
const path = require("path");
const generateHTML = require("./generateHTML");
//returns .fs to file 
//write file path 


const questions = [//Prompt the user for their user name
  
];
//axios server side ajax call
//generate htmlfunction 

function writeToFile(fileName, data) {//
    fs.writeFileSync(path.join(process.cwd(),fileName), data);
   

}

function init() {

//inquire.promt takes in an array of questions then with user input well call the API

}

//pull the response from API call from our seperate function 
//


writeToFile("index.html", generateHTML());
// init();


