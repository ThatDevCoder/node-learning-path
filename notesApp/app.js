const yargv = require('yargs')
const notes = require('./notes')


yargv.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body : {
            describe: 'the body of the title you entered',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
         notes.addNotes(argv.title,argv.body )
    }
})

yargv.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title:{
            describe: 'enter title to be removed',
            demandOption: true,
            type: 'string'
        }
    }, 
    handler(argv) {
        notes.removeNotes
        (argv.title)
    }
})

yargv.command({
    command: 'list',
    describe: 'list all of the notes',
    handler() {
        notes.listNotes()
    }
})


yargv.command({
    command: 'read',
    describe: 'read a new note',
    builder: {
        title : {
            describe: 'enter title to be read',
            demandOption: true,
            type: 'string' 
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargv.parse()
// console.log(yargv.argv);
