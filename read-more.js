const slider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".slider-image");
const leftArrow = document.querySelector(".slider-btn-left");
const rightArrow = document.querySelector(".slider-btn-right");

let currentIndex = 0;
let slideWidth = sliderImages[currentIndex].clientWidth;

function slideRight() {
  if (currentIndex < sliderImages.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  slideWidth = sliderImages[currentIndex].clientWidth; // Update slide width
  updateSliderPosition();
}

function slideLeft() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = sliderImages.length - 1;
  }
  slideWidth = sliderImages[currentIndex].clientWidth; // Update slide width
  updateSliderPosition();
}

function updateSliderPosition() {
  const newPosition = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${newPosition}px)`;
  leftArrow.style.visibility = "visible";
  rightArrow.style.visibility = "visible";
}

updateSliderPosition();
//second slider of the js starts here//
const slide_1 = document.querySelector(".more");
const sliderImage_1 = document.querySelectorAll(".more-image");
const leftArrow_1 = document.querySelector(".slider-btn-left-1");
const rightArrow_1 = document.querySelector(".slider-btn-right-1");

// Rest of your JavaScript code remains the same

let currentIndex_1 = 0;
let slideWidth_1 = sliderImage_1[currentIndex_1].clientWidth;

function slideRight_1() {
  if (currentIndex_1 < sliderImage_1.length - 1) {
    currentIndex_1++;
  } else {
    currentIndex_1 = 0;
  }
  slideWidth_1 = sliderImage_1[currentIndex_1].clientWidth;
  updateSliderPosition_1();
}

function slideLeft_1() {
  if (currentIndex_1 > 0) {
    currentIndex_1--;
  } else {
    currentIndex_1 = sliderImage_1.length - 1;
  }
  slideWidth_1 = sliderImage_1[currentIndex_1].clientWidth;
  updateSliderPosition_1();
}

function updateSliderPosition_1() {
  const newPosition_1 = -currentIndex_1 * slideWidth_1;
  slide_1.style.transform = `translateX(${newPosition_1}px)`;
  leftArrow_1.style.visibility = "visible";
  rightArrow_1.style.visibility = "visible";
}

updateSliderPosition_1();
//third code of java script of the third slider//
const slide_2 = document.querySelector(".lore");
const sliderImage_2 = document.querySelectorAll(".lore-image");
const leftArrow_2 = document.querySelector(".slider-btn-left-2");
const rightArrow_2 = document.querySelector(".slider-btn-right-2");

let currentIndex_2 = 0;
let slideWidth_2 = sliderImage_2[currentIndex_2].clientWidth;

function slideRight_2() {
  if (currentIndex_2 < sliderImage_2.length - 1) {
    currentIndex_2++;
  } else {
    currentIndex_2 = 0;
  }
  slideWidth_2 = sliderImage_2[currentIndex_2].clientWidth;
  updateSliderPosition_2();
}

function slideLeft_2() {
  if (currentIndex_2 > 0) {
    currentIndex_2--;
  } else {
    currentIndex_2 = sliderImage_2.length - 1;
  }
  slideWidth_2 = sliderImage_2[currentIndex_2].clientWidth;
  updateSliderPosition_2();
}

function updateSliderPosition_2() {
  const newPosition_2 = -currentIndex_2 * slideWidth_2;
  slide_2.style.transform = `translateX(${newPosition_2}px)`;
  leftArrow_2.style.visibility = "visible";
  rightArrow_2.style.visibility = "visible";
}

updateSliderPosition_2();
//Fourth Slider of the divs//
const slide_3 = document.querySelector(".tore");
const sliderImage_3 = document.querySelectorAll(".tore-image");
const leftArrow_3 = document.querySelector(".slider-btn-left-3");
const rightArrow_3 = document.querySelector(".slider-btn-right-3");

let currentIndex_3 = 0;
let slideWidth_3 = sliderImage_3[currentIndex_3].clientWidth;

function slideRight_3() {
  if (currentIndex_3 < sliderImage_3.length - 1) {
    currentIndex_3++;
  } else {
    currentIndex_3 = 0;
  }
  slideWidth_3 = sliderImage_3[currentIndex_3].clientWidth;
  updateSliderPosition_3();
}

function slideLeft_3() {
  if (currentIndex_3 > 0) {
    currentIndex_3--;
  } else {
    currentIndex_3 = sliderImage_3.length - 1;
  }
  slideWidth_3 = sliderImage_2[currentIndex_3].clientWidth;
  updateSliderPosition_3();
}

function updateSliderPosition_3() {
  const newPosition_3 = -currentIndex_3 * slideWidth_3;
  slide_3.style.transform = `translateX(${newPosition_3}px)`;
  leftArrow_3.style.visibility = "visible";
  rightArrow_3.style.visibility = "visible";
}

updateSliderPosition_3();
//Fifth slider of the main div//
const slide_4 = document.querySelector(".pore");
const sliderImage_4 = document.querySelectorAll(".pore-image");
const leftArrow_4 = document.querySelector(".slider-btn-left-4");
const rightArrow_4 = document.querySelector(".slider-btn-right-4");

let currentIndex_4 = 0;
let slideWidth_4 = sliderImage_4[currentIndex_4].clientWidth;

function slideRight_4() {
  if (currentIndex_4 < sliderImage_4.length - 1) {
    currentIndex_4++;
  } else {
    currentIndex_4 = 0;
  }
  slideWidth_4 = sliderImage_4[currentIndex_4].clientWidth;
  updateSliderPosition_4();
}

function slideLeft_4() {
  if (currentIndex_4 > 0) {
    currentIndex_4--;
  } else {
    currentIndex_4 = sliderImage_4.length - 1;
  }
  slideWidth_4 = sliderImage_4[currentIndex_4].clientWidth;
  updateSliderPosition_4();
}

function updateSliderPosition_4() {
  const newPosition_4 = -currentIndex_4 * slideWidth_4;
  slide_4.style.transform = `translateX(${newPosition_4}px)`;
  leftArrow_4.style.visibility = "visible";
  rightArrow_4.style.visibility = "visible";
}

updateSliderPosition_4();
//Last slider of the divs//
const slide_5 = document.querySelector(".jore");
const sliderImage_5 = document.querySelectorAll(".jore-image");
const leftArrow_5 = document.querySelector(".slider-btn-left-5");
const rightArrow_5 = document.querySelector(".slider-btn-right-5");

let currentIndex_5 = 0;
let slideWidth_5 = sliderImage_5[currentIndex_5].clientWidth;

function slideRight_5() {
  if (currentIndex_5 < sliderImage_5.length - 1) {
    currentIndex_5++;
  } else {
    currentIndex_5 = 0;
  }
  slideWidth_5 = sliderImage_5[currentIndex_5].clientWidth;
  updateSliderPosition_5();
}

function slideLeft_5() {
  if (currentIndex_5 > 0) {
    currentIndex_5--;
  } else {
    currentIndex_5 = sliderImage_5.length - 1;
  }
  slideWidth_5 = sliderImage_5[currentIndex_5].clientWidth;
  updateSliderPosition_5();
}

function updateSliderPosition_5() {
  const newPosition_5 = -currentIndex_5 * slideWidth_5;
  slide_5.style.transform = `translateX(${newPosition_5}px)`;
  leftArrow_5.style.visibility = "visible";
  rightArrow_5.style.visibility = "visible";
}

updateSliderPosition_5();



const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');
const list = document.getElementById('list');

menuIcon.addEventListener("click", () => {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    list.style.display = 'block';
});

closeIcon.addEventListener("click", () => {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    list.style.display = 'none';
});
