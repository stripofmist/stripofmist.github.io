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




document.addEventListener("keydown", function (event) {
  if (event.key === " " || event.key == "r") {
    if (event.key === "r") {
        resetCount();
    } else if (event.key === " ") {
        incrementCount();
    }
    const randomIndex = generateRandomPattern();
    if (randomIndex === -1) {
        return;
    }
    loadImageByIndex(randomIndex);
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
        checkbox.addEventListener("keydown", function(event) {
            if (event.keyCode === 32 || event.key === " ") {
                event.preventDefault();
            }
        });
        checkboxContainer.appendChild(checkbox);

        const label = document.createElement("label");
        label.htmlFor = `checkbox${index}`;
        label.textContent = pattern["name"];
        checkboxContainer.appendChild(label);

        // Add a line break after each checkbox and label
        checkboxContainer.appendChild(document.createElement("br"));
    });
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 32 || event.key === " ") {
        event.preventDefault();
    }
});


function generateRandomPattern() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    const availablePatterns = Array.from(checkboxes).map(checkbox => parseInt(checkbox.value));

    if (availablePatterns.length === 0) {
        return -1;
    }

    const randomNumber = availablePatterns[Math.floor(Math.random() * availablePatterns.length)];
    return randomNumber;
}

function resetCount() {
    const counter = document.getElementById("counter");
    count = 0;
    counter.textContent = count;
}

function incrementCount() {
    const counter = document.getElementById("counter");
    count = count + 1;
    counter.textContent = count;
}

function loadImageByIndex(i) {
    const centeredImage = document.getElementById("centeredImage");
    const centeredText = document.getElementById("centeredText");
    centeredImage.src = "images/" + patterns[i]["images"]["gifs"][0];
    centeredText.textContent = patterns[i]["name"];
}
