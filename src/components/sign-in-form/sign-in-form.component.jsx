import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  getUserDocFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss';

const defaultFormInputFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formInputFields, setFormInputFields] = useState(
    defaultFormInputFields
  );
  const { email, password } = formInputFields;

  console.log(formInputFields);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    //    console.log(response.user.uid)
    const userDocRef = await getUserDocFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInputFields({ ...formInputFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
        const response = await signInAuthWithEmailAndPassword(email,password)
        console.log(response)
    }catch(error){
        switch(error.code){
            case 'auth/wrong-password':
                alert("incorrect password for email");
                break;
            case 'auth/user-not-found':
                alert("no user associated with this email");
                break;
            default:
                console.log('error',error.message)
        }
    }
 
};

  return (
    <div className="sign-in-container">
      <h2>Already have an account ? sign-in here </h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit" buttonType="inverted">
            Sign-In
          </Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google-Sign-In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
