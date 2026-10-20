import { useState } from "react";
export function CharacterCounter() {
   const [text, setText] = useState("");
    return (
      <div className="character-counter-block">
        <h1>Character Counter Block</h1>
          <textarea value={text} onChange={(e)=> setText(e.target.value)} placeholder="Type something..."></textarea>
          <p>You have typed {text.length} characters.</p>
      </div>
 );
}