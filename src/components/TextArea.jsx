import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text, setText] = useState("");
  const [warn, setWarning] = useState(false);

  const handleChange = (e) => {
    setWarning(false);
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarning(true);
      newText = newText.replace("<script>", "");
    }
    setText(newText);
  };
  return (
    <>
      <textarea
        onChange={handleChange}
        value={text}
        id="message"
        spellCheck="false"
        rows="4"
        className="block p-2.5 w-full  text-sm h-[400px] md:h-full rounded-t-lg md:rounded-bl-lg   border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your thoughts here..."
      />
      {warn && <Warning />}
    </>
  );
}
