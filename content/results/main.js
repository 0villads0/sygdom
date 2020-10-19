window.addEventListener("load", () => {

if (x=Math.floor(Math.random()*2) == 0) {
  document.getElementById("result_color").style.backgroundColor = "#03fc1c";
  document.getElementById("result_box").innerHTML = "Tillykke ingen farlige bakterier fundet"
} else {


  num = Math.floor(Math.random() * 5)+1;
  switch (num) {
    case 1:
      document.getElementById("result_color").style.backgroundColor = "#fc0303";
      document.getElementById("result_box").innerHTML = "Corona"
      break;
    case 2:
      document.getElementById("result_color").style.backgroundColor = "#f6ff00";
      document.getElementById("result_box").innerHTML = "Influenza"
      break;
    case 3:
      document.getElementById("result_color").style.backgroundColor = "#002aff";
      document.getElementById("result_box").innerHTML = "Ondt i halsen"
      break;
    case 4:
      document.getElementById("result_color").style.backgroundColor = "#8216db";
      document.getElementById("result_box").innerHTML = "Stafylokokker"
      break;
    case 5:
      document.getElementById("result_color").style.backgroundColor = "#ff9100";
      document.getElementById("result_box").innerHTML = "SARS"
      break;
    }
  }

});
