import React from "react";
import "../styles/SingleCard.css";
const Blobs = ({ blobClass }) => {
  return (
    <div className={blobClass}>
      <svg
        viewBox="0 0 500 500"
        // xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%"
        id="blobSvg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgb(2, 0, 36)" }}></stop>
            <stop
              offset="100%"
              style={{ stopColor: "rgb(0, 212, 255)" }}
            ></stop>
          </linearGradient>
        </defs>
        <path fill="url(#gradient)">
          <animate
            attributeName="d"
            dur="10000ms"
            repeatCount="indefinite"
            values="M465,311.5Q441,373,379.5,386.5Q318,400,273,402.5Q228,405,181.5,394Q135,383,74.5,351Q14,319,59,263Q104,207,101,141Q98,75,163,85Q228,95,277.5,88Q327,81,391.5,99Q456,117,472.5,183.5Q489,250,465,311.5Z;M430.5,316.5Q457,383,396,409Q335,435,281.5,418.5Q228,402,167.5,408.5Q107,415,67,365.5Q27,316,35.5,252.5Q44,189,96.5,161.5Q149,134,183,75.5Q217,17,273,46.5Q329,76,375.5,107.5Q422,139,413,194.5Q404,250,430.5,316.5Z;M437,296.5Q395,343,365,389.5Q335,436,280.5,425.5Q226,415,186.5,392Q147,369,103.5,337.5Q60,306,73,254Q86,202,97.5,145Q109,88,168.5,92.5Q228,97,273.5,98Q319,99,371,119Q423,139,451,194.5Q479,250,437,296.5Z;M465,311.5Q441,373,379.5,386.5Q318,400,273,402.5Q228,405,181.5,394Q135,383,74.5,351Q14,319,59,263Q104,207,101,141Q98,75,163,85Q228,95,277.5,88Q327,81,391.5,99Q456,117,472.5,183.5Q489,250,465,311.5Z"
          ></animate>
        </path>
      </svg>
    </div>
  );
};

export default Blobs;
