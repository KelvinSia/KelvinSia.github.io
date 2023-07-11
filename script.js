function scrollToTop() {
  window.scrollTo(0, 0);
}

window.addEventListener('beforeunload', scrollToTop);

// PopUp

function openPopup() {
  document.getElementById("popupBox").style.display = "block";
}

function closePopup() {
  document.getElementById("popupBox").style.display = "none";
}

// Expandable Tab

function toggleContent(elementId) {
  var content = document.getElementById(elementId);
  var preview = document.getElementById("preview-AMap");

  if (elementId === "myContent-expandable-AMap") {
    if (preview.style.display === "none") {
      preview.style.display = "block";
    } else {
      preview.style.display = "none";
    }
  }

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
  var imageDir = 'Image/Arc/Slimess/'; 

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
  var imageDir = 'Image/Arc/Slimess/'; 

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
  var imageDir = 'Image/Arc/Sketches/'; 

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
  var imageDir = 'Image/Arc/Sketches/'; 

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

// NFT Characters

var dddd = 6;
var cntdd = 0;

function leftabc() {

  var rr = document.getElementById('abc-content');
  var imageDir = 'Image/Verse/Character/'; 

  var images = [
    "ABC_1.jpg",
    "ABC_2.jpg",
    "ABC_3.jpg",
    "ABC_4.jpg",
    "ABC_5.jpg",
    "ABC_6.jpg",
  ];

  cntdd--;

  var len = images.length;
  if (cntdd < dddd) {
    rr.src = imageDir + images[cntdd];
  }
  else if (cntdd == len) {
    rr.src = imageDir + images[0];
    cntdd = 0;
  }

  if (cntdd < 0) {
    rr.src = imageDir + images[5];
    cntdd = 5
  }
}

function rightabc() {

  var rr = document.getElementById('abc-content');
  var imageDir = 'Image/Verse/Character/'; 

  var images = [
    "ABC_1.jpg",
    "ABC_2.jpg",
    "ABC_3.jpg",
    "ABC_4.jpg",
    "ABC_5.jpg",
    "ABC_6.jpg",
  ];

  cntdd++;

  var len = images.length;
  if (cntdd < dddd) {
    rr.src = imageDir + images[cntdd];
  }
  else if (cntdd == len) {
    rr.src = imageDir + images[0];
    cntdd = 0
  }
};

// SSR

var ddddd = 4;
var cntddd = 0;

function leftSSR() {

  var rr = document.getElementById('SSR-content');
  var imageDir = 'Image/Verse/SSR/'; 

  var images = [
    "SSR_1_E.gif",
    "SSR_2_E.gif",
    "SSR_3_E.gif",
    "SSR_4_E.gif",
  ];

  cntddd--;

  var len = images.length;
  if (cntddd < ddddd) {
    rr.src = imageDir + images[cntddd];
  }
  else if (cntddd == len) {
    rr.src = imageDir + images[0];
    cntddd = 0;
  }

  if (cntddd < 0) {
    rr.src = imageDir + images[3];
    cntddd = 3
  }
}

function rightSSR() {

  var rr = document.getElementById('SSR-content');
  var imageDir = 'Image/Verse/SSR/'; 

  var images = [
    "SSR_1_E.gif",
    "SSR_2_E.gif",
    "SSR_3_E.gif",
    "SSR_4_E.gif",
  ];

  cntddd++;

  var len = images.length;
  if (cntddd < ddddd) {
    rr.src = imageDir + images[cntddd];
  }
  else if (cntddd == len) {
    rr.src = imageDir + images[0];
    cntddd = 0
  }
};

// Xtra Concepts

var ddddd = 4;
var cntddd = 0;

function leftSSR() {

  var rr = document.getElementById('SSR-content');
  var imageDir = 'Image/Verse/SSR/'; 

  var images = [
    "SSR_1_E.gif",
    "SSR_2_E.gif",
    "SSR_3_E.gif",
    "SSR_4_E.gif",
  ];

  cntddd--;

  var len = images.length;
  if (cntddd < ddddd) {
    rr.src = imageDir + images[cntddd];
  }
  else if (cntddd == len) {
    rr.src = imageDir + images[0];
    cntddd = 0;
  }

  if (cntddd < 0) {
    rr.src = imageDir + images[3];
    cntddd = 3
  }
}

function rightSSR() {

  var rr = document.getElementById('SSR-content');
  var imageDir = 'Image/Verse/SSR/'; 

  var images = [
    "SSR_1_E.gif",
    "SSR_2_E.gif",
    "SSR_3_E.gif",
    "SSR_4_E.gif",
  ];

  cntddd++;

  var len = images.length;
  if (cntddd < ddddd) {
    rr.src = imageDir + images[cntddd];
  }
  else if (cntddd == len) {
    rr.src = imageDir + images[0];
    cntddd = 0
  }
};


// END