import { useEffect, useState } from "react";
import { useMount } from "react-use";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useMount(async () => {
    const response = await fetch("/data.json");
    const result = await response.json();
    setData(result);
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("/data.json");
  //     const result = await response.json();
  //     setData(result);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <ul>
        {data.map((job) => (
          <li key={job.id}>{job.company}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
