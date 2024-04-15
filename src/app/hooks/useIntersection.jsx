"use client"
import { useRef, useEffect, useState } from "react";

export const useIntersection = (props) => {
    const {root, rootMargin = "0px", cb,threshold = 0} = props;
    const ref = useRef(null);

    const [isIntersecting, setIsIntersecting] = useState(false);
    
    useEffect(() => {
        const { current } = ref;
        if(!current) return;

        const handleIntersection = ([entry])  => {
            setIsIntersecting(entry.isIntersecting);
            if(cb) cb(entry.isIntersecting);
        };

        const options = {
            root,
            rootMargin,
            threshold
        };

        const observer = new IntersectionObserver(handleIntersection, options )
        observer.observe(current);
        return () => current && observer.unobserve(current);

    }, [ref, root, rootMargin, threshold, cb])
    return [isIntersecting, ref]
}