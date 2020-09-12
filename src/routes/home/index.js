import { h, Component } from 'preact';
//import Card from "../../components/card"
import style from './style.css';
	


class Home extends Component {
	state={list:[]}
		


	constructor() {
	  super();
	  this.state = { time: Date.now() };
	}
  
	// Lifecycle: Called whenever our component is created
	componentDidMount() {
	  // update time every second
	  fetch("http://localhost:3000/yerba")
	  .then(response => response.json())
	  .then(list => console.log(list));

	  this.timer = setInterval(() => {
		this.setState({ time: Date.now() });
	  }, 1000);
	}
  
	// Lifecycle: Called just before our component will be destroyed
	componentWillUnmount() {
	  // stop when not renderable
	  clearInterval(this.timer);
	}
	
	render() {
		console.log("lista", list);
		
		return(	
		<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<Card item={ this.State.list[0] } /> {/*tu bedzie if  */}
		
		<div class={style["col s12 m7"]} data-id={list.id}>
		<div class={style["card horizontal"]}>
			<div class={style["card-image"]}>
				<img src={list.image} />
			</div>
			<div class="card-stacked">
				<div class="card-content">
					<h5>{list.name}</h5>
					<p>{list.description}</p>
				</div>
				<div class={style.buttons}>
					<button class="button-delete btn-flat btn-large" type="delButton"><i style="line-height: 1.6;"
							class="material-icons" data-id={list.id}>delete</i></button>
					<button class="button-edit btn-flat btn-large" type="editButton"><i style="line-height: 1.6;"
							class="material-icons" data-id={list.id}>edit</i></button>
				</div>
			</div>
		</div>
		</div>
		</div>
		);
		}
  }

export default Home;
