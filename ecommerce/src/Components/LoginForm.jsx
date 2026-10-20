import {useState} from 'react'
export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submittedEmail, setSubmittedEmail] = useState("");
    function handleLogin() {
     setSubmittedEmail(email);
    }
     return (
        <div className="login-form">
            <h1>Login Form</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            <button onClick={handleLogin}>Login</button>
             {submittedEmail && <p>Email entered: {submittedEmail}</p>}
        </div>
     );
}