import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

//useLocation detects each instance the url is changed.

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
