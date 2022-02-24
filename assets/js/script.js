// import { anime } from "./anime.js" 
function date() {
    const now = new Date();
    return {
        hour: now.getHours().toString().length == 1 ? "0"+ now.getHours(): now.getHours(),
        minute: now.getMinutes().toString().length == 1 ? '0'+  now.getMinutes() : now.getMinutes(),
        second: now.getSeconds(),
        month: now.getMonth(),
        date:  now.getDate()
    }
}


every().milliSecond(()=>{
    $hour.text(`${date().hour}:${date().minute}`)
    $hour.setAttribute('data-second', date().second)
    $d.text(date().date)
})