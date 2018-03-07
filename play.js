const _Q = [
    [ 0, 0, 0, 0, 400, 0 ],
    [ 0, 0, 0, 320, 0, 500 ],
    [ 0, 0, 0, 320, 0, 0 ],
    [ 0, 400, 256, 0, 400, 0 ],
    [ 320, 0, 0, 320, 0, 500 ],
    [ 0, 400, 0, 0, 400, 500 ]
];

let currentPosition = 0;

do {
    const nextPosition = _Q[currentPosition].reduce((result,value, index) => {
        return value > _Q[currentPosition][result] ? index : result;
    },0);
    console.log('next position', nextPosition);
    currentPosition = nextPosition;

} while(currentPosition != 5)