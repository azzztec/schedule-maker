let days = {
    '0': 'Воскресенье',
    '1': 'Понедельник',
    '2': 'Вторник',
    '3': 'Среда',
    '4': 'Четверг',
    '5': 'Пятница',
    '6': 'Суббота'
};
let newDate = '';
let weekDay = '';

function setDate(startDate, currentDay) {
    let dateArray = []
    let dateObj = {}

    if(startDate) {
        dateArray = startDate.split('-');
        dateObj = {
            day: ((+dateArray[2] + --currentDay) + ''),
            mounth: dateArray[1] - 1,
            year: dateArray[0]
        }

        newDate = new Date(dateObj.year, dateObj.mounth, dateObj.day);
        weekDay = days[newDate.getDay()];

        return `${(newDate.getDate()+'').length == 1 ? '0' + newDate.getDate() : newDate.getDate()}.${(newDate.getMonth()+'').length == 1 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1}.${newDate.getFullYear()}`;
    } else return '';
}

function setWeekDate(weekDay, currentDay) {
    if(newDate && !weekDay && !currentDay)
        return `${days[newDate.getDay()]}`
    else if(weekDay) {
        setDate(weekDay, currentDay)
        return `${days[newDate.getDay()]}`
    } else return ''
}

export {setDate, setWeekDate};