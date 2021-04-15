const INITIAL_STATE = {
  sections: [
    {
      title: "BallPoint Pens",
      imageUrl: "/images/pens/pens-ph.png",
      id: 1,
      linkUrl: "shop/ballpoint",
    },
    {
      title: "Fountain Pens",
      imageUrl: "/images/pens/pens-ph.png",
      id: 2,
      linkUrl: "shop/fountain",
    },
    {
      title: "Vintage Pens",
      imageUrl: "/images/pens/pens-ph.png",
      id: 3,
      linkUrl: "shop/vintage",
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default directoryReducer;