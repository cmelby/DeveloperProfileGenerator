
//Beginning varibles..........
const fs = require("fs");
const path = require("path");
const generateHTML = require("./generateHTML");
const inquirer = require("inquirer");
const axios = require("axios");


//Questions array used to prompt user.........
const questions = [
  {
    type: "input",
    message: "What is your user name?",
    name: "username"
  },
  {
    type: 'list',
    name: 'color',
    message: 'What is your favorite color?',
    choices: [
      'red',
      'blue',
      'yellow'
    ]
  }
];
//Prompt user with questions array using inquirer, then based on user name query GitHub for that users data...
inquirer.prompt(questions).then(function({ username, color }) {
  console.log(username, color);
  const queryUrl = `https://api.github.com/users/${username}`;

  axios.get(queryUrl).then(function(response) {
    console.log(response.data.name)
    fs.writeFile("generat.html", function(){
      generateHTML(response, color)
    })

  })



});

// avatar_url
// name
// location
// public_repos
// followers
// starred_url//look into this
//blog
//bio






// function promtUser() {
// inquirer.prompt([
//     {
//         type: "input",
//         message: "What is your user name?",
//         name: "username"
//     },
    

// ]).then(function({username}) {
//   const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  
//   axios //axios call getting all the user data from thier profile....
//     .get(queryUrl).then(function(response) {
//       // console.log(response.data)
//       const repoNamel = response.data.map(function(owner) {
//       return owner.followers;
//    });
 
//    const repoNamesStr = repoNamel.join("\n");

//    fs.writeFile("repos.txt", repoNamesStr, function(err) {
//      if (err) {
//        throw err;
//      }
//      console.log(`Saved ${repoNamel.length} repos`);
//      //New Prompt asking the user for their favorite color....
//      var promptTwo = inquirer.prompt({
//        type: 'checkbox',
//        name: 'colors',
//        message: 'What is your favorite color?',
//        choices: [
//          'red',
//          'blue',
//          'yellow'
//        ]
//      }).then(function(answers) {
//           console.log(answers)
//         })
//         .catch(function(err) {
//           console.log(err)
//         });

//         // // async
//         // promptTwo.ask(function(answers) {
//         // console.log(answers)
//         // });

//    });

//  });

// });



//generate htmlfunction 

// function writeToFile(fileName, data) {
//     fs.writeFileSync(path.join(process.cwd(),fileName), data);//write file path 
   

// }

// function init() {

//inquire.promt takes in an array of questions then with user input well call the API

// }


// writeToFile("index.html", generateHTML());
// init();