const axios = require("axios");

function generateMarkdown(response) {
  let userTag = new RegExp (/()/, "gmi");
  let string = response.name;
  let tagAssign = string.replace(userTag, "%20");
  
  // Skeleton of markdown
  
  return `
 
  # ${response.title}
 
  [![Generic Badge](https://img.shields.io/badge/User-${tagAssign}-blueviolet.svg)](https://github.com/${response.username})
  
  # Description 

  ${response.purpose}

  Table of Contents |
  ----------------- |
  Installation |
  Usage |
  Contribution |
  Licensing |
  

  # Installation 
  ${response.installation}

  # Usage 
  ${response.usage}

  # Contribution 
  ${response.contribution}

  # License 
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

  

 
  `
;
}
module.exports = { generateMarkdown, generateMarkdown}
