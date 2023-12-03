/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Notification_assert.css'
const Notification = ({ type, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className={`notification ${type} ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="notification-header">
        {message}
        <button className="close-button" onClick={handleClose}>
          &times; {/* '×' character for a close icon */}
        </button>
      </div>
    </div>
  );
};

export default Notification;

