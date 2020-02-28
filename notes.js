const chalk = require('chalk');
const fs = require('fs');

const getNotes = function () {
    return "Your notes...";
}

const addNote = (title, body) => {
    const notes = loadData();
    // console.log(notes);
    // const duplicateNotes = notes.filter( (notes) => notes.title === title );
    const duplicateNote = notes.find( (notes) => notes.title === title );

    // if (duplicateNotes.length === 0) {
    if (!duplicateNote) {
        notes.push({
            title: title, 
            body: body
        });
    
        saveNotes(notes);
        console.log(chalk.blue.bgGreen.bold("New Notes Added!"));    
    } else {
        console.log(chalk.white.bgRed.bold("Note title taken!"));
    }
    
}


const saveNotes = (notes) => {
    dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadData = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const removeNote = (title) => {

    const notes = loadData();

    const newNotes = notes.filter( (notes) => notes.title !== title );

    if (newNotes.length === notes.length) {
        console.log(chalk.white.bgRed.bold("No note found!"));
    } else {
        saveNotes(newNotes);
        console.log(chalk.blue.bgGreen.bold("Note Removed!"));
    }

}

const listNotes = () => {
    dataBuffer = fs.readFileSync('notes.json');
    dataJSON = dataBuffer.toString();
    data = JSON.parse(dataJSON)

    /** 
     * above we cloud use the load data function 
     * but i wanted to create a fresh one
     * just for fun
    */

    console.log(chalk.inverse('Your Notes\n'));

    data.forEach(data => {
        console.log(data.title)
    });
}
// listNotes();

const readNotes = (title) => {
    const data = loadData().find((data) => data.title === title);
    // console.log(chalk.inverse('Your Note'));
    if (data) {
        console.log(chalk.inverse(data.title))
        console.log(data.body)
    } else {
        console.log(chalk.bgRed('Unable to find the note ' + title));
    }
    /* data.forEach((data) => {
        
    }); */
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote, 
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}