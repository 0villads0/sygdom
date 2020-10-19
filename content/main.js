function upload() {
  var img = new Image();
  img.onload = draw;
  img.onerror = failed;
  img.src = URL.createObjectURL(document.getElementById("fileInput").files[0]);
}

function draw() {
  document.getElementById("fileLabel").style.display = "none";
  document.getElementById("analyse_button").style.display = "block";
  var canvas = document.getElementById('canvas');
  canvas.style.display = "block";
  canvas.width = this.width;
  canvas.height = this.height;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(this, 0,0);
}

function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
}

function analyse() {
  var link = document.createElement("a")
  link.href = "results/index.html"
  link.click()
}
