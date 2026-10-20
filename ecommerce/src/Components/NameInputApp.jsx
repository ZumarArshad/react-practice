import { useState } from "react";
export function NameInputApp() {
  const [name, setName] = useState("");
  return (
    <div className="name-input-block">
      <h1>Name Input App</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      ></input>
      {name.trim() ? <p>Hello, {name}!</p> : <p>Please enter your name.</p>}
    </div>
  );
}
