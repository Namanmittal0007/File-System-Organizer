#!/usr/bin/env node
// const fs=require('fs');
// const path=require('path');
const helpobj=require("./commands/help.js");
const treeobj=require("./commands/tree.js");
const organizeobj=require("./commands/organize.js");


let queryarr=process.argv.slice(2);
let query=queryarr[0];
let dirpath=queryarr[1];
if(dirpath == undefined){
    dirpath=process.cwd();
}
switch(query){
    case "help":
        helpobj.helpkey();
        break;
    case "tree":
        treeobj.treekey(dirpath);
        break;
    case "organize":
        treeobj.treekey(dirpath);
        organizeobj.organizekey(dirpath);
        treeobj.treekey(dirpath);
        break;
    default:
        console.log("🙏Please enter a valid Input");
}
