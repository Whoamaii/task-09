const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(arr, len) {
  arr = arr.split('')
  let a = arr.map((i) => [Math.random(), i]).sort().map((i) => i[1]);
  a.length = len;
  	return a.join("");
 
}
console.log(generateKey(characters, 16));
