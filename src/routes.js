import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import UsersPage from './components/users/UsersPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import CommentsPage from './components/comments/CommentsPage';
import SchedulesPage from './components/schedules/SchedulesPage';
import ActiveBranchesPage from './components/schedules/ActiveBranchesPage';
import LoginPage from './components/login/LoginPage';
import LogoffPage from './components/login/LogoffPage';
import RefreshTokenPage from './components/login/RefreshTokenPage';
import ScheduleIdPage from './components/schedules/ScheduleIdPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="users" component={UsersPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="comments" component={CommentsPage} />
    <Route path="schedules" component={SchedulesPage} />
    <Route path="schedule/:id" component={ScheduleIdPage} />
    <Route path="actbranches" component={ActiveBranchesPage} />
    <Route path="login" component={LoginPage} />
    <Route path="logoff" component={LogoffPage} />
    <Route path="about" component={AboutPage} />
    <Route path="refreshtoken" component={RefreshTokenPage} />
  </Route>
);
