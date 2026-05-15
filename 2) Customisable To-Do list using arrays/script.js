//The master array for the to-do list
const taskList = [];

//Function for adding tasks to the array
function addTask(){
    const taskInputField = document.getElementById("taskInputField").value;
    if (taskInputField) {
    taskList.push(taskInputField); //Add task to array
    console.log("Task added to list: " + taskInputField); //Log to console
    document.getElementById("taskInputField").value = ""; //Clear the input field
    displayTasks();
} else {
    alert("Please input a task.");
}
}

//Function for displaying the tasks in the array in the displayArea div
function displayTasks(){
    //Wipe task display div
    document.getElementById("displayArea").innerHTML = "";
    //Loop for adding an entry for each task
    taskList.forEach((element, index) => {
        //Create div for each task and apply class
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class","taskListItem")
        //Create new p to go in new div, input 1 array entry as its text
        const newP = document.createElement("p");
            newP.textContent = element;
        newDiv.appendChild(newP);
        //Create delete button for each tasks and set attribute to run delete function and "Remove Task" text
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove Task";
        deleteButton.onclick = () => deleteTask(index);
        newDiv.appendChild(deleteButton);
        //Add the new Div to the displayArea
        const displayArea = document.getElementById("displayArea");
        displayArea.appendChild(newDiv);
});
}

//Function to delete a task when button is clicked
function deleteTask(index){
    //Remove relevant entry from array
    taskList.splice(index,1);
    //Re-run displayTasks()
    displayTasks();
}
