const room = {
    typeOfRoom: "basic",
    switchLight: (function () {
        let isOn = true;
        return () => {
            if (isOn) {
                isOn = false;
                console.log(`Light turn off`);
            } else {
                isOn = true;
                console.log(`Light turn on`);
            }
        }
    })()
}
function switchAirCondition() {
    let isOn = true;
    return () => {
        if (isOn) {
            isOn = false;
            console.log(`Turn off Air Condition`);
        } else {
            isOn = true;
            console.log(`Turn on Air Condition`);
        }
    }
}

let bedRoom = Object.assign(Object.create(room), { switchAirCondition: switchAirCondition() });
bedRoom.switchAirCondition();
bedRoom.switchAirCondition();
