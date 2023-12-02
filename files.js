const fs = require('fs');
const path = require('path');


function listContacts(){
    fs.readFile(path.join(__dirname,"./db/contacts.json"),
    {
        flag: "r",
    },
    (error, data) => {
        if(error){
            console.log("There was an error", error)
        }
    const contacts = JSON.parse(data.toString())
    console.table(contacts);
});
}

function getContactById(contactId) {
    fs.readFile(path.join(__dirname,"./db/contacts.json"),
    {
        flag: "r",
    },
    (error, data) => {
        if(error){
            console.log("There was an error", error)
        }
        const contacts = JSON.parse(data.toString())
        contacts.forEach((contact) => {
            if(contact.name == contactId){
            console.table(contact);
            }
        });
    });
}

function removeContact(contactId) {
    fs.readFile(path.join(__dirname,"./db/contacts.json"),
    {
        flag: "r",
    },
    (error, data) => {
        if(error){
            console.log("There was an error", error)
        }
    const contacts = JSON.parse(data.toString())
    const indexADelete = contacts.findIndex(objeto => objeto.id === contactId);

    if (indexADelete !== -1){
        contacts.splice(indexADelete, 1);
        const newContent = JSON.stringify(contacts, null, 2);
        fs.writeFile(path.join(__dirname,"./db/contacts.json"), newContent, 'utf8', error => {
            if (error) {
              console.error('Error al escribir en el archivo:', error);
            } else {
              console.log('Objeto eliminado correctamente.');
              console.table(contacts);
            }
        });
    }else {
        console.log('Objeto no encontrado con el ID proporcionado.');
    }
        
});
}

  function addContact(name, email, phone) {
    fs.readFile(path.join(__dirname,"./db/contacts.json"),
    {
        flag: "r",
    },
    (error, data) => {
        if(error){
            console.log("There was an error", error)
        }else {
            const contacts = JSON.parse(data.toString());

            contacts.push({ name: name, email: email, phone: phone });

            const newContent = JSON.stringify(contacts, null, 2);

            fs.writeFile(path.join(__dirname,"./db/contacts.json"), newContent, 'utf8', error => {
                if (error) {
                  console.error('Error al escribir en el archivo:', error);
                } else {
                  console.log('Nuevo objeto agregado correctamente.');
                  console.table(contacts);
                }
            });

        }
    });
}



module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}

