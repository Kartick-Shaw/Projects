let todoList = [
    {
        item: "Go to College", 
        dueDate: '2023-10-11'
    }, 
    {
        item: "Do your Homework", 
        dueDate: '2023-10-11'
    }
];
displayItems();

function addTodo() {
    let inputELement = document.querySelector('#todo-input');
    let inputDate = document.querySelector('#todo-date');
    let todoItem = inputELement.value;
    let todoDate = inputDate.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputELement.value = '';
    inputDate.value = '';
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');

    let newhtml = '';

    // displayElement.innerText = '';
    for(let i = 0; i < todoList.length; i++) {
        let {item, dueDate} = todoList[i];
        newhtml += `
            <div>
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class="btn-delete" onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
            </div>
        `;
    }
    containerElement.innerHTML = newhtml;
}