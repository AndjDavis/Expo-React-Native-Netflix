import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from './../../constants/constants';
import { TouchableWithoutFeedBack } from 'react-native';
const NETFLIX_LOGO = require('../../../assets/icons/netflix-logo.png');

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60;
  background-color: ${COLORS.Gray.Black_Russian};
`;

const IconContainer = styled.View`
  padding-left: 10;
  padding-right: 10;
`;

const LogoContainer = styled.View`
  width: 175;
  height: 50;
`;

class Header extends Component {
  static propTypes = {
    openDrawer: PropTypes.func.isRequired,
  }

  render() {
    const { openDrawer } = this.props;
    return (
      <Container>
        <TouchableWithoutFeedBack onPress={openDrawer}>
          <IconContainer>
            <Icon name={'bars'} size={30} color={COLORS.Gray.Bright_Gray} />
          </IconContainer>
        </TouchableWithoutFeedBack>
        <LogoContainer source={NETFLIX_LOGO} />
        <TouchableWithoutFeedBack onPress={() => { }}>
          <IconContainer>
            <Icon name={'seach'} size={30} color={COLORS.Gray.Bright_Gray} />
          </IconContainer>
        </TouchableWithoutFeedBack>
      </Container>
    );
  }
}

export default Header;

