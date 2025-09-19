/** 
export default function ToDo({task, isDone}){

    return(
        <li>Task: {task} </li>
    )
}
*/


/*
//Todo if else Another way : 2

export default function ToDo({task, isDone, time= 0}){

    if (isDone === true) {
        return <li>Done: {task} Duration: {time}</li>
    }
    else {
        return <li>Pendng: {task}</li>
    }
}
*/



/*
//Todo conditional rendering : 3 ternary
// condion ? true : false

export default function ToDo({task, isDone, time= 0}){
    return isDone  ?  <li>Done: {task} Time: {time}</li>  :  <li>Not Done: {task}</li>
}
*/


/*
//Todo conditional rendering : 4 && 
export default function ToDo({task, isDone, time= 0}){
    return isDone  && <li>Done Task: {task} Time: {time}</li>
}
*/



/*
//Todo conditional rendering : 5 ||
export default function ToDo({task, isDone, time= 0}){
    return isDone  || <li>Not Done Task: {task} Time: {time}</li>
}
*/



// Todo conditionl rendering : 6 
export default function ToDo({task, isDone, time}){

    const displayTime = time ? time : 100;

    let listItem;

    if (isDone === true) {
       listItem = <li>Done Task: {task} Time: {displayTime}</li>
    }
    else {
        listItem = <li>Pendng: {task}</li>
    }
    return listItem;
}