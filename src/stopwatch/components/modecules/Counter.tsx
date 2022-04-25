import React from "react";
import CounterItem from "../atoms/CounterItem";

type CounterProps = {
    value: number;
}


const Counter: React.FC<CounterProps> = ({value}) => {
    const date = new Date(value);
    return <div style={{flexDirection: "row", flex: 1}}>
        <CounterItem value={date.getUTCHours()}/>
        <label>:</label>
        <CounterItem value={date.getUTCMinutes()}/>
        <label>:</label>
        <CounterItem value={date.getUTCSeconds()}/>
        <label>.</label>
        <CounterItem value={date.getUTCMilliseconds()} noOfZero={3}/>
    </div>
}





export default Counter;
