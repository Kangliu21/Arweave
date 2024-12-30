import { AnimatedBackground } from 'animated-backgrounds';
import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  svg: {
    width: '300px',
    height: '300px',
  },
  text: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: '20px',
  },
};
export default function App() {
  return (
    <div>
      <AnimatedBackground animationName="geometricShapes" 
       blendMode="screen" />
      <div style={styles.container}>
      <h1 style={{ textAlign: 'center', fontSize: '3vw'}}>Kang Liu Developer</h1>

      </div>
    </div>
  )
  return (
    <div style={styles.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        style={styles.svg}
      >
        {/* Hair and Flame Shape */}
        <path
          d="M250 20c60 0 120 40 120 100s-60 100-120 100-120-40-120-100 60-100 120-100z"
          fill="#f8a5c2"
        />

        {/* Face */}
        <circle cx="250" cy="200" r="80" fill="#ff5252" />

        {/* Eyes */}
        <circle cx="230" cy="190" r="10" fill="#fff" />
        <rect x="270" y="185" width="20" height="20" fill="#fff" transform="rotate(45 280 195)" />

        {/* Mouth */}
        <path
          d="M220 220c20 20 60 20 80 0"
          stroke="#fff"
          strokeWidth="5"
          fill="none"
        />

        {/* Horns */}
        <path
          d="M200 140c-20-30 0-70 20-40s10 60-20 40z"
          fill="#ff5252"
        />
        <path
          d="M300 140c20-30 0-70-20-40s-10 60 20 40z"
          fill="#ff5252"
        />

        {/* Speech Bubble */}
        <path
          d="M320 50c50 0 80 30 80 60s-30 60-80 60c-10 0-20-2-30-5l-20 15 5-25c-20-15-35-35-35-45s30-60 50-60z"
          fill="#ff5252"
        />
        <text x="340" y="80" fill="#fff" fontSize="16" fontWeight="bold">
          Hi! I'm
        </text>
        <text x="340" y="100" fill="#fff" fontSize="16" fontWeight="bold">
          Kang Liu
        </text>

        {/* Body */}
        <path
          d="M150 300h200v150h-200z"
          fill="#74b9ff"
        />
        <path
          d="M250 300c20 50 20 100 0 150"
          stroke="#fff"
          strokeWidth="5"
          fill="none"
        />

        {/* Heart */}
        <path
          d="M230 350c10-20 40-20 50 0s-20 50-25 50-35-30-25-50z"
          fill="#ff5252"
        />
      </svg>

      <h1 style={styles.text}>Kang Liu Developer</h1>
    </div>
  );
}