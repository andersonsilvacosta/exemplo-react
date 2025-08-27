import './style.css'

function Header ({titulo} ) {
    return (
        <header>
<h1>{titulo ? 'passou algo':'não passou algo' }</h1>
</header>
    )
}

export default Header 