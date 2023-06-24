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

function left() {

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

function right() {

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

// END