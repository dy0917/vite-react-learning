import { useState, useEffect } from 'react';

// Renders a digital time that updates every second
export default function Clock() {
  const [showClock, setShowClock] = useState(false);
  const [date, setDate] = useState(new Date());
  const toggleClock = () => {
    setShowClock(!showClock);
  };
  useEffect(() => {
    let clockInterval = setInterval(() => tick(), 1000);
    console.log('Clock component mounted');

    // function returned from useEffect is run on unmount
    // and used to cleanup any side effects
    return () => {
      console.log('Clock component unmounted');
      clearInterval(clockInterval);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
    console.log('tick'); // track the effect frequency
  };

  return (
    <div className="ClockDisplay componentBox">
      {showClock && <Clock />}
      <button onClick={toggleClock}>Toggle Clock</button>
    </div>
  );
}
