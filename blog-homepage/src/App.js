import React from 'react';
import './App.css';
import uArticles from './your-articles.json';
// import ForYou from './YourArticles';
import mArticles from './missed-articles.json';
// import Missed from './MissedArticles';
import Articles from './articles';

function App() {
  return (
    <div className="App">
      <section>
        <h1>For you</h1>
        <div className="flex-container">
          {/* <ForYou uData={uArticles} title="For you" /> */}
          <Articles uData={uArticles} styleClass="box-two" />
        </div>
      </section>
      <section>
        <h1>In case you missed it</h1>
        <div className="flex-container">
          {/* <Missed mData={mArticles} title="In case you missed it" /> */}
          <Articles uData={mArticles} styleClass="box-three" />
        </div>
      </section>
    </div>
  );
}

export default App;