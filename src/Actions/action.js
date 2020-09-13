
export const addTask = (task,pinClick) =>{
    return (dispatch, getState, {getFirebase})=>{
        const firestore = getFirebase().firestore();
        firestore
        .collection("tasks")
        .add({
            task : task,
            date : new Date(),
            pinClick : pinClick
        })
        .then(()=>{
            dispatch({
                type : "ADD_TASK",
                task,
            });
        })
        .catch((err)=>{
            dispatch({
                type : "ADD_TASK_ERR",
                err,
            })
        })
    }
}

export const removeTask = task =>{
    return(dispatch,getState,{getFirebase})=>{
        const firestore = getFirebase().firestore();
        firestore
        .collection("tasks")
        .doc(task.id)
        .delete()
        .then(()=>{
            dispatch({
                type : "REMOVE_TASK",
                task,
            });
        })
        .catch((err)=>{
            dispatch({
                type : "REMOVE_TASK_ERR",
                err,
            })
        })
    }
}