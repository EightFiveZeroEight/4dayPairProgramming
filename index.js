let urlSubmit = document.querySelector("#urlSubmit");
let urlInput = document.querySelector("#urlInput");
let result = document.querySelector(`#resultChecker`);
let querryRoot = document.querySelector("#queryBox");
let urlBeingAdded = "";
let nameOfUrlBeingAdded = "";
let listOfBookmarks = [];
let thisBookmark = {};

// --------------------------
//#region ## Are You Sure? Query 
// --------------------------
;


//rootDiv
let checkerBox = document.createElement(`div`);
checkerBox.setAttribute("id", "checkerBox");

//Question
let checkerBoxQuery = document.createElement(`p`);
checkerBoxQuery.setAttribute("id", "areYouSure");


//I accept
let checkerBoxAccept = document.createElement(`button`);
checkerBoxAccept.setAttribute("id", "acceptButton");
checkerBoxAccept.textContent="Correct";


//I reject
let checkerBoxReject = document.createElement(`button`);
checkerBoxReject.setAttribute("id", "rejectButton");
checkerBoxReject.textContent="Incorrect";


function render(){
    
    // console.log(`render being called`);
    console.log(`urlBeingAdded is: `+urlBeingAdded);
    console.log(`nameOfUrlBeingAdded is: `+nameOfUrlBeingAdded);

    if((urlBeingAdded == undefined) || (urlBeingAdded  == null) || (urlBeingAdded  == ``)) {
        checkerBoxQuery.textContent=`Please add an url AND a name for that URL before proceeding.`;
        checkerBox.remove(checkerBoxAccept, checkerBoxReject)
        querryRoot.append(checkerBox)
        checkerBox.append(checkerBoxQuery)
        return;

    } if((nameOfUrlBeingAdded == undefined) || (nameOfUrlBeingAdded  == null) || (nameOfUrlBeingAdded  == ``)) {
        checkerBoxQuery.textContent=`Please add an url AND a name for that URL before proceeding.`;
        querryRoot.append(checkerBox)
        checkerBox.remove(checkerBoxAccept, checkerBoxReject)
        checkerBox.append(checkerBoxQuery)
        return;

    } 
    
    
    else {

        checkerBoxQuery.textContent=`You are about to add the bookmark "${nameOfUrlBeingAdded}", with the destination "${urlBeingAdded}". Is this correct? `;
        querryRoot.append(checkerBox)
        checkerBox.append(checkerBoxQuery, checkerBoxAccept, checkerBoxReject)
    }


}

;
//#endregion ## Are You Sure? Query 




// --------------------------
//#region ## BOOKMARK URL INPUT AND BUTTON HANDLING
// --------------------------
;


document.getElementById('nameInput').onkeydown = function(e){
    if(e.keyCode == 13){
        nameInput = document.getElementById(`nameInput`).value
        nameOfUrlBeingAdded.textContent=nameInput
    }
}


document.getElementById('urlInput').onkeydown = function(e){
    if(e.keyCode == 13){
        urlInput = document.getElementById(`urlInput`).value
        urlBeingAdded.textContent=urlInput
    }
}

function saveUrlInput(){ 
    // console.log(`The value of urlInput is: ` +urlInput );
    // console.log(`The value of nameInput is: ` +nameInput );
    urlBeingAdded = document.getElementById(`urlInput`).value;
    nameOfUrlBeingAdded = document.getElementById(`nameInput`).value;
    
    render();
    
}

checkerBoxReject.addEventListener(`click`, (e)=>{
    // console.log(`The value of urlInput is: ` +urlInput );

    // console.log(`The value of nameInput is: ` +nameInput );
    urlBeingAdded = "";
    urlInput.value='';
    nameInput.value='';
    urlInput='';
    nameInput='';
    nameOfUrlBeingAdded = "";

    // console.log(`The value of urlInput is: ` +urlInput );

    // console.log(`The value of nameInput is: ` +nameInput );
})

checkerBoxAccept.addEventListener(`click`, (e)=>{
    // console.log(`The value of nameOfUrlBeingAdded is: ` +nameOfUrlBeingAdded );
    listOfBookmarks.push(thisBookmark[`${nameOfUrlBeingAdded}`] = `${urlBeingAdded}`);
    console.log(thisBookmark);
    console.log(listOfBookmarks);
})


;
//#endregion ## BOOKMARK URL INPUT AND BUTTON HANDLING



