# DeveloperProfileGenerator

## Summary 
This is a command-line application that dynamically generates a PDF profile from a GitHub username. The application will be invoked with the following command: node index.js. The user will be prompted for a GitHub Username and favorite color, which will be used as the background color for cards. The PDF will be populated with the following:

- Profile image
- User name
- User bio
- Number of public repositories
- Number of followers
- Number of GitHub stars
- Number of users following
- ### Links to the following:
    - User location via Google Maps
    - User GitHub profile
    - User blog



## Site Demo
![Site](Assets/siteDemo.gif)

 
## Technologies Used
- Node.js - Used for package managment and to execute JavaScript code outside of a browser to build command line tool for server-side scripting.
- Axios - npm package installed by node used to make a request to GitHub api.
- Inquirer - npm package installed by node used to promt user for GitHub authentication and favorite color to style thier profile.
- jQuery - Used to create to creat and pass arguemnts to functions as well as to select specific data points returned from axios api call.
- javascript - Used to write server side script that executes the funcitons that prompts the user and generates the html file.
- HTML - Used to dynamically populate the style and structure of the user profile once the command line applicaton is run.
- CSS - Styles html elements in pdf.
- Git - Version control system to track changes to source code
- GitHub - Hosts repository that can be deployed to GitHub Pages
 
## Code Snippet
Here we are prompting the user with our questions array which asks the user for thier GitHub user name and favorite color. Once the user enters their user name and favorite color axios queries the data from the users GitHub profile. Once that information (response) is returned we generate a pdf based on passing it the function that is generating our html.  

```js
inquirer.prompt(questions).then(function({ username, color }) {
  console.log(username, color);
  const queryUrl = `https://api.github.com/users/${username}`;

  axios.get(queryUrl).then(function(response) {
    console.log(response.data)

  //Generating pdf and calling our generateHTML function to create a new html page that will go into that pdf and into our file......
    pdf.create(generateHTML(response, color)).toFile('./profile.pdf', function(err, res) {
       if (err) return console.log(err);
        console.log(res); 
   });

  })

});

```

## Code Snippet
Here we are pointing to the specific data points from our axios call to the GitHub api in order to parse out the information we desire to populate a users profile from key informaition located in their github profile.

```html

<div class="container">
  <div class="workExp-date"><h3>${response.data.bio}</h3></div>
     <div class="row">
        <div class="col">
          <div class="card"><h3>Public Repositories</h3>
            <h4>${response.data.public_repos}</h4>
              </div>
                <div class="card"><h3>GitHub Stars</h3>
                <h4>${response.data.public_gists}</h4>
               </div>
              </div>
            <div class="col">
          <div class="card"><h3>Followers</h3>
        <h4>${response.data.followers}</h4>
      </div>
    <div class="card"><h3>Following</h3>
 <h4>${response.data.following}</h4>

```



## Built With
* [Node.js](https://nodejs.org/en/)
* [Axios](https://www.npmjs.com/package/axios)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [jQuery](https://api.jquery.com/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Boostrap](https://getbootstrap.com/)

## Authors

**Chris Melby**
- [LinkedIn](https://www.linkedin.com/in/chris-melby-71106b126/)
- [Link to Github](https://github.com/cmelby)
- [Portfolio](https://cmelby.github.io/portfolio/)

