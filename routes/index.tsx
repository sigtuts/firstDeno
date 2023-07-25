import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";


export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div style="    display: grid;
     display: grid;
     justify-content: space-around;
     align-content: center;
   
     gap: 4px;
     grid-auto-flow: column;">
        <section style="    grid-column: 1;">
        <h1>Wlcome to my Fresh App</h1>
          <img
            src="/logo.svg"
            width="128"
            height="128"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p>
            Welcome to `fresh`, y'all.
          </p>
          <h2>
            And remember, keep cool.
          </h2>
          <Counter start={0} />
        </section>
      </div>

    </>
  );
}
