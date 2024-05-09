// src/components/tooltip/tooltip.js
import './tooltip.css'; // Import CSS file

const createTooltip = ({ text, position }) => {
  const tooltip = document.createElement('div');
  tooltip.textContent = text;
  tooltip.classList.add('custom-tooltip'); // Apply custom CSS class

  // Position the tooltip based on the specified position
  if (position === 'top') {
    tooltip.classList.add('top');
  } else if (position === 'bottom') {
    tooltip.classList.add('bottom');
  } else if (position === 'left') {
    tooltip.classList.add('left');
  } else if (position === 'right') {
    tooltip.classList.add('right');
  }

  return tooltip;
};

export default createTooltip;
