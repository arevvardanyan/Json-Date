const monthName = function(num){
    const months = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun",
        "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"
      ];
    
    return months[num - 1]
}

console.log(monthName(3))