const MyCV = () => {
  const myProfile = {
    expertises: [
      { id: 1, label: "MS Word", rank: 5 },
      { id: 2, label: "MS Excel", rank: 3 },
    ],
    skills: [
      { id: 1, content: "Skill 1" },
      { id: 2, content: "Skill 2" },
      { id: 3, content: "Skill 3" },
    ],
  };
  return (
    <div className="my-cv flex gap-x-5">
      <div className="cv_left bg-blue-800 w-[250px] text-white px-[40px]">
        <h2>Personal Skills</h2>
        <ul className="list-disc">
          {myProfile.skills.map((skill) => {
            return <li key={skill.id}>{skill.content}</li>;
          })}
        </ul>
      </div>
      <div className="cv_right bg-white flex-1">cv_right</div>
    </div>
  );
};

export default MyCV;
