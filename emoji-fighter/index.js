let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let firstIndex = Math.floor(Math.random() * fighters.length)
    let secondIndex = Math.floor(Math.random() * fighters.length)
    let firstEmoji = fighters[firstIndex]
    let secondEmoji = fighters[secondIndex]
    stageEl.textContent = `${firstEmoji} vs ${secondEmoji}`
})
