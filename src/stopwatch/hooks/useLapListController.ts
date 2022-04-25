import React from "react";

const useLapListController = () => {
    const [laps, setLaps] = React.useState<number[]>([]);
    const add = (number: number): void => {
        laps.unshift(number);
        if (laps.length > 10) {
            laps.pop();
        }
        setLaps([...laps])
    }
    return {laps, add};
}

export default useLapListController;
