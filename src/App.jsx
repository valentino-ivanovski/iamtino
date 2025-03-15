import './App.css'
import Header from './components/Header.jsx'
import IamTino from './components/iamtino.jsx';
import StickyText from './components/stickyText.jsx';

function App() {
  return (<>
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <IamTino />
      <StickyText />
    </div>
    <div className="flex flex-col items-center min-h-screen bg-red-500">

    </div>
  </>);
}

export default App
