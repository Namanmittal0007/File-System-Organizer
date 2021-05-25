
const fs=require('fs');
const path=require('path');

function tree(dirpath){
    if(dirpath==undefined){
        console.log("Please enter Path after 'Tree'");
    }
    else{
        if(!fs.existsSync(dirpath)){
            console.log("Invalid Path");
            return;
        }
        console.log(path.basename(dirpath));
        let fnf=fs.readdirSync(dirpath);
        for(let i=0;i<fnf.length;i++){
            if(i==fnf.length-1 ){
                treehelper(path.join(dirpath,fnf[i]),"      ",true);
            }
            else{
                treehelper(path.join(dirpath,fnf[i]),"      ",false);
            }
        }
    }
}
function treehelper(dirpath,tabs,islast){    
    let isfile=fs.lstatSync(dirpath).isFile();
    if(isfile){
        if(islast){
            console.log(tabs+"└──"+path.basename(dirpath));
        }
        else{
            console.log(tabs+"├──"+path.basename(dirpath));
        }
    }
    else{
        let fnf=fs.readdirSync(dirpath);
        if(islast){
            console.log(tabs+"└──"+path.basename(dirpath));
        }
        else{
            console.log(tabs+"├──"+path.basename(dirpath));
        }
        for(let i=0;i<fnf.length;i++){
            if(islast){
                if(i==fnf.length-1){
                    treehelper(path.join(dirpath,fnf[i]),tabs+"      ",true);
                }
                else{
                    treehelper(path.join(dirpath,fnf[i]),tabs+"      ",false);
                }
            }
            else{
                if(i==fnf.length-1){
                    treehelper(path.join(dirpath,fnf[i]),tabs+"│     ",true);
                }
                else{
                    treehelper(path.join(dirpath,fnf[i]),tabs+"│     ",false);                   
                }
            }
        }    
    }    
}

module.exports={
    treekey : tree
}