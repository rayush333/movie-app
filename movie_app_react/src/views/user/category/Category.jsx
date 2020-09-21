
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { Route } from "react-router-dom";
import CategoryList from "views/user/category/List.jsx";
import AddCategory from "views/user/category/Add.jsx";
import EditCategory from "views/user/category/Edit.jsx";





class Category extends Component {
  

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col>
              <Card
                title="Category"
                content={
                  <div>
                    <Row>                    
                      <Route path="/user/category/add" render={props => <AddCategory {...props} />} />
                      <Route path="/user/category/edit/:id" render={props => <EditCategory {...props} />} />
                      <Route path="/user/category" render={props => <CategoryList {...props} />} exact={true} />
                    </Row>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Category;
