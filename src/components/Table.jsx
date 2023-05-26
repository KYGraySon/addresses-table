import { useState } from "react";
import BuyModal from "./Modal/BuyModal";
import SellModal from "./Modal/SellModal";

const Table = () => {
  const headers = [
    "Alias",
    "Address",
    "Since",
    "Buy",
    "Buy Price",
    "Sell",
    "Sell Price",
    "Total ETH",
    "Total BSC",
    "Explorer",
  ];

  const body = [
    {
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      decimals: 18,
      exchange: 'Uniswap',
      type: 'Sell',
      data: [
        "Wallet 1",
        "0x....vitalik",
        "5m",
        "ETH",
        "$600",
        "DAI",
        "$800",
        "2.3",
        "1.5",
        "Etherscan",
      ],
    },

    {
      address: "0x55d398326f99059fF775485246999027B3197955",
      decimals: 18,
      exchange: 'Pancakeswap',
      type: 'Buy',
      data: [
        "Wallet 2",
        "0x....cz",
        "15m",
        "WBNB",
        "$300",
        "USDT",
        "$700",
        "1.3",
        "0.5",
        "Etherscan",
      ],
    },
  ];

  const [buyData, setBuyData] = useState();
  const [sellData, setSellData] = useState();

  const handleCloseBuy = () => {
    const modal = document.querySelector("[data-buy]");
    modal.close();
  };
  const handleCloseSell = () => {
    const modal = document.querySelector("[data-sell]");
    modal.close();
  };

  const handleBuy = (data) => {
    setBuyData(data);
    const modal = document.querySelector("[data-buy]");
    modal.showModal();
  };
  const handleSell = (data) => {
    setSellData(data);
    const modal = document.querySelector("[data-sell]");
    modal.showModal();
  };

  return (
    <>
      <table className="w-full overflow-x-auto scrollbar-hide text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers?.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body?.map((row, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 whitespace-nowrap"
              key={index}
            >
              {row?.data?.map((col, index) => {
                if (index == 1) {
                  return (
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      <a
                        href={`https://etherscan.io/address`}
                        className="underline cursor-pointer"
                      >
                        {col}
                      </a>
                    </td>
                  );
                } else if (index == 3) {
                  return (
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleBuy(row)}
                        className="underline cursor-pointer min-w-[80px] py-1 bg-green-500 text-white rounded-lg
                        active:ring-4 transform active:ring-green-400  active:scale-90 transition-transform delay-75"
                      >
                        {col}
                      </button>
                    </td>
                  );
                } else if (index == 5) {
                  return (
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleSell(row)}
                        className="underline cursor-pointer min-w-[80px] py-1 bg-red-500 text-white rounded-lg
                        active:ring-4 active:ring-red-400 transform active:scale-90 transition-transform delay-75"
                      >
                        {col}
                      </button>
                    </td>
                  );
                } else if (index == 9) {
                  return (
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      <a
                        href={`https://etherscan.io/tx`}
                        className="underline cursor-pointer"
                      >
                        {col}
                      </a>
                    </td>
                  );
                } else {
                  return (
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      {col}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <BuyModal
        data={buyData}
        handleBuy={handleBuy}
        handleClose={handleCloseBuy}
      />
      <SellModal
        data={sellData}
        handleSell={handleSell}
        handleClose={handleCloseSell}
      />
    </>
  );
};

export default Table;
