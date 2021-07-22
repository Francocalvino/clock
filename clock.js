
(function(){
    let updateHour = function(){
        let date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            dayName = date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();
 
        let pHours = date.getElementById("hours"),
            pMinutes = date.getElementById("minutes"), 
            pSeconds = date.getElementById("seconds"),
            pDayName = date.getElementById("dayName"),
            pDay = date.getElementById('day'),
            pMonth = date.getElementById("month"),
            pYear = date.getElementById("year");

        let weekdays = ['Sunday', 'Moonday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        
        pDayName.textContent = weekdays[dayName];

        pDay.textContent = day;

        pYear.textContent = year;




    };

    updateHour();
})()