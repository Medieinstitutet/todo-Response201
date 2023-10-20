import { addTodo } from "./addTodo";
import { todos } from "./todos";

let show = false;

export const showAndHideElements = (e, hideElement, showElement) => {

    if(hideElement){
 

        hideElement.classList.add('hide')
        showElement

      
    }
    else{

        todos()

    }
 
    show = !show;





}
