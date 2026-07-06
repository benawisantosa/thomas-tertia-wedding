function pad(num){
    return ('0'+num).slice(-2);
}

function updateCountdown(){

    const target =
        new Date("September 5, 2026 11:00:00").getTime();

    const now = new Date().getTime();

    const distance = target - now;

    if(distance<=0){

        document.getElementById("counter").innerHTML =
            "💖 We Are Married 💖";

        clearInterval(timer);

        return;
    }

    const days =
        Math.floor(distance/(1000*60*60*24));

    const hours =
        Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes =
        Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds =
        Math.floor((distance%(1000*60))/1000);

    document.getElementById("counter").innerHTML =
        days + " Days, " +
        pad(hours) + " Hours, " +
        pad(minutes) + " Minutes, " +
        pad(seconds) + " Seconds";

}

updateCountdown();

const timer =
setInterval(updateCountdown,1000);