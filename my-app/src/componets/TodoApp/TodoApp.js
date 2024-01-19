
import React,{ useContext } from "react";
import "./TodoApp.css";
import { AppContext } from "../../ReactContext/AppContext";

function TodoApp() {
  const {handleChangeDetails,handleChangeTitle,userForm,userData,deleteItem,handleSubmit} =useContext(AppContext)
  return (
    <div className="todo-container">
      
      <form className="user-input" onSubmit={handleSubmit} >
      <h1>TodoApp</h1>
        <div>
          <input type="text" placeholder="Enter the title" onChange={handleChangeTitle} name="title" value={userForm.title}></input>
          <h1>{userForm.title}</h1>
        </div>
        <div>
          <textarea type="text" placeholder="Enter the Detials" onChange={handleChangeDetails} name="details" value={userForm.details}></textarea>
          <h1>{userForm.details}</h1>
        </div>

        <button type="submit" >Add</button>
      </form>

      <ul>
      {userData && userData.map((obj,index)=>(
        <li key={index}>
          {obj.title}<i class="fa-solid fa-trash" onClick={()=>deleteItem(index)}></i>{obj.title}
        </li>
      ))}
        
      </ul>

    </div>
  );
}

export default TodoApp;
