var count = 0;
var tsdIdx = -1;
var jltuckIdx = -1;

const patterns = [
  {"name": "2 B2Bs", "filename": "2b2b", "type": "pattern"},
  {"name": "DT Cannon", "filename": "dtcannon", "type": "pattern"},
  {"name": "Imperial Cross", "filename": "imperialcross", "type": "pattern"},
  {"name": "Corporate Slave Train (Shachiku)", "filename": "shachiku", "type": "pattern"},
  {"name": "STMB Cave", "filename": "stmbcave", "type": "pattern"},
  {"name": "Tetris", "filename": "tetris", "type": "pattern"},
  {"name": "TSpin Double (TSD)", "filename": "tsd", "type": "pattern"},
  {"name": "TSpin Triple Tower", "filename": "tsttower", "type": "pattern"},
  {"name": "5-Combo", "filename": "5combo", "type": "pattern"},
  {"name": "Fractal", "filename": "fractal", "type": "pattern"},
  {"name": "King Crimson", "filename": "kingcrimson", "type": "pattern"},
  {"name": "Shadow Blade", "filename": "shadowblade", "type": "pattern"},
  {"name": "STSD", "filename": "stsd", "type": "pattern"},
  {"name": "Trinity", "filename": "trinity", "type": "pattern"},
  {"name": "TSpin Mini", "filename": "tsm", "type": "pattern"},
  {"name": "Uncut Copy", "filename": "uncutcopy", "type": "pattern"},
  {"name": "Cut Copy (Thousand Birds Grid)", "filename": "cutcopy", "type": "pattern"},
  {"name": "Grim Grotto", "filename": "grimgrotto", "type": "pattern"},
  {"name": "Parapet", "filename": "parapet", "type": "pattern"},
  {"name": "Shallow Grave", "filename": "shallowgrave", "type": "pattern"},
  {"name": "S/Z Prop", "filename": "szprop", "type": "pattern"},
  {"name": "Triple Double", "filename": "tripledouble", "type": "pattern"},
  {"name": "TSpin Triple (TST)", "filename": "tst", "type": "pattern"},
  {"name": "Magic Key", "filename": "magickey", "type": "pattern"},
  {"name": "Jigsaw", "filename": "jigsaw", "type": "pattern"},
  {"name": "TSD Deny -> Tetris", "filename": "tsddenytetris", "type": "pattern"},
  {"name": "Clapperboard", "filename": "clapperboard", "type": "ispin"},
  {"name": "Clapperboard 2", "filename": "clapperboard2", "type": "ispin"},
  {"name": "Clapperboard Counter", "filename": "clapperboardcounter", "type": "ispin"},
  {"name": "Clapperboard Counter 2", "filename": "clapperboardcounter2", "type": "ispin"},
  {"name": "J/L Tuck", "filename": "jltuck", "type": "jlspin"},
  {"name": "Brace", "filename": "brace", "type": "jlspin"},
  {"name": "Hammer", "filename": "hammer", "type": "jlspin"},
  {"name": "Faceplant", "filename": "faceplant", "type": "jlspin"},
  {"name": "Faceplant 2", "filename": "faceplant2", "type": "jlspin"},
  {"name": "Boomerang Spin", "filename": "boomerang", "type": "jlspin"},
  {"name": "Boomerang Spin 2", "filename": "boomerang2", "type": "jlspin"},
  {"name": "Scoot", "filename": "scoot", "type": "jlspin"},
  {"name": "Scoot 2", "filename": "scoot2", "type": "jlspin"},
  {"name": "Grappling Hook", "filename": "grapplinghook", "type": "jlspin"},
  {"name": "Standing JSpin Mini", "filename": "standjspinmini", "type": "jlspin"},
  {"name": "Sitting JSpin Mini", "filename": "sitjspinmini", "type": "jlspin"},
  {"name": "Somersault", "filename": "somersault", "type": "jlspin"},
  {"name": "Washing Machine", "filename": "washingmachine", "type": "jlspin"},
  {"name": "S/Z Tuck", "filename": "sztuck", "type": "szspin"},
  {"name": "S/Z Kick", "filename": "szkick", "type": "szspin"},
  {"name": "StairMaster", "filename": "stairmaster", "type": "szspin"},
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
    const centeredText = document.getElementById("centeredText");
    centeredText.textContent = "TSpin Roulette";
    resetCount();
    loadGifByIndex(tsdIdx);
    history.pushState(null, null, "/");
}

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

function addSpin(pattern, index, spinContainer) {

    const label = document.createElement("label");
    label.textContent = "* " + pattern["name"];
    label.addEventListener("click", function(event) {
        event.preventDefault();
        resetCount();
        loadImageByIndex(index);
    });
    spinContainer.appendChild(label);

    // Add a line break after each checkbox and label
    spinContainer.appendChild(document.createElement("br"));

}

function loadSpinPage(spinDivs, outerDiv) {
    loadSpins(spinDivs, outerPatternDiv);
    loadGifByIndex(jltuckIdx);
    const centeredText = document.getElementById("centeredText");
    centeredText.textContent = "Spins";
    history.pushState(null, null, "spins");
}

