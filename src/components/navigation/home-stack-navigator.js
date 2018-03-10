import React, { Component } from 'react';
import styled from 'styled-components/native';
import Header from './../common/header';
import { COLORS } from './../../constants/constants';
import { TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native';
import ShowData from './../../data/data';
import Icon from 'react-native-vector-icons/FontAwesome';

const container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.Gray.Black_Russian};
`;

const UserNavigationContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.Gray.Black_Russian};
`;

const UserNavigationLink = styled.View`
  margin-right: 10;
  margin-left: 10;
  margin-top: 10;
  padding-top: 10;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 10;
  background-color: ${COLORS.Gray.Black_Russian};
  border-bottom-width: 5;
`;

const ActiveUserNavigationLink = styled.View`
  border-bottom-color: ${COLORS.Red.Fire_Engine_Red}
`;

const UserNavigationLinkText = styled.View`
  color: ${COLORS.White.White}
`;

const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Image = styled.View`
  width: 75;
  height: 100;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10;
`;

const SubHeader = styled.View`
  padding-top: 15;
  padding-bottom: 5;
  padding-left: 15;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SubHeaderTextContainer = styled.View`
`;

const SubHeaderTitleText = styled.View`
  color: ${COLORS.White.White}
`;

const SubHeaderText = styled.View`
  color: ${COLORS.Gray.Bright_Gray}
`;

const AllContainer = styled.View`
  color: ${COLORS.Gray.Bright_Gray};
  align-self: center;
  margin-right: 5;
`;

const IconContainer = styled.View`
  margin-right: 10;
`;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'browse',
    }
    this.setActiveUserNavigation = this.setActiveUserNavigation.bind(this);
  }
  setActiveUserNavigation(selected) {
    this.setState({
      selected,
    });
  }

  renderUserNavigation() {
    const userNavigation = [{ title: 'BROWSE', id: 'browse' }, { title: 'MY LIST', id: 'my-list' }];
    const { selected } = this.state;

    return userNavigation.map((element, index) => {
      if (selected === element.id) {
        return (
          <TouchableWithoutFeedback onPress={() => { this.ActiveUserNavigation(element.id) }} key={index}>
            <ActiveUserNavigationLink>
              <UserNavigationLinkText>{element.title}</UserNavigationLinkText>
            </ActiveUserNavigationLink>
          </TouchableWithoutFeedback>
        )
      } else {
        return (
          <TouchableWithoutFeedback onPress={() => this.setActiveUserNavigation(element.id)} key={index}>
            <UserNavigationLink>{element.title}</UserNavigationLink>
          </TouchableWithoutFeedback>
        )
      }
    })
  }

  render() {
    return (
      <Container>
        <Header openDrawer={() => this.props.navigation.navigate('DrawerOpen')} />
        <UserNavigationContainer>{this.renderUserNavigation()}</UserNavigationContainer>
        <SubHeader>
          <SubHeaderTextContainer>
            <SubHeaderTitleText>{`Trending Now`}</SubHeaderTitleText>
            <SubHeaderText>{`Recommended for you`}</SubHeaderText>
          </SubHeaderTextContainer>
          <AllContainer>
            <AllText>{`All`}</AllText>
            <IconContainer>
              <Icon name={`angle-right `} size={20} color={COLORS.Gray.Bright_Gray} />
            </IconContainer>
          </AllContainer>
        </SubHeader>
        <ScrollView horizontal={true}>
          <ImageContainer>
            {ShowData.map((show, index) => (
              <TouchableOpacity onPress={this.props.navigation.navigate(`ShowDetails`, show)} key={index}>
                <Image source={show.image} key={index} />
              </TouchableOpacity>
            ))}
          </ImageContainer>
        </ScrollView>
        <SubHeader>
          <SubHeaderTitleText>{`Recently Added`}</SubHeaderTitleText>
          <AllContainer>
            <AllText>{`All`}</AllText>
            <IconContainer>
              <Icon name={`angle-right`} size={20} color={COLORS.Gray.Bright_Gray} />
            </IconContainer>
          </AllContainer>
        </SubHeader>
        <ScrollView horizontal={true}>
          <ImageContainer>
            {ShowData.map((show, index) => (
              <TouchableOpacity onPress={() => this.props.navigation(`ShowDetails`, show)} key={index} >
                <Image source={show.image} />
              </TouchableOpacity>
            ))}
          </ImageContainer>
        </ScrollView>
      </Container>
    );
  }
}

export default HomeScreen;