import { useEffect, useState } from "react"

export default function useKeyPress(key) {
    const [keyPressed, setKeyPressed] = useState(false)
    const handleKeyDown = (event) => {
        if (event.key === key) {
            setKeyPressed(true)
        }
    }
    const handleKeyUp = (event) => {
        if (event.key === key) {
            setKeyPressed(false)
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyup", handleKeyUp)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
        }
    }, [])
    return keyPressed
}
