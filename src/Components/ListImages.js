import React from 'react';
import ImageCard from './ImageCard';

export default function ListImages({ images }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}
