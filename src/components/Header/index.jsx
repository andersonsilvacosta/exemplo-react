import { Link } from 'react-router-dom'
import './style.css'

function Header (){
    return (
        <header>

<h1>Minha Páina React</h1>
<nav>
<ul>
    <Link to='/'>
    <li>inicio</li>
    </Link>
    <Link to='/about'>
    <li>Sobre</li>
    </Link>
</ul>

</nav>

</header>
    )
}

export default Header 