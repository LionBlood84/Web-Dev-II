import { content } from '../content.js';

// Reader comments: bold username followed by the comment text
function Comments() {
  return (
    <section className="comments">
      <h2>Comments</h2>
      {content.comments.map((comment) => (
        <div className="comment" key={comment.user}>
          <strong className="comment__user">{comment.user}</strong>
          <p>{comment.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Comments;
