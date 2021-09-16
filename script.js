// #1

let str1 = prompt(`Write some text`);
let start = 0;
let find = '';
while (true) {
    let position = str1.indexOf(' ', start);
    if (position === -1) break;
    find += position + ' ';
    start = position + 1;
}
console.log(str1);
console.log(find);