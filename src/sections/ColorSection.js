import gsap from "gsap";
import React from "react";
import { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model2 from "../components/Scene2";
import { useContext } from "react";
import { ColorContext } from "./../context/ColorContext";
import { useEffect } from "react";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
  @media screen and (max-width: 48em) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;
  @media screen and (max-width: 48em) {
    display: none;
  }
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  text-transform: uppercase;
  filter: brightness(0.85);
  @media screen and (max-width: 48em) {
    top: 2rem;
    transform: translate(-50%, 0%) rotate(0deg);
  }
`;

const ColorSection = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);

  return <Section></Section>;
};

export default ColorSection;
