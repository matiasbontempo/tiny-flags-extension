import icon from '@assets/logo.png';

import { Container, StyledImage, StyledParagraph } from './styles';

const InfoScreen = () => (
  <Container>
    <StyledImage src={icon} alt="" />
    <StyledParagraph>
      What is this? Feature flags for ants?
    </StyledParagraph>
    <StyledParagraph>
      Well yes! But also Tiny Flags is simple way to add client-side feature flags
      that can be updated at runtime.
    </StyledParagraph>
    <StyledParagraph>
      To learn more about Tiny Flags check the
      {' '}
      <a href="https://github.com/matiasbontempo/tiny-flags" target="_blank" rel="noreferrer">GitHub Repo</a>
      .
    </StyledParagraph>
    <StyledParagraph>
      {`v${APP_VERSION}`}
    </StyledParagraph>
  </Container>
);

export default InfoScreen;
