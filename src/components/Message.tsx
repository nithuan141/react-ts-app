import React, { FC, useState } from 'react'
import {CounterButton} from './CounterButton'
import { CounterHistory } from './CounterHistory'

const Message: FC = () => {
    const[counter, setCounter] = useState<number>(0)
    const[counterHistory, addHistory] = useState<Array<number>>([0])

    const updateCounter = (rate: number) => {
        if(counter + rate >= 0 ) {
            const newCounter = counter+rate
            setCounter(newCounter)
            addHistory([...counterHistory, newCounter])
        } else if(counter > 0) {
            setCounter(0)
            addHistory([...counterHistory, 0])
        }
    }

    return <div>
        <h3>The current count is {counter}</h3>
        <div className= 'message-buttons'>
            <CounterButton setCounter={updateCounter} name = {'Add'} rate={1}/>
            <CounterButton setCounter={updateCounter} name = {'Subtract'} rate= {-1}/>
            <CounterButton setCounter={updateCounter} name = {'+5'} rate= {5}/>
            <CounterButton setCounter={updateCounter} name = {'-5'} rate= {-5}/>
        </div>
        <div>
            <CounterHistory counterHistory={counterHistory}/>
        </div>
    </div>
}

export {Message}