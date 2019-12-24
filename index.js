const fs = require("fs");
const path = require("path");
const generateHTML = require("./generateHTML");
const inquirer = require("inquirer");
const axios = require("axios");




const questions = [
  
];
/*inquire.promt takes in an array of questions then with user input will call the info from github API for 
  users profile
*/
inquirer.prompt([
    {
        type: "input",
        message: "What is your user name?",
        name: "username",
    },
])
.then(function({username}) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  
  
    axios //axios call getting all the user data from thier profile....
    .get(queryUrl).then(function(res) {
      console.log(res.data)
    });
   var repoNamel = res.data.map(function(repo) {
      return repo.name
   });
 
  //  const repoNamesStr = repoNames.join("\n");

  //  fs.writeFile("repos.txt", repoNamesStr, function(err) {
  //    if (err) {
  //      throw err;
  //    }

  //    console.log(`Saved ${repoNames.length} repos`);
  //  });
 });


//generate htmlfunction 

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName), data);//write file path 
   

}

function init() {

//inquire.promt takes in an array of questions then with user input well call the API

}





writeToFile("index.html", generateHTML());
// init();


