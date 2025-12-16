import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const likeButtonClicked = () => {
    props.onEachLikeToggle(props.id);

  };

  const like = props.liked ? '❤️' : '🤍';

  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <main className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button onClick={likeButtonClicked} className="like">{like}</button>
      </section>
    </main>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onEachLikeToggle: PropTypes.func,

};

export default ChatEntry;
