import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { Route } from "react-router-dom";
import CategoryList from "views/admin/genre/List.jsx";
import AddCategory from "views/admin/genre/Add.jsx";
import EditCategory from "views/admin/genre/Edit.jsx";


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
                      <Route path="/admin/category/genre/add" render={props => <AddCategory {...props} />} />
                      <Route path="/admin/category/genre/edit/:id" render={props => <EditCategory {...props} />} />
                      <Route path="/admin/category/genre" render={props => <CategoryList {...props} />} exact={true} />
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