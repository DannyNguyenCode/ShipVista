import React, { useState, useEffect, useRef } from 'react';
import './PlantListItem.css';

const PlantListItem = ({plant})=>{

    const [isWatering, setIsWatering] = useState(false);
    const [progress, setProgress] = useState(0);

    const [nextProgress, setNextProgress] = useState(0);
    const [intervalval, setIntervalval] = useState(0);
    const [nextSession, setNextSession] = useState(false);

    const [warning, setWarning]= useState(null);
    const [warningCall, setWarningCall] = useState(null);
    const [borderColors, setBorderColors]= useState({border: "5px solid black"});

    const [lastSession, setLastSession] = useState(true);
    const [lastProgress, setLastProgress] = useState('');
    const firstTimerRender = useRef(true);
    
    
    useEffect(()=>{
        let isMounted = true;
        if(!firstTimerRender.current && nextSession && isMounted){
            handleNextSession();
        }
        return () => {isMounted =false}
    },[nextSession])

    useEffect(()=>{
        let isMounted = true;
        if((lastSession || firstTimerRender.current) && isMounted){
            handleLastSession();
        }
        return ()=>{isMounted = false}
    },[lastSession])


    useEffect(()=>{
        let isMounted = true;
        if(firstTimerRender.current && isMounted){
            firstTimerRender.current = false;
        }
        return ()=> {isMounted =false}
    },[])

    function handleSession(){
        clearInterval(intervalval);
        if(nextSession === false){
            setLastSession(false);
            setIsWatering(true);
            setNextProgress(0);
            let counter= 0;
            let interval = setInterval(()=>{
                counter += 1;
                setProgress(counter*10);
                if(counter === 10){
                    setIsWatering(false);
                    setNextSession(true);
                    setLastSession(true);
                    setLastProgress(0);
                    clearInterval(interval);
                    interval = 0;
                }
            }, 1000);
            setIntervalval(interval);
        }else{
            setWarning(<h5 id="warning">Please wait till next watering session before watering again. Too much water can cause a plant to die.</h5>)
        }
    }
    function stopSession(){
        clearInterval(intervalval);
        setIntervalval(0);
        setIsWatering(false);
    }



    function handleNextSession(){
        setLastSession(true);    
        if(isWatering === false){
            let counter =0;
            let interval = setInterval(()=>{
                counter += 1;
                setNextProgress(counter*3.3333);
                if(counter === 30){
                    setWarning(null);
                    setNextSession(false);
                    setProgress(0);
                    clearInterval(interval);                    
                }
            },1000);
        }
    }

    function handleLastSession(){
        if(isWatering === false){
            clearInterval(intervalval);
            let counter =0;
            let interval = setInterval(()=>{
                counter += 1;
                setLastProgress(new Date(counter*1000).toISOString().substr(11,8));
                if(counter >= 21600){
                    setWarningCall(<h5 id="warning">It has been 6 hour since last watering. Please water plant.</h5>)
                    setBorderColors({border: "5px solid #990000"});
                }else if(counter < 21600 && counter >= 30){
                    setWarningCall(<h5 id="message">It has been 30 seconds since last watering. What a healthy plant.</h5>)
                    setBorderColors({border: "5px solid orange"});
                }else{
                    setBorderColors({border: "5px solid green"})
                    setWarningCall(null);
                }
                if(isWatering === true){
                    clearInterval(interval);
                }
            },1000);
            setIntervalval(interval);
        }
    }

    return(
    <div className="plant-item-container"style={borderColors}>        
        <div className="plant-item">
            <h3 id="header" >{plant.name} - Watering Status: {isWatering ? "Watering" : "Not Watering"}</h3>
        </div>
        
        <div className="plant-item">
            <h5 id="header-details">Watering Session: {progress/10}/10 seconds</h5>
            {warning}
            <div className="progress-bars-wrapper"id="watering-session"><div className="progress-bars" style={{width: progress+"%"}}></div></div>
        </div>
        
        
        <div className="plant-item">
            <h5>Next Watering Session: {Math.floor(nextProgress/3.33)}/30 seconds</h5>
            <div className="progress-bars-wrapper"id="next-watering-session"><div className="progress-bars" style={{width: nextProgress+"%"}}></div></div>            
        </div>

        
        <div className="plant-item">
            <h5>Last Watering Session: {lastProgress}</h5>
            {warningCall}
        </div>

        <div className="button-container">
            <button className="start-water-button button button1" onClick={handleSession}>Start Watering</button>
            <button className="stop-water-button button button2" onClick={stopSession}>Stop Watering</button>
        </div>
    </div>
)}


export default PlantListItem;