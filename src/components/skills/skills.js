import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styled from "styled-components";
import skillsData from "../../data/skills.json";

const Wrapper = styled.div`
  margin-top: 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const NavButton = styled.button`
  width: 48px;
  height: 48px;
  padding: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  flex-shrink: 0;
  color: #333;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    color: #ccc;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    padding: 0.3rem;
  }
`;

const SkillGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: capitalize;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SkillIconWrapper = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px 8px;
    border-radius: 4px;
    font-size: 0.75em;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 10;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;

const SkillIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    z-index: 1;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
  
  @media (max-height: 800px) {
    width: 36px;
    height: 36px;
  }
  
  @media (max-width: 480px) and (max-height: 800px) {
    width: 30px;
    height: 30px;
  }
`;

export default function SkillsWrapper() {
  const categories = Object.keys(skillsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCategory = categories[currentIndex];
  const skills = skillsData[currentCategory];

  const handleIndexChange = (newIndex) =>
    setCurrentIndex(Math.min(Math.max(newIndex, 0), categories.length - 1));

  return (
    <Wrapper>
      <Title>{currentCategory}</Title>
      <Row>
        <NavButton onClick={() => handleIndexChange(currentIndex - 1)} disabled={currentIndex === 0}>
          <ChevronLeft size={32} />
        </NavButton>

        <SkillGrid>
          {skills.map(({ image, name, link }, i) => (
            <SkillIconWrapper key={i} data-tooltip={name}>
              <SkillIcon
                src={require(`../../assets/icons/${image}`)}
                alt={name}
                onClick={() => link && window.open(link, "_blank")}
              />
            </SkillIconWrapper>
          ))}
        </SkillGrid>

        <NavButton
          onClick={() => handleIndexChange(currentIndex + 1)}
          disabled={currentIndex === categories.length - 1}
        >
          <ChevronRight size={32} />
        </NavButton>
      </Row>
    </Wrapper>
  );
}