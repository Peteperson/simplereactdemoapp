import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel } from 'react-bootstrap'
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends React.Component {
   constructor(props, context) {
      super(props, context);
      this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
   }

   courseRow(course, index) {
      return (
         <div key={index}>{course.title}</div>
      );
   }

   redirectToAddCoursePage() {
      browserHistory.push('/course');
   }

   render() {
      const { courses } = this.props;

      return (
         <div>
            <Panel header="Courses" className="topOffset">
               <input type="submit"
                  value="Add course"
                  className="btn btn-primary"
                  onClick={this.redirectToAddCoursePage} />
               <CourseList courses={courses} />
            </Panel>
         </div>
      );
   }
}

CoursesPage.propTypes = {
   courses: PropTypes.array.isRequired,
   actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
   //state.courses equals courses in line 2 of ...reducers/index.js
   return {
      courses: state.courses
   };
}

function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(courseActions, dispatch)
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
