import Input from '../Input/Input';
import './EditForm.scss';

const FormGroup = ({ labelName, type, onChange, value, name }) => {
  return (
    <div className="form__group">
      <div>
        <label className="form__group-name" htmlFor={labelName}>
          {labelName}
        </label>
      </div>
      <div>
        <Input
          onChange={onChange}
          value={value}
          name={name}
          type={type}
          className="edit-input"
          placeholder={labelName}
        />
      </div>
    </div>
  );
};

export default FormGroup;
