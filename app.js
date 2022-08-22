let list = document.getElementById('list');



function addTodo() {
    let todoItem = document.getElementById('todoItem');

    //i create li element in ul
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.setAttribute('class', 'spanText');
    let spanText = document.createTextNode(todoItem.value);
    span.appendChild(spanText);
    li.appendChild(span);

    // i create delete button in ul 
    let delBtn = document.createElement('button');
    let delText = document.createTextNode('Delete');
    delBtn.appendChild(delText);
    delBtn.setAttribute('class', 'delBtn');
    delBtn.setAttribute('onclick', 'deleteItem(this)')

    let editBtn = document.createElement('button');
    let editText = document.createTextNode('Edit');
    editBtn.appendChild(editText);
    editBtn.setAttribute('class', 'delBtn');

    editBtn.addEventListener('click', function() {
        let span = li.firstElementChild;
        let input = document.createElement('input');
        input.setAttribute('class', 'inputStyle');
        input.setAttribute('placeholder', 'Enter a New Todo Item');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
    });

    let saveBtn = document.createElement('button');
    let saveText = document.createTextNode('Save');
    saveBtn.appendChild(saveText);
    saveBtn.setAttribute('class', 'delBtn');

    saveBtn.addEventListener('click', function() {
        
        let input = li.firstChild;
        let span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);

    });

    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);

    todoItem.value = '';


}


function deleteAll() {
    list.innerHTML = '';
}

function deleteItem(e) {
    e.parentNode.remove();
}