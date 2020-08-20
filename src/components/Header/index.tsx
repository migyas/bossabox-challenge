import React from 'react';

import Text from '../Text';

import * as S from './styled';
import logo from '../../assets/logo-bossa.svg';
import perfil from '../../assets/perfil.jpeg';

const Header: React.FC = () => (
  <S.Container>
    <S.Content>
      <img src={logo} alt="logo" />
      <Text component="h1" modifiers={['header4']}>
        Home
      </Text>
    </S.Content>

    <S.Perfil>
      <Text component="p" modifiers={['body']}>
        Yan
      </Text>

      <button type="button" />

      <div id="dropdown" style={{ display: 'none' }}>
        <a href="#logout">Logout</a>
      </div>

      <img src={perfil} alt="perfil" />
    </S.Perfil>
  </S.Container>
);

export default Header;
