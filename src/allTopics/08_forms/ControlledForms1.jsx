import { useState } from "react";

const ControlledForms1 = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [allUsers, setAllUsers] = useState([
    { email: "abc@gmail.com", password: "123" },
  ]);

  function handleEmail(e) {
    setEmailInput(e.target.value);
  }

  function handlePassword(e) {
    setPasswordInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: emailInput,
      password: passwordInput,
    };
    console.log(user);

    setAllUsers([...allUsers , user]) // store previous as well as current user

    // clear input fields
    setEmailInput("");
    setPasswordInput("");
  }

  return (
    <div>
      <h1>Learn Controlled Forms </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={emailInput}
          onChange={handleEmail}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          value={passwordInput}
          onChange={handlePassword}
        />
        <br />
        <button type="submit">submit</button>
      </form>

      <hr />

      <h1>All Users</h1>

      {allUsers.map((ele) => {
        let { email, password } = ele;
        return (
          <div>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
          </div>
        );
      })}


    </div>
  );
};

export default ControlledForms1;
