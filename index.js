const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            message: "What is the title of your project?",
            name: "title"
        },
        {
            message: "Description of project:",
            name: "purpose"
        },
        {
            message: "Enter Licensing :",
            name: "license"
        },
        {
            message: "Define Table of Contents: ",
            name: "Table"
        },
        {
            message: "List all Contributors: ",
            name: "contribution"
        },
        {
            message: "what is your Github username?",
            name: "username"
        }
    ])
    .then(function ({ username, title, purpose, sections, installation, license, contribution,github  }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        axios
            .get(queryUrl)
            .then(function ({ data }) {
                console.log(data);
                    let template =`
                    # README Generator 
                    * GitHub Username" ${username}
                    * At least one badge
                    * Project title: ${title}
                    * Description: ${purpose}
                    * Table of Contents ${sections}
                    * Installation ${installation}
                    * Usage: 
                    * License: ${license}
                * Contributing: ${contribution}
                * Tests 
                * Questions
                  * User GitHub profile picture: !(${data.avatar_url})
                  * User email : ${username}



                  `;
                  fs.writeFile("READ.md", template, err => {
                      if (err){
                          throw err
                        }
                    })

            })
    })


// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();