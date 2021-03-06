import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Component
import Input from 'components/parts/input/Input';

// Styles
import './postForm.scss';

// Reducer
import {
  selectToken,
  selectCurrentUser
} from 'reducers/login/loginSlice';
import { sendPostAsync } from 'reducers/post/postSlice';

const PostForm = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const token = useSelector(selectToken);

  const [post, setPost] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    post.length > 0 && setError('');
  }, [post])

  const sendPost = (evt) => {
    evt.preventDefault();
    setPost(post.trim());
    post
      ? dispatch(sendPostAsync({
        token,
        postData : {
          content: post,
          authorId: currentUser.id
        }
      }))
      : setError('Vous ne pouvez pas envoyer un message vide')  
  }

  return (
    <form onSubmit={sendPost} className="postForm">
      <legend>Partager quelque chose...</legend>
      <Input
        inputName="message"
        inputType="textarea"
        inputData={post}
        changeInputValue={setPost}
        error={error}
      ></Input>
      <button type="submit">Envoyer</button>
    </form>
  )
}

export default PostForm;
