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
            <button id="dots-btn">
               <i class="bx bx-dots-vertical-rounded"></i>
            </button>
        </div>`;
        todoList.appendChild(li);
        todoInput.value = '';
        let deleteBtn = document.querySelectorAll('.bx-trash');
        crossBtn = document.querySelectorAll('.cross');
        let editBtn = document.querySelectorAll('.bx-edit')
        trash(deleteBtn)
        cross(crossBtn)
        edit(editBtn)
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
                let tb = e.target.nextElementSibling.nextElementSibling.children;
                
                if(e.target.checked){
                       e.target.nextElementSibling.style.textDecoration = 'line-through';
                       tb[2].style.display = 'block';
                }else{
                    e.target.nextElementSibling.style.textDecoration = 'none';
                    tb[2].style.display = 'none';
                }
                console.log(tb[2])
            })
      });
   }
}

cross(crossBtn)

// edit btn

let editBtn = document.querySelectorAll('.bx-edit');

function edit(btn){
   if(btn.length > 0){
      btn.forEach((element, index) => {
            element.addEventListener('click', (e) => {
                let edit = e.target.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling
               
                
                let propt = prompt('Edit your todo', edit.textContent)
                if(propt){
                    edit.textContent = propt
                }
            })
      });
   }
}

edit(editBtn)



