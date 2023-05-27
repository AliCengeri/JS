let name = prompt("Adınızı Giriniz:")
let setName = document.querySelector("#myName")
setName.innerHTML = `${name}`

function showTime() {
    var date = new Date();
    var dayNumber = date.getDay()
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    var day = days[dayNumber]
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = hour + ":" + minute + ":" + second + " " + day;
    document.querySelector("#myClock").innerText = time
    setTimeout(showTime, 1000);
}
showTime()