function Password() {
    let password = prompt("Welcome to Emma and Sam's wedding website! Please enter the password:");
    if (password=="purkiswedding2021") {
    alert("Thank you!")
    }
    else {
        alert("Sorry, this is not correct");
        window.stop();

    }
}

document.addEventListener("DOMContentLoaded", Password());
