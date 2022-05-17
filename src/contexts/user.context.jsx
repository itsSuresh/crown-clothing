import { createContext, useEffect, useState } from "react";
import {
  createUserDocFromAuth,
  onAuthStateChangedHandler,
  onAuthStateChangedListener,
  userSignOut,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // userSignOut();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    console.log("executed");
    return unsubscribe; // onAuthStateChanged will run unsubscribe when the component unmounts
  }, []);

  return (
    <UserContext.Provider value={value}>
      {" "}
      {props.children}{" "}
    </UserContext.Provider>
  );
};

