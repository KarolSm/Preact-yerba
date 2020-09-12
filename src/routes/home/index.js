import { Component, h } from "preact";
import Card from "../../components/card";
import style from "./style.css";

// now below is a Class Component
class Home extends Component {
  // state is property of Home class (you can use it like this: "this.state")
  state = { list: [] };

  componentDidMount() {
    // here we make a call to our API
    fetch('http://localhost:3000/yerba')
    // when data arrives we parse it to JSON
      .then(res => res.json())
      // JSON returned from above function comes here as "data" (you can call it "pies" and it will work as well - its just first argument)
    	.then((data) => {
    		console.log('what data did arrive ?', data);
        // NOTE: data can have the list nested e.g. data.items or data.list or it can be just data (I dont remember)

        // here we update our state - render function will be called automatically with new data
			this.setState({ list: data })
			console.log("List", this.state);
    	});

    // show some card after 2 seconds
    setTimeout(() => {
      this.setState({
        list: [
          {
            id: "123",
            name: "test name",
            description: "lorem ipsum",
            image: "#",
          },
        ],
      });
    }, 2000);
  }

  render() {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
        {this.state.list.length > 0 ? <Card item={this.state.list[0]} /> : <span>No Cards</span>}
      </div>
    );
  }
}

export default Home;