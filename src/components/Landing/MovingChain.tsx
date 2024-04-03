import React from "react";
import { ChainSnow } from "../../assets";

const MovingChain: React.FC = () => {
  return (
    <div className="chain-wrapper z-5 opacity-[0.06] ">
      <div className="flex translate-y-[-16rem] translate-x-[-40rem]">
        {/* OK when u comeback, adjust the translateX for me */}
        <img
          src={ChainSnow}
          alt="DLTx Chain"
          className={`max-w-100 h-auto `}
        />
        <img
          src={ChainSnow}
          alt="DLTx Chain"
          className={`translate-x-[-4rem] h-auto`}
        />
        <img
          src={ChainSnow}
          alt="DLTx Chain"
          className={`translate-x-[-8rem] max-w-100 h-auto`}
        />
        <img
          src={ChainSnow}
          alt="DLTx Chain"
          className={`translate-x-[-12rem] max-w-100 h-auto`}
        />
        <img
          src={ChainSnow}
          alt="DLTx Chain"
          className={`translate-x-[-16rem] max-w-100 h-auto`}
        />
        <img
          src={ChainSnow}
          alt="DLTx Chain"
          className={`translate-x-[-20rem] max-w-100 h-auto`}
        />
        <img
          src={ChainSnow}
          alt="DLTx Chain"
          className={`translate-x-[-24rem] max-w-100 h-auto`}
        />
        <img
          src={ChainSnow}
          alt="DLTx Chain"
          className={`translate-x-[-28rem] max-w-100 h-auto`}
        />
        <img
          src={ChainSnow}
          alt="DLTx Chain"
          className={`translate-x-[-32rem] max-w-100 h-auto`}
        />
        <img
          src={ChainSnow}
          alt="DLTx Chain"
          className={`translate-x-[-36rem] max-w-100 h-auto`}
        />
        <img
          src={ChainSnow}
          alt="DLTx Chain"
          className={`translate-x-[-40rem] max-w-100 h-auto`}
        />
      </div>
    </div>
  );
};

export default MovingChain;
