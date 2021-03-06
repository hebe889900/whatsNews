import React, {PropTypes} from 'react';
import './LoginForm.css';

// because LoginForm doesn't have complicated logic
// so we don't use 'class LoginForm extends React.Component'
// pass 'onSubmit', 'onChange' and errors to this const
const LoginForm = ({
  onSubmit,
  onChange,
  errors
}) =>
 (
   <div className='container'>
      <div className='card-panel login-panel'>
        <form className="col s12" action="/" onSubmit={onSubmit}>
          <h4 className="center-align">Login</h4>
          {errors.summary && <div className="row"><p className="error-message">{errors.summary}</p></div>}
          <div className="row">
            <div className="input-field col s12">
              <input className="validate" id="email" type="email" name="email" onChange={onChange}/>
              <label htmlFor='email'>Email</label>
            </div>
          </div>
          {errors.email && <div className="row"><p className="error-message">{errors.email}</p></div>}
          <div className="row">
            <div className="input-field col s12">
              <input className="validate" id="password" type="password" name="password" onChange={onChange}/>
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          {errors.password && <div className="row"><p className="error-message">{errors.password}</p></div>}
          <div className="row right-align">
            <input type="submit" className="waves-effect waves-light btn indigo lighten-1" value='Log in'/>
          </div>
          <div className="row">
            <p className="right-align"> New to Personalized News Feed?  <a href="/signup">Sign Up</a></p>
          </div>
        </form>
      </div>
    </div>
 );

LoginForm.propTyes = {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
export default LoginForm;