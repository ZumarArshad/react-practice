import { useState } from "react";
export function Password() {
   const [password, showPassword] = useState(false);
    return (
      <div className="password-block">
        <h1>Password Block</h1>
        <input type={password ? "text" : "password"} placeholder="Enter your password" />
        <button onClick={() => showPassword(!password)}>
          {password ? "Hide" : "Show"} Password
        </button>
      </div>
    );
  }