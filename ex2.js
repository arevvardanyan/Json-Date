const daysOfMonth = function(year,month){

    return new Date(year, month,0).getDate();

}


const dayOfYear = function(str){
    let day = 0
    let newstr = str.split('/')

    for(let i = 0;i<newstr[0] - 1;i++){
        day +=daysOfMonth(newstr[1],i)
    }

    day += +newstr[1]
    return day 
}

const dec = dayOfYear("1/9/2019")
console.log(dec)