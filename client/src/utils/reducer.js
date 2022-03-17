const initialState = {
    menu_items: [
        {
            name: "Beef Stew",
            price: "$ 17",
            id: "1",
            category: "dinner",
            type: "main",
            image: `/assets/main-dishes/beef-stew.jpg`,
            description: "Jelly-o I love chocolate cotton candy gingerbread liquorice sweet roll macaroon lemon drops. Cheesecake pudding macaroon jelly brownie fruitcake. Marzipan macaroon chocolate bar fruitcake I love jelly beans dessert tootsie roll",
        },
        {
            name: "Biscuits",
            price: "$ 4",
            id: "2",
            category: "brunch",
            type: "side",
            image: `/assets/sides/Biscuits.jpg`,
            description: "Jelly-o I love chocolate cotton candy gingerbread liquorice sweet roll macaroon lemon drops. Cheesecake pudding macaroon jelly brownie fruitcake. Marzipan macaroon chocolate bar fruitcake I love jelly beans dessert tootsie roll",
        },
        {
            name: "Carrot Cake",
            price: "$ 5",
            id: "3",
            category: "dinner",
            type: "dessert",
            image: `/assets/desserts/carrot-cake.jpg`,
            description: "Jelly-o I love chocolate cotton candy gingerbread liquorice sweet roll macaroon lemon drops. Cheesecake pudding macaroon jelly brownie fruitcake. Marzipan macaroon chocolate bar fruitcake I love jelly beans dessert tootsie roll",
        }
    ],
  }
  
  // Use the initialState as a default value
  export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }