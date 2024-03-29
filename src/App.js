import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Search from './containers/Search';
import Favorites from './containers/Favorites';
import MainNav from './common/MainNav';
import { getAllFavoritesStart } from './store/actions/favoritesActions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFavoritesStart());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <MainNav />
          <br />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/Favs" component={Favorites} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

const AppWithRouter = withRouter(App);

export default AppWithRouter;

export { App };
