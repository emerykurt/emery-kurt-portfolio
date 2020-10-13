import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import i1 from './media/i1.jpg'
import i2 from './media/i2.jpg'
import i3 from './media/i3.jpg'
import i4 from './media/i4.jpg'
import i5 from './media/i5.jpg'
import i6 from './media/i6.jpg'


const imgArr = [
  {
    original: i1,
    thumbnail: i1,
  },
  {
    original: i2,
    thumbnail: i2,
  },
  {
    original: i3,
    thumbnail: i3,
  },
  {
    original: i4,
    thumbnail: i4,
  },
  {
    original: i5,
    thumbnail: i5,
  },
  {
    original: i6,
    thumbnail: i6,
  },
]


export default function SingleLineGridList() {
  return (
    <div>
    <ImageGallery items={imgArr} />
    </div>
  );
}