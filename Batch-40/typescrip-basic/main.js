const vehicles = ["mustang", "f-150", "expedition"];
//console.log(vehicles[1]);

const [, v] = vehicles; // goij Destructing

//console.log("<<=== 🚀 v ===>>", v);

const [m, ...n] = vehicles;

// console.log("<<=== 🚀 m ===>>", m);
// console.log("<<=== 🚀 n ===>>", n);

let vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
  pass: "jhjhjhjhj",
};
//vehicleOne.color = 'blue';
vehicleOne = { ...vehicleOne, color: "blue" };
vehicleOne = { ...vehicleOne, seats: 4 };

console.log("<<=== 🚀 vehicleOne ===>>", vehicleOne);

const { pass, ...afterRemove } = vehicleOne;

console.log("<<=== afterRemove ===>>", afterRemove);
