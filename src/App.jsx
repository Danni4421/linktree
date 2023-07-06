import { Button } from './component/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Profile">
        <img src={require('./img/image-profile.jpg')} alt="#my-images" />
        <div className="description">
          <p>
            My name is <span className="red-font">Aji Hamdani Ahmad</span> and
            I'm passionate to be
            <br />
            <span className="red-font">Front end Web Developer</span>. I'm From
            Indonesia, living in Lamongan, East Java, and currently studying at
            State Polytechnic of Malang.
          </p>
        </div>
      </div>
      <div className="Button-group">
        <div>
          <h3>Ayo Interaksi Bersamaku😁😁 : </h3>
        </div>
        <Button
          name="WhatsApp"
          userLink={process.env.REACT_APP_WHATSAPP}
          color="#5cb85c"
        />
        <Button
          name="LinkedIn"
          userLink={process.env.REACT_APP_LINKEDIN}
          color="#0275d8"
        />
        <Button
          name="Github"
          userLink={process.env.REACT_APP_GITHUB}
          color="#f0ad4e"
        />
        <Button
          name="Email"
          userLink={process.env.REACT_APP_EMAIL}
          color="#bb4732"
        />
        <Button
          name="Instagram"
          userLink={process.env.REACT_APP_INSTAGRAM}
          color="#a32372"
          isLight={true}
        />
        <Button
          name="Discord"
          userLink={process.env.REACT_APP_DISCORD}
          color="#312d31"
          isLight={true}
        />
        <Button
          name="Join my Discord Server"
          userLink={process.env.REACT_APP_DISCORDSERVER}
          color="#242124"
          isLight={true}
        />
      </div>

      <cite>Danni4421 ~ 2023</cite>
    </div>
  );
}

export default App;
