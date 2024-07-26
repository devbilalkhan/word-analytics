import TextArea from "./TextArea";
import Stats from "./Stats";

export default function Container() {
  return (
    <main>
      <section className=" bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16">
          <div className="flex flex-col md:flex-row bg-gray-800 border  border-gray-700 rounded-lg h-[520px] relative shadow-xl">
            <TextArea />
            <Stats />
          </div>
        </div>
      </section>
    </main>
  );
}
