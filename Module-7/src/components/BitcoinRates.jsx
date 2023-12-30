import { useState, useEffect } from "react";
import useBitcoinPrice from "../hooks/useBitcoinPrice";
import { useEmojiContext } from "../context/EmojiContext";

// List of supported currencies
const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  // State for the currently selected currency
  const [currency, setCurrency] = useState(currencies[0]);
  // State for storing the current price of Bitcoin in the selected currency
  // const [bitcoinPrice, setBitcoinPrice] = useState("");

  // Using the custom hook to get the Bitcoin price and state for loading/error
  const { bitcoinPrice, isLoading, isError } = useBitcoinPrice(currency);

  // Accessing the current emoji from the EmojiContext
  const { emoji } = useEmojiContext();

  // // useEffect hook
  // useEffect(() => {
  //   console.log("Fetching Bitcoin price");
  //   //  Prevent state updates on unmounted component
  //   let ignore = false;

  //   // Fetching the Bitcoin price for the selected currency
  //   fetch(
  //     `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  //   )
  //     .then((response) => response.json()) // Parsing the response as JSON
  //     .then((data) => {
  //       console.log("Response: ", data);
  //       // If the component is still mounted, update the state with the fetched data
  //       if (!ignore) {
  //         setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching Bitcoin price:", error)); // Logging errors

  //   // Cleanup function - sets the ignore flag to true when the component unmounts
  //   return () => {
  //     ignore = true;
  //     console.log("Cleanup effect");
  //   };
  // }, [currency]); // Dependency array - this effect runs when 'currency' changes

  // Mapping currencies to dropdown options
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  // Render
  return (
    <div className="BitcoinRates">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)} // Update the state when a new currency is selected
        >
          {options}
        </select>
      </label>
      <div>
        <br />
        {isLoading ? (
          <p>Loading...</p> // Display loading state
        ) : isError ? (
          <p>Error fetching data.</p> // Display error state
        ) : (
          <strong>
            Current Bitcoin Price:{" "}
            {bitcoinPrice && `${bitcoinPrice} ${currency}`}
          </strong>
        )}
        {/* Displaying the fetched Bitcoin price */}
      </div>
      <div>
                <strong>Current Mood: {emoji}</strong> {/* Displaying the current emoji */}
            </div>

    </div>
  );
}

export default BitcoinRates;
