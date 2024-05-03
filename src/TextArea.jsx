import Warning from "./Warning";
import { useRef } from "react";

export default function TextArea({ value, action }) {
  const isError = useRef(false);
  const errorMsg = useRef("");

  function handleChange(e) {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      isError.current = true;
      errorMsg.current = "<script> tag";
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      isError.current = true;
      errorMsg.current = "@ symbol";
      newText = newText.replace("@", " ");
    } else {
      errorMsg.current = "";
      isError.current = false;
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
      {isError.current ? <Warning errMsg={errorMsg.current} /> : ""}
    </div>
  );
}
