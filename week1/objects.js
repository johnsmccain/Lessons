
const Car = {
    name: "Lexus",
    color: "Black",
    type: "Jeep",
    steering: function (direction) {
        if (direction === "l"){
            return "moving to the left"
        } else if (direction === "r"){
            return "moving to the right"
        } else {
            return "moving forward"
        }
    }
}

Car.brake = function () {
    return "Stop"
}

console.log(Car.name)
console.log(Car.color)
console.log(Car.type)
console.log(Car.steering("r"))
console.log(Car.brake())

