import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function Register() {
    //empty states for input
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [OU, setOU] = useState("")
    const [data, setData] = useState("")

    //fetch register api
    const fetchProducts = async () => {

        //set response to empty state
        axios.post('http://localhost:3001/register/'+ OU + '/'+ username + "/" + password)
            .then(function (response) {
               setData((response.data));
            })
            .catch(function (error) {
                setData(error);
            });
    };

    //submit triggers fetch
    const handleSubmit = (event) => {

        fetchProducts()
            .catch(() => console.log("error"))

        event.preventDefault();
    }


    return(
        <div className="App">
            <header className="App-header">
                <div className={"form"}>
                <h4>Register</h4>
                    <hr />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={OU}
                        onChange={e => setOU(e.target.value)}
                        className={"marketInput"}
                        placeholder={"Enter OU..."}
                        required/>
                    <br />
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className={"marketInput"}
                        placeholder={"Enter username..."}
                    required/>
                    <br />
                    <input
                        type="text"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className={"marketInput"}
                        placeholder={"Enter password..."}
                    required/>
                    <br />
                    <input type="submit" value="Submit" className={"submitMarketData"}/>
                </form>
                    <h4>{data}</h4>
                </div>
                <br />
            </header>
        </div>
    );
}

export default Register;
