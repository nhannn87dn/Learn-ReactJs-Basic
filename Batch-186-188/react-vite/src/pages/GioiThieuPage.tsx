import React from "react";

const GioiThieuPage = () => {
  const [isShow, setIsShow] = React.useState(false);

  //const isShow = false;

  // if (isShow) return <div>Let show me !</div>;
  // else return null;
  //return isShow === true ? <div>Let show me !</div> : null;
  //return isShow ? <div>Let show me !</div> : null;
  const onHandleShowDiv = () => {
    setIsShow(!isShow);
    console.log("clicked");
  };

  const onHandleTivi = (channel: string) => {
    console.log("open ", channel);
  };

  return (
    <>
      <button
        onClick={() => {
          onHandleTivi("VTV1");
          console.log(isShow);
        }}
        className="btn btn-default"
      >
        VTV1
      </button>
      <button onClick={onHandleShowDiv} className="btn btn-default">
        Show
      </button>
      {isShow && <div>Let show me !</div>}
    </>
  );
};

export default GioiThieuPage;
