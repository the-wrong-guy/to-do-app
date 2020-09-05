 const taskReducer = (state = {},action) =>{
     switch(action.type){
         case "ADD_TASK" : {
             console.log("A task is Added");
             return state
         }
         case "ADD_TASK_ERR" : {
             console.log("An error occurred");
             return state
         }
         default : 
         return state
     }
 }

 export default taskReducer