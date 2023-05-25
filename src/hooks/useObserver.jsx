import { useEffect } from "react";

const defaultOptions = {
  rootMargin: "10px",
  threshold: 0.5,
};

const useObserver = (node, callback, options = defaultOptions) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      callback(entry.isIntersecting);
    }, options);

    if (node.current) {
      observer.observe(node.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [node, callback, options]);
};

export default useObserver;
