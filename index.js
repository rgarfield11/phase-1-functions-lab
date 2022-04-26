// Code your solution in this file!
const hq = 42;
function distanceFromHqInBlocks(blockNum) {
    return Math.abs(blockNum - hq);
};

function distanceFromHqInFeet(blockNum) {
    return (264 * Math.abs(blockNum - hq));
};

function distanceTravelledInFeet(startBlock, endBlock) {
    return (264 * Math.abs(endBlock - startBlock));
};

function calculatesFarePrice(startBlock, endBlock) {
    let distanceTravelled = (264 * Math.abs(endBlock - startBlock));
    if (distanceTravelled < 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return (distanceTravelled - 400) * .02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return 25;
    } else if (distanceTravelled > 2500) {
        return 'cannot travel that far'
    };
};