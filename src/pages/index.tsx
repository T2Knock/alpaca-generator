import Head from "next/head";
import Image from "next/image";
import FunctionButton from "~/components/functionButton";
import Panel from "~/components/panel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpaca Image Generator</title>
        <meta name="description" content="Generate alpaca image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="min-w-screen flex min-h-screen justify-center bg-zinc-100">
        <div className="flex w-10/12 flex-col justify-start gap-12 py-20">
          <h1 className="ml-3 text-5xl font-extrabold uppercase tracking-widest text-slate-900">
            alpaca generator
          </h1>
          <div className="flex gap-48">
            <Image
              className="min-h-fit rounded"
              src="/alpaca/backgrounds/darkblue50.png"
              width={570}
              height={570}
              alt="preview image"
            />

            <Panel />
          </div>

          <div className="flex max-w-xl justify-between">
            <FunctionButton
              name="random"
              icon={{ name: "random", alt: "random button" }}
            />
            <FunctionButton
              name="download"
              icon={{ name: "download", alt: "download button" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
