export const existingCartItem = ({
    prevCartItems,
    nextCartItem
  }) => {
    return prevCartItems.find(
      cartItem => cartItem.documentID === nextCartItem.documentID && cartItem[1] === nextCartItem[1]
    );
  };
  
  export const handleAddToCart = ({
    prevCartItems,
    nextCartItem
  }) => {
    const quantityIncrement = 1;
    const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });
  
    if (cartItemExists) {
      return prevCartItems.map(cartItem =>
        (cartItem.documentID === nextCartItem.documentID && cartItem[1] === nextCartItem[1])
          ? {
            ...cartItem,
            quantity: cartItem.quantity + quantityIncrement
          } : cartItem
      );
    }
  
    return [
      ...prevCartItems,
      {
        ...nextCartItem,
        quantity: quantityIncrement
      }
    ];
  };
  
  export const handleRemoveCartItem = ({
    prevCartItems,
    cartItemToRemove
  }) => {
    return prevCartItems.filter(cartItem => cartItem[0].documentID !== cartItemToRemove.documentID && cartItem[1] !== cartItemToRemove[1]);
  }
  
  export const handleReduceCartItem = ({
    prevCartItems,
    cartItemToReduce
  }) => {
    const existingCartItem = prevCartItems.find(cartItem =>
      cartItem[0].documentID === cartItemToReduce[0].documentID);

    return prevCartItems.map(cartItem =>
      cartItem[0].documentID === existingCartItem[0].documentID && cartItem[1] === existingCartItem[1] ?
      {
        ...cartItem,
        quantity: cartItem.quantity - 1
      } : cartItem)
  };


