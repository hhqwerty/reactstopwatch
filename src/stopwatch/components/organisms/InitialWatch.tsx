import React from "react";
import Counter from "../modecules/Counter";

type InitialWatchProps = {
    onStart: () => void;
}
const InitialWatch: React.FC<InitialWatchProps> = ({onStart}) => {
    return <>
        <label style={{margin: 20, color: "purple"}}>Initial</label>
        <Counter value={0}/>
        <button onClick={() => {
            onStart();
        }}>Start
        </button>
    </>;
}


export default InitialWatch;
