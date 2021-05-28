function help(){
    console.log(`
                ---- COMMANDS LIST ----

                
    1. help:                    List of commands
    2. organize "path" :        Organize files in the dir
    3. tree "path" :            Displays the hierarichal file system `);
}

module.exports={
    helpkey:help
}