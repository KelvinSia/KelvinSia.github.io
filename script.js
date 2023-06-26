function scrollToTop() {
  window.scrollTo(0, 0);
}

window.addEventListener('beforeunload', scrollToTop);

// Expandable Tab

function toggleContent() {
  var content = document.getElementById("myContent-expandable");
  content.classList.toggle("show");
}

// Jump to Div

function triggerDivClick(divId) {
  var divElement = document.getElementById(divId);
  divElement.focus();
  divElement.scrollIntoView({ behavior: "smooth" });
}

// Slimess

var dd = 4;
var cnt = 0;

function leftslime() {

  var rr = document.getElementById('slime-content');
  var imageDir = 'Image/Slimess/'; 

  var images = [
    "Slime_Pew_1.jpg",
    "Slime_Pew_2.jpg",
    "Slime_Pew_3.jpg",
    "Slime_Pew_4.jpg",
  ];

  cnt--;

  var len = images.length;
  if (cnt < dd) {
    rr.src = imageDir + images[cnt];
  }
  else if (cnt == len) {
    rr.src = imageDir + images[0];
    cnt = 0;
  }

  if (cnt < 0) {
    rr.src = imageDir + images[3];
    cnt = 3
  }
}

function rightslime() {

  var rr = document.getElementById('slime-content');
  var imageDir = 'Image/Slimess/'; 

  var images = [
    "Slime_Pew_1.jpg",
    "Slime_Pew_2.jpg",
    "Slime_Pew_3.jpg",
    "Slime_Pew_4.jpg",
  ];

  cnt++;

  var len = images.length;
  if (cnt < dd) {
    rr.src = imageDir + images[cnt];
  }
  else if (cnt == len) {
    rr.src = imageDir + images[0];
    cnt = 0
  }
};

// Arc Sketch

var ddd = 7;
var cntd = 0;

function leftarcs() {

  var rr = document.getElementById('arcs-content');
  var imageDir = 'Image/Sketches/'; 

  var images = [
    "Arc_Sketch_01.jpg",
    "Arc_Sketch_02.jpg",
    "Arc_Sketch_03.jpg",
    "Arc_Sketch_04.jpg",
    "Arc_Sketch_05.jpg",
    "Arc_Sketch_06.jpg",
    "Arc_Sketch_07.jpg",
  ];

  cntd--;

  var len = images.length;
  if (cntd < ddd) {
    rr.src = imageDir + images[cntd];
  }
  else if (cntd == len) {
    rr.src = imageDir + images[0];
    cntd = 0;
  }

  if (cntd < 0) {
    rr.src = imageDir + images[6];
    cntd = 6
  }
}

function rightarcs() {

  var rr = document.getElementById('arcs-content');
  var imageDir = 'Image/Sketches/'; 

  var images = [
    "Arc_Sketch_01.jpg",
    "Arc_Sketch_02.jpg",
    "Arc_Sketch_03.jpg",
    "Arc_Sketch_04.jpg",
    "Arc_Sketch_05.jpg",
    "Arc_Sketch_06.jpg",
    "Arc_Sketch_07.jpg",
  ];

  cntd++;

  var len = images.length;
  if (cntd < ddd) {
    rr.src = imageDir + images[cntd];
  }
  else if (cntd == len) {
    rr.src = imageDir + images[0];
    cntd = 0
  }
};

// END