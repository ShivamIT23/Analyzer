import Stats from "./Stats";
import TextArea from "./TextArea";
import { useState } from "react";

export default function Container() {
  const[text , setText] = useState("");

  const numOfCharacter = text.length;
  const numOfWords = text.split(/\s/).filter((word)=> word!== "").length;
  return (
    <main className="container">
        <TextArea value={text} action={setText}/>
        <Stats numOfCharacter={numOfCharacter} numOfWords={numOfWords} />
    </main>
  )
}
