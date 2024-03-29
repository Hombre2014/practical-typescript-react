import Component from './starter/05-challenge';

function App() {
  return (
    <main>
      <h1>React & Typescript</h1>
      {/* <Component name="peter" id={123}>
        <h2>Hello World</h2>
      </Component> */}
      {/* <Component name="Sarah" id={456} /> */}
      <Component type="basic" name="susan" />
      <Component type="advanced" name="anna" email="anna@gmail.com" />
      {/* <Component /> */}
    </main>
  );
}

export default App;
