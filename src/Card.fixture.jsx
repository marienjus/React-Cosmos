import CartCard from "./components/CartCard/CartCard"
import FoodCard from "./components/FoodCard/FoodCard"
import foodImg from "./images/food1.jpg"

const food = {
  id: 1,
  name: "Peppered Chicken",
  price: "8.00",
}

const order = {
  id: 1,
  name: "Peppered Chicken",
  price: "8.00",
  quantity: 1,
  updateList: () => {},
}

export default {
  FoodCard: (
    <FoodCard
      id={food.id}
      name={food.name}
      price={food.price}
      imgSrc={foodImg}
    />
  ),
  CartCard: (
    <CartCard
      id={order.id}
      name={order.name}
      price={order.price}
      imgSrc={order.imgSrc}
      quantity={order.quantity}
      updateList={order.updateList}
    />
  )
}