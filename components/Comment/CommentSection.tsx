import React, { useState, useEffect } from 'react';
import { database, ref, push, set, onValue } from '../../util/Firebase/firebase'; // Đặt đường dẫn thích hợp đến tệp set up Firebase

const CommentSection = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const commentsRef = ref(database, `comments/${postId}`);
        // Lắng nghe sự thay đổi dữ liệu
        onValue(commentsRef, (snapshot) => {
            const commentsData = snapshot.val() || [];
            setComments(Object.values(commentsData));


        });
    }, [postId]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newComment) {
            const commentsRef = ref(database, `comments/${postId}`);
            const newCommentRef = push(commentsRef);
            await set(newCommentRef, {
                text: newComment,
                timestamp: Date.now()
            });

            setNewComment('');
        }
    };
    const countComments = comments.length;

    return (
        <div>
            <h2>Comments <span>({countComments})</span></h2>
            <ul className='justify-content-center '>
                {comments.map((comment, index) => (
                    <div key={index} className='row mb-2 '>
                        <div className='col-lg-1'>
                            <img src="https://vivureviews.com/wp-content/uploads/2022/08/avatar-vo-danh-10.png" alt="" style={{ width: "50px" }} />
                        </div>
                        <div className='col-lg-10 border rounded' style={{ lineHeight: "90px" }}>{comment.text}</div>
                    </div>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <div className='row mb-3'>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className='rounded border-secondary'
                        rows={5}
                        cols={2}
                    />
                </div>
                <div className='row'>
                    <button className='btn btn-outline-success px-5 py-2' type="submit">Đánh giá</button>
                </div>
            </form>
        </div>
    );
};

export default CommentSection;