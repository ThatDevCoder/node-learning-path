const fs = require('fs');
const chalk = require('chalk');

const getNotes = (a) => {
    return "Your Notes are" + a  
}

const addNotes = (title,body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note)=>{
       return note.title === title
    })

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body,
        })
        console.log("Success Added");  
        saveNotes(notes)
    } else {
        console.log("Error! Duplicate Found.");
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => {
        note.title !== title
    })
    if(newNotes.length<notes.length){
        console.log(chalk.green("Note successfully Deleted!"))
        saveNotes(newNotes)
    } else {
        console.log(chalk.red("Note doesn't exists"));
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(chalk.green(note.title));
    })
    
}

const readNotes = (title) => {
    const notes = loadNotes()

    // notes.forEach((note) => {
    //     if(note.title === title){
    //         console.log(note.title+" "+note.body);
    //     }
    // })
    const readNote = notes.find((note) => note.title === title)
    if(readNote) {
        console.log(readNote.title+" "+readNote.body);
    } else  {
        console.log("Note not found :(");   
    }
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
        return JSON.parse(data)
    } catch(e) {
        return []
    }

 }
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes,
}