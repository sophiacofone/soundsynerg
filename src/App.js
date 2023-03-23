import HelloWorld from "./labs/a6/hello-world";
import SoundSynergy from "./soundsynergy";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/*"
                           element={<HelloWorld/>}/>
                    <Route path="/soundsynergy/*"
                           element={<SoundSynergy/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;