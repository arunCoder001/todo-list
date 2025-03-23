// script.js

let todoInput = document.getElementById('todo-input');
let addBtn = document.getElementById('add-btn');
let todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', function() {
    let todoItem = todoInput.value;
    if (todoItem) {
        let li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" name="todo-item" id=""class="cross">
        <span class="text">
            ${todoItem}
        </span>
        <div class="tool-btn">
            <button>
                <i class='bx bx-trash'></i>
            </button>
            <button>
                <i class='bx bx-edit'></i>
            </button>
        </div>`;
        todoList.appendChild(li);
        todoInput.value = '';
        let deleteBtn = document.querySelectorAll('.bx-trash');
        crossBtn = document.querySelectorAll('.cross');
        trash(deleteBtn)
        cross(crossBtn)
    }
});

// delete list

let deleteBtn = document.querySelectorAll('.bx-trash');

function trash(btn){
   
   if(btn.length > 0){
      btn.forEach((element, index) => {
            element.addEventListener('click', (e) => {
                console.log(e.target.parentElement.parentElement.parentElement.remove())
            })
      });
   }
}

trash(deleteBtn)


// cross btn

let crossBtn = document.querySelectorAll('.cross');

function cross(btn){
   if(btn.length > 0){
      btn.forEach((element, index) => {
            element.addEventListener('change', (e) => {
                console.log(e.target.nextElementSibling)
                if(e.target.checked){
                       e.target.nextElementSibling.style.textDecoration = 'line-through'
                }else{
                    e.target.nextElementSibling.style.textDecoration = 'none'
                }
            })
      });
   }
}

cross(crossBtn)

