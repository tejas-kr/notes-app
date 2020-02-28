const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customised yargs version
yargs.version('1.1.0');

// Add 
yargs.command({
    command: 'add', 
    describe: 'Adds a new note', 
    builder: {
        title: {
            describe: "Note Title", 
            demandOption: true, 
            type: 'string'
        }, 
        body: {
            describe: "Note Body", 
            demandOption: true, 
            type: 'string'
        }
    },
    handler (argv) {
        // console.log(argv)
        notes.addNote(argv.title, argv.body);
    }
});

// console.log(yargs.argv)

// Remove 
yargs.command({

    command: 'remove', 
    describe: 'Removes a item to the list!',
    builder: {
        title: {
            describe: "Note title", 
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title);
    }

});

// List 
yargs.command({

    command: 'list', 
    describe: 'Lists all the items in the list!', 
    handler () {
        // console.log("Lists all the items in the list");
        notes.listNotes();
    }

});

// Read 
yargs.command({

    command: 'read', 
    describe: 'Reads out a particular item in the list', 
    builder: {
        title: {
            describe: 'Title of the note', 
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNotes(argv.title);
    }

});

// console.log(yargs.argv);
yargs.parse();
