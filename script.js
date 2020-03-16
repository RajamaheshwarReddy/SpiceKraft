var db = firebase.database();
var root = db.ref("/");
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
    signInOptions:[
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        scopes: [
          'https://www.googleapis.com/auth/contacts.readonly'
        ],
        customParameters: {
          // Forces account selection even when one account
          // is available.
          prompt: 'select_account'
        }
      }
    ]
  });

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
                document.getElementById(ele).setAttribute("style",dblock);
            }
            else{
                document.getElementById(ele).setAttribute("style",dnone);                
            }
        });
    }
}