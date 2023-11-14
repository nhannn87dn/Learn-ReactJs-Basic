
import './App.css'

function Expert ({label, scorce}: {label: string, scorce: number}){

  const arrs = [1,2,3,4,5];

  return (
    <div className='flex items-center justify-between'>
      <div>{label}</div>
      <div className='flex gap-x-1'>
        {
          arrs.map((item)=>{
            return (
              <>
              {
                item > scorce ? (
                  <span className='w-[10px] h-[10px] rounded-full flex bg-white'></span>
                ) : (
                  <span className='w-[10px] h-[10px] rounded-full flex bg-orange-400'></span>
                )
              }
              </>
              
              
            )
          })
        }
        
      </div>
    </div>
  )
}


function App() {
 

  return (
    <div className='container mx-auto'>
      <div className="layout_wrapper flex gap-x-5">
            <div className="col_left bg-indigo-700 w-[300px] ">
              <Expert label='MS Word' scorce={5} />
              <Expert label='MS Exel' scorce={3} />
            </div>
            <div className="col_right flex-1">
            col_right
            </div>
      </div>
    </div>
  )
}

export default App
