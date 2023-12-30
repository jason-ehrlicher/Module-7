import { useEffect, useReducer } from "react";

// Reducer function for managing the state related to Bitcoin price fetching
const bitcoinPriceReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      // Handle initial fetch state
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      // Handle successful data fetch
      return { ...state, isLoading: false, bitcoinPrice: action.payload };
    case "FETCH_FAILURE":
      // Handle fetch failure
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error();
  }
};

const useBitcoinPrice = (currency) => {
  const [state, dispatch] = useReducer(bitcoinPriceReducer, {
    bitcoinPrice: "",
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        console.log("Fetching data for currency:", currency); // Log the currency being used
        // Fetching Bitcoin price data
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        console.log("Response data:", data); // Log the response data

        if (!didCancel) {
          // Update state if fetch was successful and component hasn't unmounted
          dispatch({
            type: "FETCH_SUCCESS",
            payload: data.bitcoin[currency.toLowerCase()],
          });
        }
      } catch (error) {
        if (!didCancel) {
          console.error("Error fetching data:", error); // Log any errors caught during fetch
          // Update state in case of an error
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    fetchData();

    // Cleanup function to avoid state updates on unmounted component
    return () => {
      didCancel = true;
    };
  }, [currency]); // Dependency array: useEffect runs when 'currency' changes

  return state;
};

export default useBitcoinPrice;
