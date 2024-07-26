import TextArea from "./TextArea";
import Stats from "./Stats";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");

  const wordCount = (text) => {
    const words = text.match(/\b\w+\b/g);
    return words ? words.length : 0;
  };

  const state = {
    words: wordCount(text),
    characters: text.length,
  };

  return (
    <main>
      <section className=" bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-8">
          <div className="flex justify-end px-3 py-1">
            <button
              onClick={() => setText("")}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              <small>Reset</small>
            </button>
          </div>

          <div className="flex flex-col md:flex-row bg-gray-800 border  border-gray-700 rounded-lg h-[520px] relative shadow-xl">
            <TextArea text={text} setText={setText} />
            <Stats state={state} />
          </div>
        </div>
      </section>
    </main>
  );
}
