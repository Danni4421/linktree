import { Button } from './component/Button';
import './App.css';


function App() {

  const dataContact = require('./data.json')

  return (
    <div className="App">
      <div className="Profile">
        <img src={require('./img/image-profile.jpg')} alt="#my-images" />
        <div className="description">
          <p>
            My name is <span className='red-font'>Aji Hamdani Ahmad</span> and I'm a <span className='red-font'>Front end Web Developer</span>. 
            I'm From Indonesia, living in Lamongan, East Java, and currently 
            studying at State Polytechnic of Malang.
          </p>
        </div>
      </div>
      <div className="Button-group">
        <h3>Contact Me : </h3>
        <Button name="WhatsApp" userLink={dataContact.whatsapp}/>
        <Button name="LinkedIn" userLink={dataContact.linkedIn} />
        <Button name="Github" userLink={dataContact.github} />
      </div>
    </div>
  );
}

export default App;
