import { useState } from "react";
import { createUserAuthWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const clearFields = () =>{
    setFormFields(defaultFormFields);
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
      alert("passwords donot match");
      return;
    }

    try{
      const response =await createUserAuthWithEmailAndPassword(email,password);
      
      const userDocRef = createUserDocFromAuth(response.user,{displayName})
      clearFields();
    }catch(error){
      if(error.code === 'auth/email-already-in-use')
      alert("user already exists - email already in use")
      console.log('user creation encountered an error',error)
    }

  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account ? </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitHandler}>

        <FormInput label={'display name'}
          type={'text'}
          onChange={handleChange}
          name={'displayName'}
          value={displayName}
        />
        <FormInput label="email"      
          type={"email"}
          onChange={handleChange}
          name={"email"}
          value={email}
        />
         <FormInput label={'password'} type={"password"}
          onChange={handleChange}
          name={"password"}
          value={password}
        />
        <FormInput label ="confirm password" type={"password"}
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

      <Button type="submit" buttonType='google'>
        Sign-up
      </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
