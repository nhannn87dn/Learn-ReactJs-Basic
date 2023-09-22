import {create} from 'zustand';

type CountApp ={
    count: number,
    handlerDown: ()=>void,
    handlerUp: ()=>void,
}

const useCount = create<CountApp>((set) => ({
    count: 0,
    handlerDown: () => set((state) => ({ count: state.count - 1 })),
    handlerUp: () => set((state) => ({ count: state.count + 1 })),
  }));
  
  export default useCount;