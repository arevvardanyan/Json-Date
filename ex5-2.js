const threeDaysAgo = function(date){
    date.setDate(date.getDate() - 3)
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

    return `${year}-${month}-${day}`
}


console.log(threeDaysAgo( new Date ( 1965 , 3 , 15 )))