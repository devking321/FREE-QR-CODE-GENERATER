const input = document.getElementById("qr-input");
const size = document.getElementById("size");
const qrDiv = document.querySelector(".qr");
const generate = document.getElementById("generate");
const download = document.getElementById("download");

// hide download button at start
download.style.visibility = "hidden";

generate.addEventListener("click", () => {
    if (input.value.trim().length > 0) {
        genQrCode();
        download.style.visibility = "visible";
    } else {
        alert("Enter Text or URL");
    }
});

function genQrCode() {
    qrDiv.innerHTML = ""; // clear old QR
    download.disabled = false;

    new QRCode(qrDiv, {
        text: input.value,
        width: Number(size.value),
        height: Number(size.value),
        colorDark: "#000000",
        colorLight: "#ffffff"
    });
}

download.addEventListener("click", (e) => {
    e.preventDefault();

    const img = qrDiv.querySelector("img");

    if (!img) {
        alert("Generate QR Code first");
        return;
    }

    const a = document.createElement("a");
    a.href = img.src;
    a.download = "QR_Code.png";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
