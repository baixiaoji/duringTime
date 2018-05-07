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
    
    return formatterTime(timeArray)
}
function formatterTime(timeArray) {
    let str = ''
    const stringArray = ['天', '小时', '分钟']
    timeArray.map((current, i) => {
        if(current > 0){
            str += current + stringArray[i]
        }
    })
    return str;
}

export default duringTime;