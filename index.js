const R = [
    [null, null, null, null, 0, null],
    [null, null, null, 0, null, 100],
    [null, null, null, 0, null, null],
    [null, 0, 0, null, 0, null],
    [0, null, null, 0, null, 100],
    [null, 0, null, null, 0, 100]
];

const Q = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

const epsilon = 0.8

// Q(state,action) = R(state,action) + epsilon * Max[Q(next state, all actions)]
let episode = 10000;
for(let i = 0; i < episode; i++) {
    let currentPosition = getRandomInteger(0,5);
    console.log('current position', currentPosition);
    do {
        const feasibleTransitions = getFeasibleTransitions(currentPosition);
        // console.log(`feasible transitions from ${currentPosition}`, feasibleTransitions);
        const randomNumber = getRandomInteger(0, feasibleTransitions.length - 1);
        const nextPosition = feasibleTransitions[randomNumber];
        // console.log('random number', randomNumber);
        // console.log('nextPosition', nextPosition);
        const nextFeasibleTransitions = getFeasibleTransitions(nextPosition);
        // console.log('feasible transitions from nextPosition', nextFeasibleTransitions);
        const maxValue = nextFeasibleTransitions.reduce((result,value) => {
            return Q[nextPosition][value] > result ? Q[nextPosition][value] : result;
        },0);
        // console.log('max value', maxValue);
        // console.log('new value', R[currentPosition][nextPosition] + (epsilon * maxValue));
        Q[currentPosition][nextPosition] = R[currentPosition][nextPosition] + (epsilon * maxValue);
        currentPosition = nextPosition;
        console.log(Q);
    } while(currentPosition != 5)
    console.log('Finished the loop', Q);
    console.log('Episode', episode);
}



function getRandomInteger(min, max) {
    // if(min == max) return min;
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getFeasibleTransitions(position) {
    return R[position].reduce((result, value, index) => {
        return value != null ? result.concat([index]): result
    }, []);
}