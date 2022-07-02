
function genPassword() {
    const dotsEls = document.querySelectorAll(".dots");
    for (let el of dotsEls) {
        el.style.display = "none";
    }

    function password() {
        let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-=+";
        let password = "";

        for (var i = 0; i < 18; i++ ) {
            let generate = letters[Math.floor(Math.random() * 76)];
            password += generate;
        }

        return password;

    }
    
    const passwordEls = document.querySelectorAll(".password")
    for (let el of passwordEls) {
        el.innerHTML = password();
    }

    
}    

function clearPassword() {
    const dotsEls = document.querySelectorAll(".dots");
    for (let el of dotsEls) {
        el.style.display = "block";
    }

    const passwordEls = document.querySelectorAll(".password")
    for (let el of passwordEls) {
        el.innerHTML = "";
    }
}

const passwordContainer = document.querySelectorAll(".password-container")

passwordContainer.forEach(
    function(password) {
        password.addEventListener('click', function() {
            const copyText = password.querySelector(".password")

            if (copyText.textContent == "") {
                const error = document.getElementById("error");

                error.style.display = "block"
                
                setTimeout(function() {
                    error.style.display = "none"
                }, 2000)
            } else {
                navigator.clipboard.writeText(copyText.textContent)
    
                const copied = document.getElementById("copied");
    
                copied.style.display = "block"
                
                setTimeout(function() {
                    copied.style.display = "none"
                }, 2000)
            }  
        })
    }
)
