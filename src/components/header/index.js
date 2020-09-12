import { h } from 'preact';
//import { Link } from 'preact-router/match';
import style from './style.css';

console.log(style)

const Header = () => (
	<header class={style.header}>
        <div class="app-title">
            <h1>Yerba Mate</h1>
        </div>

        <i class="material-icons sidenav-trigger" data-target="slide-out">menu</i>

		{/* <h1>Yerba App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav> */}
	</header>
);

export default Header;
