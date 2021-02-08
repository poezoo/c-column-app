import * as React from 'react';
import { Button } from '../components/commons/Button';
import images from '../images/index';
export const Column: React.FC = () => {
  return (
    <section>
      <h1>column page</h1>
      <div>
        <img src={images.img_column} />
        <img src={images.img_night_sky} />
      </div>

      <Button variant="primary">テスト</Button>
    </section>
  );
};
