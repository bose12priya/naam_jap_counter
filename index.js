let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function clearEntries(){
    const prefix = "Previous Entries: ";
    const entriesText = (saveEl.textContent || "").replace(prefix, "").trim();
    let sum = 0;
    if (entriesText !== "") {
        const parts = entriesText.split(" - ").filter(s => s !== "");
        for (const p of parts) {
            const n = parseInt(p, 10);
            if (!isNaN(n)) sum += n;
        }
    }

    saveEl.textContent = prefix;
    alert(`Congrats today you did: ${sum} Naam japs!`);
}