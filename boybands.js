let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var newBands = "";
for (var i = 0; i < bands.length; i++) {
    newBands += bands[i] + " ";
}

document.getElementById("boy-bands").innerHTML = newBands;

var newVegs = "";
for (var x = 0; x < vegetables.length; x++) {
    newVegs += vegetables[x] + "/ ";
}

document.getElementById("vegetables").innerHTML = newVegs;
