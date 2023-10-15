let menu_bar = document.getElementById('menu_bar');
let menu = document.getElementById('menu');
menu.addEventListener('click',()=>{
        menu_bar.className = "flex flex-col md:flex md:flex-row";           
});


/** @type {import('tailwindcss').Config} */
module.exports = {
theme: {
screens: {
  'sm': '500px',
  // => @media (min-width: 640px) { ... }

  'md': '768px',
  // => @media (min-width: 768px) { ... }

  'lg': '1024px',
  // => @media (min-width: 1024px) { ... }

  'xl': '1280px',
  // => @media (min-width: 1280px) { ... }

  '2xl': '1536px',
  // => @media (min-width: 1536px) { ... }
}
}
}
