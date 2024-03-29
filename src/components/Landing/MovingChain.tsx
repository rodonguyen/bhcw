import React from "react";
import { ChainSnow } from "../../assets";

const MovingChain: React.FC = () => {
  return (
    <div className="chain-wrapper absolute z-5">
      <div className="flex opacity-[0.06] w-[300rem]">
        <span>
          <img
            src={ChainSnow}
            alt="DLTx Chain"
            className="w-[50rem] translate-x-[14rem]"
          />
        </span>
        <span>
          <img
            src={ChainSnow}
            alt="DLTx Chain"
            className="w-[50rem] translate-x-[11.2rem]"
          />
        </span>
        <span>
          <img
            src={ChainSnow}
            alt="DLTx Chain"
            className="w-[50rem] translate-x-[8.4rem]"
          />
        </span>
        <span>
          <img
            src={ChainSnow}
            alt="DLTx Chain"
            className="w-[50rem] translate-x-[5.6rem]"
          />
        </span>
        <span>
          <img
            src={ChainSnow}
            alt="DLTx Chain"
            className="w-[50rem] translate-x-[2.8rem]"
          />
        </span>
        <span>
          <img src={ChainSnow} alt="DLTx Chain" className="w-[50rem]" />
        </span>
      </div>
    </div>
  );
};

export default MovingChain;
