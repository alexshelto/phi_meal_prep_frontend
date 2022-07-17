import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>home</Link>

    <ul>
      <li>
        <Link to='/ingredients'>
          Ingredients
        </Link>
      </li>
      <li>
        <Link to='/recipees'>
          Recipees
        </Link>
      </li>
    </ul>

    </header>
  );
}

export default Header
