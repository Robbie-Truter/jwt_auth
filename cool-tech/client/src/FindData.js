import './App.css';
import {useState} from "react";
import axios from "axios";

function FindData() {
    //empty state for input
    const [username, setUsername] = useState("")
    const [OU, setOU] = useState("")
    const [data, setData] = useState("")

    //fetch api from backend function
    const fetchProducts = async () => {

        //verify jwt
        const headers = {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }

        //set api response to empty state
        axios.get('http://localhost:3001/findData/' + OU + "/" + username,{headers:headers})
            .then(function (response) {
                    setData(JSON.stringify(response.data));
            })

            .catch(function (error) {
                setData(error);
            });
    };

    //submit to trigger fetch
    const handleSubmit = (event) => {

        fetchProducts()
            .catch(() => console.log("error"))

        event.preventDefault();
    }

    return(
        <div className="App">
            <header className="App-header">
                <div className={"form"}>
                    <h4>Find Data</h4>
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
                        <input type="submit" value="Submit" className={"submitMarketData"}/>
                    </form>
                </div>
                <p>{data}</p>
            </header>
        </div>
    );
}

export default FindData;
