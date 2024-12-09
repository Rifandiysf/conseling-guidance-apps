import { useState } from "react";


const ToggleButton = ({initialState = false, onToggle = () => {}}) => {
    const [isToggled, setIsToggled] = useState(initialState);

    const handleToggle = () => {
      const newToggleState = !isToggled;
      setIsToggled(newToggleState);
      onToggle(newToggleState);
    };

  return (
    <div className="p-4">
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                type="checkbox"
                className="sr-only"
                checked={isToggled}
                onChange={handleToggle}/>
                <div className={`w-12 h-6 rounded-full shadow-sm transition-colors duration-300 ease-in-out ${isToggled ? 'bg-primary' : 'bg-body'}`}></div>
                <div className={`dot absolute left-1 top-1 bg-slate-700 w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${isToggled ? 'transform translate-x-6' : ''}`}></div>
            </div>
        </label>
    </div>
  )
}

export default ToggleButton