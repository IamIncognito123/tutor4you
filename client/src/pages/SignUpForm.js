import React, { useState } from 'react';
// import '../styling/SignUpForm.css'

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gradeLevel, setGradeLevel] = useState('9');
  const [math, setMath] = useState(false);
  const [science, setScience] = useState(false);
  const [english, setEnglish] = useState(false);
  const [history, setHistory] = useState(false);

  // state handlers

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: submit the form data to the server
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Grade Level:
          <select value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)}>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </label>
        <label>
          Subjects:
          <input type="checkbox" checked={math} onChange={(e) => setMath(e.target.checked)} /> Math
          <input type="checkbox" checked={science} onChange={(e) => setScience(e.target.checked)} /> Science
          <input type="checkbox" checked={english} onChange={(e) => setEnglish(e.target.checked)} /> English
          <input type="checkbox" checked={history} onChange={(e) => setHistory(e.target.checked)} /> History
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

