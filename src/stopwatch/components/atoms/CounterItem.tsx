import React from "react";

type CounterItemProps = {
    value: number;
    noOfZero?: number;
}
const CounterItem: React.FC<CounterItemProps> = ({value, noOfZero = 2}) => {
    return <label style={{fontSize: 20, }}>{pad(value,noOfZero)}</label>
}

function pad(number:number, size:number) {
    let num = number.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

export default CounterItem
