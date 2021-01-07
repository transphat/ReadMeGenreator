function generateMarkdown (data) {
    return `# ${data.title}
    #### Welcome to ${data.name}'s page!

    ## Description
    ${data.description}

    ## Table of Contents 
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing] (#contributing)
    * [Tests](#tests)
    * [License](#license)
    * [Questions](#questions)


    ##Installation
    ${data.installation}

    ##Usage
    ${data.usage}

    ##Contributing
    ${data.contribution}

    ##Tests
    ${data.test} 

    ##License 

    ##Questions 

    

    `
}
module.exports = generateMarkdown;