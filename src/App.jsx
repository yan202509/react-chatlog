import './App.css';
import messageData from './data/messages.json';
// import ChatEntry from './components/ChatEntry.jsx';
import ChatLog from './components/ChatLog.jsx';



const App = () => {

  // Wave 1: only needs the first message
  // const firstMessageData = messageData[0];

  // Wave 2:  

  return (
    <div id="App">
      <header>
        <h1>Chat between Two Person</h1>
      </header>

      <main>
        <section>
          {/* Wave 01: Render one ChatEntry component
          Wave 02: Render ChatLog component */}
          {/* <ChatEntry sender={firstMessageData.sender}
            body={firstMessageData.body}
            timeStamp={firstMessageData.timeStamp}
          >
          </ChatEntry> */}
          <ChatLog entries={messageData}></ChatLog>
        </section>
      </main>
    </div>
  );
};

export default App;
