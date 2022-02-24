console.log('happy mo :|')

function date() {
    const now = new Date();
    return {
        hour: now.getHours().toString().length == 1 ? "0"+ now.getHours(): now.getHours(),
        minute: now.getMinutes().toString().length == 1 ? '0'+  now.getMinutes() : now.getMinutes(),
        second: now.getSeconds(),
        month: now.getMonth(),
        day:  now.getDay()
    }
}


every().second(()=>{
    $hour.text(`${date().hour}:${date().minute}`)
    $hour.setAttribute('date-second', date().second)
    $d.text(date().day)
})