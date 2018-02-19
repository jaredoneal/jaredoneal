function togglePets(id) {
    document.getElementById("ziggy-button").classList.remove("pulse");
    document.getElementById("pepper-button").classList.remove("pulse");
    document.getElementById("oliver-button").classList.remove("pulse");
    document.getElementById("rosie-button").classList.remove("pulse");
    const petsEl = document.getElementsByClassName("petz");
    for(var i = 0; i < petsEl.length; i++) {
        petsEl[i].style.display = "none";
    }
    
    document.getElementById(id + "-button").classList.add("pulse");
    document.getElementById(id).style.display = "block";
  }
     