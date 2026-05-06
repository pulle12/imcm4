import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Gallery from './components/Gallery.jsx';
import { Profile } from './components/Profile.jsx';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}
