import styled from 'styled-components';
import profileImage from '../../assets/images/profile.jpg';
import SkillsWrapper from '../skills/skills.js';
import Socials from '../socials/socials.js';

const Card = styled.div`
  width: 40vh;
  height: auto;
  min-height: 65vh; 
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: auto;
    margin: 1.5rem auto;
    border-radius: 12px;
  }

  @media (max-height: 750px) {
    min-height: 45vh; 
    min-width: 50vh;
  }
`;



const Header = styled.div`
  height: 12vh;
  background: linear-gradient(to right,rgb(19, 18, 18),rgb(37, 37, 37));
  position: relative;

  @media (max-width: 480px) {
    height: 12vh;
  }
`;

const Avatar = styled.img`
  width: 18vh;
  height: 18vh;
  margin: -9vh auto 0;
  border-radius: 50%;
  border: 5px solid #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease;
  z-index: 2;
  position: relative;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 30vw;
    height: 30vw;
    margin-top: -15vw;
    border: 3px solid #ffffff;
  }
`;

const Name = styled.h2`
  font-size: 1.75rem;
  color: #2c3e50;
  margin: 1.5rem 0 0.5rem;
  padding: 0 5%;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-top: 1rem;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #34495e;
  padding: 0 5%;
  margin-bottom: 2%;
  line-height: 1.5;
  flex-grow: 0;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0 7%;
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

export default function PersonalCard() {
  return (
    <Card>
      <Header />
      <Avatar src={profileImage} alt="João Victor Monteiro" />
      <Name>João Victor Monteiro</Name>
      <Description>
        Desenvolvedor fullstack com 3 anos de experiência, criando soluções web completas com foco em performance e boas práticas. Atuo do front ao back, unindo design funcional e código eficiente.
      </Description>
      <ContentWrapper>
        <SkillsWrapper />
        <Socials />
      </ContentWrapper>
    </Card>
  );
}