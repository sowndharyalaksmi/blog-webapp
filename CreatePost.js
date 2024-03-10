import React, { useState } from 'react'
import {addDoc , collection} from 'firebase/firestore'
import {db ,auth} from "../Firebase-config"
import {useNavigate,useEffect} from 'react-router-dom'
function CreatePost({isAuth}) {
  const [title,setTitle] =useState("");
  const [postText, setPostText]=useState("");
  const postsCollectionRef=collection(db,"Posts");
  let navigate = useNavigate();
  const createPost= async()=>{
      await addDoc(postsCollectionRef,{title,postText,
        author:{name:auth.currentUser.displayName, id:auth.currentUser.uid}});
      navigate("/");};
  return (
    <div className="createpost">
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputgp'>
          <label>Title: </label>
          <input placeholder="Title..." onChange={(event)=>{
            setTitle(event.target.value);
          }}></input>
        </div>
        <div className='inputgp'>
          <label>Post: </label>
          <textarea placeholder='Write your blog here...' onChange={(event)=>{
            setPostText(event.target.value);
          }}></textarea>
        </div>
        <button className='submitbtn' onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost
