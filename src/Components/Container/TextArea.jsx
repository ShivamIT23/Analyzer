import Warning from "./Warning";
import { useRef } from "react";

export default function TextArea({ value, action }) {
  const errorMsg = useRef("");

  function handleChange(e) {
    let newText = e.target.value;


    if (newText.includes("<script>")) {
      errorMsg.current = "<script> tag";
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      errorMsg.current = "@ symbol";
      newText = newText.replace("@", " ");
    } else {
      errorMsg.current = "";
    }
    action(newText);
  }


  return (
    <div className="textarea">
      <textarea
        value={value}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {errorMsg.current ? <Warning errMsg={errorMsg.current} /> : null}
    </div>
  );
}
