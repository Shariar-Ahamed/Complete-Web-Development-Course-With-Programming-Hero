/** 
export default function ToDo({task, isDone}){

    return(
        <li>Task: {task} </li>
    )
}
*/


//Todo Another way

export default function ToDo({task, isDone, time= 0}){

    if (isDone === true) {
        return <li>Done: {task} Duration: {time}</li>
    }
    else {
        return <li>Pendng: {task}</li>
    }
}