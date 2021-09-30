

function generateMarkdown(userResponses, userInfo) {
  let draftToC = `## Table of Contents`;

  if (userResponses.install !== "") {
    draftToC += `
  * [Installation](#installation)`;
  }

  if (userResponses.usage !== "") {
    draftToC += `
  * [Usage](#usage)`;
  }

  if (userResponses.contributing !== "") {
    draftToC += `
  * [Contributing](#contributing)`;
  }

  if (userResponses.tests !== "") {
    draftToC += `
  * [Tests](#tests)`;
  }

  let writeMarkDown = `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  ## Description 
  ${userResponses.description}
  

  `

  // Add Table of Contents to markdown
  writeMarkDown += draftToC;
 
  // Add License section since License is required to Table of Contents
  writeMarkDown += `
  * [License](#license)`;
  

  // Optional Installation section
  if (userResponses.install !== '') {
  
  writeMarkDown +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userResponses.install}`
  };
  

  // Optional Usage section
  if (userResponses.usage !== '') {
  
  writeMarkDown +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`
  };
  
  
  // Optional Contributing section
  if (userResponses.contributing !== "") {
    `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${userResponses.contributing}`;
  };
  

  // Optional Tests section
  if (userResponses.tests !== '') {
  
  writeMarkDown +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`
  };


  // License section is required
  writeMarkDown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;


  // Questions / About Developer section
  let draftDev = 
  `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
  For any questions, contact me:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
  
  draftDev +=
  `
  Email: ${userInfo.email}
  `};

  // Add developer section to markdown
  writeMarkDown += draftDev;

  // Return markdown
  return writeMarkDown;
  
}

module.exports = generateMarkdown;
