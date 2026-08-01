import { DeliverOption } from './DeliveryOptions';
import { CartItemDetails } from './OrderComponent/CartItemDetails';
import { DeliveryDate } from './OrderComponent/DeliveryDate';

export function OrderSummary({cart,deliveryOptions,loadCart}){
  return(
    <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {

              return (
                <div key={cartItem.productId}
                className="cart-item-container">

                <DeliveryDate deliveryOptions={deliveryOptions} cartItem={cartItem}/>

            <div className="cart-item-details-grid">

              <CartItemDetails cartItem={cartItem}/>

              <DeliverOption deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart}/>
            </div>
          </div>
              );
            })}
      </div>
  );
}