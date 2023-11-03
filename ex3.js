const getDay = function(str){
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const day =(new Date(str)).getDay();
    return daysOfWeek[day]
}

getDay("12/07/2016")
getDay("09/04/2016")
getDay("12/08/2011")