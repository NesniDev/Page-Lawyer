import {useProgressiveNumber} from "@/components/Components-utils/IncrementNumber"
import { useEffect } from "preact/hooks"

export function CountUp ({initial, final, delay}: {initial: number, final: number, delay?: number}) {
    const [counter, setCounter] = useProgressiveNumber(initial, final, delay)

    useEffect(()=>{
        setCounter(final)
    }, [])

    return <span>{counter}</span>
}