import { useSelector } from "react-redux";

import { changeDateFormat } from "selectors";

// Reducer
import { selectCurrentUser } from "reducers/user/userSlice";

const Comment = ({ comment }) => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <article className="comment">
      <header>
        <p>
          <span className="comment-author">{comment.USER ? comment.USER.firstname : currentUser.firstname} {comment.USER ? comment.USER.lastname : currentUser.lastname}</span>
          , le 
          <span className="comment-date"> {changeDateFormat(comment.createdAt)}</span>
        </p>
      </header>
      <p className="comment-content">{comment.content}</p>
    </article>
  );
};

export default Comment;