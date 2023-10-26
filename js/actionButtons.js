import { eventListenerActionButtons } from "./eventListeners"
import { removeElement } from "./functions"
export const actionButtons = (list, valueOfTodo) => {
    removeElement('actionButtonsContainer')
    const container = document.getElementById('container')
    const actionButtonsContainer = document.createElement('articel')
    actionButtonsContainer.setAttribute('id', 'actionButtonsContainer')
    const actionButtonsSection = document.createElement('section')
    actionButtonsContainer.classList.add('actionButtonsContainer')
    actionButtonsSection.classList.add('actionButtonsSection')
    let sortList = document.createElement('button')
    sortList.innerHTML = 'Sort list'
    let notDone = document.createElement('button')
    notDone.innerHTML = 'Left to do'
    let done = document.createElement('button')
    done.innerHTML = 'Done'
    container.appendChild(actionButtonsContainer)
    actionButtonsContainer.appendChild(actionButtonsSection)
    actionButtonsSection.appendChild(sortList);
    actionButtonsSection.appendChild(notDone)
    actionButtonsSection.appendChild(done)

    /* for add color to active button */
    if( valueOfTodo === ''){
        sortList.classList.add('active')
        }else if(valueOfTodo === 'noActiveButton'){
        }else if(valueOfTodo){
            done.classList.add('active')
        }else if(!valueOfTodo){
            notDone.classList.add('active')
        }


    /* EventListener for: sortList, notDone, done */
    eventListenerActionButtons(list, sortList, notDone, done, valueOfTodo)
   

}