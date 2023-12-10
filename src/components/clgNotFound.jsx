import  { useState, useEffect } from 'react';

import logo from "../assets/logo.png";


const ClgNotFound = () => {
    const [countdown, setCountdown] = useState(5);
    useEffect(() => {
        const timer = setInterval(() => {
          if (countdown > 1) {
            setCountdown(countdown - 1);
          } else {
            
            window.location.href = "atharva";
          }
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, [countdown]);

  return (
    <div>
    <nav className="navbar relative my-0">
      <div className="flex items-start justify-between mx-auto space-x-20 my-3">
        <a href="Edumap">
          <img src={logo} alt="logo" className="w-36" />
        </a>
      </div>
    </nav>
<div className="containerer text-center mx-auto mt-24 ">
<h2 className='font-pop text-white font-bold text-[188px] selection:text-white selection:bg-overlay3'>404</h2>
<h3 className='font-pop text-white font-medium text-3xl mt-[-28px] selection:text-white selection:bg-overlay3'>Oops! College not found!</h3>
<p className='text-white/70 font-semibold text-lg mt-8 selection:text-white selection:bg-overlay3'>Redirecting to <span className="font-bold text-white selection:text-white selection:bg-overlay3">Sample Page</span> in <span className='text-yellowpri'>{countdown}</span> seconds...</p>
    </div>
  </div>
  )
}

export default ClgNotFound
