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
  {"name": "TSpin Triple (TST)", "images": {"gifs": ["tst.gif"], "stills": ["tst.gif"]}},
  {"name": "Clapperboard", "images": {"gifs": ["clapperboard.gif"], "stills": ["clapperboard.gif"]}},
  {"name": "Magic Key", "images": {"gifs": ["magickey.gif"], "stills": ["magickey.gif"]}},
  {"name": "Jigsaw", "images": {"gifs": ["jigsaw.gif"], "stills": ["jigsaw.gif"]}},
  {"name": "TSD Deny -> Tetris", "images": {"gifs": ["tsddenytetris.gif"], "stills": ["tsddenytetris.gif"]}},
];


function pressRandomButton() {
    if (centeredText.textContent !== "TSpin Roulette") {
        incrementCount();
    }
    const randomIndex = generateRandomPattern();
    if (randomIndex === -1){
        return;
    }
    loadImageByIndex(randomIndex);
}

function pressRestartButton() {
    resetCount();
    const randomIndex = generateRandomPattern();
    if (randomIndex === -1){
        return;
    }
    loadImageByIndex(randomIndex);
}

tspinroulette.addEventListener("click", function(event) {
    event.preventDefault();
    pressRestartButton();
});

about.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.style.display = "flex";
});

leaderboard.addEventListener("click", function(event) {
    event.preventDefault();
    leadOverlay.style.display="flex";
});

closeLeadButton.addEventListener("click", function(event) {
    leadOverlay.style.display="none";
});

closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
});

document.addEventListener("click", (event) => {
    if (event.target === overlay || event.target === leadOverlay) {
        overlay.style.display = "none";
        leadOverlay.style.display = "none";
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        pressRandomButton();
    } else if (event.key === "r") {
        pressRestartButton();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const checkboxContainer = document.getElementById("checkboxContainer");

    // Add an All/None Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "allNone";
    checkbox.checked = true;
    checkbox.addEventListener("change", toggleAllCheckboxes);
    checkboxContainer.appendChild(checkbox);
    const label = document.createElement("label");
    label.htmlFor = "allNone";
    label.textContent = "All/None"
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
    checkboxContainer.appendChild(document.createElement("br"));

    patterns.forEach((pattern, index) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `checkbox${index}`;
        checkbox.value = index;
        checkbox.checked = true;
        checkbox.classList.add("patternBox");
        checkbox.addEventListener("keydown", function(event) {
            if (event.keyCode === 32 || event.key === " ") {
                event.preventDefault();
            }
        });
        checkbox.addEventListener("change", updateSelectAllCheckbox);
        checkboxContainer.appendChild(checkbox);

        const label = document.createElement("label");
        label.htmlFor = `checkbox${index}`;
        label.textContent = pattern["name"];
        label.addEventListener("click", function(event) {
            event.preventDefault();
            resetCount();
            loadImageByIndex(index);
        });
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

randomButton.addEventListener("click", pressRandomButton);
restartButton.addEventListener("click", pressRestartButton);

function updateSelectAllCheckbox() {
    const allnone = document.getElementById("allNone");
    const patternBoxes = document.getElementsByClassName("patternBox");
    const pbArray = Array.from(patternBoxes);

    const allChecked = pbArray.every((checkbox) => checkbox.checked);
    const noneChecked = pbArray.every((checkbox) => !checkbox.checked);

    if (allChecked) {
        allnone.checked = true;
    } else if (noneChecked) {
        allnone.checked = false;
    }
}

function toggleAllCheckboxes() {
    const allnone = document.getElementById("allNone");
    const isChecked = allnone.checked;

    const patternBoxes = document.getElementsByClassName("patternBox");
    for (let i = 0; i < patternBoxes.length; i++) {
        patternBoxes[i].checked = isChecked;
    }
}

function generateRandomPattern() {
    const checkboxes = document.querySelectorAll(".patternBox:checked");
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
