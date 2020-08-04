import React from "react";
import { useState } from "react";

const App2 = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "ㅇㅇ",
      body: "ㅇㅇㅇ",
      comment: [{ id: 1, title: "dd", body: "dd" }],
    },
    {
      id: 2,
      title: "ㅇㅇㅇ",
      body: "ㅇㅇㅇㅇ",
    },
    {
      id: 3,
      title: "ㅇㅇㅇ",
      body: "ㅇㅇㅇㅇ",
    },
  ]);
  const [input, setInput] = useState(null);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    setData(
      data.map((da) =>
        da.id === 1
          ? {
              ...da,
              comment: da.comment // data[0].comment
                .map((
                  fa //
                ) => (fa.id === 1 ? { ...fa, title: input } : fa)),
            }
          : da
      )
    );
    setInput("");
    e.preventDefault();
  };
  return (
    <div>
      <ul>
        {data.map((e) => (
          <li key={e.id}>{e.body}</li>
        ))}
      </ul>
      <input onChange={handleChange} value={input} />
      <button onClick={handleSubmit}>dd</button>
    </div>
  );
};

export default App2;
