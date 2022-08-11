import FormGroup from './FormGroup';
import avatar from '../Header/header-avatar.jpeg';
import './EditForm.scss';

const EditForm = () => {
  return (
    <form className="form">
      <div className="form__user">
        <img className="form__user-img" src={avatar} alt="avatar" />
        <div className="edit-user-group">
          <h1 className="form__user-name">__procherk__</h1>
          <span className="form__user-change">Change profile photo</span>
        </div>
      </div>
      <div className="form-inner">
        <div className="block">
          <div>
            <FormGroup labelName="Name" type="text" />
            <div className="form__important">
              <p className="form__important-info">
                Help people discover your account by using the name that you're known by: either
                your full name, nickname or business name.
              </p>
              <p className="form__important-info">
                You can only change your name twice within 14 days.
              </p>
            </div>
          </div>
        </div>
        <div className="block">
          <div>
            <FormGroup labelName="Username" type="text" />
            <div className="form__important">
              <p className="form__important-info">
                In most cases, you'll be able to change your username back to __procherk__ for
                another 14 days. <a href="#">Learn more</a>
              </p>
            </div>
          </div>
        </div>
        <div className="block">
          <FormGroup labelName="Website" type="text" />
        </div>
        <div className="block">
          <div>
            <label className="form__group-name bio" htmlFor="Bio">
              Bio
            </label>
          </div>
          <textarea className="form__bio" name="Bio"></textarea>
        </div>
        <div className="form__important email">
          <span className="form__personal">Personal Information</span>
          <p className="form__important-info">
            Provide your personal information, even if the account is used for a business, pet or
            something else. This won't be part of your public profile.
          </p>
        </div>
        <div className="block">
          <FormGroup labelName="Email address" type="email" />
        </div>
        <div className="block">
          <FormGroup labelName="Phone number" type="number" />
        </div>
        <div className="block">
          <FormGroup labelName="Gender" type="text" />
        </div>
        {/* <div className="block">
          <FormGroup labelName="Similar account suggestions" type="checkbox" />
        </div> */}
      </div>
      <div className="form-submit__wrapper">
        <button type="submit" className="form__submit-btn">
          Submit
        </button>
        <span className="form__submit-info">Temporarily deactivate my account</span>
      </div>
    </form>
  );
};

export default EditForm;
