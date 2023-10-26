import { eventListenerActionButtons } from "./eventListeners"
import { removeElement } from "./functions"
export const actionButtons = (list) => {
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

    /* EventListener for: sortList, notDone, done */
    eventListenerActionButtons(list, sortList, notDone, done)
}