 
 
   setInterval(() =>  {
    const clock = document.querySelector("#clock");
    const data = document.querySelector("#data");

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayName = date.getDay();
    let numberDay = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let am_pm = "AM";

    let weekdays = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

    let monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    if( minutes < 10 ){
        minutes = "0" + minutes;
    } if ( seconds < 10 ){
        seconds = "0" + seconds;
    } if (hours > 12 ){
        am_pm = "pm"
    }

    
    const nombreDia = weekdays[dayName];
    const nombreMes = monthNames[month];

    clock.textContent = hours + ":" + minutes + ":" + seconds + " " + am_pm ;

    data.textContent = nombreDia + " " + numberDay + " de " + nombreMes + " del " + year  ;

    
   });

    
   
