function help(){
    console.log(`
    ---- COMMANDS LIST ----
    help: List of commands
    organize "dirpath" : Organize files in the dir
    tree "dirpath" : Displays the hierarichal file system `);
}

module.exports={
    helpkey:help
}