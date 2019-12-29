import fs from 'fs';
const input = fs.readFileSync('./d2/input.txt','utf8').split(',');
const p = input.map(n => Number(n));

// Restore state of program
p[1] = 12;
p[2] = 2;

for (let i = 0; i < p.length; i += 4) {
    const indexOp1  = p[i + 1];
    const indexOp2  = p[i + 2];
    const indexDest = p[i + 3];
    switch(p[i]) {
        case 1: // Add
            p[indexDest] = p[indexOp1] + p[indexOp2];
            break;
        case 2: // Multiply
            p[indexDest] = p[indexOp1] * p[indexOp2];
            break;
        defalult:
            console.log('Noop');
    }
    if (p[i] == 99) {
        console.log('Halt');
        break; // Halt
    }
}

console.log('Result: ' + p[0]);
