// #4

let input = prompt(`Please, enter the url. Example: https://www.google.com, or http://www.google.com`);
let text = input.toLowerCase();
console.log(text.replace('https://', '').replace('http://', ''))
