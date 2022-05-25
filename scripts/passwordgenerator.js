var password = document.getElementById("password");

function genPassword() {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-=+";

    for (i=0; i < 18; i++) {
        let generate = letters(Math.floor(Math.random() * letters.length));
        password.textContent = ""
        password += generate;
    }

    console.log("password")
}

genPassword()

console.log("password")