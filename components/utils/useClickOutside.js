import { useEffect,useRef } from "react";
const useClickOutside = (handler,exception) => {
    let clickOutsideRef = useRef();
  
    useEffect(() => {
      let maybeHandler = (event) => {
          if(exception){
            if (!clickOutsideRef.current?.contains(event.target)&&exception.current?.contains(event.target)) {
                return;
                  }
                  else{
                handler();
                  }
          }else{
            if (!clickOutsideRef.current?.contains(event.target)) {
                handler();
              }
          }
        
      };
  
      document.addEventListener("mousedown", maybeHandler);
  
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
  
    return clickOutsideRef;
  };

  export default useClickOutside;