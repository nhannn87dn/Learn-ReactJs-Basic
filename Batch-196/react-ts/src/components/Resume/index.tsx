import ResumeContacts from "./ResumeContacts";
import ResumeExpertises from "./ResumeExpertises";
import ResumeSkills from "./ResumeSkills";

const Resume = () => {
  return (
    <div className="cv_wrapper flex gap-x-[30px]">
      <div className="cv_lef w-[300px] bg-sky-700 text-white p-4">
        <ResumeContacts />
        <ResumeExpertises />
        <ResumeSkills />
      </div>
      <div className="cv_right flex-1 bg-white p-4">right</div>
    </div>
  );
};

export default Resume;
