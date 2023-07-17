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

function changeImage(id, imageDir, images, count, limit) {
  var element = document.getElementById(id);

  count--;

  var len = images.length;

  if (count < limit) {
    element.src = imageDir + images[count];
  } else if (count == len) {
    element.src = imageDir + images[0];
    count = 0;
  }

  if (count < 0) {
    element.src = imageDir + images[len - 1];
    count = len - 1;
  }

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
  slimeIndex = changeImage('slime-content', 'Image/Arc/Slimess/', slimeImages, slimeIndex, slimeCount);
}

function rightslime() {
  slimeIndex = changeImage('slime-content', 'Image/Arc/Slimess/', slimeImages, slimeIndex, slimeCount);
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
  arcsIndex = changeImage('arcs-content', 'Image/Arc/Sketches/', arcsImages, arcsIndex, arcsCount);
}

function rightarcs() {
  arcsIndex = changeImage('arcs-content', 'Image/Arc/Sketches/', arcsImages, arcsIndex, arcsCount);
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
  abcIndex = changeImage('abc-content', 'Image/Verse/Character/', abcImages, abcIndex, abcCount);
}

function rightabc() {
  abcIndex = changeImage('abc-content', 'Image/Verse/Character/', abcImages, abcIndex, abcCount);
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
  ssrIndex = changeImage('SSR-content', 'Image/Verse/SSR/', ssrImages, ssrIndex, ssrCount);
}

function rightSSR() {
  ssrIndex = changeImage('SSR-content', 'Image/Verse/SSR/', ssrImages, ssrIndex, ssrCount);
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
  xtraIndex = changeImage('xtra-content', 'Image/External/Extra/', xtraImages, xtraIndex, xtraCount);
}

function rightxtra() {
  xtraIndex = changeImage('xtra-content', 'Image/External/Extra/', xtraImages, xtraIndex, xtraCount);
}



// END