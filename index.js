function generateDivs(divs) {
    document.querySelector(".tryAgain").innerHTML = "";
    document.querySelector("#colors").innerHTML = "";
    let luckyNumber = Math.floor(Math.random() * Number(divs));
    for (i = 0; i < Number(divs); i++) {
        console.log(luckyNumber);
        let color = randomColor();
        document.querySelector("#RGB").innerHTML =
            "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
        let colorsDiv = document.getElementById("colors");
        let coloredSquare = document.createElement("div");
        coloredSquare.setAttribute("onClick", "checkColor(this)");
        coloredSquare.classList.add("color");
        coloredSquare.style.backgroundColor =
            "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
        colorsDiv.appendChild(coloredSquare);
    }
}

function checkColor(clicked) {
    if (
        clicked.style.backgroundColor === document.querySelector("#RGB").innerHTML
    ) {
        console.log("YEEY");
        document
            .querySelectorAll(".color")
            .forEach(
                (e) => (e.style.backgroundColor = clicked.style.backgroundColor)
            );
        document.querySelector(".tryAgain").innerHTML = "Ai castigat!";
        document.querySelector(".tryAgain").style.color = "darkgreen";
    } else {
        console.log("nu ai ghicit");
        document.querySelector(".tryAgain").innerHTML = "Try Again";
        document.querySelector(".tryAgain").style.color = "black";
        clicked.style.backgroundColor = "rgb(35, 35, 35)";
        clicked.style.transition = "all 1s";
    }
}

function newColors() {
    document.querySelector(".tryAgain").innerHTML = "";
    document.querySelectorAll(".color").forEach((e) => {
        let color = randomColor();
        document.querySelector("#RGB").innerHTML =
            "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
        e.style.backgroundColor =
            "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    });
}

function randomColor() {
    return [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
    ];
    //returnam un array si de aceea am pus paranteze patrate
}