import React from 'react';
import PropTypes from 'prop-types'
import TextInput from '../common/TextInput';
// import SelectInput from '../common/SelectInput';
// import ToggleInput from '../common/ToggleInput';

const AutoForm = ({ title, mainObject, schemaProps, onChange, onSave, saving, errors }) => {
    let ctrls = [];
    if (mainObject.id) {
        schemaProps.forEach(function (prop) {
            if (mainObject.hasOwnProperty(prop.name)) {
                ctrls.push(prop);
            } else {
                console.log("Problem with property: " + prop.name);
            }
        });
    }
    return (
        <form>
            <h1>{title}</h1>
            <div className="row">
                {schemaProps.map((item, i) =>
                    <TextInput key={i} name={item.name} label={item.title} value={mainObject[item.name]} onChange={this.updateState} error={''} />
                )}
            </div>
            <input type="submit" disabled={saving} value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary" onClick={onSave} />
        </form>
    );
};

AutoForm.propTypes = {
    title: PropTypes.string.isRequired,
    mainObject: PropTypes.object.isRequired,
    schemaProps: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default AutoForm;
