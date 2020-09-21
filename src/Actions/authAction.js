export const signInAuth = (email,password) =>{
    return(dispatch,getState, {getFirebase}) =>{
        const firebase = getFirebase()

        firebase
         .auth()
         .signInWithEmailAndPassword(email,password)
         .then(()=>{
             dispatch({type : "SIGN_IN"});
         })
         .catch(err=>{
             dispatch({type : "SIGN_IN_ERR"},err)
         })
    }
}

export const signOut = () =>{
    return(dispatch, getState,{getFirebase})=>{
        const firebase = getFirebase()
        firebase
        .auth()
        .signOut()
        .then(()=>{
            dispatch({type: "SIGN_OUT"})
        })
    }
}

export const signUpAuth = (email,password) =>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase()

        firebase
         .auth()
         .createUserWithEmailAndPassword(email,password)
         .then(()=>{
             dispatch({type : "SIGN_UP"})
         })
         .catch(err=>{
             dispatch({type: "SIGN_UP_ERR"},err)
         })
    }
}