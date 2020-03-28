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
        currentValue: ()=>{
            return counter;
        }
    }
}











