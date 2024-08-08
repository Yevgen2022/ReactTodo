import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ShowTask from './components/ShowTask/ShowTask';
import OneTask from './components/OneTask/OneTask';
import CorporateTask from './components/CorporateTask/CorporateTask';
import Vacation from './components/Vacation/Vacation';
import CityEvents from './components/CityEvents/CityEvents';

import ShowIndividualTasks from './components/ShowIndividualTasks/ShowIndividualTasks';
import ShowCorporateTasks from './components/ShowCorporateTasks/ShowCorporateTasks';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<OneTask />} />
          <Route path="/create-task" element={<OneTask />} />
          {/* <Route path="/show-tasks" element={<ShowTask />} /> */}
          <Route path="/corporate-tasks" element={<CorporateTask />} />
          <Route path="/vacation-planning" element={<Vacation />} />
          <Route path="/city-events" element={<CityEvents />} />

          <Route path="/show-tasks" element={<ShowTask />}>
            <Route path="show-individual-tasks" element={<ShowIndividualTasks />} />
            <Route path="show-corporate-tasks" element={<ShowCorporateTasks />} />
          </Route>

        </Routes>
      </div>
    );
  }
}

export default App;

