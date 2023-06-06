//grabbing the text field ,list to add lists and the button to add task
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")



//function when btn is clicked 

function addTask(){
    if(inputBox.value === ''){
        alert("You Must write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);  // adding the "x" icon
    }

    inputBox.value ="";
    saveData();
}


//function to mark task done and remove it 

listContainer.addEventListener('click' , function(e){


    //if li clicked then toggle checked class
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// to remeber the data

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}

//to show save task

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()
