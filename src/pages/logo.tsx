export default function Logo() {
  return (
    <div
      className="flex content-center justify-center"
      style={{ background: "#FF0303" }}
    >
      <div className="m-auto">
        <h1 className="font-extrabold text-center text-white text-9xl font-monument">
          H
        </h1>
        <h2 className="text-2xl font-light text-center text-white font-barlow">
          visit hape<span className="italic">food</span>.com
        </h2>{" "}
        <h2 className="text-2xl font-light text-center text-white font-barlow">
          and our friends at hapebeast.com
        </h2>
      </div>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
}
