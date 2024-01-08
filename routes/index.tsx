import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Geo from '../islands/Geo.tsx'
import Add from '../islands/Add.tsx'
import YourComponents from "../islands/YourComponent.tsx ";


export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <body style="background-color:#232B32">
        
      <div style="
      display: grid;
     display: grid;
     justify-content: space-around;
     align-content: center;
     color:#efefef;
     gap: 4px;
     grid-auto-flow: column;">
        <section style="    grid-column: 1;">
          <img
            src="/logo.svg"
            width="128"
            height="128"
            alt="the fresh logo: a sliced lemon dripping with juice"
            />
            <Add />
            <Test />
        </section>
      </div>
      </body>

    </>
  );
}
