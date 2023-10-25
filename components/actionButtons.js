import { List, closeChangeItems, removeElement } from "./function"
import { todos } from "./todos"
export const actionButtons = (list) => {
    removeElement('actionButtonsContainer')


    const container = document.getElementById('container')
    const actionButtonsContainer = document.createElement('articel')
    actionButtonsContainer.setAttribute('id', 'actionButtonsContainer')
    const actionButtonsSection = document.createElement('section')
    actionButtonsContainer.classList.add('actionButtonsContainer')
    actionButtonsSection.classList.add('actionButtonsSection')
    let sortList = document.createElement('button')
    sortList.innerHTML = 'sort list'
    let notDone = document.createElement('button')
    notDone.innerHTML = 'left to do'
    let done = document.createElement('button')
    done.innerHTML = 'done'
    container.appendChild(actionButtonsContainer)
    actionButtonsContainer.appendChild(actionButtonsSection)
    actionButtonsSection.appendChild(sortList);
    actionButtonsSection.appendChild(notDone)
    actionButtonsSection.appendChild(done)



    /* sort current list after titel(alphabetical order) */
    sortList.addEventListener('click', (e) => {
        e.preventDefault()
        list.sort((a, b) => {
            const nameA = a.titel.toLowerCase();
            const nameB = b.titel.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // if two titels are equal
            return 0;
        });
        /* give back a sorted list and display todos with value 'not done', remove save button & change titel */
        /* close item if user click on change-button  */
        closeChangeItems(list, '', '')
        List(list, '')
        todos(list, '')


    })



    done.addEventListener('click', (e) => {
        e.preventDefault()
        /* display todos with value 'done' from current list, remove save button & change titel */
        /* close item if user click on change-button  */
        closeChangeItems(list, true, '')
        List(list, true)
        todos(list, true)

    })



    notDone.addEventListener('click', (e) => {
        e.preventDefault()
        /* display todos with value 'not done' from current list,  remove save button & change titel */
        /* close item if user click on change-button  */
        closeChangeItems(list, false, '')
        List(list, false)
        todos(list, false)

    })
}