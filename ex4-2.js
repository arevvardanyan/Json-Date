const longestTime = function(hour,minutes,seconds){
    const minute = minutes / 60;
    const second = seconds / 3600
    if(hour > minute && hour > second){
        return hour
    }else if(hour < minute && minute > second ){
        return minutes
    }
    return seconds
}


console.log(longestTime(15, 955, 59400))  