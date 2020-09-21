const authReducer = (state = {},action) =>{
    switch(action.type){
        case "SIGN_IN" :
            console.log("Welcome back...")
            return state
        case "SIGN_IN_ERR" :
            console.log("Sign in Error")
            return state
        case "SIGN_OUT":
            console.log("You signed out..");
            return state;   
        case 'SIGN_UP':
            console.log("welcome")
            return state
        case 'SIGN_UP_ERR':
            console.log("Error in Sign Up")
            return state     
        default:
            return state            
    }
}

export default authReducer 