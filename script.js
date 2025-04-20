function toggleMenu() {
    const menu = document.getElementById("mainMenu");
    menu.classList.toggle("active");
}

document.getElementById("regForm").onsubmit = function(e) {
    e.preventDefault();
    
    var successMsg = document.getElementById("successMsg");
    successMsg.textContent = "Registration successful! We will contact you soon.";
    
    setTimeout(function() {
        successMsg.textContent = "";
    }, 5000);
    
    this.reset();
};