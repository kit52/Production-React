import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../shared/lib/classNames';
import { AppRouter } from './providers/router';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <br></br>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />
    </div>
  );
}
