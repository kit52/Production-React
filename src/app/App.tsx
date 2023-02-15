import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../shared/lib/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
}
