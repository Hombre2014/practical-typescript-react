import { useTheme, ThemeProvider } from './context';

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const cntx = useTheme();
  console.log(cntx);

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
      <button
        type="button"
        title="Toggle"
        className="btn btn-center"
        onClick={() => {
          if (cntx.theme === 'dark') {
            cntx.setTheme('system');
            return;
          }
          cntx.setTheme('dark');
        }}
      >
        Change Theme
      </button>
    </div>
  );
}
export default ParentComponent;
