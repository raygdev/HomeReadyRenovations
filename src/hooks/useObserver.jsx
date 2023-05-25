import React, { useState, useEffect } from "react"

export default function useObserver(node){
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        let options =  {
            rootMargin: "10px",
            threshold: 0.5
        }
        const observer = new IntersectionObserver(handleObserver, options)

        if(node.current){
            observer.observe(node.current)
        }

        return () => {
            observer.disconnect()
        }

    },[isIntersecting])

    function handleObserver(entries) {
        const [ entry ] = entries
        setIsIntersecting(entry.isIntersecting)
    }

    return isIntersecting
}