function loadSpins(spinDivs, outerDiv) {
    clearPatterns(outerDiv);
    spinDivs.forEach(function(spinDiv) {
        outerDiv.append(spinDiv);
    });
}

function loadPatterns(patternDiv, outerDiv) {
    clearPatterns(outerDiv);
    outerDiv.appendChild(patternDiv);
}

function clearPatterns(outerDiv) {
    while (outerDiv.firstChild) {
        outerDiv.removeChild(outerDiv.firstChild);
    }
}

function patternInReferrer() {
    const referrer = document.referrer;

    const lastIndex = referrer.lastIndexOf('/');
    if (lastIndex !== -1 && lastIndex < referrer.length - 1) {
        const pat = referrer.substring(lastIndex + 1);
        const lhtml = ".html".length;
        if (pat.length > lhtml && pat.slice(-lhtml) === ".html") {
            return pat.slice(0, -lhtml);
        } else {
            return pat;
        }
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function() {
    // Create a div for patterns and all the spins
    const patternDiv = document.createElement('div');
    const patternH2 = document.createElement('h2');
    patternH2.textContent = "Patterns";
    patternDiv.appendChild(patternH2);
    const ispinDiv = document.createElement('div');
    const ispinH2 = document.createElement('h2');
    ispinH2.textContent = "I Spins";
    ispinDiv.appendChild(ispinH2);
    const jlspinDiv = document.createElement('div');
    const jlspinH2 = document.createElement('h2');
    jlspinH2.textContent = "J/L Spins";
    jlspinDiv.appendChild(jlspinH2);
    const szspinDiv = document.createElement('div');
    const szspinH2 = document.createElement('h2');
    szspinH2.textContent = "S/Z Spins";
    szspinDiv.appendChild(szspinH2);

    // Add an All/None Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "allNone";
    checkbox.checked = true;
    checkbox.addEventListener("change", toggleAllCheckboxes);
    patternDiv.appendChild(checkbox);
    const label = document.createElement("label");
    label.htmlFor = "allNone";
    label.textContent = "All/None"
    patternDiv.appendChild(label);
    patternDiv.appendChild(document.createElement("br"));
    patternDiv.appendChild(document.createElement("br"));


    const referrer = document.referrer;
    const pir = patternInReferrer();
    var refInd = null;

    // Add all patterns to their respective divs
    patterns.forEach((pattern, index) => {
        if (pattern["type"] === "pattern") {
            addPattern(pattern, index, patternDiv);
        } else if (pattern["type"] === "ispin") {
            addSpin(pattern, index, ispinDiv);
        } else if (pattern["type"] === "jlspin") {
            addSpin(pattern, index, jlspinDiv);
        } else if (pattern["type"] === "szspin") {
            addSpin(pattern, index, szspinDiv);
        }

        // Remember index if it is the referrer pattern
        if (pir === pattern["filename"]) {
            refInd = index;
        }

        // Remember index if this is TSD
        if ("tsd" === pattern["filename"]) {
            tsdIdx = index;
        }

        // Remember index if this is jltuck
        if ("jltuck" === pattern["filename"]) {
            jltuckIdx = index;
        }
    });

    const outerPatternDiv = document.getElementById("outerPatternDiv");

    if (refInd !== null) {
        loadImageByIndex(refInd);
        const rtyp = patterns[refInd]["type"];
        if (rtyp === "ispin" || rtyp === "jlspin" || rtyp === "szspin") {
            // Add the spin divs to the actual page
            loadSpins([ispinDiv, jlspinDiv, szspinDiv], outerPatternDiv);
        } else {
            // Add the pattern div to the actual page
            loadPatterns(patternDiv, outerPatternDiv);
        }
    } else {
            if (pir === "spins") {
                loadSpinPage([ispinDiv, jlspinDiv, szspinDiv], outerPatternDiv);
            } else {
                // Add the pattern div to the actual page
                loadPatterns(patternDiv, outerPatternDiv);
            }
    }

    // Clicking the menu buttons change which patterns are displayed
    const tspinmenu = document.getElementById("tspinroulette");
    tspinmenu.addEventListener("click", function (event) {
        event.preventDefault();
        loadPatterns(patternDiv, outerPatternDiv);
        pressRestartButton();
    });
    const spinsmenu = document.getElementById("spins");
    spinsmenu.addEventListener("click", function (event) {
        event.preventDefault();
        loadSpinPage([ispinDiv, jlspinDiv, szspinDiv], outerPatternDiv);
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

function loadGifByIndex(i) {
    const centeredImage = document.getElementById("centeredImage");
    centeredImage.src = "images/" + patterns[i]["filename"] + ".gif";
}

function loadImageByIndex(i) {
    const centeredText = document.getElementById("centeredText");
    loadGifByIndex(i);
    centeredText.textContent = patterns[i]["name"];

    history.pushState(null, null, patterns[i]["filename"]);

}

