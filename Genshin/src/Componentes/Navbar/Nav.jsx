import Carousel from 'react-bootstrap/Carousel';
import img1 from './Img/3840x2160 (1).png'
import img2 from './Img/4096x2297.png'
import img3 from './Img/Dragon Boat Festival 2023.png'

function Nav() {
  return (

    
    
    <Carousel>
      <Carousel.Item>
        <img src={img1} alt="" width={1300} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="" width={1300} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="" width={1300} />
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

export default Nav;