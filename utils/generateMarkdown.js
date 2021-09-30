

function generateMarkdown(userResponses, userInfo) {
  const writeMarkDown =`# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  # ${userResponses.description}

  # ${userResponses.contents}

  # ${userResponses.install}
  
  # ${userResponses.instructions}
  
  # ${userResponses.collaborators}
  
  # ${userResponses.license}
  
  # ${userResponses.badges}
  
  # ${userResponses.features}
  
  # ${userResponses.contributors}
  
  # ${userResponses.tests}
  
  # ${userResponses.questions}
`;
}

module.exports = generateMarkdown;
