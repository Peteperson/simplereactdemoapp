import React from 'react';
import PropTypes from 'prop-types'
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';
import _ from 'lodash';
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
                {schemaProps.map((item, i) => {
                    if (_.isNumber(mainObject[item.name])){
                        return <NumberInput key={i} name={item.name} label={item.title} value={mainObject[item.name]} onChange={onChange} error={''} />
                    }else{
                        return <TextInput key={i} name={item.name} large={item.large} label={item.title} value={(mainObject[item.name]) ? mainObject[item.name] : ''} onChange={onChange} error={''} />
                    }
                })}
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
