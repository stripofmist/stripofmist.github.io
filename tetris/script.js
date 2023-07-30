var count = 0;

const images = [
  "2b2b.gif",
  "dtcannon.gif",
  "imperialcross.gif",
  "shachiku.gif",
  "stmbcave.gif",
  "tetris.gif",
  "tsd.gif",
  "tsttower.gif",
  "5combo.gif",
  "fractal.gif",
  "kingcrimson.gif",
  "shadowblade.gif",
  "stsd.gif",
  "trinity.gif",
  "tsm.gif",
  "uncutcopy.gif",
  "cutcopy.gif",
  "grimgrotto.gif",
  "parapet.gif",
  "shallowgrave.gif",
  "szprop.gif",
  "tripledouble.gif",
  "tst.gif"
];

const names = [
  "2 B2Bs",
  "DT Cannon",
  "Imperial Cross",
  "Corporate Slave Train (Shachiku)",
  "STMB Cave",
  "Tetris",
  "TSpin Double (TSD)",
  "TSpin Triple Tower",
  "5-Combo",
  "Fractal",
  "King Crimson",
  "Shadow Blade",
  "STSD",
  "Trinity",
  "TSpin Mini",
  "Uncut Copy",
  "Cut Copy (Thousand Birds Grid)",
  "Grim Grotto",
  "Parapet",
  "Shallow Grave",
  "S/Z Prop",
  "Triple Double",
  "TSpin Triple (TST)"
];


const centeredImage = document.getElementById("centeredImage");

document.addEventListener("keydown", function (event) {
  if (event.key === " " || event.key == "r") {
    if (event.key === "r") {
        count = 0;
    } else if (event.key === " ") {
        count = count + 1;
    }
    const randomIndex = Math.floor(Math.random() * images.length);
    centeredImage.src = "gifs/" + images[randomIndex];
    centeredText.textContent = names[randomIndex];
    counter.textContent = count;
  } 
});






