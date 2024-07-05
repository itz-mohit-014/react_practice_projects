import { useState } from "react";

const Body = () => {
    
    let [time, setTime] = useState({
        hours:0,
        min:0,
        seconds:0,
        miliSeconds:0
    })

    let [timerIntervalId, setTimerIntervalId] = useState(null)

    const stopWatch = () => {
        if(timerIntervalId) return timerIntervalId;

        let intervalId = setInterval(() => {
            if(time.hours > 23){
                time.hours = 0;
            }
            if(time.min > 59){
                time.min = 0;
                time.hours = ++time.hours
            }
            if(time.seconds > 59){
                time.seconds = 0;
                time.min = ++time.min
            }
            if(time.miliSeconds >= 99){
                time.miliSeconds = 0;
                time.seconds = ++time.seconds
            }
            setTime({
                ...time,
                miliSeconds: ++time.miliSeconds
            })
            
        }, 10);
        
        return intervalId;
        
    }

    const stopTimer = () => {
        if(!timerIntervalId) {
            return;
        }
        clearInterval(timerIntervalId);
        setTimerIntervalId(null)
    }

    return <>
        
        <h1 >Stopwatch</h1>

        <h2>{String(time.hours).padStart(2, 0)} : {String(time.min).padStart(2, 0)} : {String(time.seconds).padStart(2, 0)} : {String(time.miliSeconds).padStart(2, 0)}
        </h2>
        
        <div className="btn-container">
            
        <button onClick={() =>{ 
           setTimerIntervalId(stopWatch());
        }}>Start</button>
        
        <button onClick={stopTimer}>Stop</button>
        <button onClick={() => {
           stopTimer();
           setTime({
            hours:0,
            min:0,
            seconds:0,
            miliSeconds:0
           })
        }}>Reset</button>
        
        </div>
    </>
}

export default Body;