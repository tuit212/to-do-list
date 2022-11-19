

const newTask = document.querySelector("#newTask");
const search = document.querySelector("#search");
const tasks = document.querySelector("#tasks");
const task = document.querySelector("#task");
let del = document.querySelector("#delete");


const push = document.querySelector("#push").onclick = function () {
    if( (search).value.length === 0 || (search).value.length === " "){
        alert("Vazifa kiriting")
    }
    else{
        tasks.innerHTML += `
        
        <div id="task" class="task">
        <span id="taskName">${(search).value}</span>
        <button id="edit" class="edit">
        <i class="fa fa-pen-to-square"></i>
        </button>
        <button id="delete" class="delete">
        <i class="fa fa-trash"></i>
        </button>
        </div>
        
        `;
    }

    // DELETE

    
    

    
}