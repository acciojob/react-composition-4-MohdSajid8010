
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [formData, setFormData] = useState({ name: "", email: "", password: "" });
  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} /><br/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} /><br/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} /><br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
