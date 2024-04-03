import React, { useEffect, useState } from "react";
import axios from "axios";
import { DLTxLabs } from "../assets";
import MovingChain from "./Landing/MovingChain";

export const Landing: React.FC = () => {
  const BLOCK_TIME = 610; // SECONDS
  const [timeRemaining, setTimeRemaining] = useState(""); // Follow this format: "••D ••H ••M ••S"
  const getHeight = async () => {
    try {
      const response = await axios.get(
        "https://api2.getpaidinbitcoin.com.au/nodes"
      );

      const delta = 840000 - response.data[0].height;
      return delta.toLocaleString();
    } catch (error) {
      return "<Error getting blocks>";
    }
  };

  const [secondsRemaining, setSecondsRemaining] = useState(60);

  useEffect(() => {
    const updateCountdown = () => {
      setSecondsRemaining(prevSeconds => prevSeconds - 1);
    };

    updateCountdown();

    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  useEffect(() => {
    getHeight().then(height => {
      height = height.replace(/,/g, "");
      const intHeight = +height;

      if (!Number.isInteger(intHeight)) {
        setSecondsRemaining(-1);
        return;
      }

      setSecondsRemaining(intHeight * BLOCK_TIME);
    });
  }, []);

  useEffect(() => {
    if (secondsRemaining === -1) {
      setTimeRemaining("••D ••H ••M ••S");
      return;
    }
    let days = Math.floor(secondsRemaining / (60 * 60 * 24));
    let hours = Math.floor((secondsRemaining % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((secondsRemaining % (60 * 60)) / 60);
    let seconds = Math.floor(secondsRemaining % 60);
    setTimeRemaining(`${days}D : ${hours}H : ${minutes}M : ${seconds}S`);
  }, [secondsRemaining]);

  return (
    <section
      className="w-screen h-screen bg-gradient-to-b from-black to-black-900 text-white 
      font-bourna text-center items-center justify-center py-4 overflow-hidden"
    >
      <div className="my-12">
        <img
          src={DLTxLabs}
          alt="DLTx logo"
          className="w-60 inline-block mt-12 mb-4 dltxlabs-shadow"
        ></img>
        <h1 className="title text-3xl lg:text-5xl w-full my-4">
          4th BTC HALVENING COUNTDOWN
        </h1>
        <h2 className="relative subtitle font-bold text-6xl lg:text-[9rem] w-full my-[10rem] z-10">
          {timeRemaining}
        </h2>

        <MovingChain />
      </div>
    </section>
  );
};
