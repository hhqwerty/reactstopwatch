import React from "react";
import useLapListController from "./hooks/useLapListController";
import useLapController from "./hooks/useLapController";
import InitialWatch from "./components/organisms/InitialWatch";
import RunningWatch from "./components/organisms/RunningWatch";
import StopWatch from "./components/organisms/StopWatch";

enum STState {
    INITIAL,
    RUNNING,
    STOPPED,
}


const StopWatchScreen: React.FC = () => {
    const [state, setState] = React.useState<STState>(STState.INITIAL);
    const {currentTimeInMillis, stop, resume, reset} = useLapController();
    const {laps, add} = useLapListController();
    switch (state) {
        case STState.STOPPED:
            return <StopWatch
                value={currentTimeInMillis}
                lapList={laps}
                onReset={() => {
                    setState(STState.INITIAL);
                    reset();
                }}
                onResume={() => {
                    setState(STState.RUNNING);
                    resume();
                }}
            />
        case STState.RUNNING:
            return <RunningWatch
                value={currentTimeInMillis}
                lapList={laps}
                onStop={() => {
                    stop();
                    setState((STState.STOPPED));
                }}
                onAdd={() => {
                    add(currentTimeInMillis);
                }}/>;
        default:
            return <InitialWatch onStart={() => {
                resume();
                setState(STState.RUNNING)
            }}/>
    }
}


export default StopWatchScreen;
