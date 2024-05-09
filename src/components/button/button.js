// src/components/button/button.js
import './button.css'; // Import CSS file

const createButton = ({ onClick, text }) => {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', onClick);
  button.classList.add('custom-button'); // Use custom CSS class name
  return button;
};

export default createButton;
