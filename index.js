let saveEl = document.getElementById("save-el")
let countingEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countingEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countingEl.textContent = 0
    count = 0
}
