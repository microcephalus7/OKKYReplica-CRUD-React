import React, { useState, useCallback } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [update, setUpdate] = useState("");

  const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
  useState(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiEndpoint);
        setPost(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleAdd = async () => {
    const obj = { title: input, body: "b" }; // 보낼 데이터
    const { data: post } = await axios.post(apiEndpoint, obj);
    console.log(post);
    setPost([post, ...posts]);
  };
  // put 함수 코드
  const handleUpdate = async (post) => {
    post.title = "UPDATED";
    const { data } = await axios.put(`${apiEndpoint}/${post.id}`, post);
    console.log(data);
    const posting = [...posts];
    const index = posting.indexOf(post);
    posting[index] = { ...post };
    setPost({ posting });
    setInput("");
  };
  // patch 함수 코드
  const handleUpdatePatch = async (post) => {
    post.title = "Update";
    const { data } = await axios.patch(`${apiEndpoint}/${post.id}`, {
      title: post.title,
    });
    console.log(data);
    setPost({
      posts: posts.map((row) =>
        post.id === row.id ? { ...posts, title: posts.title } : row
      ),
    });
  };
  const handleDelete = async (post) => {
    await axios.delete(`${apiEndpoint}/${post.id}`);
    setPost(posts.filter((e) => e.id !== post.id));
  };

  return (
    <div>
      <input onChange={handleChange} value={input}></input>
      <button onClick={handleAdd}>Add</button>
      <thead>
        <tr>
          <th>Title</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>
              <button onClick={() => handleUpdatePatch(post)}>Update</button>
            </td>
            <td>
              <button onClick={() => handleDelete(post)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default App;
