import { React, useEffect} from 'react';

const Main = () => {
  useEffect(() => {
    document.title = 'Minecraft Revolution';
  }, []);
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default Main;