import './header.css';
import { Navegator } from './navegator';

export function Header() {
  return (
    <header className='header'>
      <div>
          <Navegator />
      </div>
    </header>
  )
}