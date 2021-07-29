import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button"
import styles from './AddUser.module.css';

const AddUser = () => {
const [userName, setUserName] = useState("");
const [userAge, setUserAge] = useState("");

  const userNameChangeHandler = event => {
    setUserName(event.target.value)
  }

  const userAgeChangeHandler = event => {
    setUserAge(event.target.value)
  }

  const addUserHandler = (event) => {
    event.preventDefault(event.target.value);
    console.log(userAge, userName);
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"onChange={userAgeChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
