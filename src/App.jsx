import { useState} from 'react';
import './App.css';
import messageData from './data/messages.json';
// import ChatEntry from './components/ChatEntry.jsx';
import ChatLog from './components/ChatLog.jsx';

const App = () => {

  // Wave 1: only needs the first message
  // const firstMessageData = messageData[0];
  const [nowMessageData, setNowMessageData] = useState(messageData);

  const toggleLike = (messageId) => {
    const nowMessages = nowMessageData.map(message => {
      if (message.id === messageId) {
        return { ...message, liked: !message.liked };
      } else {
        return message;
      }
    });
    setNowMessageData(nowMessages);
  };

  const totalLikes = nowMessageData.filter(message => message.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat between Two Person</h1>
        <h2>Total Liked Messages: {totalLikes} ❤️s</h2>
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
          <ChatLog
            entries={nowMessageData}
            onLikeToggle={toggleLike}
          ></ChatLog>
        </section>
      </main>
    </div>
  );
};

export default App;
