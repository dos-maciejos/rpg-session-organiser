export const daysCalc = (day, weekday) => {  
    for(let i = 0; i < 7; i++) {
        if(parseInt(day + i) % 7 === weekday) {
            return day - i;
        } 
    }
}  