import useCount from "../../hooks/useCount"

const CountHangXom = () => {
    const {handlerDown,handlerUp} = useCount()
    return (
      <div>
        <button onClick={handlerDown}>Down</button><button onClick={handlerUp}>Up</button>
      </div>
    )
  }

export default CountHangXom