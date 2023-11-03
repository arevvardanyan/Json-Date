const getWeekOfMonth = function(date){
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate()

    return Math.ceil((dayOfMonth + dayOfWeek) / 7)
}
const result = getWeekOfMonth(new Date(2017, 10, 9));
console.log(result)