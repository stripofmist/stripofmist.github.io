var count = 0;

const patterns = [
  {"name": "2 B2Bs", "images": {"gifs": ["2b2b.gif"], "stills": ["2b2b.gif"]}},
  {"name": "DT Cannon", "images": {"gifs": ["dtcannon.gif"], "stills": ["dtcannon.gif"]}},
  {"name": "Imperial Cross", "images": {"gifs": ["imperialcross.gif"], "stills": ["imperialcross.gif"]}},
  {"name": "Corporate Slave Train (Shachiku)", "images": {"gifs": ["shachiku.gif"], "stills": ["shachiku.gif"]}},
  {"name": "STMB Cave", "images": {"gifs": ["stmbcave.gif"], "stills": ["stmbcave.gif"]}},
  {"name": "Tetris", "images": {"gifs": ["tetris.gif"], "stills": ["tetris.gif"]}},
  {"name": "TSpin Double (TSD)", "images": {"gifs": ["tsd.gif"], "stills": ["tsd.gif"]}},
  {"name": "TSpin Triple Tower", "images": {"gifs": ["tsttower.gif"], "stills": ["tsttower.gif"]}},
  {"name": "5-Combo", "images": {"gifs": ["5combo.gif"], "stills": ["5combo.gif"]}},
  {"name": "Fractal", "images": {"gifs": ["fractal.gif"], "stills": ["fractal.gif"]}},
  {"name": "King Crimson", "images": {"gifs": ["kingcrimson.gif"], "stills": ["kingcrimson.gif"]}},
  {"name": "Shadow Blade", "images": {"gifs": ["shadowblade.gif"], "stills": ["shadowblade.gif"]}},
  {"name": "STSD", "images": {"gifs": ["stsd.gif"], "stills": ["stsd.gif"]}},
  {"name": "Trinity", "images": {"gifs": ["trinity.gif"], "stills": ["trinity.gif"]}},
  {"name": "TSpin Mini", "images": {"gifs": ["tsm.gif"], "stills": ["tsm.gif"]}},
  {"name": "Uncut Copy", "images": {"gifs": ["uncutcopy.gif"], "stills": ["uncutcopy.gif"]}},
  {"name": "Cut Copy (Thousand Birds Grid)", "images": {"gifs": ["cutcopy.gif"], "stills": ["cutcopy.gif"]}},
  {"name": "Grim Grotto", "images": {"gifs": ["grimgrotto.gif"], "stills": ["grimgrotto.gif"]}},
  {"name": "Parapet", "images": {"gifs": ["parapet.gif"], "stills": ["parapet.gif"]}},
  {"name": "Shallow Grave", "images": {"gifs": ["shallowgrave.gif"], "stills": ["shallowgrave.gif"]}},
  {"name": "S/Z Prop", "images": {"gifs": ["szprop.gif"], "stills": ["szprop.gif"]}},
  {"name": "Triple Double", "images": {"gifs": ["tripledouble.gif"], "stills": ["tripledouble.gif"]}},
  {"name": "TSpin Triple (TST)", "images": {"gifs": ["tst.gif"], "stills": ["tst.gif"]}}
];



const centeredImage = document.getElementById("centeredImage");

document.addEventListener("keydown", function (event) {
  if (event.key === " " || event.key == "r") {
    if (event.key === "r") {
        count = 0;
    } else if (event.key === " ") {
        count = count + 1;
    }
    const randomIndex = Math.floor(Math.random() * patterns.length);
    centeredImage.src = "images/" + patterns[randomIndex]["images"]["gifs"][0];
    centeredText.textContent = patterns[randomIndex]["name"];
    counter.textContent = count;
  } 
});


document.addEventListener("DOMContentLoaded", function() {
    const checkboxContainer = document.getElementById("checkboxContainer");

    patterns.forEach((pattern, index) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `checkbox${index}`;
        checkbox.value = index;
        checkbox.checked = true;
        checkboxContainer.appendChild(checkbox);

        const label = document.createElement("label");
        label.htmlFor = `checkbox${index}`;
        label.textContent = pattern["name"];
        checkboxContainer.appendChild(label);

        // Add a line break after each checkbox and label
        checkboxContainer.appendChild(document.createElement("br"));
    });
});



