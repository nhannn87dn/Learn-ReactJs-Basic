import ResumeTitle from "./ResumeTitle";
import { dataCV } from "./data";

const ResumeSkills = () => {
  return (
    <div>
      <ResumeTitle title="Skills" />
      <ul className="list-disc list-inside">
        {dataCV.personalSkills &&
          dataCV.personalSkills.map((skill) => (
            <li key={skill.id}>{skill.skill}</li>
          ))}
      </ul>
    </div>
  );
};

export default ResumeSkills;
