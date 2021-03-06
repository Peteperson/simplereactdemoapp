import React from 'react';
import PropTypes from 'prop-types'
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import ToggleInput from '../common/ToggleInput';

const CourseForm = ({ course, allAuthors, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <h1>Manage course</h1>
      <div className="row">
        <TextInput name="title" label="title" value={course.title} onChange={onChange} error={errors.title} />
        <TextInput name="category" label="Category" value={course.category} onChange={onChange} error={errors.category} />
        <TextInput name="length" label="Length" value={course.length} onChange={onChange} error={errors.length} />
        <SelectInput name="authorId" label="Author" value={course.authorId} defaultOption="Select Author"
          options={allAuthors} onChange={onChange} error={errors.authorId} />
        <ToggleInput name="isGood" label="isGood" value={course.isGood} onChange={onChange} error={errors.isGood} />
      </div>
      <input type="submit" disabled={saving} value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary" onClick={onSave} />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
