import './SignIn.css';

export function SignIn({ isHiden }) {
  var [isHidenVal, setHide] = isHiden;
  function hidePassword() {
    setHide(!isHidenVal);
  }
  return (
    <div className='sign-in-container'>
      <h3>Hello, welcome to my website</h3>
      <input
        className='text-input'
        type='text' placeholder='Email' />
      <div className='password-container'>
        <input
          className='text-input'
          type={!isHidenVal ? 'text' : 'password'} placeholder='Password' />
        <button
          className='hide-button'
          onClick={hidePassword}>Hide</button>
      </div>
      <div>
        <button className='login-button blue-button'>Login</button>
        <button className='signup-button blue-button'>Sign up</button>
      </div>
    </div>
  );
}