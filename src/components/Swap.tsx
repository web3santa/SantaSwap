import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import Style from "./Swap.module.css";

const Swap = () => {
  return (
    <div className={Style.Swap}>
      <div className={Style.Swap_box}>
        <div className={Style.Swap_one}>
          <input placeholder="amount" />
          <span>ETH</span>
        </div>

        <div className={Style.Swap_two}>
          <input placeholder="amount" />
          Uni
        </div>
        <div className={Style.Swap_btn}>
          <button>Swap</button>
        </div>
      </div>
    </div>
  );
};

export default Swap;
