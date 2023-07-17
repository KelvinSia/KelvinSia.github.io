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

function changeImage(id, imageDir, images, count, limit, direction) {
  var element = document.getElementById(id);

  if (direction === 'left') {
    count--;
    if (count < 0) {
      count = limit - 1;
    }
  } else if (direction === 'right') {
    count++;
    if (count >= limit) {
      count = 0;
    }
  }

  element.src = imageDir + images[count];

  return count;
}

// Slimess
var slimeCount = 4;
var slimeIndex = 0;
var slimeImages = [
  "Slime_Pew_1.jpg",
  "Slime_Pew_2.jpg",
  "Slime_Pew_3.jpg",
  "Slime_Pew_4.jpg"
];

function leftslime() {
  slimeIndex = changeImage('slime-content', 'Image/Arc/Slimess/', slimeImages, slimeIndex, slimeCount, 'left');
}

function rightslime() {
  slimeIndex = changeImage('slime-content', 'Image/Arc/Slimess/', slimeImages, slimeIndex, slimeCount, 'right');
}

// Arc Sketch
var arcsCount = 7;
var arcsIndex = 0;
var arcsImages = [
  "Arc_Sketch_01.jpg",
  "Arc_Sketch_02.jpg",
  "Arc_Sketch_03.jpg",
  "Arc_Sketch_04.jpg",
  "Arc_Sketch_05.jpg",
  "Arc_Sketch_06.jpg",
  "Arc_Sketch_07.jpg"
];

function leftarcs() {
  arcsIndex = changeImage('arcs-content', 'Image/Arc/Sketches/', arcsImages, arcsIndex, arcsCount, 'left');
}

function rightarcs() {
  arcsIndex = changeImage('arcs-content', 'Image/Arc/Sketches/', arcsImages, arcsIndex, arcsCount, 'right');
}

// NFT Characters
var abcCount = 6;
var abcIndex = 0;
var abcImages = [
  "ABC_1.jpg",
  "ABC_2.jpg",
  "ABC_3.jpg",
  "ABC_4.jpg",
  "ABC_5.jpg",
  "ABC_6.jpg"
];

function leftabc() {
  abcIndex = changeImage('abc-content', 'Image/Verse/Character/', abcImages, abcIndex, abcCount, 'left');
}

function rightabc() {
  abcIndex = changeImage('abc-content', 'Image/Verse/Character/', abcImages, abcIndex, abcCount, 'right');
}

// SSR
var ssrCount = 4;
var ssrIndex = 0;
var ssrImages = [
  "SSR_1_E.gif",
  "SSR_2_E.gif",
  "SSR_3_E.gif",
  "SSR_4_E.gif"
];

function leftSSR() {
  ssrIndex = changeImage('SSR-content', 'Image/Verse/SSR/', ssrImages, ssrIndex, ssrCount, 'left');
}

function rightSSR() {
  ssrIndex = changeImage('SSR-content', 'Image/Verse/SSR/', ssrImages, ssrIndex, ssrCount, 'right');
}

// Xtra Concepts
var xtraCount = 10;
var xtraIndex = 0;
var xtraImages = [
  "AibaNFT_1.jpg",
  "AibaNFT_2.jpg",
  "AibaNFT_3.jpg",
  "AibaNFT_4.jpg",
  "AibaNFT_5.jpg",
  "AibaNFT_6.jpg",
  "CartoonNFT_1.jpg",
  "CartoonNFT_2.jpg",
  "GamblerNFT_1.jpg",
  "GamblerNFT_2.jpg"
];

function leftxtra() {
  xtraIndex = changeImage('xtra-content', 'Image/External/Extra/', xtraImages, xtraIndex, xtraCount, 'left');
}

function rightxtra() {
  xtraIndex = changeImage('xtra-content', 'Image/External/Extra/', xtraImages, xtraIndex, xtraCount, 'right');
}




// END