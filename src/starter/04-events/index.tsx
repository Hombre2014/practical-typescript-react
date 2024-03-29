import { useState } from 'react';

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const onEmailClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Email: ', e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    const formData = new FormData(e.target as HTMLFormElement);

    // const data = Object.fromEntries(formData);
    const text = formData.get('text') as string;
    const person: Person = { name: text };
    console.log(person);
  };

  return (
    <section>
      <h1>React & Typescript</h1>
      <h2>Events</h2>
      <h3>Examples</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          title="Text"
          name="text"
          type="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          title="Email"
          type="email"
          name="email"
          className="form-input mb-1"
          value={email}
          onChange={onEmailClick}
        />
        <button type="submit" title="Submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;
