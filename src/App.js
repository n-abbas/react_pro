import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput.jsx';

const App = ()=> {
  const [values, setValues] = useState({
    username: "",
    email:  "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [{
    id:1,
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage: "Username should be 3-16 characters and shouldn't any special characters",
    label: "Username",
    Pattern: "^[A-Za-z0-9]{3,16}$",
    required:true,
  },
  {id:2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Please Enter Valid Email Address",
    label: "Email",
    required:true,
  },
  {id:3,
    name: "number",
    type: "int",
    placeholder: "Please enter your number",
    errorMessage: "Phone number should be in digits",
    label: "Phone Number",
    Pattern: "^[0-9]{11,11}$",
    required:true,
  },
  {id:4,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage: "Password should be 8-20 characters",
    label: "Password",
    Pattern: "^[A-Za-z0-9]$",
    required:true,
  },
  {id:5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Password don't match",
    label: "Confirm Password",
    Pattern: values.password,
    required:true,
  }]

  const handleSubmit = (e) => {
    e.preventDefault()    
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  console.log(values);


  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
           key={input.id}
           {...input} 
           value={values[input.name]}
           onChange={onChange} />)
        )}
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
