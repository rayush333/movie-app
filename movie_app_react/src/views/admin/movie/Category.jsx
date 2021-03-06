
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { Route } from "react-router-dom";
import CategoryList from "views/admin/movie/List.jsx";
import AddCategory from "views/admin/movie/Add.jsx";
import EditCategory from "views/admin/movie/Edit.jsx";
import DeleteCategory from "views/admin/movie/Delete.jsx";

class Category extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col>
              <Card
                title=""
                content={
                  <div>
                    <Row>                    
                      <Route path="/admin/category/movie/add" render={props => <AddCategory {...props} />} />
                      <Route path="/admin/category/movie/edit/:id" render={props => <EditCategory {...props} />} />
                      <Route path="/admin/category/movie" render={props => <CategoryList {...props} />} exact={true} />
                      <Route path="/admin/category/movie/delete/:id" render={props => <DeleteCategory {...props} />} />
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