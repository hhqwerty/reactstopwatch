import React from "react";
import Counter from "./Counter";

type LapListProps = {
    data: number[];
}
const LapList: React.FC<LapListProps> = (props) => {
    return <div>{props.data.map(item => <Counter key={item} value={item}/>)}</div>
}
export default LapList
