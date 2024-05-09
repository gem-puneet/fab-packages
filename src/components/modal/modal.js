// src/components/modal/modal.js
import './modal.css'; // Import CSS file

const createModal = ({ title, content }) => {
  // Create modal elements
  const modalBackdrop = document.createElement('div');
  modalBackdrop.classList.add('modal-backdrop');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const modalTitle = document.createElement('h2');
  modalTitle.textContent = title;

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modalBody.textContent = content;

  const modalCloseBtn = document.createElement('button');
  modalCloseBtn.textContent = 'Close';
  modalCloseBtn.classList.add('modal-close-btn');
  modalCloseBtn.addEventListener('click', () => {
    closeModal(modalBackdrop);
  });

  // Append elements to modal content
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalCloseBtn);
  
  modalBackdrop.appendChild(modalContent);
  document.body.appendChild(modalBackdrop);

  return {
    element: modalBackdrop,
    close: () => closeModal(modalBackdrop),
  };
};

const closeModal = (modalBackdrop) => {
  modalBackdrop.remove();
};

export default createModal;
