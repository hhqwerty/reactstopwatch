import React from "react";
import Counter from "../modecules/Counter";
import LapList from "../modecules/LapList";

type StopWatchProps = {
    onReset: () => void;
    onResume: () => void;
    value: number;
    lapList: number[],
}



const StopWatch: React.FC<StopWatchProps> = ({value, lapList, onReset, onResume}) => {
    return <>
        <label style={{color: "red", margin: 20}}>Stopped</label>
        <Counter value={value}/>
        <button onClick={() => {
            onReset();
        }}>Reset
        </button>
        <button onClick={() => {
            onResume();
        }}>Resume
        </button>
        <LapList data={lapList}/>
    </>;
}


export default StopWatch;
