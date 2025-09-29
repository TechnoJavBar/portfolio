import {FaGithub, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import './linksAside.css'

export function LinksAside() 
{
    return(
        <aside className='aside'>
        <ul>
          <li><a href='#'><FaGithub className='FaGithub'/></a></li>
          <li><a href='#'><FaLinkedin className='FaLinkedin'/></a></li>
          <li><a href='#'><FaInstagram className='FaInstagram' /></a></li>
          <li><a href='#'><FaFacebook className='FaFacebook'/></a></li>
        </ul>
      </aside>
    );
}