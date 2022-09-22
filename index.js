const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (list) {
    return list.slice(0, 2);
}

const returnLastTwoDrivers = function (list) {
    return list.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const fareSame = (cost) => cost;

const fareDoubler = (cost) => '2' * cost;

const fareTripler = (cost) => '3' * cost;

const fareQuadrupler = (cost) => '4' * cost;

const fareQuintupler = (cost) => '5' * cost;


function createFareMultiplier(multi) {

    if(multi = 1){
        return fareSame;
    }

    if(multi = 2){
        return fareDoubler;
    }

    if(multi = 3){
        return fareTripler;
    }

    if(multi = 4){
        return fareQuadrupler;
    }

    if(multi = 5){
        return fareQuintupler;
    }
}

function selectDifferentDrivers(list, func) {
    if(func === returnFirstTwoDrivers) {
        return list.slice(0, 2);
    }

    if(func === returnLastTwoDrivers) {
        return list.slice(2)
    }
}