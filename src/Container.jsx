import Stats from "./Stats";
import TextArea from "./TextArea";
import { useState } from "react";

export default function Container() {
  const[text , setText] = useState("");
  return (
    <main className="container">
        <TextArea value={text} action={setText}/>
        <Stats value={text} />
    </main>
  )
}
