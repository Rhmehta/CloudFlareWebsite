import React, { useEffect,useState} from "react";
import "./App.css";

let listy=[];
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://rehaan_workers.rhmehta.workers.dev/posts"
      );
      setLoading(true);
      const postsResp = await resp.text();
      listy=JSON.parse(postsResp);
      setLoading(false);
    };
    getPosts();
  }, []);
  if(loading) return (
    <span>Loading</span>
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Cloudflare Internship Social Media!</h1>
      </header>
      <body>
      <div id="body">
        <div id ="listy"> {listy.map(function(d, idx){
          return (<div className="post" key={idx}>
            <div className="title">
              <h2>{d.title}</h2>
            </div>
            <div className="content">
            <strong>{d.username}:</strong> {d.content}
            </div>
            
            </div>)
        })}</div>
        <div id="form">
          <form  onSubmit={e =>{e.preventDefault();submitPost();}}>
            <div className="option">
              <div className="label">Title: </div>
              <input type="text" autoFocus="1" required="1" title="Please enter a title" id="title"></input><br/>
            </div>
            <div className="option">
              <div className="label">Username: </div>
              <input type="text" required="1" title="Please enter a username" id="username"></input><br/>
            </div>
            <div className="option">
              <div className="label">Content: </div>
              <textarea name="content" required="1" title="Please enter some content" id="content"></textarea><br/>
            </div>
            <input className="button" type="submit" value="Submit" id="submit"></input>
          </form>
        </div>
        <div id="button">
          <button id="post" onClick={openForm}>Create Post</button>
          
        </div>
       </div>
      </body>
    </div>
  );

}
function submitPost(event){
 
    const setPost = async () => {
      const resp = await fetch('https://rehaan_workers.rhmehta.workers.dev/posts', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: document.getElementById("title").value,
          username: document.getElementById("username").value,
          content: document.getElementById("content").value,
        })
      })
      await resp.text();
    }
    setPost();
  alert("Your Post has been successfully posted!");
  window.location.reload(false);
}
function openForm(){
  document.querySelector('#form').style.display=  'inline';
  document.querySelector('#listy').style.display=  'none';
  document.querySelector('#post').style.display=  'none';
  document.querySelector('#submit').style.display ='inline';
  
}
export default App;
