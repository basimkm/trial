import React from 'react';
import * as htmlToImage from 'html-to-image';

const app = () => {
  const handleClick = () => {
    htmlToImage
      .toJpeg(document.getElementById('hi'), { quality: 0.95 })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'screenshot.jpeg';
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Download screenshot</button>
    </div>
  );
};

export default app;
