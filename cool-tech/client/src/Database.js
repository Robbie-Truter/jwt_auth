import './App.css';
import ProgressBar from "react-scroll-progress-bar";
import FindData from "./FindData"
import AddData from "./AddData";
import UpdateData from "./UpdateData";
import DeleteData from "./DeleteData";


function Database() {
    //back to top function
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return(
        <div className="App">
            {/* Return all main components */}
            <ProgressBar height="14px" bgcolor="#000" duration="0.2" />
            {<FindData />}
            {<AddData />}
            {<UpdateData />}
            {<DeleteData />}

            <button type="button" className={"backToTop"} onClick={handleClick}>Back to top</button>
            <br />
            <br />
        </div>
    );
}

export default Database;
