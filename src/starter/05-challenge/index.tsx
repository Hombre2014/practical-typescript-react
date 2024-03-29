type BasicProps = {
  type: 'basic';
  name: string;
};

type AdvancedProps = {
  type: 'advanced';
  name: string;
  email: string;
};

function Component(props: BasicProps | AdvancedProps) {
  const { type, name } = props;

  if (type === 'basic') {
    return (
      <article className="alert alert-success">
        <h2>user: {name}</h2>
      </article>
    );
  }
  return (
    <article className="alert alert-danger">
      <h2>user: {name}</h2>
      <h2>Email: {props.email}</h2>
    </article>
  );
}
export default Component;
