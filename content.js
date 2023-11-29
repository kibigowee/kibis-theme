let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}|:<>*-+";
let shouldScramble = false;

setInterval(runProgram,250);
applyStoredChanges();  

function runProgram(){
    applyStoredChanges();
    titles = document.getElementsByClassName("lesson-title");
    for (let i = 0; i < titles.length; i++) {
        titles[i].innerText=scramble(titles[i].innerText);
    }
}

function scramble(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr += chars.charAt(Math.round(Math.random()*chars.length));
    }
    return newStr;
}

//augment the animation of the icons based on the two colors chosen
//set property:
function applyStoredChanges() {
    // Retrieve the stored parameters from localStorage
    const storedParams = window.localStorage.getItem("myExtensionParams");
    console.log("Stored parameters:" + storedParams);
    if (storedParams) {
        // Parse the stored parameters as JSON
        const userPreferences = JSON.parse(storedParams);
        console.log("found something");
        
        // Apply the stored changes to the webpage
        document.documentElement.style.setProperty('--start-color-unfinished', userPreferences.unfinStartCol);
        document.documentElement.style.setProperty('--end-color-unfinished', userPreferences.unfinEndCol);
        document.documentElement.style.setProperty('--start-color-unopened', userPreferences.unopenStartCol);
        document.documentElement.style.setProperty('--end-color-unopened', userPreferences.unopenEndCol);
        shouldScramble = userPreferences.shouldScramble=="true" ? true : false;
    }
}