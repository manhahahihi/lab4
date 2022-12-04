import React from 'react';
import { FadeLoader} from 'react-spinners';

import './App.css';
import Mypage from './Mypage';

function App() {
  return (
   <React.Suspense fallback = {<FadeLoader color='lightbue' size={150} />}>
      <Mypage />
   </React.Suspense>
  );
}

export default App;
