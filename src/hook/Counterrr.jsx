import { useState } from "react"

    const CounTer = () => {
        const [count, setCount] = useState(0)
        const Add = () => {
            setCount(count + 1)
            if (count === 10) {
                setCount(0)
            }
        }
        const Sub = () => {
            setCount(count - 1)
            if (count === -10) {
                setCount(0)
            }
        }
        const Reset = () => {
            setCount(0)
        }
    
        const Previous = () => {
            // setCount(count - 1)
            setCount((prevCount) => prevCount - 1)
            if (count === -10) {
                setCount(0)
            }
        }
        return {Add, Sub, Reset, Previous, count}
    }
    
export default CounTer