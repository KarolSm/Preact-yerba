import { Component, Fragment, h } from "preact";
import Card from "../../components/card";
import CardPlaceholder from "../../components/card-placeholder";

import style from "./style.css";

// now below is a Class Component
class Home extends Component {
  // state is property of Home class (you can use it like this: "this.state")
  state = { list: [], data_received: false };

  componentDidMount() {
    // show some card after 2 seconds
    setTimeout(() => {
      this.setState({
        list: [
          {
            id: "123",
            name: "test name",
            description: "lorem ipsum",
          },
          {
            id: "124",
            name: "test name 2",
            description: "lorem ipsum",
          },
          {
            id: "125",
            name: "test name 3",
            description: "lorem ipsum",
          },
        ],
        data_received: true,
      });
    }, 2000);
  }

  render() {
    const { list, data_received } = this.state;
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
        <section class={style["list-wrapper"]}>
          {data_received ? (
            list.length > 0 ? (
              list.map((item, i) => <Card key={i} item={item} />)
            ) : null
          ) : (
            <Fragment>
              <CardPlaceholder />
              <CardPlaceholder />
              <CardPlaceholder />
            </Fragment>
          )}
        </section>
      </div>
    );
  }
}

export default Home;
