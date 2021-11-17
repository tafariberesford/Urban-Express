import { Link } from 'react-router-dom';
import "./Layout.css"

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <h1 className="title">Urban Express</h1>
      {currentUser ? (
        <div>
          <p>Welcome {currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          <span className="layout-login">
            <Link to='/login'>Login/Register</Link>
          </span>
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