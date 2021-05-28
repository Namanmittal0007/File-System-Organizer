const utilititesobj=require("../utility.js");
const fs=require('fs');
const path=require('path');


function organize(dirpath){
    if(dirpath==undefined){
        console.log("Please enter Path after 'Tree'");
    }
    else{
        if(!fs.existsSync(dirpath)){
            console.log("Invalid Path");
            return;
        }
        else{
            if(!fs.existsSync(path.join(dirpath,"organize_data"))){
                fs.mkdirSync(path.join(dirpath,"organize_data"));
            }
            
            organizehelper(dirpath,path.join(dirpath,"organize_data"));
        }
    }
}
function organizehelper(srcpath,destpath){
    let childfiles=fs.readdirSync(srcpath);
    for(let i=0;i<childfiles.length;i++){
        if(fs.lstatSync(path.join(srcpath,childfiles[i])).isFile()){
            let type=getfiletype(path.join(srcpath,childfiles[i]),destpath);
            if(!fs.existsSync(path.join(destpath,type))){
                fs.mkdirSync(path.join(destpath,type));
            }
            placefile(path.join(srcpath,childfiles[i]),path.join(destpath,type));
            fs.unlinkSync(path.join(srcpath,childfiles[i]));
        }
    }
}
function getfiletype(srcfilepath,destpath){
    let ext=path.extname(srcfilepath).slice(1);
    for(let type in utilititesobj.types){
        let typeoffiles=utilititesobj.types[type];
        for(let i=0;i<typeoffiles.length;i++){
            if(ext==typeoffiles[i]){
                // console.log(ext,type);
                return type;
            }
        }
    }
    return "others";
}
function placefile(srcfilepath,destpath){
    let destfilepath=path.join(destpath,path.basename(srcfilepath));
    fs.copyFileSync(srcfilepath,destfilepath);
}

module.exports={
    organizekey : organize
}