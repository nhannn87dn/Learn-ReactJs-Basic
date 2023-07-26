function helloName(name){
    console.log(name);

}

//arrow functions không trả về
const helloName = (name) => {
    console.log(name);
}
//arrow functions có return
const sumTotal = (a,b) => a + b;

const getDiscount = (level) =>{
    if(level === 'vip'){
        return 10;
    }
}
