let array = [10, 5, 13, 18, 51];

//-------1-------

function printArray(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

//-------2-------

function multipliedByTwo(arr) {
    console.log(arr.map(element => element*2));
}

//-------3-------

function filterAndSortArray (arr) {
    let newArray = arr.filter(element => element%2 == 0);
    newArray.sort();
    console.log(newArray);
}

//-------4-------

function isContainSmallerThanTen(arr) {
    let found = arr.findIndex(element => element < 10);
    console.log(found != -1);
}

//-------5-------

function filterArray (arr) {
    console.log(arr.filter(element => element%3 == 0));
}

//-------6-------

function sumElementsOfArray (arr) {
    console.log(arr.reduce((sum, element) =>  sum+ element));
}

//------7-------

function getLastTwoElements (arr) {
    return arr.slice(arr.length-2);
}

// ---------

console.log("print array: ");
printArray(array);
console.log("multiply by 2: ");
multipliedByTwo(array);
console.log("filter and sort array: ");
filterAndSortArray(array);
console.log("contains smaller than 10: ");
isContainSmallerThanTen(array);
console.log("filter array: ");
filterArray(array);
console.log("sum array: ");
sumElementsOfArray(array);
console.log("get last 2 of array: ");
getLastTwoElements(array);

//-------2.0-------

function getMonthDays (day) {
    let month = day.getMonth() + 1;
    let year = day.getYear();
    
    return new Date(year, month, 0).getDate();
}

//-------2.1-------

let crrDate = new Date();

//-------2.2-------

let anotherDay = new Date('December 08, 2018 21:00:00');

let dates = [crrDate, anotherDay];
console.log(dates);

//-------2.3-------

let result = dates.map(element => {
    return [getMonthDays(element), element.getDay()];
});

console.log(result);

//-------2.4-------

function getDayName(day){
    let daysName = ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"];
    return daysName[day];
}

let merged = dates.map(element => {
    return `Дата: ${element.getDate()}.${element.getMonth()+1}.${element.getFullYear()}, час: ${element.toTimeString().slice(0, 8)}, ${getDayName(element.getDay())}, ${getMonthDays(element)} дни`
})

console.log(merged);

