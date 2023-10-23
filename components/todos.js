import { List, changeTitel, removeOldList, removeTodo } from "./function";
/* Pass current list and 'valueOfTodo' => display items based on this condition */
export const todos = (list, valueOfTodo, index) => {
  if (index) { } else {
    /* Call function to remove 'old' list */
    removeOldList()
    /* create todo element from list and display them on page */
    const todosContainer = document.createElement('articel')
    todosContainer.setAttribute('id', 'todosContainer')
    let showList = document.createElement('ul')
    showList.classList.add('showList')
    document.body.appendChild(todosContainer)
    todosContainer.appendChild(showList)
    for (let i = 0; i < list.length; i++) {
      const li = document.createElement('li');
      const titelContainer = document.createElement('section')
      titelContainer.classList.add('titelContainer')
      const titel = document.createElement('p');
      titel.setAttribute('id', `titel${[i]}`)
      titel.classList.add('titelContainer___titel')
      const statusOfTodo = document.createElement('input')
      const removButton = document.createElement('button')
      const changeTextButton = document.createElement('button')
      changeTextButton.setAttribute('id', `changeButton${[i]}`)
      removButton.innerHTML = 'remove'
      statusOfTodo.type = 'checkbox'
      changeTextButton.innerHTML = 'change'
      statusOfTodo.checked = list[i].done
      titel.innerHTML = list[i].titel;
      /* 'valueOfTodo' check if todo is done or not =>  then display item based on this condition */
      if (list[i].done === valueOfTodo || valueOfTodo === '') {
        showList.appendChild(li);
        li.appendChild(titelContainer)
        titelContainer.appendChild(titel);
        li.appendChild(statusOfTodo);
        li.appendChild(removButton);
        li.appendChild(changeTextButton)
      }
      /* EventListener remove todo   */
      removButton.addEventListener("click", (e) => {
        e.preventDefault();
        removeTodo(list, [i])
        /*passing list after items is removd */
        List(list, valueOfTodo)
      });
      /* EventListener change conditon for item (item.done:true/false) */
      statusOfTodo.addEventListener("click", (e) => {
        list[i].done = !list[i].done
        /*passing list after items is change */
        List(list, valueOfTodo)
      });
      /* EventListener change todo-titel, replace p-tag with text-input, remove "change" button with save button */
      changeTextButton.addEventListener("click", (e) => {
        const titelInput = document.getElementById(`titel${[i]}`)
        const removeChangeButton = document.getElementById(`changeButton${[i]}`)
        if (titelInput && removeChangeButton) {
          titelInput.classList.add('hide')
          removeChangeButton.classList.add('hide')
        }
        const newTitelInput = document.createElement('input');
        const saveButton = document.createElement('button');
        saveButton.setAttribute('id', `saveButton${[i]}`)
        newTitelInput.setAttribute('id', `newtitel${[i]}`)
        newTitelInput.classList.add('titelContainer___changeInput')
        newTitelInput.placeholder = 'Add new titel'
        newTitelInput.minLength = 3;
        newTitelInput.maxLength = 40;
        newTitelInput.required = true
        saveButton.innerHTML = 'save'
        titelContainer.appendChild(newTitelInput);
        li.appendChild(saveButton)





        /* EventListener to save new todo titel, and conditon if input of titel is empty and user click on button => p-tag display old titel-value */
        let showContent = true
        saveButton.addEventListener("click", () => {

          if (showContent) {
            showContent = !showContent
            newTitelInput.classList.add('hide')
            saveButton.classList.add('hide')

            titelInput.classList.remove('hide')
            removeChangeButton.classList.remove('hide')

          }
          else {
            newTitelInput.classList.remove('hide')
            saveButton.classList.remove('hide')
            titelInput.classList.add('hide')
            removeChangeButton.classList.add('hide')
            showContent = !showContent

          }

          const newTitel = document.getElementById(`newtitel${[i]}`)
          let newTitelValue = newTitel.value;

          if (newTitelValue.length >= 3 && newTitelValue.length <= 40) {
            changeTitel(list, [i], newTitelValue, valueOfTodo)
          }
        })

      });
    }
  }
}
