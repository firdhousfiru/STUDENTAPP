import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <AddStudent/>
      <Search/>
      <Delete/>
      <ViewAll/>
    </div>
  );
}

export default App;
