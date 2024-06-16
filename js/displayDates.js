var today = document.querySelector('#today');
var todayDate = document.querySelector('#todayDate');
var date = new Date();

var tomorrow = document.querySelector('.tomorrow');
var overmorrow = document.querySelector('.overmorrow');

function displayDates(){
    today.innerHTML = getDayName(date.getDay());
    todayDate.innerHTML = ` ${date.getDate()} ${getMonthName(date.getMonth())}`;

    tomorrow.innerHTML = getDayName((date.getDay()+1)%7)
    overmorrow.innerHTML = getDayName((date.getDay()+2)%7)
}

function getDayName(index){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
    return days[index];
}

function getMonthName(index){
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[index];
}

displayDates();