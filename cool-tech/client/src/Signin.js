import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function Signin() {
    //empty states for input
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [OU, setOU] = useState("")
    const [data, setData] = useState("")


    //fetch sign in api
    const fetchProducts = async () => {

        //set api response to empty state
        axios.get('http://localhost:3001/signin/' + OU + "/" + username + "/" + password)
            .then(function (response) {
                sessionStorage.setItem('token', response.data)
            })

            //if apu response equals "Some details doesn't exist" or "OU does not exist", set unique error msg to empty state
            //else welcome user (jwt is set into session storage)
            .then(function (response) {
                if(sessionStorage.getItem('token') === "Some details doesn't exist"){
                    setData(("Some details doesn't exist"));
                }
                else if(sessionStorage.getItem('token') === "OU does not exist"){
                    setData(("OU does not exist"));
                }
                else {
                    setData("Welcome " + username)
                }
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
                    <h4>Sign in</h4>
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

export default Signin;
