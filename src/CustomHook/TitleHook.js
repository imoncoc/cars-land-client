import { useEffect } from "react";

const useTitleHook = (title) => {
    useEffect(() => {
        document.title = `CarsLand | ${title}`;
    }, [title])
}

export default useTitleHook;