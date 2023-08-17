var count = 0;

const patterns = [
  {"name": "2 B2Bs", "images": {"gifs": ["2b2b.gif"], "stills": ["2b2b.gif"]}, "type": "pattern"},
  {"name": "DT Cannon", "images": {"gifs": ["dtcannon.gif"], "stills": ["dtcannon.gif"]}, "type": "pattern"},
  {"name": "Imperial Cross", "images": {"gifs": ["imperialcross.gif"], "stills": ["imperialcross.gif"]}, "type": "pattern"},
  {"name": "Corporate Slave Train (Shachiku)", "images": {"gifs": ["shachiku.gif"], "stills": ["shachiku.gif"]}, "type": "pattern"},
  {"name": "STMB Cave", "images": {"gifs": ["stmbcave.gif"], "stills": ["stmbcave.gif"]}, "type": "pattern"},
  {"name": "Tetris", "images": {"gifs": ["tetris.gif"], "stills": ["tetris.gif"]}, "type": "pattern"},
  {"name": "TSpin Double (TSD)", "images": {"gifs": ["tsd.gif"], "stills": ["tsd.gif"]}, "type": "pattern"},
  {"name": "TSpin Triple Tower", "images": {"gifs": ["tsttower.gif"], "stills": ["tsttower.gif"]}, "type": "pattern"},
  {"name": "5-Combo", "images": {"gifs": ["5combo.gif"], "stills": ["5combo.gif"]}, "type": "pattern"},
  {"name": "Fractal", "images": {"gifs": ["fractal.gif"], "stills": ["fractal.gif"]}, "type": "pattern"},
  {"name": "King Crimson", "images": {"gifs": ["kingcrimson.gif"], "stills": ["kingcrimson.gif"]}, "type": "pattern"},
  {"name": "Shadow Blade", "images": {"gifs": ["shadowblade.gif"], "stills": ["shadowblade.gif"]}, "type": "pattern"},
  {"name": "STSD", "images": {"gifs": ["stsd.gif"], "stills": ["stsd.gif"]}, "type": "pattern"},
  {"name": "Trinity", "images": {"gifs": ["trinity.gif"], "stills": ["trinity.gif"]}, "type": "pattern"},
  {"name": "TSpin Mini", "images": {"gifs": ["tsm.gif"], "stills": ["tsm.gif"]}, "type": "pattern"},
  {"name": "Uncut Copy", "images": {"gifs": ["uncutcopy.gif"], "stills": ["uncutcopy.gif"]}, "type": "pattern"},
  {"name": "Cut Copy (Thousand Birds Grid)", "images": {"gifs": ["cutcopy.gif"], "stills": ["cutcopy.gif"]}, "type": "pattern"},
  {"name": "Grim Grotto", "images": {"gifs": ["grimgrotto.gif"], "stills": ["grimgrotto.gif"]}, "type": "pattern"},
  {"name": "Parapet", "images": {"gifs": ["parapet.gif"], "stills": ["parapet.gif"]}, "type": "pattern"},
  {"name": "Shallow Grave", "images": {"gifs": ["shallowgrave.gif"], "stills": ["shallowgrave.gif"]}, "type": "pattern"},
  {"name": "S/Z Prop", "images": {"gifs": ["szprop.gif"], "stills": ["szprop.gif"]}, "type": "pattern"},
  {"name": "Triple Double", "images": {"gifs": ["tripledouble.gif"], "stills": ["tripledouble.gif"]}, "type": "pattern"},
  {"name": "TSpin Triple (TST)", "images": {"gifs": ["tst.gif"], "stills": ["tst.gif"]}, "type": "pattern"},
  {"name": "Magic Key", "images": {"gifs": ["magickey.gif"], "stills": ["magickey.gif"]}, "type": "pattern"},
  {"name": "Jigsaw", "images": {"gifs": ["jigsaw.gif"], "stills": ["jigsaw.gif"]}, "type": "pattern"},
  {"name": "TSD Deny -> Tetris", "images": {"gifs": ["tsddenytetris.gif"], "stills": ["tsddenytetris.gif"]}, "type": "pattern"},
  {"name": "Clapperboard", "images": {"gifs": ["clapperboard.gif"], "stills": ["clapperboard.gif"]}, "type": "ispin"},
  {"name": "Clapperboard 2", "images": {"gifs": ["clapperboard2.gif"], "stills": ["clapperboard2.gif"]}, "type": "ispin"},
  {"name": "Clapperboard Counter", "images": {"gifs": ["clapperboardcounter.gif"], "stills": ["clapperboardcounter.gif"]}, "type": "ispin"},
  {"name": "Clapperboard Counter 2", "images": {"gifs": ["clapperboardcounter2.gif"], "stills": ["clapperboardcounter2.gif"]}, "type": "ispin"},
  {"name": "J/L Tuck", "images": {"gifs": ["jltuck.gif"], "stills": ["jltuck.gif"]}, "type": "jlspin"},
  {"name": "Hammer", "images": {"gifs": ["hammer.gif"], "stills": ["hammer.gif"]}, "type": "jlspin"},
  {"name": "Faceplant", "images": {"gifs": ["faceplant.gif"], "stills": ["faceplant.gif"]}, "type": "jlspin"},
  {"name": "Boomerang Spin", "images": {"gifs": ["boomerang.gif"], "stills": ["boomerang.gif"]}, "type": "jlspin"},
  {"name": "Boomerang Spin 2", "images": {"gifs": ["boomerang2.gif"], "stills": ["boomerang2.gif"]}, "type": "jlspin"},
  {"name": "Grappling Hook", "images": {"gifs": ["grapplinghook.gif"], "stills": ["grapplinghook.gif"]}, "type": "jlspin"},
  {"name": "Standing JSpin Mini", "images": {"gifs": ["standjspinmini.gif"], "stills": ["standjspinmini.gif"]}, "type": "jlspin"},
  {"name": "Sitting JSpin Mini", "images": {"gifs": ["sitjspinmini.gif"], "stills": ["sitjspinmini.gif"]}, "type": "jlspin"},
  {"name": "S/Z Tuck", "images": {"gifs": ["sztuck.gif"], "stills": ["sztuck.gif"]}, "type": "szspin"},
  {"name": "S/Z Kick", "images": {"gifs": ["szkick.gif"], "stills": ["szkick.gif"]}, "type": "szspin"},
  {"name": "StairMaster", "images": {"gifs": ["stairmaster.gif"], "stills": ["stairmaster.gif"]}, "type": "szspin"},
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

function addPattern(pattern, index, checkboxContainer) {
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
}

function addISpin(pattern, index, iSpinContainer) {

    const label = document.createElement("label");
    label.textContent = "* " + pattern["name"];
    label.addEventListener("click", function(event) {
        event.preventDefault();
        resetCount();
        loadImageByIndex(index);
    });
    iSpinContainer.appendChild(label);

    // Add a line break after each checkbox and label
    iSpinContainer.appendChild(document.createElement("br"));

}

function addJLSpin(pattern, index, jlSpinContainer) {

    const label = document.createElement("label");
    label.textContent = "* " + pattern["name"];
    label.addEventListener("click", function(event) {
        event.preventDefault();
        resetCount();
        loadImageByIndex(index);
    });
    jlSpinContainer.appendChild(label);

    // Add a line break after each checkbox and label
    jlSpinContainer.appendChild(document.createElement("br"));

}

function addSZSpin(pattern, index, szSpinContainer) {

    const label = document.createElement("label");
    label.textContent = "* " + pattern["name"];
    label.addEventListener("click", function(event) {
        event.preventDefault();
        resetCount();
        loadImageByIndex(index);
    });
    szSpinContainer.appendChild(label);

    // Add a line break after each checkbox and label
    szSpinContainer.appendChild(document.createElement("br"));

}

document.addEventListener("DOMContentLoaded", function() {
    const checkboxContainer = document.getElementById("checkboxContainer");
    const iSpinContainer = document.getElementById("iSpinContainer");
    const jlSpinContainer = document.getElementById("jlSpinContainer");
    const szSpinContainer = document.getElementById("szSpinContainer");

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
        if (pattern["type"] === "pattern") {
            addPattern(pattern, index, checkboxContainer);
        } else if (pattern["type"] === "ispin") {
            addISpin(pattern, index, iSpinContainer);
        } else if (pattern["type"] === "jlspin") {
            addJLSpin(pattern, index, jlSpinContainer);
        } else if (pattern["type"] === "szspin") {
            addSZSpin(pattern, index, szSpinContainer);
        }
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
