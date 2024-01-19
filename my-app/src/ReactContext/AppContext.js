import React, { createContext,useState } from "react";
export const AppContext = createContext();

function AppContextProvider(props) {
  const [userForm, setuserForm] = useState({
    title:"",
    details:""
  });
  

  const [userData,setUserData]=useState([{title:"sss",details:"sss"}])

  
  const handleChangeTitle=(event)=>{
    setuserForm({...userForm,title:event.target.value})

  }
  const handleChangeDetails=(event)=>{

    setuserForm({...userForm,details:event.target.value})

  }

  const handleSubmit=(event)=>{
    event.preventDefault();
  
    if(userForm.title && userForm.details){
      setUserData(userData.push(userForm))
      console.log(userData)
    }
  }
  
  const deleteItem=(item)=>{
    console.log(item)

  }
  const value = {
    userData,
    userForm,
    handleChangeTitle,
    handleChangeDetails,
    handleSubmit,
    deleteItem,
  
  
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export default AppContextProvider;
 
