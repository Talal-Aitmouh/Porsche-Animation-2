import { useState } from 'react';
import { motion } from 'framer-motion';
import log from './assets/lo.png';
import logo from './assets/logo.png';
import pic from './assets/911.png';
import macan from './assets/macan.png';
import cayan from './assets/cayan.png';
import pan from './assets/panamera.png';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const carModels = [
    { name: '911', img: pic },
    { name: 'Panamera', img: pan },
    { name: 'Macan', img: macan },
    { name: 'Cayenne', img: cayan },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <div className="app-container">
      <header className="header">
        <a href="#" onClick={toggleSidebar}>
          <i className="fa-solid fa-bars fa-2xl"></i>
        </a>
        <img src={logo} alt="Porsche Logo" />
      </header>

      <motion.div
        className={`sidebar ${isOpen ? 'active' : ''}`}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <button className="close-btn" onClick={toggleSidebar}>
          <i className="fa-solid fa-times"></i>
        </button>
        <ul>
          <img src={logo} alt="Porsche Logo" />
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#testdrive">Test Drive</a></li>
        </ul>
      </motion.div>

      <div className="content-container">
        <div className="car-details">
          <h2>911 GT2 RS</h2>
          <ul>
            <li><strong>700 hp/515 kW</strong><span>Power (hp)/Max kW</span></li>
            <li><strong>2.8 Sec</strong><span>Acceleration 0-100 km/h</span></li>
            <li><strong>Rear</strong><span>Drive</span></li>
          </ul>
          <a href="">Test Drive</a>
          <div className="car-selector">
            {carModels.map((car, index) => (
              <motion.div
                key={index}
                className="car-model"
                whileHover={{ scale: 1.5, y: -20 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={car.img} alt={car.name} />
                <p>{car.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="car-image">
          <motion.img
            src={log}
            alt="Porsche 911 GT2 RS"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
