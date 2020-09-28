var list=document.getElementById("list");

function addTodo(){
    var todo_item=document.getElementById("todo-item");
    if(todo_item.value==""){
        alert("Elter avalue");

    }
    else{
        var li=document.createElement('li');
    var liText=document.createTextNode(todo_item.value);
    


    li.appendChild(liText);
       
    }

 
    // create delete btn
    var deBtn=document.createElement("BUTTON");
    var delText=document.createTextNode("DELETE");
    deBtn.setAttribute("class","btn");
    deBtn.setAttribute("onclick","deleteItem(this)")
    deBtn.appendChild(delText)
    //create edit button
    var editBtn=document.createElement("BUTTON");
    var editText=document.createTextNode("EDIT");
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")

    li.appendChild(deBtn)
    li.appendChild(editBtn)
     
   
    list.appendChild(li);
    todo_item.value=""
    console.log(li);
}
function deleteItem(e){
    e.parentNode.remove()

}
function deleteAll(){
    list.innerHTML=""
}

function editItem(e){
    var val=e.parentNode.firstChild.nodeValue;
    var editValue= prompt("Enter edit value", val);
    e.parentNode.firstChild.nodeValue=editValue
}