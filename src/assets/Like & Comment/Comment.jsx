import { useState } from 'react'
import './LikeComment.css'

const Comment = () => {
    const [comment, setComment] = useState("");
    const [comments, setComments] =useState([]);
    const onChangeHandler =(e)=>{
        setComment(e.target.value);
    };
    const onClickHandler =() => {
        if(comment.trim() !==""){
            setComments((comments) => [...comments,comment]);
            setComment("")
        }
    }

  return (
    <div className='comment-wraper w-96' >
        {comments.map( (text) => (
            <div className='comment-container'>{text}</div>
        ))}
        
        <div className='comment-flexbox'>
            <h3 className='comment-text'>Comment</h3>
            <textarea 
                value={comment} 
                onChange={onChangeHandler} 
                className='input-box'
            />
            <button onClick={onClickHandler} className='comment-button'>Submit</button>
        </div>
    </div>
  )
}

export default Comment