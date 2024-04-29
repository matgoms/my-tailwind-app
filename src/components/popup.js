import React, { useState, useEffect } from 'react';

const Popup = ({ onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasClosedPopup = localStorage.getItem('hasClosedPopup');
    if (!hasClosedPopup) {
      // Show the popup after 5 seconds if it hasn't been closed before
      const timeout = setTimeout(() => {
        setVisible(true);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    onClose();
    localStorage.setItem('hasClosedPopup', 'true');
  };

  return (
    <div
      id="toast-default"
      className={`z-20 fixed bottom-10 mx-auto flex items-center w-full max-w-lg p-4 gap-6 text-gray-500 justify-between bg-white rounded-lg shadow-2xl dark:text-gray-400 dark:bg-gray-900 transition-opacity ${
        visible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="ms-3 text-sm font-normal dark:text-white">
        <p className="font-medium text-gray-700 dark:text-white">Did you like my website?</p>
        Let's build one for you or your company!
      </div>
      <div className="flex items-center gap-4">
        <a
          className="inline-flex items-center px-3 py-2 text-xs font-medium text-gray-900 focus:outline-none bg-transparent rounded-full border border-slate-200 hover:bg-slate-50 focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-slate-900 dark:text-gray-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700"
          href="/contact"
          target="_blank"
        >
          Contact me
        </a>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-slate-900 bg- dark:hover:bg-slate-800/40"
          data-dismiss-target="#toast-default"
          aria-label="Close"
          onClick={handleClose}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Pop = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasClosedPopup = localStorage.getItem('hasClosedPopup');
    if (!hasClosedPopup) {
      // Show the popup after 5 seconds if it hasn't been closed before
      const timeout = setTimeout(() => {
        setShowPopup(true);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem('hasClosedPopup', 'true');
  };

  return (
    <div className="app relative flex justify-center">
      {showPopup && <Popup onClose={handleClosePopup} />}
      {/* Main content of your app */}
    </div>
  );
};

export default Pop;
