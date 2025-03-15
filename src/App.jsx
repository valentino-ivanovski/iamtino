import './App.css'
import Header from './components/Header.jsx'
import IamTino from './components/iamtino.jsx';

function App() {
  return (<>
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <IamTino />
    </div>
    <div className="flex flex-col items-center min-h-screen bg-red-500">

    </div>
  </>);
}

export default App
