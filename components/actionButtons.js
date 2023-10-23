import { List } from "./function"
import { todos } from "./todos"
export const actionButtons = (list) => {
    const actionButtonsContainer = document.createElement('articel')
    const actionButtonsSection = document.createElement('section')
    actionButtonsContainer.classList.add('actionButtonsContainer')
    actionButtonsSection.classList.add('actionButtonsSection')
    let sortList = document.createElement('button')
    sortList.innerHTML = 'sort list'
    let notDone = document.createElement('button')
    notDone.innerHTML = 'left to do'
    let done = document.createElement('button')
    done.innerHTML = 'done'
    document.body.appendChild(actionButtonsContainer)
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
        list.forEach(item => item.showContent = true)
        List(list, '')
        todos(list, '')
    })



    done.addEventListener('click', (e) => {
        e.preventDefault()
        /* display todos with value 'done' from current list, remove save button & change titel */
        list.forEach(item => item.showContent = true)
        List(list, true)
        todos(list, true)
    })

    
    notDone.addEventListener('click', (e) => {
        e.preventDefault()
        /* display todos with value 'not done' from current list,  remove save button & change titel */
        list.forEach(item => item.showContent = true)
        List(list, false)
        todos(list, false)
    })
}