console.log("Hank extension loaded");

// show Hank GIF
function showHank() {
    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("hank.gif");
    img.className = "hank-popup"; // matches CSS
    document.body.appendChild(img);

    setTimeout(() => img.remove(), 3000);
}

let lastStatus = "";

setInterval(() => {
    const text = document.body.innerText;

    if (
        text.includes("Wrong Answer") ||
        text.includes("Runtime Error") ||
        text.includes("Compile Error") ||
        text.includes("Compilation Error") ||
        text.includes("Time Limit Exceeded") ||
        (text.includes("Output") && text.includes("mismatch"))
    ) {
        if (lastStatus !== "error") {
            console.log("Error detected — showing Hank");
            showHank();
            lastStatus = "error";
        }
    } else {
        lastStatus = "";
    }
}, 800);
