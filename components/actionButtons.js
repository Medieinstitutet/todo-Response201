import { List } from "./function"




export const actionButtons = (list) => {



    const actionButtonsContainer = document.createElement('section')
    actionButtonsContainer.classList.add('actionButtonsContainer')
    let sortList = document.createElement('button')
    sortList.innerHTML = 'sort list'

    let notDone = document.createElement('button')
    notDone.innerHTML = 'left to do'

    let done = document.createElement('button')
    done.innerHTML = 'done'

    document.body.appendChild(actionButtonsContainer)
    actionButtonsContainer.appendChild(sortList);
    actionButtonsContainer.appendChild(notDone)
    actionButtonsContainer.appendChild(done)





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

        /* give back a sorted list and display todos with value 'not done' */
        List(list, '')

    })





    done.addEventListener('click', (e) => {
        e.preventDefault()
        /* display todos with value 'done' from current list */
        List(list, true)


    })



    notDone.addEventListener('click', (e) => {
        e.preventDefault()
        /* display todos with value 'done' from current list */
        List(list, false)


    })










}