import React, {FC} from 'react'

interface CHProps {
    counterHistory: Array<number>
}

interface HistoryProps {
    counter: number;
}

export const CounterHistory: FC<CHProps> = ({counterHistory}) => {
    const max =  counterHistory.reduce((max, current) => max > current ? max : current)
    return <>
    <span>The maximum counter value was : {max}</span>
    <ul>
        {
            counterHistory.map(item=> <HistoryItem key={item} counter={item} />)
        }
    </ul>
    </>
}

const HistoryItem: FC<HistoryProps> =({counter})=>{
    return <li className='historylistitem'>{counter}</li>
}