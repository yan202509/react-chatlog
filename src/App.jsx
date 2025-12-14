import './App.css';
import messageData from './data/messages.json';
import ChatEntry from './components/ChatEntry.jsx';
// import ChatLog from './components/ChatLog.jsx';



const App = () => {

  // Wave 1: only needs the first message
  const firstMessageData = messageData[0];

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>

      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */
          <ChatEntry sender={firstMessageData.sender}
            body={firstMessageData.body}
            timeStamp={firstMessageData.timeStamp}
          >

          </ChatEntry>
        }
      </main>
    </div>
  );
};

export default App;
