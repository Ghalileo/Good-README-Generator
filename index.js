const fs = require("fs");
const api = require("./utils/api.js");
const readme = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            message:"Please provide your GitHub Username",
            name: "username"
        }
    ]).then(function(userApi){
            return api.getInfo(userApi.username)
        }).then(function(userVal) {
            inquirer.prompt([
                {
                    message: "What is the title of your project? ",
                    name: "title"
                },
                {
                    message: "Description of project: ",
                    name: "purpose"
                },
                {
                    Message: "How to install: ",
                    name: "installation"
                },
                
                
            
                {
                    message: "User Story: ",
                    name: "usage"
                },
                {
                    message: "List all Contributors: ",
                    name: "contribution"
                }
            ]).then(function(resValue){
                fs.writeFile("README.md", readme.generateMarkdown({...userVal, ...resValue}), err =>{
                    if (err) {
                        throw err;
                    }
                });
            })
        })
        
    
  
