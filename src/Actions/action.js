
export const addTask = (task) =>{
    return (dispatch, getState, {getFirebase})=>{
        const firestore = getFirebase().firestore();
        firestore
        .collection("tasks")
        .add({
            task : task,
            date : new Date()
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