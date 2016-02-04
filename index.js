var inquirer = require("inquirer"); //this a library

var contactList = [];

//Main menu

//Create a new address book entry
//Search for existing address book entries
//Exit the program

var mainMenu = [{
    name: 'menuChoice',
    message: 'What do you want to do?',
    type: 'list',
    choices: [{
        name: 'Create a new address book entry',
        value: 'create'
    }, {
        name: 'Search for existing address book entries',
        value: 'search'
    }, {
        name: 'Exit the program',
        value: 'exit'
    }
    ]
}]

function menuApp() {
    inquirer.prompt(mainMenu, function(answers) { //Launch the prompt interface
        if (answers.menuChoice === 'create') {
            console.log("Let's create a new address book entry together");
            createUser()
            
        }
        else if (answers.menuChoice === 'search') {
            console.log("Let's looking for your friends");
        }
        else if (answers.menuChoice === 'exit') {
            console.log("You are going to quit the program! See you soon :)");
            return
        }
    });
}
menuApp();

// Sub-Menu 1 = Create a user

function createNewContact() { //on crée une fonction qui va nous permettre de créer un nouveau contact
    var questionsContact = [ // on crée une variable de type tableau pour stocker les données relatives à chaque nouveau contact - comme une database
        { // on créé plusieurs objets avec différentes keys(propriétés) et valeurs
            name: "firstname",
            message: "First name:",
        },

        {
            name: "lastname",
            message: "Last name:",
        },
        {
            name: "phonenumber",
            message: "Phone number:",
        },
        {
            name: "phonenumberwork",
            message: "Phone number (Work):",
        },
        {
            name: "email",
            message: "Email:",
        },
        {
            name: "email_work",
            message: "Email (Work):"
        },
        {
            name: "birthday",
            message: "Birthday"
        }
    ];
    return questionsContact // on retourne la variable
}


//Type
var typeMenu = [ 
    {
        name: 'typeChoice',
        message: 'Choose the type you want to add',
        type: 'list',
        choices: [
            {
                name: 'Choose the Home type',
                value: 'home'
            },
            {
                name: 'Choose the Work type',
                value: 'work'
            }
            ]
    }
    ] // permet de choisir un type lorsqu'on a plusieurs numéros de téléphone, courriels, ... cf mainMenu
function typeApp(){
inquirer.prompt(typeMenu, function (answers){
});
} //on crée une fonction qui va nous permettre de choisir un type comme Home ou Work pour les courriels, les téléphones..

function createUser(){
     inquirer.prompt(createNewContact(), function(answers) {
                var newUser = answers;
                contactList.push(answers);
                
                console.log(contactList);
                menuApp()
            })
}

// Search function
 // on crée une fonction qui va nous permettre de rechercher et de retrouver un ou plusieurs contact dans notre contactList

//search menu

function searchContact (){
    var searchBar = [{
    type: 'input',
    name: 'Search bar',
    message: 'Please enter a name'
    }] 
        inquirer.prompt(searchBar, function() {
            var searchResults = [];
            // pour chaque entrée du tableau, on veut voir si les données entrées par l'utilisateur peuvent être trouvées dans la contactList
            contactList.forEach (function (user){
            if (user.firstName === searchContact.name()) {
                searchResults.push(user);// 
            }
            else if(user.lastName === searchContact.name) {
                searchResults.push(user);
            }
            });
        
            });
    
    
        }

