import { useState, useEffect } from "react";

export default function useCustomPointer(pointer) {
    const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPointerPosition({ x: event.clientX, y: event.clientY });
    };
    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: pointerPosition.y,
                left: pointerPosition.x,
                fontSize: "2rem",
                pointerEvents: "none",
            }}
        >
            {pointer}
        </div>
    )
}
