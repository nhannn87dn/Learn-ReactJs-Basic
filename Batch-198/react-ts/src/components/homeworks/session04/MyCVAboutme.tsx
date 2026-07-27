import MyCVTitle from "./MyCVTitle";
import RateDots from "./RateDots";

const MyCVAboutme = () => {
  return (
    <div>
      <MyCVTitle title="About Me" />
      <RateDots rate={3} />
      <RateDots rate={2} />
    </div>
  );
};

export default MyCVAboutme;
