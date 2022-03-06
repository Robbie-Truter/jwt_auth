import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Signin from "./Signin"
import Register from "./Register";
import Database from "./Database";


//render links to components with react-router
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="sign-in" element={<Signin />} />
                    <Route path="register" element={<Register />} />
                    <Route path="database" element={<Database />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));