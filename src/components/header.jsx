import './header.css';
import { Navegator } from './navegator';

export function Header() {
  return (
    <header className='header'>
        <div>
            <h1>Mi Portfolio</h1>  
        </div>
        <div>
            <Navegator />
        </div>
    </header>
  )
}