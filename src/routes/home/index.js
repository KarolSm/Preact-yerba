import { h } from 'preact';
import Card from "../../components/card"
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<Card item="ok" name="name" id="test" description="test" image="src/assets/icons/apple-touch-icon.png" />
		</div>
);

export default Home;
