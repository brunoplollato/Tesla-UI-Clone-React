import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LogoSVG, BurgerSVG } from './IconSVG'

export const Container = styled.div`
  position: sticky;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  min-height: 52px;
`;

export const Logo = styled(LogoSVG)`
  height: 17px;
  cursor: pointer;
  `;

export const MenuContainer = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    position: relative;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    
    > ul {
      display: flex;
      
      > li {
        list-style: none;
        
        & + li {
          margin-left: 20px;
        }
        
        > a { 
          text-decoration: none;
          color: #000;
          font-size: 14px;
          line-height: 16px;
          font-weight: 500;
          letter-spacing: 1px;
        }
      }
      
      & + ul {
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
      }
    }
  }
`;

export const Burger = styled(BurgerSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  
  padding-right: 5px;
  `;

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    li {
      list-style: none;
      
      font-size: 14px;
      
      & + li {
        margin: 10px 0 0;
      }
      
      a {
        text-decoration: none;
        color: #393c41;
        
        &:hover {
          color: #000;
        }
      }
    }
  }  
  margin-bottom: 30px;

  @media (min-width: 600px) {
    margin-bottom: 38px;

    ul {
      flex-direction: row;

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
  `;
