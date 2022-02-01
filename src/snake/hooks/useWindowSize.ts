import { useEffect, useState } from "react";


export interface WindowSize {
    width: number;
    height: number;
}

export default function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        function onWindowResize() {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener('resize', onWindowResize);
        return () => {
            window.removeEventListener('resize', onWindowResize);
        }
    }, []);

    return windowSize;
}
