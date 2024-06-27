import React, { useEffect ,useState} from 'react'
import {collection, getDocs,deleteDoc, doc as firestoreDoc} from 'firebase/firestore' 
import {db } from '../Firebase-config'
import { auth } from '../Firebase-config'
function Home({isAuth}) {
  let doc =useState("");
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef=collection(db,"Posts");
    useEffect(()=>{
  const getPosts = async() => {
  const data =await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc)=> ({...doc.data(),id: doc.id})));
    };
    getPosts();
  },[]);
  const deletePost=async(id)=>{
    const postDoc = firestoreDoc(db,'Posts',id);
   await deleteDoc(postDoc);
  }
 return (
    <div className="homepage">
      {postLists.map((post)=>{
        return(
        <div className='post'>
        <div className='postHeader'>
         <div className='title'>
          <h1>{post.title}</h1>
         </div>
         <div className='deletePost'>
          {isAuth && post.author.id===auth.currentUser?.uid &&(
          <button onClick={() => {
            deletePost(post.id);
          }}>X</button>)}
          </div>
        </div>
        <div className='poststext'>
          {post.postText}
          <h3>@{post.author.name}</h3>
        </div>
        </div>
        );
      }
      )}
   
    </div>
  );
}

export default Home;
