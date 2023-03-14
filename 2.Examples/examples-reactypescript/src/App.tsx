import Gallery from "./SessionsExamples/session-03-State/NeedState/GalleryNoState"
import GallerySate from "./SessionsExamples/session-03-State/NeedState/GalleryState"
import UpdateState from "./SessionsExamples/session-03-State/UpdateState"


function Signup() {
  return (
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}


function App() {

  const handlerClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert('Clicked!');
  }

  return (
    <div className='App'>
      {/* <UpdateState /> */}
      <GallerySate />
      <Signup />

      <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handlerClick(e)}> Click Me</button>

    </div>
  )
}

export default App
