import { h } from 'preact';
//import style from "/home/pi/Desktop/ws/preact_yerba/src/components/card/style.css";
import style from "./style.css";

//console.log(style);
const CardPlaceholder = () => {
  //const { item } = props;
  return (
        <div class={style.card}>
      <div class="col s12 m7" >
        <div class="card horizontal">
          <div class={style["card-image"]}>
            <img src="#" />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>p</p>
            </div>
            <span class="dot" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default CardPlaceholder;