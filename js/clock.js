const clock = document.querySelector("#clock");
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart("2", 0);
    const minutes = String(date.getMinutes()).padStart("2", 0);
    const seconds = String(date.getSeconds()).padStart("2", 0);

    clock.innerText = hours + ":" + minutes + ":" + seconds;
    if (seconds === "00") {
        clock.style.color = "orange";
    } else {
        clock.style.color = "white";
    }
}
//
getClock();
setInterval(getClock, 1000);



