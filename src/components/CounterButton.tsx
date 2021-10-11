import React, {FC} from 'react'

interface CBProps {
    setCounter: Function,
    name: String;
    rate: number;
}

export const CounterButton: FC<CBProps> = ({setCounter, name, rate}) => {
    return <>
        <button onClick= {()=> {setCounter(rate)}}>{name}</button>
    </>
}