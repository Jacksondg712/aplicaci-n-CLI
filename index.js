const readline = require("readline");
const fs = require("fs");
const { program } = require("commander");
require("colors");
const { listContacts, getContactById, removeContact, addContact } = require('./files');


program.option(
    "-f, --file <string>",
    "file for saving game results",
    "results.txt"
);


// listContacts();
// getContactById('05olLMgyVQdWRwgKfg5J6');
// removeContact('05olLMgyVQdWRwgKfg5J6' );

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What option do you prefer?".yellow, (value) => {
    switch (value) {
        case "list":
            listContacts();
          break;
    
        case "get":
            rl.question("What id do you want to search for?".yellow, (id) => {
            getContactById(id);
            })
            
          break;
    
        case "add":
            rl.question("What name do you want to add?".yellow, (name) => {
                rl.question("What email do you want to add?".yellow, (email) => {
                    rl.question("What phone do you want to add?".yellow, (phone) => {
                        addContact(name, email, phone);
                    });
                });  
            });
          break;
    
        case "remove":
            rl.question("What id do you want to delete?".yellow, (id) => {
                removeContact(id);
            })
          break;
    
        default:
          console.warn("\x1B[31m Unknown action type!");
      }
})

