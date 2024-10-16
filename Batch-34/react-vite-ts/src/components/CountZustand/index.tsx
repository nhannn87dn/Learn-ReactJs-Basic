import useCount from "../../hooks/useCount"

const CountZustand = () => {
    const {count, handlerDown,handlerUp} = useCount()
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={handlerDown}>Down</button><button onClick={handlerUp}>Up</button>
      </div>
    )
  }

export default CountZustand