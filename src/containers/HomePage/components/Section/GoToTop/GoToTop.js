import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import './GoToTop.scss';

function GoToTop() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }, [pathname]);

    return null;
}

export default GoToTop;