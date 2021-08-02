var tasks = new Array();
var removeState = false;
function AddTask(){

    var itemText = document.getElementById("CurrentItem");
    if (itemText.value != ""){
        tasks.push(itemText.value);
        UpdateList();
        itemText.style.borderColor = "black";
        itemText.value = "";
        return;
    }
    itemText.style.borderColor = "red";
    //  {
    //     var table = document.getElementById("list");
    //     table.innerHTML += "<tr><td>"+count+"</td><td>"+itemText.value+"</td></tr>"
    //     count += 1;
    //     
    //     
    // } else {
    //     
    // }
}

function UpdateList() {
    var newTable = "<table id=\"list\"><th>#</th><th>Task</th>";
    for (let index = 0; index < tasks.length; index++) {
        const element = tasks[index];
        var t = index;
        t+=1;
        newTable += "<tr onclick = \"DeleteTask()\"><td id = \"data\">"+ t +"</td><td>"+element+"</td></tr>";
    }
    newTable += "</table>";
    var el = document.getElementById("list");
    el.outerHTML = newTable;

    
}


function RemoveTask(){
    removeState = !removeState;
    // tasks.splice(1,1);
    // Highlight table in red when in delete mode
    // if (removeState) {
        document.querySelector("section.listItems").backgroundColor = "red";
        var tds = document.getElementById("list");
        
        tds.style.backgroundColor = "red";
        
    // }
    UpdateList();
}

function RemoveAllTasks(){
    while (tasks.length) {
        tasks.pop();
    }

    UpdateList();
}

function DeleteTask() {
    if (removeState) {
        alert("Deleting.....");
    }   
}