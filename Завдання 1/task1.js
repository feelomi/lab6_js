let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();

let month = now.getMonth() + 1; // Місяці починаються з 0, тому додаємо 1
let day = now.getDate();
let year = now.getFullYear();

console.log("Time: " + hours + ":" + minutes);
console.log("Date: " + month + "/" + day + "/" + year);