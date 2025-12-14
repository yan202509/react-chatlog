import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries}) => {
  const chatEntryComponents = entries.map((message) => {
    return (
      <li key={message.id}>
        <ChatEntry
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
        />
      </li>
    );
  });

  return (
    <ul>
      {chatEntryComponents}
    </ul>
  )
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default ChatLog;
