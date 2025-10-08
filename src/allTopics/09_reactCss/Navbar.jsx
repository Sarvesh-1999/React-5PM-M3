import Example from "./Example"
import style from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav id={style.navbar}>

        <figure>Navbar</figure>

        <Example/>
    </nav>
  )
}

export default Navbar