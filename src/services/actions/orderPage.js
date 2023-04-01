export const ENTRY_ORDER_PAGE = "ENTRY_ORDER_PAGE";
export const EXIT_ORDER_PAGE = "EXIT_ORDER_PAGE";

export const entryOrderPage = () => (dispatch) => {
  dispatch({
    type: ENTRY_ORDER_PAGE,
  });
};

export const exitOrderPage = () => (dispatch) => {
  dispatch({
    type: EXIT_ORDER_PAGE,
  });
};
