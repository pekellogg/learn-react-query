import { useState } from "react";
import useNewUserMutation from "./useNewUserMutation";

export default function NewUserForm() {
  const [emailValue, setEmailValue] =  useState("");

  const [fNameValue, setFNameValue] =  useState("");

  const [lNameValue, setLNameValue] =  useState("");

  const [passwordValue, setPasswordValue] =  useState("");

  const handleEmailChange = (event) => {
		setEmailValue(event.target.value);
	};

	const handleFNameChange = (event) => {
		setFNameValue(event.target.value);
	};

  const handleLNameChange = (event) => {
		setLNameValue(event.target.value);
	};

  const handlePasswordChange = (event) => {
		setPasswordValue(event.target.value);
	};

	const handleSubmit = (event) => {
    event.preventDefault();

    useNewUserMutation.mutate({
      email: emailValue,
      first_name: fNameValue,
      last_name: lNameValue,
      password_digest: passwordValue
    })

    setEmailValue("");
    setFNameValue("");
    setLNameValue("");
    setPasswordValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fName">First Name:</label>
      <br />
      <input
        id="fName"
        name="fName"
        onChange={handleFNameChange}
        required
        type="text"
        value={fNameValue}
      />

      <br /><br />

      <label htmlFor="lName">Last Name:</label>
      <br />
      <input
        id="lName"
        name="lName"
        onChange={handleLNameChange}
        required
        type="text"
        value={lNameValue}
      />

      <br /><br />

      <label htmlFor="email">Email:</label>
      <br />
      <input
        id="email"
        name="email"
        onChange={handleEmailChange}
        required
        type="email"
        value={emailValue}
      />

      <br /><br />

      <label htmlFor="password">Create Strong Password:</label>
      <br />
      <input
        id="password"
        name="password"
        onChange={handlePasswordChange}
        required
        type="password"
        value={emailValue}
      />

      <br /><br />

      <button
        disabled={useNewUserMutation.isLoading}
        type="submit"
      >
        Create Account
      </button>
    </form>
  );
}