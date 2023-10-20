import { addTodo } from "./addTodo"
import { showAndHideElements } from "./showAndHideElements"


export const todos = () => {

let list = ['hund', 'katt', 'zebra']
const todosContainer = document.createElement('section')
let showList = document.createElement('ul')
showList.classList.add('showList')
const createTodoButton = document.createElement('button')
createTodoButton.innerHTML = 'create todo'


document.body.appendChild(todosContainer)

todosContainer.appendChild(createTodoButton)
todosContainer.appendChild(showList)

for(let i = 0; i < list.length; i++){


    const li = document.createElement('li')
    li.innerHTML = list[i];
    showList.appendChild(li)
}




createTodoButton.addEventListener('click', (e) => showAndHideElements(e, todosContainer, addTodo()))




}
