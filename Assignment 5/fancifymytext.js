function changeFontStyles() {
    var textArea = document.getElementById("text-area");
    var fancyRadio = document.getElementById("Fancy");
    var boringRadio = document.getElementById("Boring");

    if (boringRadio.checked) {
        fancyRadio.checked = false; // Uncheck FancyShmancy
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black"; // Reset color to black
        textArea.style.textDecoration = "none"; // Reset text decoration
    } else if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

function mooifyText() {
    var textArea = document.getElementById("text-area");
    var text = textArea.value;

    // Uppercase the text
    textArea.value = text.toUpperCase();

    // Add " Moo" suffix to the last word of each sentence
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        if (words.length > 0) {
            words[words.length - 1] += " Moo. ";
        }
        sentences[i] = words.join(" ");
    }
    var mooifiedText = sentences.join("");
    textArea.value = mooifiedText;
}


function onChange() {
    alert("Do you want to change the fonts?");
}