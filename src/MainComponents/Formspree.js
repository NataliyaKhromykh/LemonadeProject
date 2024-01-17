import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function Form() {
    const [state, handleSubmit] = useForm("xvoybnlo");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    } 
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
        </label>
        <input type="email" name="email" placeholder="natashakhromykh@gmail.com" required/>
        
        <label htmlFor="email">
          Name
        </label>

        <input 
        type="text" 
        name="name" 
        placeholder="Nataliya Khromykh" required/>

        <label htmlFor="email">
          Phone
        </label>
        <input type="tel" name="phone" required/>

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

        <button type="submit" disabled={state.submitting}>
          Sign up
        </button>
      </form>
      </div>
    );
  }

  export default Form;