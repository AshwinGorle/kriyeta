
import { Provider } from 'react-redux';
import CourseGenerator from './pages/CourseGenerator.js';
import store from './utils/store.js';


function App() {
  return (
    <Provider store={store} >
    <div className="App">
       <CourseGenerator />
    </div>
    </Provider>
  );
}

export default App;
