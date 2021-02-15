window.onload = loaded;

async function loaded() {
    let title = document.getElementById("title");
    await sleep(500);
    await typeWriter(title, "AdelaideB9");
    await sleep(200);
    fadein();
    await blinkingCursor(title, 4);
}