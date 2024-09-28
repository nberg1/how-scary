import React, { useEffect, useState } from 'react';

export interface IData {
  users: string[];
}
function App() {
  const [backendData, setBackendData] = useState<IData>();

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);


  return (
    <div>
      <h1>Message from Backend:</h1>
      {typeof backendData?.users === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        backendData?.users.map((user, i) => 
        <div key={i}>{user}</div>
      )
      )}
    </div>
  );
}

export default App;