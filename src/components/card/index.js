import { h } from "preact";
import style from "./style.css";

const Card = (props) => {
  const { item } = props;
  return (
    <div class={style.card}>
      <div class="col s12 m7" data-id={item.id}>
        <div class="card horizontal">
          <div class={style['card-image'] + " card-image"}>
            {!item.image ? (
              <div class={style["img-placeholder"]}></div>
            ) : (
              <img src={item.image} />
            )}
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <h5>{item.name}</h5>
              <p>{item.description}</p>
            </div>
            <div class="buttons">
              <button class="button-delete btn-flat btn-large" type="delButton">
                <i
                  style="line-height: 1.6;"
                  class="material-icons"
                  data-id={item.id}
                >
                  delete
                </i>
              </button>
              <button class="button-edit btn-flat btn-large" type="editButton">
                <i
                  style="line-height: 1.6;"
                  class="material-icons"
                  data-id={item.id}
                >
                  edit
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
