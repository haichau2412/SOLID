function counterModifier() {
    let counter = 0;
    return {
        setInitValue: (init) => {
            counter = init || counter;
        },
        addByValue: (value) => {
            counter += value;
        },
        subByValue: (value) => {
            counter -= value;
        },
        currentValue: () => {
            return counter;
        }
    }
}

let counter = counterModifier();

counter.addBy2 = () => {
    counter.addByValue(2)
};
counter.addBy2()
console.log(counter.currentValue());








