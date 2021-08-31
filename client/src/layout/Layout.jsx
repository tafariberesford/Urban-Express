import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <h1>Urban Express</h1>
      {currentUser ? (
        <div>
          <p>Welcome {currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/login'>Login/Register</Link>
      )}
      {currentUser && (
        <div>
          <Link to='/songs'>Top 10 Songs</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}