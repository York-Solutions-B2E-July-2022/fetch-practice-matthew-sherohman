async function getURL(url) {
    const response = await fetch(url)
    if (response.ok)
        return await response.json()
    else
        return null
}

async function run(){
    try {
        const colors = await getURL("https://www.example.com/colors")
        const emojis = await getURL("https://www.example.com/emojis")

        for (const color of colors) {
            const colorElement = document.getElementById("colors")
            colorElement.innerHTML += `<div style="background-color:${color.value};">${color.name}</div>`
        }

        for (const emoji in emojis) {
            const emojiElement = document.getElementById("emojis")
            emojiElement.innerHTML += `<img src="${emojis[emoji]}" alt="${emoji}">`
        }
    } catch {
        document.getElementById("colors").innerHTML = "There was an error."
    }
}

run()