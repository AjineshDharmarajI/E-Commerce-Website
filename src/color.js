// document.addEventListener("DOMContentLoaded", function() {
//     const icons = document.getElementsByTagName('i');

//     // Convert HTMLCollection to an array
//     const iconArray = Array.from(icons);

//     iconArray.forEach(icon => {
//         icon.addEventListener('click', function() {
//             if (icon.classList.contains('clicked')) {
//                 icon.classList.remove('clicked'); // Remove the 'clicked' class
//             } else {
//                 icon.classList.add('clicked'); // Add the 'clicked' class
//             }
//         });
//     });
// });


// // window.addEventListener('scroll', function() {
// //   const navbar = document.querySelector('nav');
// //   // Check if scrolled down a certain amount (adjust value as needed)
// //   if (window.scrollY > 1) {
// //     navbar.classList.add('scrolled');
// //   } else {
// //     navbar.classList.remove('scrolled');
// //   }
// // });

// // Define an array with the image sources
// // var imageSources = [
// //   "./assets/Art/IMG 1 --Travel Art Set, Print San Francisco California, Cafe Art for Sale Prints Images, Colourful Wall Art for Staircase, Art for Bedroom Graphics - Etsy.jpeg",
// //   "./assets/Art/IMG 2 -- Minimalist Architecture XVII Canvas Set Wall Art.jpeg",
// //   "./assets/Art/IMG 3 -- Van Gogh Style Starry Night Canvas Print Wall Art, Ready to Hang Gallery Style Wall Art, Set of 3 Home Decor, Multi Panel Wall Art Set - Etsy Canada.jpeg",
// //   // Add more image sources as needed
// // ];

// // // Loop through each image element and set its src attribute
// // var artContainer = document.querySelector('#Art');
// // var productImages = artContainer.querySelectorAll('.productimg img');

// // productImages.forEach(function(img, index) {
// //     img.src = imageSources[index];
// // });

// window.addEventListener('scroll', function() {
//   const scrollTop = document.documentElement.scrollTop;
//   const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//   const scrollFraction = scrollTop / scrollHeight;
//   const startColor = [255, 99, 71]; // Initial color (RGB for coral)
//   const endColor = [3, 11, 255]; // Final color (RGB for deep sky blue)

//   const currentColor = startColor.map((channel, index) => {
//     return channel + scrollFraction * (endColor[index] - channel);
//   });

//   const backgroundColor = rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]});
//   document.body.style.background = linear-gradient(135deg, ${backgroundColor}, #ffffff);
// });






import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MyComponent({ setBackgroundColor }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      calculateBackgroundColor(setBackgroundColor);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (location.pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [location.pathname, setBackgroundColor]);

  function handleScroll() {
    calculateBackgroundColor(setBackgroundColor);
  }

  function calculateBackgroundColor(setBackgroundColor) {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / scrollHeight;
    const startColor = [255, 99, 71];
    const endColor = [3, 11, 255];

    const currentColor = startColor.map((channel, index) => {
      return channel + scrollFraction * (endColor[index] - channel);
    });

    const backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
    setBackgroundColor(backgroundColor);
  }

  return null;
}

export default MyComponent;
