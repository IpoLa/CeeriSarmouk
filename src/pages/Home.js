import React from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import FullScreenCarousel from '../components/FullScreenCarousel';

const Home = () => {
  const slides = [
    {
      image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg',
      alt: 'First slide',
      label: 'First slide label',
      text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg',
      alt: 'Second slide',
      label: 'Second slide label',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg',
      alt: 'Third slide',
      label: 'Third slide label',
      text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  ];
  return (
    <>
    <FullScreenCarousel slides={slides} />
    <GetStarted />
    <GetInTouch />
    </>

  )
}

export default Home