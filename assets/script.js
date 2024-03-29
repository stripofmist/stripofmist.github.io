var count = 0;
var tsdIdx = -1;
var wmIdx = -1;
var curIdx = 0;

const patterns = [
  {"name": "2 B2Bs", "filename": "2b2b", "type": "pattern"},
  {"name": "5-Combo", "filename": "5combo", "type": "pattern"},
  {"name": "Corporate Slave Train (Shachiku)", "filename": "shachiku", "type": "pattern"},
  {"name": "Cut Copy (Thousand Birds Grid)", "filename": "cutcopy", "type": "pattern"},
  {"name": "DT Cannon", "filename": "dtcannon", "type": "pattern"},
  {"name": "Fractal", "filename": "fractal", "type": "pattern"},
  {"name": "Grim Grotto", "filename": "grimgrotto", "type": "pattern"},
  {"name": "Imperial Cross", "filename": "imperialcross", "type": "pattern"},
  {"name": "Jigsaw", "filename": "jigsaw", "type": "pattern"},
  {"name": "King Crimson", "filename": "kingcrimson", "type": "pattern"},
  {"name": "Magic Key", "filename": "magickey", "type": "pattern"},
  {"name": "Parapet", "filename": "parapet", "type": "pattern"},
  {"name": "Shadow Blade", "filename": "shadowblade", "type": "pattern"},
  {"name": "Shallow Grave", "filename": "shallowgrave", "type": "pattern"},
  {"name": "STMB Cave", "filename": "stmbcave", "type": "pattern"},
  {"name": "STSD", "filename": "stsd", "type": "pattern"},
  {"name": "S/Z Prop", "filename": "szprop", "type": "pattern"},
  {"name": "Tetris", "filename": "tetris", "type": "pattern"},
  {"name": "Trinity", "filename": "trinity", "type": "pattern"},
  {"name": "Triple Double", "filename": "tripledouble", "type": "pattern"},
  {"name": "TSD Deny -> Tetris", "filename": "tsddenytetris", "type": "pattern"},
  {"name": "TSpin Double (TSD)", "filename": "tsd", "type": "pattern"},
  {"name": "TSpin Mini", "filename": "tsm", "type": "pattern"},
  {"name": "TSpin Triple (TST)", "filename": "tst", "type": "pattern"},
  {"name": "TSpin Triple Tower", "filename": "tsttower", "type": "pattern"},
  {"name": "Uncut Copy", "filename": "uncutcopy", "type": "pattern"},
  {"name": "Slate LL", "filename": "slatell", "type": "ispin"},
  {"name": "Slate RL", "filename": "slaterl", "type": "ispin"},
  {"name": "Slate RR", "filename": "slaterr", "type": "ispin"},
  {"name": "Slate LR", "filename": "slatelr", "type": "ispin"},
  {"name": "Croquet LLL", "filename": "croquetlll", "type": "ispin"},
  {"name": "Croquet R", "filename": "croquetr", "type": "ispin"},
  {"name": "Croquet High L", "filename": "croquethighl", "type": "ispin"},
  {"name": "Croquet High R", "filename": "croquethighr", "type": "ispin"},
  {"name": "Valve LL", "filename": "valvell", "type": "ispin"},
  {"name": "Valve LR", "filename": "valvelr", "type": "ispin"},
  {"name": "Valve RL", "filename": "valverl", "type": "ispin"},
  {"name": "Valve RR", "filename": "valverr", "type": "ispin"},
  {"name": "TSpin Double", "filename": "tsdspin", "type": "tspin"},
  {"name": "TSpin Double Kick", "filename": "tsdkick", "type": "tspin"},
  {"name": "TSpin Triple", "filename": "tstspin", "type": "tspin"},
  {"name": "TSpin Mini Tuck", "filename": "tspinminituck", "type": "tspin"},
  {"name": "TSpin Mini Wall Kick", "filename": "tspinminiwallkick", "type": "tspin"},
  {"name": "Iso-TSD", "filename": "isotsd", "type": "tspin"},
  {"name": "Neo-TSD", "filename": "neotsd", "type": "tspin"},
  {"name": "Fin-TSD", "filename": "fintsd", "type": "tspin"},
  {"name": "J/L Tuck", "filename": "jltuck", "type": "jlspin"},
  {"name": "Nosedive", "filename": "nosedive", "type": "jlspin"},
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
  {"name": "S/Z Tuck 2", "filename": "sztuck2", "type": "szspin"},
  {"name": "S/Z Kick", "filename": "szkick", "type": "szspin"},
  {"name": "S/Z Kick 2", "filename": "szkick2", "type": "szspin"},
  {"name": "S/Z Kick 3", "filename": "szkick3", "type": "szspin"},
  {"name": "Lodge", "filename": "lodge", "type": "szspin"},
  {"name": "Lodge 2", "filename": "lodge2", "type": "szspin"},
  {"name": "Lodge 3", "filename": "lodge3", "type": "szspin"},
  {"name": "S/Z Triple", "filename": "sztriple", "type": "szspin"},
  {"name": "S/Z Triple 2", "filename": "sztriple2", "type": "szspin"},
  {"name": "S/Z Triple 3", "filename": "sztriple3", "type": "szspin"},
  {"name": "S/Z Triple 4", "filename": "sztriple4", "type": "szspin"},
  {"name": "Bag 3 Spin", "filename": "bag3spin", "type": "szspin"},
  {"name": "Fill In", "filename": "fillin", "type": "szspin"},
  {"name": "Fill In 2", "filename": "fillin2", "type": "szspin"},
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
    loadCenter(randomIndex, true);
}

