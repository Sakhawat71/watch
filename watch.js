
let num = 0;
let intervalId;

const start = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            num++;
            const showFild = document.getElementById("show-fild");
            showFild.textContent = num;
        }, 500);
    }
}


const stop = () => {

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }

}


const reset = () => {
    num = 0;
    const showFild = document.getElementById("show-fild");
    showFild.textContent = num;
}