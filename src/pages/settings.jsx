import { React, useEffect } from 'react';

const Settings = () => {
    useEffect(() => {
        document.title = 'Minecraft Revolution | Settings';
      }, []);
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default Settings;
