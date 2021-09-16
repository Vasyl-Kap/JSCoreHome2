// #2

let input = prompt(`Write your email`);
if (input.includes('.') && input.includes('@') && input.indexOf('@') !== 0 && input.indexOf('@') !== -1 && input.lastIndexOf('@') !== 0) {
    alert('WELCOME');
}
else {
    alert('Email is not valid');
}
