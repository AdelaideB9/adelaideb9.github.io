function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter(element, txt) {
    let i = 0;

    while (i < txt.length) {
        element.innerHTML += txt.charAt(i);
        i++;
        await sleep(Math.random() * 150 + 50);
    }
}

async function blinkingCursor(element, blinks) {
    for (let i = 0; i < blinks; i++)
    {
        await sleep(500);
        element.innerText += '|';
        await sleep(500);
        element.innerText = element.innerText.slice(0, -1);
    }
}

async function fadein() {
    Array.from(document.getElementsByClassName('fadein')).forEach(element => {
        element.style.opacity = 1;
    }); 
}