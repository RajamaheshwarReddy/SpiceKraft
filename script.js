var db = firebase.database();
var root = db.ref("/");

var navarr = [
    'home',
    'about',
    'menu',
    'login'
]

function popItUp(tab){

    let dnone = "display: none;";
    let dblock = "display: block;";

    let homestyle = document.getElementById(tab).getAttribute("style");
    if(homestyle == dnone){
        navarr.forEach(ele => {
            if(ele == tab){
                console.log(document.getElementById(ele).setAttribute("style",dblock));
            }
            else{
                console.log(document.getElementById(ele).setAttribute("style",dnone));                
            }
        });
    }
}