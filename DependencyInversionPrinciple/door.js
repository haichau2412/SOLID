const frontDoor = {
    sizeAllowedToPass: ["small", "medium"],
    isOpen: "open",
    doorStatus: function () {
        console.log(`Door is ${this.isOpen}`)
        return this.isOpen;
    },
    switchDoor: function () {
        this.isOpen = this.isOpen === "open" ? "closed" : "open";
    }
}

let objectPassingNotifying = function (door, object) {

    if (door.doorStatus() === "open") {
        if (door.sizeAllowedToPass.includes(object.size)) {
            console.log(`${object.name} has just passed the door`);
            return true;
        }
        console.log(`${object.name} with size: ${object.size} can't pass the door`);
        return false;

    }
    return false;
}

const chair = {
    name: "Luxury Chair",
    size: "big",
    price: "$200",
    weight: "2kg"
}
const dog = {
    name: "White Chihuahua",
    size: "small",
    legs: "4",
    weight: "3kg"
}


objectPassingNotifying(frontDoor, chair);
objectPassingNotifying(frontDoor, dog);
frontDoor.switchDoor();
objectPassingNotifying(frontDoor, dog);