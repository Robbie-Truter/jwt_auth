import './App.css';
import {useState} from "react";
import axios from "axios";

function UpdateData() {
    //empty states for input
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [selected, setSelected] = useState("")
    const [OU, setOU] = useState("")
    const [data, setData] = useState("")

    //fetch api from backend function
    const fetchProducts = async () => {

        //verify jwt
        const headers = {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }

        //set api response to empty state
        axios.get('http://localhost:3001/updateData/' + OU + "/" + selected + "/" + username + "/" + password,{headers:headers})
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
                <div className={"db_form"}>
                    <h4>Update Data</h4>
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
                            value={selected}
                            onChange={e => setSelected(e.target.value)}
                            className={"marketInput"}
                            placeholder={"Selected credential..."}
                            required/>
                        <br />
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className={"marketInput"}
                            placeholder={"Enter new username..."}
                            required/>
                        <br />
                        <input
                            type="text"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={"marketInput"}
                            placeholder={"Enter new password..."}
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

export default UpdateData;
