import { type PropsWithChildren } from 'react';

// type ComponentProps = { name: string; id: number; children?: React.ReactNode };
// interface ComponentProps = { name: string; id: number };

type ComponentProps = PropsWithChildren<{ name: string; id: number }>;

// function Component({ name, id }: { name: string; id: number }) {
// function Component(props: ComponentProps) {
function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h1>React & Typescript</h1>
      <p>Name: {name}</p>
      <h2>Props</h2>
      <p>ID: {id}</p>
      {children}
    </div>
  );
}
export default Component;
