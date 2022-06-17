let script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js";
document.body.append(script);
let address = script.src.split("@");
let version = address[1].split("/")[0];
console.log(version);

