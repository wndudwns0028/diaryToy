"use client";

import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "@/public/static/images/test.png";
import Image from "next/image";

export default function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <Image src={ExampleCarouselImage} alt="" width={500} height={500} />
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
