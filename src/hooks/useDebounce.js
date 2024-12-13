import { useRef } from "react";

const useDebounce = (callBack, delay) => {

    const timeIdOurRef = useRef(null);

    useEffect(() => {
    
      return () => {
        if (timeIdOurRef.current) {
            clearTimeout(timeIdOurRef.current)
        }
      }
    }, [])
    

   const debounceCallback = (...arg) => {
        if (timeIdOurRef.current) {
            clearTimeout(timeIdOurRef.current)
        }

        timeIdOurRef.current = setTimeout (() => {
            callBack(...arg)
        }, delay)
    }

    return debounceCallback;
}

export default useDebounce;