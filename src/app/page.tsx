"use client";
import CounterComponent from "@/components/Counter/Counter";
import TotalSumCounter from "@/components/TotalSumCounter/TotalSumCounter";
import { useAppSelector } from "@/redux/hooks";

export default function Home() {
  const { counterState } = useAppSelector((state) => state.counter);
  const totalValue = counterState.reduce((prev, current) => {
    return (prev += current.value);
  }, 0);

  return (
    <main className="container">
      <h1 className="text-center text-[30px] text-gray-600 font-semibold mt-5">
        --- Counter App ---
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-5">
        {counterState.map((counter) => (
          <CounterComponent key={counter?.id} counter={counter} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <TotalSumCounter totalValue={totalValue} />
      </div>
    </main>
  );
}
