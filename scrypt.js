const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const key = characters.split("");

function generateKey(arr, len) {
  let a = arr
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);
  a.length = len;
  return a.join("");
}

console.log(generateKey(key, 16));
