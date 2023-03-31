import SoundSynergy from "./soundsynergy";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";


function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/*"
                           element={<SoundSynergy/>}/>
                </Routes>
        </BrowserRouter>
    );
}

export default App;