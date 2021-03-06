import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row } from 'antd';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import LoginForm from '../containers/LoginForm';
import UserProfile from '../containers/UserProfile';


{/*js파일에 중복사용되는 레이아웃을 모아놓은 파일
  현재는 로그인 유무
  상단레이아웃 StarLive클릭 시 메인페이지이동,
  프로필 클릭시 팔로잉, 팔로워목록 볼 수있는 profile.js파일로 이동한다.*/}

  const AppLayout = ({ children }) => {
    const { me } = useSelector(state => state.user);

    const onSearch = (value) => {
      Router.push({ pathname: '/hashtag', query: { tag: value } }, `/hashtag/${value}`);
    };

    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="home"><Link href="/"><a>Starlive</a></Link></Menu.Item>
          <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
          <Menu.Item key="mail">
            <Input.Search
              enterButton
              style={{ verticalAlign: 'middle' }}
              onSearch={onSearch}
            />
          </Menu.Item>
        </Menu>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {me
              ? <UserProfile />
              : <LoginForm />}
          </Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
            <Link href=""><a target="_blank">Made by Joey</a></Link>
          </Col>
        </Row>
      </div>
    );
  };

  AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export default AppLayout;
