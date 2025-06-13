import PersonalCard from './components/personalCard/personalCard.js';
import { Background, GlobalStyle } from '../src/styles/globalStyles.js';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <PersonalCard />
      </Background>
    </>
  );
}