import { useState } from 'react';

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks = [
  {
    id: 1,
    url: 'some url',
    text: 'some text',
  },
  {
    id: 2,
    url: 'some url',
    text: 'some text',
  },
  {
    id: 3,
    url: 'some url',
    text: 'some text',
  },
];

function Component() {
  const [text, setText] = useState('shakeAndBake');
  const [number, setNumber] = useState(23);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h1 className="mb-1">React & Typescript</h1>
      <h2>State</h2>
      <button
        type="button"
        className="btn btn-center"
        onClick={() => {
          setText('Clicked');
          setNumber(34);
          setList(['hello', 'world']);
          setLinks([
            ...links,
            {
              id: 4,
              url: 'hello',
              text: 'This is it',
            },
          ]);
        }}
      >
        Click me
      </button>
      {text}
      {number}
      {list}
    </div>
  );
}
export default Component;
