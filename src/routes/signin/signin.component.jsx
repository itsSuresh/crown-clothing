import { getUserDocFromAuth, signInWithGooglePopup,signInwithGoogleRedirect,auth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () =>{
    const logGoogleUser = async () =>{
       const {user} = await signInWithGooglePopup();
    //    console.log(response.user.uid)
        const userDocRef = await getUserDocFromAuth(user)
    }
    return(
        <div>
            <h1>welcome to signin page</h1>
            <button onClick={logGoogleUser}>
                sign-in with google
            </button>
            <SignUpForm />
            {console.log('signin form executed')}
        </div>
    )
}

export default SignIn;