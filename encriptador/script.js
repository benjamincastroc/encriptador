document.getElementById("encryptBtn").addEventListener("click", function() {
    let text = document.getElementById("inputText").value;
    let encryptedText = encrypt(text);
    document.getElementById("resultText").value = encryptedText;
});

document.getElementById("decryptBtn").addEventListener("click", function() {
    let text = document.getElementById("inputText").value;
    let decryptedText = decrypt(text);
    document.getElementById("resultText").value = decryptedText;
});

document.getElementById("copyBtn").addEventListener("click", function() {
    let resultText = document.getElementById("resultText");
    resultText.select();
    document.execCommand("copy");
    alert("Texto copiado: " + resultText.value);
});

function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}
