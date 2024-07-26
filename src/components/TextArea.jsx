import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const charactersLength = text.length;

  const handleChange = (e) => {
    const pattern = /[@#$]/;
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setMessage("Script tags are not allowed!");
    } else if (pattern.test(newText)) {
      newText = newText.replace(pattern, "");
      setMessage("@, # and $ symbols is not allowed!");
    } else {
      setMessage("");
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
        className="block p-2.5 md:w-1/2 w-full text-sm h-[260px] md:h-full rounded-t-lg md:rounded-bl-lg md:rounded-r-none border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your thoughts here..."
      />
      <Warning message={message} />
    </>
  );
}
