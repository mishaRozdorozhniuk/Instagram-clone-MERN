import Input from '../Input/Input';
import './EditForm.scss';

const FormGroup = ({ labelName, type }) => {
  return (
    <div className="form__group">
      <div>
        <label className="form__group-name" htmlFor={labelName}>
          {labelName}
        </label>
      </div>
      <div>
        <Input type={type} className="edit-input" placeholder={labelName} />
      </div>
    </div>
  );
};

export default FormGroup;
