import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [showPythonOptions, setShowPythonOptions] = useState(false);
  const [emailInputVisible, setEmailInputVisible] = useState(false);
  const [geoInputVisible, setGeoInputVisible] = useState(false);
  const [whatsappInputVisible, setWhatsappInputVisible] = useState(false);
  const [smsInputVisible, setSmsInputVisible] = useState(false);
  const [textToAudioInputVisible, setTextToAudioInputVisible] = useState(false);
  const [googleScrapInputVisible, setGoogleScrapInputVisible] = useState(false);
  

  const [emailData, setEmailData] = useState({
    subject: '',
    body: '',
    receiver: ''
  });

  const [geoData, setGeoData] = useState({
    address: ''
  });

  const [whatsappData, setWhatsappData] = useState({
    phoneNumber: '',
    message: ''
  });

  const [smsData, setSmsData] = useState({
    senderNumber: '',
    receiverNumber: '',
    message: ''
  });

  const [textToAudioData, setTextToAudioData] = useState({
    text: ''
  });

  const [googleScrapData, setGoogleScrapData] = useState({
    query: ''
  });

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const togglePythonOptions = () => {
    setShowPythonOptions(!showPythonOptions);
  };

  const toggleEmailInput = () => {
    setEmailInputVisible(!emailInputVisible);
    setGeoInputVisible(false);
    setWhatsappInputVisible(false);
    setSmsInputVisible(false);
    setTextToAudioInputVisible(false);
    setGoogleScrapInputVisible(false);
  };

  const toggleGeoInput = () => {
    setGeoInputVisible(!geoInputVisible);
    setEmailInputVisible(false);
    setWhatsappInputVisible(false);
    setSmsInputVisible(false);
    setTextToAudioInputVisible(false);
    setGoogleScrapInputVisible(false);
  };

  const toggleWhatsappInput = () => {
    setWhatsappInputVisible(!whatsappInputVisible);
    setEmailInputVisible(false);
    setGeoInputVisible(false);
    setSmsInputVisible(false);
    setTextToAudioInputVisible(false);
    setGoogleScrapInputVisible(false);
  };

  const toggleSmsInput = () => {
    setSmsInputVisible(!smsInputVisible);
    setEmailInputVisible(false);
    setGeoInputVisible(false);
    setWhatsappInputVisible(false);
    setTextToAudioInputVisible(false);
    setGoogleScrapInputVisible(false);
  };

  const toggleTextToAudioInput = () => {
    setTextToAudioInputVisible(!textToAudioInputVisible);
    setEmailInputVisible(false);
    setGeoInputVisible(false);
    setWhatsappInputVisible(false);
    setSmsInputVisible(false);
    setGoogleScrapInputVisible(false);
  };

  const toggleGoogleScrapInput = () => {
    setGoogleScrapInputVisible(!googleScrapInputVisible);
    setEmailInputVisible(false);
    setGeoInputVisible(false);
    setWhatsappInputVisible(false);
    setSmsInputVisible(false);
    setTextToAudioInputVisible(false);
  };

  const handleEmailInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleGeoInputChange = (e) => {
    const { name, value } = e.target;
    setGeoData({ ...geoData, [name]: value });
  };

  const handleWhatsappInputChange = (e) => {
    const { name, value } = e.target;
    setWhatsappData({ ...whatsappData, [name]: value });
  };

  const handleSmsInputChange = (e) => {
    const { name, value } = e.target;
    setSmsData({ ...smsData, [name]: value });
  };

  const handleTextToAudioInputChange = (e) => {
    const { name, value } = e.target;
    setTextToAudioData({ ...textToAudioData, [name]: value });
  };

  const handleGoogleScrapInputChange = (e) => {
    const { name, value } = e.target;
    setGoogleScrapData({ ...googleScrapData, [name]: value });
  };

  const sendEmail = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData)
    };

    fetch('/cgi-bin/send_email.cgi', requestOptions)
      .then(response => response.text())
      .then(data => {
        alert(data);
        setEmailData({
          subject: '',
          body: '',
          receiver: ''
        });
        setEmailInputVisible(false);
      })
      .catch(error => console.error('Error:', error));
  };

  const getGeoCoordinates = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geoData)
    };

    fetch('/cgi-bin/get_coordinates.cgi', requestOptions)
      .then(response => response.json())
      .then(data => {
        alert(`Coordinates: ${data.lat}, ${data.lon}`);
        setGeoData({ address: '' });
        setGeoInputVisible(false);
      })
      .catch(error => console.error('Error:', error));
  };

  const sendWhatsappMessage = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(whatsappData)
    };

    fetch('/cgi-bin/send_whatsapp.cgi', requestOptions)
      .then(response => response.text())
      .then(data => {
        alert(data);
        setWhatsappData({
          phoneNumber: '',
          message: ''
        });
        setWhatsappInputVisible(false);
      })
      .catch(error => console.error('Error:', error));
  };

  const sendSmsMessage = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(smsData)
    };

    fetch('/cgi-bin/send_sms.cgi', requestOptions)
      .then(response => response.text())
      .then(data => {
        alert(data);
        setSmsData({
          senderNumber: '',
          receiverNumber: '',
          message: ''
        });
        setSmsInputVisible(false);
      })
      .catch(error => console.error('Error:', error));
  };

  const convertTextToAudio = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(textToAudioData)
    };

    fetch('/cgi-bin/convert_text_to_audio.cgi', requestOptions)
      .then(response => response.text())
      .then(data => {
        alert(data);
        setTextToAudioData({ text: '' });
        setTextToAudioInputVisible(false);
      })
      .catch(error => console.error('Error:', error));
  };

  const scrapeGoogle = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(googleScrapData)
    };

    fetch('/cgi-bin/scrape_google.cgi', requestOptions)
      .then(response => response.json())
      .then(data => {
        alert(`Scraped Data: ${data}`);
        setGoogleScrapData({ query: '' });
        setGoogleScrapInputVisible(false);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Datta's Menu Program</h1>
        <button id="menuButton" onClick={toggleSidebar}>
          {sidebarActive ? <FaTimes /> : <FaBars />}
        </button>
      </header>
      <aside className={`sidebar ${sidebarActive ? 'active' : ''}`}>
        <div className="button-container">
          <button className="menu-button" onClick={togglePythonOptions}>Python</button>
          <button className="menu-button">AWS</button>
          <button className="menu-button">Linux</button>
          <button className="menu-button">Docker</button>
          <button className="menu-button">Full Stack</button>
          <button className="menu-button">Machine Learning</button>
        </div>
      </aside>
      <main className="content">
        {showPythonOptions && (
          <div className="function-buttons-container">
            <button className="function-button" onClick={toggleEmailInput}>Email</button>
            <button className="function-button" onClick={toggleGeoInput}>Geocode</button>
            <button className="function-button" onClick={toggleWhatsappInput}>WhatsApp</button>
            <button className="function-button" onClick={toggleSmsInput}>SMS</button>
            <button className="function-button" onClick={toggleTextToAudioInput}>Text to Audio</button>
            <button className="function-button" onClick={toggleGoogleScrapInput}>Google Scrape</button>
          </div>
        )}
        {emailInputVisible && (
          <div className="email-form-container">
            <label htmlFor="subject">Subject:</label><br />
            <input type="text" id="subject" name="subject" value={emailData.subject} onChange={handleEmailInputChange} /><br />
            <label htmlFor="body">Body:</label><br />
            <textarea id="body" name="body" rows="4" cols="50" value={emailData.body} onChange={handleEmailInputChange}></textarea><br />
            <label htmlFor="receiver">Receiver's Email:</label><br />
            <input type="email" id="receiver" name="receiver" value={emailData.receiver} onChange={handleEmailInputChange} /><br />
            <button onClick={sendEmail}>Send</button>
          </div>
        )}
        {geoInputVisible && (
          <div className="geo-form-container">
            <label htmlFor="address">Address:</label><br />
            <input type="text" id="address" name="address" value={geoData.address} onChange={handleGeoInputChange} /><br />
            <button onClick={getGeoCoordinates}>Get Coordinates</button>
          </div>
        )}
        {whatsappInputVisible && (
          <div className="whatsapp-form-container">
            <label htmlFor="phoneNumber">Phone Number:</label><br />
            <input type="text" id="phoneNumber" name="phoneNumber" value={whatsappData.phoneNumber} onChange={handleWhatsappInputChange} /><br />
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" rows="4" cols="50" value={whatsappData.message} onChange={handleWhatsappInputChange}></textarea><br />
            <button onClick={sendWhatsappMessage}>Send</button>
          </div>
        )}
        {smsInputVisible && (
          <div className="sms-form-container">
            <label htmlFor="senderNumber">Sender's Number:</label><br />
            <input type="text" id="senderNumber" name="senderNumber" value={smsData.senderNumber} onChange={handleSmsInputChange} /><br />
            <label htmlFor="receiverNumber">Receiver's Number:</label><br />
            <input type="text" id="receiverNumber" name="receiverNumber" value={smsData.receiverNumber} onChange={handleSmsInputChange} /><br />
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" rows="4" cols="50" value={smsData.message} onChange={handleSmsInputChange}></textarea><br />
            <button onClick={sendSmsMessage}>Send</button>
          </div>
        )}
        {textToAudioInputVisible && (
          <div className="text-to-audio-form-container">
            <label htmlFor="text">Text:</label><br />
            <textarea id="text" name="text" rows="4" cols="50" value={textToAudioData.text} onChange={handleTextToAudioInputChange}></textarea><br />
            <button onClick={convertTextToAudio}>Convert</button>
          </div>
        )}
        {googleScrapInputVisible && (
          <div className="google-scrap-form-container">
            <label htmlFor="query">Search Query:</label><br />
            <input type="text" id="query" name="query" value={googleScrapData.query} onChange={handleGoogleScrapInputChange} /><br />
            <button onClick={scrapeGoogle}>Scrape</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
