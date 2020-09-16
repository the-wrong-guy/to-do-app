export const signIn = creds =>{
    return(dispatch,getState, {getFirebase}) =>{
        const firebase = getFirebase()

        firebase
         .auth()
         .signInWithEmailAndPassword(creds.email,creds.password)
         .then(()=>{
             dispatch({type : "SIGN_IN"});
         })
         .catch(err=>{
             dispatch({type : "SIGN_IN_ERR"},err)
         })
    }
}