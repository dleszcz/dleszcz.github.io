import React, { useEffect } from 'react';
import './App.css';

function Modal() {
  useEffect(() => {
    console.log('Modal dm');
  }, []);

  return (
    <div className="Modal">
      Modal
    </div>
  );
}

export default Modal;
