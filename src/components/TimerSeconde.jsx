import React, { useEffect, useState } from 'react'

export default function TimerSeconde() {
    const [time, settime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            settime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);
  return (
    <div>TimerSeconde : {time}</div>
  )
}
