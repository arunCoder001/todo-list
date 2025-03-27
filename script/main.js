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
        <div class="time">
             <span class="newTime">${time()}</span>
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
        sizeTb()
       
    }
});


// this is time fuction


function time(){
    let time = new Date();
    let minutes = time.getMinutes();
    let hours = time.getHours();

    if(minutes < 10){
        minutes = '0' + minutes
 
    }
   if(hours > 12){
       hours =  hours - 12 
       minutes = minutes + ' PM'
   }
    else if(hours == 0){
        hours = 12 + ' AM';
        minutes = minutes + ' AM'
    }
   
   

   return hours + ':' + minutes

}

time()
// end of time fuction
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
        sizeTb()
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
                e.target.parentElement.parentElement.parentElement.style.width = 0 + 'px';
                e.target.parentElement.parentElement.parentElement.style.opacity = 0;
                e.target.parentElement.parentElement.parentElement.style.transition = '0.5s';
                e.target.parentElement.parentElement.parentElement.style.overflow = 'hidden';
                e.target.parentElement.parentElement.parentElement.style.height = 0 + 'px';
                setTimeout(() => {
                    e.target.parentElement.parentElement.parentElement.remove()
                    addData(document.querySelectorAll('.text'), document.querySelectorAll('.newTime'))
                },1000)
                
               
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
               
                
                let propt = prompt('Edit your todo', edit.textContent.trim())
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





// this is font family

let fontfamily = document.querySelector('#font-family')

fontfamily.addEventListener('change', (e) => {
    let value = e.target.value
    
    document.body.style.fontFamily = value;
    
    localStorage.setItem('font', value)
})


function loadFont(){
    let font = localStorage.getItem('font')
    if(font){
       document.body.style.fontFamily = font 
    }
}

loadFont()
// End of font family


// font size

function sizeTb(){
    let fontsize = document.querySelector('#font-size');
let text = document.querySelectorAll('.text')

fontsize.addEventListener('change', (e) => {
    let value = e.target.value
    console.log(value)
    text.forEach((element, index) => {
        element.style.fontSize = value + 'px'
    })
    
    
})
    
    }

sizeTb()

// end of font size