function pressRestartButton() {
    const centeredText = document.getElementById("centeredText");
    centeredText.textContent = "TSpin Roulette";
    resetCount();
    loadCenter(tsdIndx, false);
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
        loadCenter(index, true);
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
        loadCenter(index, true);
    });
    spinContainer.appendChild(label);

    // Add a line break after each checkbox and label
    spinContainer.appendChild(document.createElement("br"));

}

function loadSpinPage(spinDivs, outerDiv) {
    loadSpins(spinDivs, outerPatternDiv);
    loadCenter(wmIdx, false);
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
    const tspinDiv = document.createElement('div');
    const tspinH2 = document.createElement('h2');
    tspinH2.textContent = "T Spins";
    tspinDiv.appendChild(tspinH2);
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
        } else if (pattern["type"] === "tspin") {
            addSpin(pattern, index, tspinDiv);
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
        if ("washingmachine" === pattern["filename"]) {
            wmIdx = index;
        }
    });

    const outerPatternDiv = document.getElementById("outerPatternDiv");

    if (refInd !== null) {
        loadCenter(refInd, false);
        const rtyp = patterns[refInd]["type"];
        if (rtyp === "ispin" || rtyp === "tspin" || rtyp === "jlspin" || rtyp === "szspin") {
            // Add the spin divs to the actual page
            loadSpins([ispinDiv, tspinDiv, jlspinDiv, szspinDiv], outerPatternDiv);
        } else {
            // Add the pattern div to the actual page
            loadPatterns(patternDiv, outerPatternDiv);
        }
    } else {
            if (pir === "spins") {
                loadSpinPage([ispinDiv, tspinDiv, jlspinDiv, szspinDiv], outerPatternDiv);
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
        loadSpinPage([ispinDiv, tspinDiv, jlspinDiv, szspinDiv], outerPatternDiv);
    });

    var animateRadios = document.getElementsByName("imgtype");
    for (var i = 0; i < animateRadios.length; i++) {
        animateRadios[i].addEventListener("change", function() {
            loadImageByIndex(curIdx);
        });
    }
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
    curIdx = i;
    if (document.getElementById("still").checked) {
        centeredImage.src = "images/" + patterns[i]["filename"] + ".png";
    } else {
        centeredImage.src = "images/" + patterns[i]["filename"] + ".gif";
    }
}


function setCenterText(i, name) {
    const centeredText = document.getElementById("centeredText");
    centeredText.textContent = patterns[i]["name"];
}

function loadCenter(i, updateURL, name=null) {
    if (name === null) {
        name = patterns[i]["name"];
    }
    setCenterText(i, name);
    loadImageByIndex(i);
    if (updateURL) {
        history.pushState(null, null, patterns[i]["filename"]);
    }
}

