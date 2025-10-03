import React from 'react';
import SendUser from './SendUser';  // or './Send_user' if you kept the original name
import Get_user from './Get_user';

function App() {
  return (
    <div className="App">
      <SendUser />
      <hr />
      <Get_user />
    </div>
  );
}

export default App;
