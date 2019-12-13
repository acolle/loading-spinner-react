import React, { useState } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

function App() {

  const [ fetched, setFetched ] = useState(false);
  const [ fetching, setFetching ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ response, setResponse ] = useState('');

  const requestServer = () => {
    setResponse('');
    setFetching(true);
    fetch(`http://localhost:8080/load`)
    .then(response => response.json())
    .then(data => {
      setFetching(false);
      setFetched(true);
      setResponse(data.message);
    })
    .catch(error => setError(true));
  }

  return (
    <div className="container">
      <div className={"container " + (fetching ? 'isBlurred' : 'isNotBlurred')}>
        <h1>Loading Spinner w/ React</h1>
        <div className="responseContainer">
          {fetched && <p>{response}</p>
          }
          {error && <p>There has been an error!</p>
          }
        </div>
        <button className="button" onClick={requestServer}>REQUEST</button>
      </div>
      {fetching &&
        <div className="loadingSpinner">
          <BounceLoader className="isNotBlurred" sizeUnit={"px"} size={100} color={'#116693'}/>
        </div>
      }
    </div>
  );
}

export default App;
