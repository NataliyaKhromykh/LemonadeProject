import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function Form() {
    const [state, handleSubmit] = useForm("xvoybnlo");
    if (state.succeeded) {
        return <p>Thanks for joining! But just a reminder: this is not a real offer!</p>;
    } 
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <div className="signingUpContainer">
        <label className="inputName" htmlFor="email">
          Email
        </label>
        <input className="messageInput" type="email" name="email" placeholder="natashakhromykh@gmail.com" required/>
        
        <label className="inputName" htmlFor="email">
          Name
        </label>

        <input className="messageInput"
        type="text" 
        name="name" 
        placeholder="Nataliya Khromykh" required/>

        <label className="inputName" htmlFor="email">
          Phone
        </label>
        <input className="messageInput" type="tel" name="phone" required/>

        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        </div>

        <button className="submitBtn" type="submit" disabled={state.submitting}>
          Sign up
        </button>
      </form>
      </div>
    );
  }

  export default Form;