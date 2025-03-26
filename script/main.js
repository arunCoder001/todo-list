// script.js

let todoInput = document.getElementById('todo-input');
let addBtn = document.getElementById('add-btn');
let todoList = document.getElementById('todo-list');


addBtn.addEventListener('click', function() {
   
    let todoItem = todoInput.value;
    let time = new Date();
    if (todoItem) {
        let li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" name="todo-item" id=""class="cross">
        <span class="text">
            ${todoItem}
        </span>
        <div class="time">
             <span class="newTime">${time.getHours()}:${time.getMinutes()}</span>
        </div>
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
        let newTime = document.querySelectorAll('.newTime')
        trash(deleteBtn)
        cross(crossBtn)
        edit(editBtn)
        addData(text, newTime)
       
    }
});


// this is add local host 
function addData(data, time){
    let demp = {
        text: [],
        time: []
    }
   
   
    if(data.length > 0){
        data.forEach((element, index) => {
            demp.text.push(data[index].textContent.trim())
            demp.time.push(time[index].textContent)
        })
    }



    

    localStorage.setItem('todo', JSON.stringify(demp))
}

// end of local host

function dataFetcher(){
        let data = JSON.parse(localStorage.getItem('todo'))

        if(data){
            data.text.forEach((element, index) => {
                let li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" name="todo-item" id=""class="cross">
        <span class="text">
            ${data.text[index]}
        </span>
        <div class="time">
             <span class="newTime">${data.time[index]}</span>
        </div>
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
        let text = document.querySelectorAll('.text')
        let newTime = document.querySelectorAll('.newTime')
        trash(deleteBtn)
        cross(crossBtn)
        edit(editBtn)
        addData(text, newTime)
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
                e.target.parentElement.parentElement.parentElement.remove()
                addData(document.querySelectorAll('.text'), document.querySelectorAll('.newTime'))
               
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
               
                let tb = e.target.nextElementSibling.nextElementSibling.nextElementSibling.children;
                
                if(e.target.checked){
                       e.target.nextElementSibling.style.textDecoration = 'line-through';
                       tb[2].style.display = 'block';
                       addData(document.querySelectorAll('.text'), document.querySelectorAll('.newTime'))
                       
                }else{
                    e.target.nextElementSibling.style.textDecoration = 'none';
                    tb[2].style.display = 'none';
                    addData(document.querySelectorAll('.text'), document.querySelectorAll('.newTime'))
                    
                }
                
               
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
                    addData(document.querySelectorAll('.text'),document.querySelectorAll('.newTime'))
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
        themebtn.value = theme
        document.documentElement.setAttribute('data-theme', theme);
    }
}

loadtheme()
// this is end of  theme





