type ButtonTypeProps = {
  onClick: () => void;
  children?: React.ReactNode;
}

type PlayButtonProp = {
  movieName: string
}

function Button({ onClick, children } : ButtonTypeProps) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }
  


  function PlayButton({ movieName } : PlayButtonProp) {
    //function event handler
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }
  
    return (
      <Button onClick={handlePlayClick}>
        Play "{movieName}"
      </Button>
    );
  }
  
  function UploadButton() {
    return (
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    );
  }
  
  export default function Toolbar() {
    return (
      <div>
        <PlayButton movieName="Kiki's Delivery Service" />
        <UploadButton />
      </div>
    );
  }