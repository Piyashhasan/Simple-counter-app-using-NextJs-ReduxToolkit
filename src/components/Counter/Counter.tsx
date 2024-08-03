"use client";
import {
  decrementValue,
  incrementValue,
} from "@/redux/features/counterSlice/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Counter } from "@/utils/counters";
import React from "react";

interface Props {
  counter: Counter;
}

const CounterComponent = ({ counter }: Props) => {
  const { id, value } = counter;

  const dispatch = useAppDispatch();

  const handleIncrementValue = (id: number) => {
    dispatch(incrementValue(id));
  };
  const handleDecrementValue = (id: number) => {
    dispatch(decrementValue(id));
  };

  return (
    <div className="bg-green-300 my-5 p-5 rounded-md shadow-xl">
      <h2 className="text-[20px] text-center font-semibold">Count : {value}</h2>
      <div className="flex items-center justify-center gap-5 mt-3">
        <button
          onClick={() => handleIncrementValue(id)}
          className="bg-blue-500 px-10 py-[6px] text-white text-[14px] rounded-lg cursor-pointer hover:bg-blue-600"
        >
          INC (+)
        </button>
        <button
          onClick={() => handleDecrementValue(id)}
          className="bg-red-500 px-10 py-[6px] text-white text-[14px] rounded-lg cursor-pointer hover:bg-red-600"
        >
          DEC (-)
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
