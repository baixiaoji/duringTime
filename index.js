/**
 * @Author Baixiaoji
 * @param {*} time 
 * 
 * @example
 * const end = new Date(update);
 * const start = new Date(createdTime)
 * duringTime(end - start);
 */
function duringTime(time) {
    const timeArray = [];
    const minuteTime = 60 * 1000;
    const hourTime = 60 * minuteTime;
    const dayTime = hourTime * 24;
    timeArray.push(Math.floor(time / dayTime));
    timeArray.push(Math.floor((time%dayTime)/hourTime));
    timeArray.push( Math.ceil((time%hourTime)/minuteTime));
    
    return this.formatterTime(timeArray)
}
function formatterTime(timeArray) {
    let str = ''
    this.emptyMinute(timeArray)
    console.log(timeArray)
    const stringArray = ['天', '小时', '分钟']
    timeArray.map((current, i) => {
        if(current > 0){
            str += current + stringArray[i]
        }
    })
    console.log(str)
    return str;
}
function emptyMinute(timeArray){
    if(timeArray[0]){
        timeArray[timeArray.length-1] = 0
    }
}