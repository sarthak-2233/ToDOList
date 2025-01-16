const inputBox= document.getElementById("input-box");

const listcontainer =document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '')
    {
        alert("YOU MUST WRITE SOMETHING");
    }
    else{
        let li=document.createElement("li");
            li.innerHTML=inputBox.value;
          listcontainer.appendChild(li);
            // create element
            let cross=document.createElement("cross");
            //add value
            cross.innerHTML="\u00d7";
            // list ke bagal mai
            li.appendChild(cross);
            // now add css
    }
    inputBox.value="";
    saveData();
}

// for click on list conatiner img or cross
listcontainer.addEventListener("click",function(e){
        if(e.target.tagName === "LI")
        {
            e.target.classList.toggle("checked");
            saveData()
        }
        else if(e.target.tagName === "CROSS")
        {
            e.target.parentElement.remove();
            saveData()
        }
},false);


// to create local sav
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
// display data
function showData(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

showData();


// steps
/*
#to click and add element 
1 fet the input tag in which text is written
2. now add onclick method on button to perform function
3. if text.value==='' empty alert else
4. create variable let li=doc.create(elem)
5.li.innerhtml=input.value // store data
6. choose container to show by appending container.appendchild(li)

#to add cross
1. create variable cross
2. add value innerhtml =code
3. append it to child and css to i

#to delete list
USE EVENTLISTNER CLICK WITH FUNCTION PASS
1. if(e.target.tagName === "LI")  // agar list pe click kiya tabh unchecked 
    e.target.toggle("Checked")
2. if cross
e.target.parentelement remove // remove particular element



/// to store data on local so that does not delete with refresh
function tostore(){
localstorage.setItem("data",list.inner)
}

// to show
function toshow(){
listcontainer.innerHTML=localStorage.getItem("data");
listcontainer.innerHTML=localStorage.getItem("data");
listcontainer.innerHTML=localStorage.getItem("data");~
}





*/