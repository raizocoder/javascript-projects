# 🖼️ Image Slider
# DEMO 👁️ https://image-slider-rohit.netlify.app/
<img src="/slider.png" alt="Logo" width="200" />

This **Image Slider** project is a simple HTML, CSS, and JavaScript application that allows users to view and navigate through a series of images. The slider includes "Previous" and "Next" buttons to control the image transition.

## 🌟 Features

- **Navigation Controls**: "Previous" and "Next" buttons allow users to navigate through the images.
- **Captions**: Each image in the slider has a caption displayed beneath it.
- **Responsive Layout**: The slider adjusts based on the screen size to provide an optimal viewing experience.
- **Simple and Clean Design**: The slider has a minimalist design that focuses on the images.

## 📋 How to Use

1. **Open the Webpage**: Open the `index.html` file in your browser.
2. **Navigate Through Images**: Use the "Prev" and "Next" buttons to move between images.
3. **View Captions**: Captions for each image are displayed beneath the images.

## 📂 Project Structure

```
📁 Image-Slider/
├── 📄 index.html
├── 📄 index.css
├── 📄 index.js
└── 📁 images/
    ├── 1.jpg.jpg
    ├── 2.jpg.jpg
    └── 3.jpg.jpg
```

- **`index.html`**: Contains the HTML structure for the image slider and inline JavaScript for functionality.
- **`index.css`**: Provides styling for the slider, buttons, and captions.
- **`index.js`**: (If separated) Handles the JavaScript functionality for navigating through images.
- **`images/`**: A folder containing the images displayed in the slider.

## 🎨 Styling

- The image slider is centered on the page with navigation buttons on either side.
- The **caption** text is bold and positioned below each image.
- The navigation **buttons** have a clear, bold design to indicate their function.

## 💻 JavaScript Functionality

### Key Functions

1. **`controler(x)` Function**:
   - Adjusts the current slide index (`flag`) based on user input (either -1 for "Prev" or +1 for "Next").
   - Calls the `slideshow()` function to update the displayed image.

2. **`slideshow(num)` Function**:
   - Takes the current slide index (`num`) and displays the appropriate image while hiding all others.
   - Loops back to the first image if the current index exceeds the number of images, or to the last image if the index is less than zero.

### Example Code

```javascript
let flag = 0;

function controler(x) {
  flag = flag + x;
  slideshow(flag);
}

function slideshow(num) {
  let slides = document.getElementsByClassName("slider");
  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (let y of slides) {
    y.style.display = "none";
  }
  slides[num].style.display = "block";
}

slideshow(flag);
```

## 📈 Future Enhancements

- **⏰ Autoplay Feature**: Add an option to automatically transition through images after a set interval.
- **✨ Transition Effects**: Implement fade or slide effects between image transitions to enhance user experience.
- **📱 Mobile Optimization**: Further optimize the slider for mobile devices, ensuring smooth transitions and responsive design.
