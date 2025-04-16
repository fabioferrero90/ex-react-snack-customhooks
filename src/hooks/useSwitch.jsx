import { useState } from 'react';
export default function useSwitch() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn((prev) => !prev);
    };

    return [isOn, toggleSwitch];
}
