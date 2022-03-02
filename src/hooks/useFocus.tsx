import {useRef} from 'react';

const useFocus = () => {
    const htmlElRef = useRef(null);
    const setFocus:any = () => {
        htmlElRef.current && htmlElRef.current.focus()
    }

    return [htmlElRef, setFocus]
}

export default useFocus;