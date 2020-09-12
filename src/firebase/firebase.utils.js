import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'
const config={
    apiKey: "AIzaSyDgLoudkmMN18dB1mnAtBjkbqS6ygv832g",
    authDomain: "erudite-scanner-283712.firebaseapp.com",
    databaseURL: "https://erudite-scanner-283712.firebaseio.com",
    projectId: "erudite-scanner-283712",
    storageBucket: "erudite-scanner-283712.appspot.com",
    messagingSenderId: "1024363534256",
    appId: "1:1024363534256:web:4252fade492ea4b01aa875",
    measurementId: "G-5CDETWK8K4"
}
  
export const createUserProfileDocument = async (userAuth,additionalData) => {
    if (!userAuth) return 
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if (!snapShot.exists) {
        console.log(userAuth)
        const { displayName, email } = userAuth   
        const createdAt = new Date()
        
        try {
            
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (err) {
            console.log('error creating user',err.message);
        }
    }
    return userRef
}

firebase.initializeApp(config)


export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase