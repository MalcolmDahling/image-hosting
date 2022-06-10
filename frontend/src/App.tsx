import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


function App() {

    const [image, setImage] = useState<any>();

    useEffect(() => {
        
        axios.get('http://localhost:3000/test')
            .then(res => {

                setImage(<img src={res.data.url} />);
                
            });

    }, []);

    return (
        <>
            {image}
        </>
    );
}

export default App;

