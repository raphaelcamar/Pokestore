import React, { useEffect, useRef }from 'react';

const InfiniteScroll = ({fetchMore}) => {

  const containerRef = useRef();
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }
    
    const observer = new IntersectionObserver(([entry]) =>{
      if(entry.isIntersecting){
        fetchMore();
      }
    }, options)
    observer.observe(containerRef.current);

    return () =>{
      observer.disconnect();
    }
  }, []);

  return <div ref={containerRef} />
}

export default InfiniteScroll;