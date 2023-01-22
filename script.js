function update() {
    let now = new Date();
    let dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";
        if (hou == 0) {
            hou = 12;
        }
        else if (hou >= 12) {
            pe = "PM";
        }
        if (hou > 12) {
            hou = hou - 12;
        }

    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], ("0" + dnum).slice(-2), yr, ("0" + hou).slice(-2), ("0" + min).slice(-2), ("00" + sec).slice(-2), pe];

    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.textContent = values[i];
    }
}

function initialize() {
    update();
    window.setInterval(update, 1);
}


initialize()