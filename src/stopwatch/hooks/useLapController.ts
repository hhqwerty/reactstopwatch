import React, {useEffect, useState} from "react";

const useLapController = () => {
    const [currentTimeInMillis, setCurrentTimeInMillis] = React.useState<number>(0);
    const [isPause, setPause] = useState(true);
    useEffect(() => {
        let id: number = 0;
        if (!isPause) {
            id = requestAnimationFrame(function raiseTime() {
                setCurrentTimeInMillis(prev =>
                    prev + 16.6666666666666666666666666
                )
                id = requestAnimationFrame(raiseTime)
            })
            console.log({id});
        } else if (id) {
            cancelAnimationFrame(id);
        }
        return () => {
            if (id) cancelAnimationFrame(id);
        }

    }, [
        isPause,

    ])
    const stop = (): void => {
        setPause(true);
    }
    const resume = (): void => {
        setPause(false);
    }

    const reset = (): void => {
        setPause(true);
        setCurrentTimeInMillis(0);
    }

    return {currentTimeInMillis, stop, resume, reset};
}

export default useLapController;
