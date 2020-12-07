window.onload = function() {
    showTime();
}
let eng_mont = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat'];

function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    //var ms = date.getMilliseconds();
    let day = date.getDay();
    let month = date.getMonth();
    let dat = date.getDate();
    let year = date.getFullYear();
    let d = date.getDate();
    var sessoion = "AM";
    setTimeout(showTime, 0);
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        sessoion = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    var time = hour + ':' + minute + ':' + second + ':' + sessoion;
    var dates = days[day] + ',' + eng_mont[month] + '-' + d + ',' + year;
    console.log(dates);
    document.getElementById('clock').innerHTML = time;
    document.getElementById('date').innerHTML = dates;

}