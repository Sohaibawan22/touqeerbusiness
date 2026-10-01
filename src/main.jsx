import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
// Self-hosted fonts (latin subset): no third-party request, no render-blocking stylesheet
import '@fontsource/barlow/latin-400.css';
import '@fontsource/barlow/latin-500.css';
import '@fontsource/barlow/latin-600.css';
import '@fontsource/barlow-condensed/latin-600.css';
import '@fontsource/barlow-condensed/latin-700.css';
import './index.css';

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// In production the HTML is pre-rendered at build time, so attach to it; in dev, render from scratch.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);

// Arm the scroll-reveal animations only once JavaScript is actually running.
requestAnimationFrame(() => document.documentElement.classList.add('js'));
