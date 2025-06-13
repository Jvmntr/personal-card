import styled from 'styled-components';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import githubIcon from '../../assets/icons/github.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: auto 0 1%;
  width: 100%;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const IconLink = styled.a`
  display: inline-block;
  cursor: pointer;
  position: relative; /* Necessário para o tooltip */

  &:hover {
    transform: scale(1.1); /* Animação de escala ao passar o mouse */
    transition: transform 0.2s ease-in-out; /* Suaviza a transição */
  }

  /* Estilo do Tooltip */
  &::after {
    content: attr(data-tooltip); /* Pega o texto do atributo data-tooltip */
    position: absolute;
    bottom: 120%; /* Posição acima do ícone */
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px 8px;
    border-radius: 4px;
    font-size: 0.8em;
    white-space: nowrap;
    opacity: 0; /* Começa invisível */
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 10;
  }

  &:hover::after {
    opacity: 1; /* Torna visível ao passar o mouse */
    visibility: visible;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

export default function Socials() {
  const links = [
    { href: 'https://github.com/Jvmntr', src: githubIcon, alt: 'GitHub', tooltip: 'Visitar GitHub' },
    { href: 'https://www.linkedin.com/in/jvmntr/', src: linkedinIcon, alt: 'LinkedIn', tooltip: 'Visitar LinkedIn' }
  ];

  return (
    <Container>
      {links.map(({ href, src, alt, tooltip }) => (
        <IconLink key={href} href={href} target="_blank" rel="noopener noreferrer" data-tooltip={tooltip}>
          <Icon src={src} alt={alt} />
        </IconLink>
      ))}
    </Container>
  );
}