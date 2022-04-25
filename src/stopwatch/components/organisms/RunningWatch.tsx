import React from "react";
import Counter from "../modecules/Counter";
import LapList from "../modecules/LapList";

type RunningWatchProps = {
    onStop: () => void;
    onAdd: () => void;
    value: number;
    lapList: number[],
}



const RunningWatch: React.FC<RunningWatchProps> = ({value, lapList, onStop, onAdd}) => {
    return <>
        <label style={{color: "green", margin: 20}}>Running...</label>
        <Counter value={value}/>
        <button onClick={() => {
            onStop();
        }}>Stop
        </button>
        <button onClick={() => {
            onAdd();
        }}>Lap
        </button>
        <LapList data={lapList}/>
    </>;
}


export default RunningWatch;
