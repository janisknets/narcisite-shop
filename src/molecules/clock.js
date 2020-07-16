import React, {useState, useEffect} from 'react';
import Display from '../atoms/display'
import Panel from '../atoms/panel'

const Clock = () => {
    const [time, setTime] = useState(new Date());
    const [isDateVisible, setIsDateVisible] = useState(true)
   

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerId);
        }
    }, [time]);

    function tick() {
        setTime(new Date());
    }
 

    function toggleDate () {
        setIsDateVisible(!isDateVisible);
    }

        return(
            <div>
                <Panel toggleDate={toggleDate} dateOn={isDateVisible} />
                 <Display time={time} isDateVisible={isDateVisible}/>
            </div>
        )
}




export default Clock;
