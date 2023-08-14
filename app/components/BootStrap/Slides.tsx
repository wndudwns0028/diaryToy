"use client";

import Carousel from "react-bootstrap/Carousel";
import Test from "@/public/static/images/test.png";
import Image from "next/image";
import { SSRProvider } from "react-bootstrap";

function Slides() {
  return (
    <SSRProvider>
      <Carousel style={{ width: "100%", height: "100%", position: "relative" }}>
        <Carousel.Item>
          <Image src={Test} alt="" objectFit="fill" />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Test} alt="" objectFit="fill" />
          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Test} alt="" objectFit="fill" />
          <Carousel.Caption>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </SSRProvider>
  );
}

export default Slides;
