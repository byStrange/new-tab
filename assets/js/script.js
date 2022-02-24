// import { anime } from "./anime.js" 
const opacity = [0, 1]
const reversalOpacity = [1, 0]
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
    open()
})
$modalAdd.on('click', function (event) {
    console.log(event.target == $modalAdd ? $modalAdd : '')
    if(event.target == $modalAdd) {
        close()
    }
})

function close() {
    anime.timeline({
        targets: $modalAdd,
        opacity: 0
    }).add({
        scale: 5,
        opacity: 0,
        easing: easing
    }).finished.then(()=>{
        $modalAdd.css('display', 'none')
    })
}
function open() {
    $modalAdd.css('display', 'flex')
    anime({
        targets: $modalAdd,
        scale: 1,
        opacity: opacity,
        easing: easing
    })
    anime({
        targets: $modalAdd.querySelectorAll('*'),
        translateX: [-10, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: easing
    })
}

class Item {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.maxWidth = 20
    }
    make() {
        var template = `
            <div>
                <div class="title"><span id="title">${this.title}</span></div>
                <div class="desc">
                    <span id="desc">${this.content.slice(0, this.maxWidth)}...</span>
                </div>
            </div>
            <div>
                <button class="more" id="more"><span>
                    <i class="fas fa-chevron-right"></i>
                </span></button>
            </div>
        `
        this.template = template;
    }
    render() {
        this.make()
        let li = document.createElement('li');
            li.className = "item";
            li.innerHTML = this.template;
        $notes.appendChild(li)
    }
}

var  a= new Item('Hello', 'free guy')
a.render()