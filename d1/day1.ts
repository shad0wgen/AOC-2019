import fs from 'fs';
const input = fs.readFileSync('./d1/input','utf8').split('\n');
const masses = input.map(mass => Number(mass));
const totalFuelOne = masses.reduce((acc, fuel) => Math.floor(fuel / 3) - 2 + acc, 0)

console.log('Total fuel, part 1: ' + totalFuelOne);


// Part 2
let totalFuelTwo = 0;
masses.forEach(mass => {
    let m = mass;
    let res = 0;
    while(m > 0) {
        m = Math.floor(m / 3) - 2;
        res += m > 0 ? m : 0;
    }
    totalFuelTwo += res;
});

console.log('Total fuel, part 2: ' + totalFuelTwo);
