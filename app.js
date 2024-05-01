function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let  minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('time').textContent = timeString;

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();
    let dayDateString = day + ', ' + date + ' ' + month + ' ' + year;
    document.getElementById('dayDate').textContent = dayDateString;
}

setInterval(updateTime, 1000);

updateTime();
let input = document.getElementById("textInput");
let list = document.getElementById("taskList");
let Total_Task=document.querySelector(".increment1");
let Total_task_increase=parseInt(Total_Task.textContent)
let Completed_Task=document.querySelector(".increment3");
let complete_task_increase=parseInt(Completed_Task.textContent)
let Remaining_Task=document.querySelector(".increment2");
let Remaining_task_increase=parseInt(Completed_Task.textContent)

const Add=()=> {
    if (input.value === "") {
        alert('Please Enter Task');


    } else {
        let newTask = document.createElement('li');
        newTask.style.fontSize = "1.6em";

        let taskText = document.createElement('p');
        taskText.textContent = input.value;
        newTask.appendChild(taskText);

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>'; 
        deleteBtn.classList.add('delete-btn');

        deleteBtn.onclick = function() {
            list.removeChild(newTask);
        };  


        let editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>'; 

        editBtn.classList.add('edit-btn');


        editBtn.onclick = function() {
            let editedTask = prompt("Edit Task", taskText.textContent);
            if (editedTask !== null) {
                taskText.textContent = editedTask;
            }
        };
        
let completeBtn = document.createElement('button');
        completeBtn.textContent = '✔'; 
        completeBtn.classList.add('complete-btn');
        completeBtn.onclick = function() {
            const work=newTask.classList.toggle('completed');
            if(work===true){
                complete_task_increase+=1
                Completed_Task.textContent=complete_task_increase
                Remaining_task_increase-=1
                Remaining_Task.textContent=Remaining_task_increase
            }
            else{
                complete_task_increase-=1
                Completed_Task.textContent=complete_task_increase
                Remaining_task_increase+=1
                Remaining_Task.textContent=Remaining_task_increase
            }

        };

        newTask.appendChild(deleteBtn);
        newTask.appendChild(editBtn);
        newTask.appendChild(completeBtn);

        list.appendChild(newTask);
        input.value = "";
        Total_task_increase+=1
        Total_Task.textContent=Total_task_increase
        Remaining_task_increase+=1
        Remaining_Task.textContent=Remaining_task_increase


    }
}

let modal = document.getElementById("myModal");
let btn = document.getElementById("add-button");
let span = document.querySelector(".close");
let addBtn = document.getElementById("todo-button");
let todo_task = document.querySelector(".todo-task1");

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

modal.style.display = "none";

addBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    todo_task.style.display="none"
    Add()
})











