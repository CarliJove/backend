 console.log ("inicio de programa");

 setTimeout( () => {
     console.log("primer timeout");
 }, 3000);

setTimeout(() => {
    console.log("segundo timeout");
}, 0);

setTimeout(() => {
    console.log("tercero");
}, 0);

console.log ("fin de programa");
