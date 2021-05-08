import { useTransform } from 'framer-motion';
import { ReactNode } from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, MenuContainer, Burger, Footer } from './styles';


const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <MenuContainer>
          <ul>
            <li><a href="">MODEL S</a></li>
            <li><a href="">MODEL 3</a></li>
            <li><a href="">MODEL X</a></li>
            <li><a href="">MODEL Y</a></li>
            <li><a href="">SOLAR ROOF</a></li>
            <li><a href="">SOLAR PANELS</a></li>
          </ul>
          <ul>
            <li><a href="">SHOP</a></li>
            <li><a href="">TESLA ACCOUNT</a></li>
          </ul>
        </MenuContainer>
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="">UI Clone</a>
          </li>
          <li>
            <a href="">made with love</a>
          </li>
          <li>
            <a href="">by Bruno Lollato</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
