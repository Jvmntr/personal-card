import styled from 'styled-components';
import profileImage from '../../assets/images/profile.jpg';
import SkillsWrapper from '../skills/skills.js';
import Socials from '../socials/socials.js';

const Card = styled.div`
  width: 40vh;
  height: auto;
  min-height: 70vh;
  max-height: calc(100vh - 2rem);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  border-radius: 16px;
  overflow-y: auto;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 1rem auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: auto;
    min-height: 60vh;
    max-height: calc(100vh - 2rem);
    margin: 1rem auto;
    border-radius: 12px;
  }
`;

const Header = styled.div`
  height: 10vh;
  background: linear-gradient(to right, #000000, #808080);
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
  max-height: none;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1rem;

  @media (max-height: 800px) {
    padding-bottom: 0.5rem;
  }
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
        <SkillsWrapper style={{ paddingTop: '1rem' }} />
        <Socials />
      </ContentWrapper>
    </Card>
  );
}