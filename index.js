// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let scuber = 42; 
    if (street <= scuber) {
        return scuber - street;
    } else {
        return street - scuber;
    }
}

function distanceFromHqInFeet(street) {
    let scuber = 42;
    if (street <= scuber) {
        return (scuber - street) * 264;
    } else {
        return (street - scuber) * 264;
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
          return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
    }
}