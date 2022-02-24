// import { anime } from "./anime.js" 
const opacity = [0, 1]
const easing = "easeOutExpo"
function date() {
    const now = new Date();
    var month = void 0;
    switch(now.getMonth()){
        case 0: 
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2: 
            month = "March";
            break;
        case 3: 
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July"
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
        default: 
            month = "Cucumber"

    }
    return {
        hour: now.getHours().toString().length == 1 ? "0"+ now.getHours(): now.getHours(),
        minute: now.getMinutes().toString().length == 1 ? '0'+  now.getMinutes() : now.getMinutes(),
        second: now.getSeconds(),
        month: month,
        date:  now.getDate()
    }
}

function setDate() {
    $h.text(date().hour)
    $m.text(date().minute)
    $hour.setAttribute('data-second', date().second)
    $date.text(date().date);
    $month.text(date().month);
}
setDate()

every().second(setDate)
var height = $modalAdd.getBoundingClientRect().height;
$add.on('click', function () {
    $modalAdd.css('display', 'flex')
    anime({
        targets: $modalAdd,
        scale: 1,
        opacity: opacity,
        easing: easing
    })
})

$modalAdd.on('click', function (event) {
    console.log(event.target == $modalAdd ? $modalAdd : '')
    if(event.target == $modalAdd) {
        anime.timeline({
            targets: $modalAdd,
            opacity: opacity
        }).add({
            scale: 5,
            easing: easing
        }).finished.then(()=>{
            $modalAdd.css('display', 'none')
        })
    } // $modalAdd.css('display', 'none')
})