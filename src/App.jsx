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
        <img src={logo} alt="Porsche Logo" />
        <ul>
          
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#testdrive">Test Drive</a></li>
        </ul>
      </motion.div>

      <div className="content-container">
        <div className="car-details">
          <motion.h2 
          initial={{ opacity: 0, y:40 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 1 }}
          >911 GT2 RS</motion.h2>
          <ul>
  {[
    { label: "700 hp/515 kW", detail: "Power (hp)/Max kW" },
    { label: "2.8 Sec", detail: "Acceleration 0-100 km/h" },
    { label: "Rear", detail: "Drive" },
  ].map((spec, index) => (
    <motion.li
      key={index}
      custom={index}
      
      initial={{ opacity: 0, y: 40 }}
      animate={(index) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.2,
          duration: 0.8,
          ease: "easeOut",
        },
      })}
    >
      <strong>{spec.label}</strong><span>{spec.detail}</span>
    </motion.li>
  ))}
</ul>
          <a href="">Test Drive</a>
          <div className="car-selector">
            {carModels.map((car, index) => (
              <motion.div
                key={index}
                className="car-model"
                initial={{ opacity: 0, y: 50}}
                animate={{ opacity: 1, y: 0 }}
              
                whileHover={{ scale: 1.1, y: -20 }}
                transition={{ duration:0.8, type: 'spring', stiffness: 300 }}
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
            initial={{ opacity: 0, x:1000, y:-150 }}
            animate={{ opacity: 1, x:0, y:0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
