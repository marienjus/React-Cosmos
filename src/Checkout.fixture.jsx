import Checkout from "./components/Checkout/Checkout";

const dummyData = {
  subTotalPrice: 100,
  deliveryFee: 5,
  totalPrice: 105,
};

export default (
  <div className="w-60 mx-auto">
    <Checkout
      subTotal={dummyData.subTotalPrice}
      deliveryFee={dummyData.deliveryFee}
      total={dummyData.totalPrice}
    />
  </div>
)