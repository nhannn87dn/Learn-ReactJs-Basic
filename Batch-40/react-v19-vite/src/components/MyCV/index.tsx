import Contact from "./Contact";
import Expertise from "./Expertise";

export default function MyCV() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="col-wrapper flex">
        <div className="col-left w-[300px] bg-blue-600 px-10 flex flex-col gap-y-4 py-10">
          <Contact />
          <Expertise />
        </div>
        <div className="col-right flex-1 bg-white p-10">right</div>
      </div>
    </div>
  );
}
