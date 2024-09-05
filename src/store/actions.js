export const API = "https://efc974846ba36c93.mokky.dev/todo";

export const addOrder = (order) => {
  return async (dispatch) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      dispatch(getUser());
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };
};
export const getUser = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch({ type: "SET_ORDERS", payload: data });
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      dispatch(getUser());
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };
};