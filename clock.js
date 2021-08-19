 
 
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

    let weekdays = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

    let monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];

    if( minutes < 10 ){
        minutes = "0" + minutes;
    } if ( seconds < 10 ){
        seconds = "0" + seconds;
    }

    
    const nombreDia = weekdays[dayName];
    const nombreMes = monthNames[month];

    clock.textContent = hours + ":" + minutes + ":" + seconds;

    data.textContent = nombreDia + " " + numberDay + " del " + nombreMes + " del " + year ;
   });

    
   
