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
        let text = document.querySelectorAll('.text')
        trash(deleteBtn)
        cross(crossBtn)
        edit(editBtn)
        addData(text)
       
    }
});


// this is add local host 
function addData(data){
    let demp = []
    let demp2 = []
    demp.push(data)
    demp.forEach((element, index) => {
        element.forEach((item, index) => {
            demp2.push(item.textContent)
        })
    });
    localStorage.setItem('todo', JSON.stringify(demp2))
}

// end of local host

function dataFetcher(){
    let data = JSON.parse(localStorage.getItem('todo'))
    if(data){
        data.forEach((element, index) => {
            let li = document.createElement('li');
            li.innerHTML = `<input type="checkbox" name="todo-item" id=""class="cross">
        <span class="text">
            ${element}
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
        let deleteBtn = document.querySelectorAll('.bx-trash');
        let crossBtn = document.querySelectorAll('.cross');
        let editBtn = document.querySelectorAll('.bx-edit')
        trash(deleteBtn)
        cross(crossBtn)
        edit(editBtn)
        })
        
}
}


dataFetcher()

// list is add local data

// end of local host
// delete list

let deleteBtn = document.querySelectorAll('.bx-trash');

function trash(btn){
   
   if(btn.length > 0){
      btn.forEach((element, index) => {
            element.addEventListener('click', (e) => {
                console.log(e.target.parentElement.parentElement.parentElement.remove())
                addData(document.querySelectorAll('.text'))
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
                       addData(document.querySelectorAll('.text'))
                }else{
                    e.target.nextElementSibling.style.textDecoration = 'none';
                    tb[2].style.display = 'none';
                    addData(document.querySelectorAll('.text'))
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
                    edit.textContent = propt;
                    addData(document.querySelectorAll('.text'))
                }
            })
      });
   }
}

edit(editBtn)



// this is  theme

let themebtn = document.querySelector('#theme');

themebtn.addEventListener('change', (e) => {
    let value = e.target.value
    
    document.documentElement.setAttribute('data-theme', value);
    
    localStorage.setItem('theme', value)

    
})


function loadtheme(){
    let theme = localStorage.getItem('theme')
    if(theme){
        document.documentElement.setAttribute('data-theme', theme);
    }
}

loadtheme()
// this is end of  theme





