import style from './style.css';

let list = [];

console.log(style)
const Card = (props) => <div class={style.card} > 

<div class="col s12 m7" data-id={props.id}>
  <div class="card horizontal">
      <div class="card-image">
          <img src={props.image} />
      </div>
      <div class="card-stacked">
          <div class="card-content">
              <h5>{props.name}</h5>
              <p>{props.description}</p>
          </div>
          <div class="buttons">
              <button class="button-delete btn-flat btn-large" type="delButton"><i style="line-height: 1.6;"
                      class="material-icons" data-id={props.id}>delete</i></button>
              <button class="button-edit btn-flat btn-large" type="editButton"><i style="line-height: 1.6;"
                      class="material-icons" data-id={props.id}>edit</i></button>
          </div>
      </div>
  </div>

</div>
</div>;

const item = {
    id: "1234",
    name: "test",
    description: "test",
    //image: faker.image.image(),
  }
  list.push(item);
  
// yerbaRouter.post("/", (req, res) => {
//     console.log("req", req.body);
//     // id, desc, name, image
//     const card = req.body;
//     card.id = "Pizdaaaaaaa"; //dodawanie do obiektu nowego property
//     card.image = "kurwa chuj"; // dodawanie do obiektu nowego property
//     console.log("jak wyglada karta", card);
//     list.push(card);
//     res.send(card);
//   });
export default Card;