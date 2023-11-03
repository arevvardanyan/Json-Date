const monthsInterval = function(month1,month2){
    let arr = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
    let months = 11
    let newArr = [];
    let dateStart = month1.getMonth();//11
    let dateEnd = month2.getMonth()
        
        for(let i = dateStart;i <= months;i++){
            newArr.push(arr[i])
            if(dateStart > dateEnd){
                if(i === 11){
                    i = -1;
                    months = dateEnd
                }
            }else if(dateEnd === dateStart){
                return arr
            }
                
            
            
        }
    return newArr
    
}
let march = new Date(2017,2,1)
let september = new Date(2018,0,1)
let january = new Date(2019,0,1);
console.log(monthsInterval(september,january))