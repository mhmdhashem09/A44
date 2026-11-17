function saveNote(){
    let title=document.getElementById("noteTitle").value;
    let note=document.getElementById("notes").value;

    if(title=="" || note==""){
        alert("Please enter both title and Note!")
    }
    else{
        localStorage.setItem("noteTitle",title);
        localStorage.setItem("notes",note);
        alert("Note saved succesfully!")
    }
}

function displayNote(){
    let title=localStorage.getItem("noteTitle");
    let note=localStorage.getItem("notes");
    if(title==null || note==null){
        alert("No saved note found!")
    }
    else{
        document.getElementById("savedTitle").innerHTML= title;
        document.getElementById("savedNote").innerHTML= note;
    }
}

function clearNote(){
    localStorage.removeItem("noteTitle");
    localStorage.removeItem("notes");

    document.getElementById("savedTitle").innerHTML="";
    document.getElementById("savedNote").innerHTML="";
    document.getElementById("noteTitle").value="";
    document.getElementById("notes").value="";

    alert("Note cleared successfully!")
}
