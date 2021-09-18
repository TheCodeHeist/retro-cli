const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "list",
      name: "action",
      message: "What do you want to do?",
      choices: [
        {
          name: "See Operating System Details",
          value: "os",
        },
        {
          name: "See CPU Usage",
          value: "cpu",
        },
        {
          name: "See Memory Usage",
          value: "memory",
        },
        {
          name: "See Disk Usage",
          value: "disk",
        },
        {
          name: "See Network Usage",
          value: "network",
        },
      ],
      default: "os",
    },
  ])
  .then(function (answers) {
    console.log(answers);
  });

module.exports = function cli(args) {
  console.log(args);
}
