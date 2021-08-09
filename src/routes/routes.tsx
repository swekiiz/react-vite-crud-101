import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/home';
import CreateStudent from 'pages/createStudent';
import StudentList from 'pages/studentList';
import EditStudent from 'pages/editStudent';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={['/', 'home']}>
        <Home />
      </Route>
      <Route path={'/create-student'}>
        <CreateStudent />
      </Route>
      <Route path={'/student-list'}>
        <StudentList />
      </Route>
      <Route path={'/edit-student/:id'}>
        <EditStudent />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
