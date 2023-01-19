import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p>
          Welcome to `fresh`, y'all. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <h2>
          And remember, keep cool.
        </h2>
        <Counter start={0} />
      </div>
    </>
  );
}
