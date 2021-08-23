function Password() {
    let password = prompt("Welcome to Emma and Sam's wedding website! Please enter the password:");
    if (password.value=="purkiswedding2021") {
    alert("Thank you!")
    }
    else {
        break
    }
}

document.addEventListener("DOMContentLoaded", Password());
