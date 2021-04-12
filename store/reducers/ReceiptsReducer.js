const initialState = {
  receipts: [
    {
      id: "1",
      companyName: "Entreprise",
      date: "25/02/2021",
      exclTax: "120",
      inclTax: "20",
      vat: "20",
      folder: '1'
    },
    {
      id: "2",
      companyName: "Entreprise",
      date: "25/02/2021",
      exclTax: "155",
      inclTax: "32",
      vat: "20",
      folder: '2'
    }
  ],
};

const ReceiptsReducer = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case "ADD_RECEIPT":
      nextState = {
        ...state,
        users: [...state.users, action.value],
      };
      return nextState;
    default:
      return state;
  }
};

export default ReceiptsReducer;
