import {useState} from 'react'
export function DarkModeApp() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <h1>DarkMode App</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </div>
    );

}