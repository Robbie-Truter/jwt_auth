import './App.css';
import ProgressBar from "react-scroll-progress-bar";


function Home() {
        return(
      <div className="App">
          <ProgressBar height="14px" bgcolor="#000" duration="0.2" />
        <header className="App-header">
          <div className={"home"}>
              <img src={"jwt.jpeg"} alt={"jwt image"}/>
              <h4>About</h4>
              <hr />
              <br />
              <p><b> In this project, I'm showcasing JWT (Json Web Token) for user<br/> authorization. I'm also integrating JWT with MongoDB and mongoose.<br />There are 3 types of users:</b></p>
              <ul>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Default</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Management</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Admin</li>
              </ul>
              <p><b>-Default users can add and find data.<br/>-Management users can add,find,update data.<br/>-Admin users can add,find,update,delete data.</b></p>
              <p><b>You will automatically register as a default user.</b></p>

              <h4>DB structure</h4>
              <hr />
              <br />
              <p><b>There are 4 OU's (organisational units):</b></p>
              <ul>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- hardware review</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- news management</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- opinion publishing</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- software review</li>
              </ul>
              <p><b>Each OU includes divisions e.g. IT,development,finances etc..Each division has sample data inside of it except credential_repository(username),default,management,<br/>admin. We are only working with these 4 divisions for showcasing JWT implementation.</b></p>
              <p><b>In terms of MongoDb, the 4 OU's are collections and the divisions are the documents contained by the collections</b></p>

              <h4>Testing</h4>
              <hr />
              <br />
              <p><b>For testing purposes, I'll be sharing some users with the admin and management role, since you can only register as a default user.</b></p>
              <ul>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- OU: hardware review</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Username: Geralt Smith</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Password: 1234</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Admin: true</li>
              </ul>
              <ul>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- OU: news management</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Username: John Doe</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Password: 7474</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Management: true</li>
              </ul>
              <ul>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- OU: opinion publishing</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Username: Peter Pan</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Password: password</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Admin: true</li>
              </ul>
              <ul>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- OU: software review</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Username: Ned Hamer</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Password: hamer14</li>
                  <li style={{ 'font-weight': "bold", 'color':'black'}}>- Management: true</li>
              </ul>
              <p><b>All the data above are mock data.<br />If signed in, the data can also be found by using the "find data" search form.</b></p>

          </div>

        </header>
      </div>
  );
}

export default Home;
