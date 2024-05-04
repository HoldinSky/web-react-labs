import React, {useEffect} from 'react';
import HallLayout from "./HallLayout";
import "../styles/App.scss"

function App() {
    useEffect(() => {
        document.title = "Puzata Hata";
    }, []);

    return <HallLayout/>;
}

export default App;
