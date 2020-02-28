const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            message: "What is the title of your project? ",
            name: "title"
        },
        {
            message: "Description of project: ",
            name: "purpose"
        },
        {
            message: "Enter Licensing: ",
            name: "license"
        },
        {
            message: "Define Table of Contents: ",
            name: "Table"
        },
        {
            message: "All Installation: ",
            name: "installation"
        },
        {
            message: "User Story: ",
            name: "usage"
        },
        {
            message: "List all Contributors: ",
            name: "contribution"
        },
        {
            message: "Testing parameters: ",
            name: "tests"
        },
        {
            message: "what is your Github username?",
            name: "username"
        }
    ])
    .then(function ({ username, title, purpose, table, installation, usage, license, contribution, tests, }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        axios
            .get(queryUrl)
            .then(function ({ data }) {
                console.log(data);
                    let template =`
## ${title} README  
* GitHub Username: ${username}
* At least one badge: 
* Project title: ${title}
* Description: ${purpose}
* Table of Contents ${table}
* Installation ${installation}
* Usage: ${usage}
* License: ${license}
* Contributing: ${contribution}
* Tests: ${tests}
* User GitHub profile picture: ${data.avatar_url}
* User email : ${data.email}



                  `;
                  fs.writeFile("README.md", template, err => {
                      if (err){
                          throw err
                        }
                    })

            })
    })

