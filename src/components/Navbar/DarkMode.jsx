import React from 'react';
import lightButton from "../../assets/mode.png"
import DarkButton from "../../assets/mode.png"
const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else{
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className='relative'>
      <img 
      src={lightButton} 
      alt="mode"
       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={'w-20 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${ theme === "dark" ? "opacitiy-0 : "opacity-100"}'}/>

      <img 
      src={DarkButton} 
      alt="mode"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
      className='w-20 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,0.1)] transition-all duration-300'/>
    </div>
  );
}

export default DarkMode;
