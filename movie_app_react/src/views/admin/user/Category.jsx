import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { Route } from "react-router-dom";
import CategoryList from "views/admin/user/List.jsx";
import AddCategory from "views/admin/user/Add.jsx";
import EditCategory from "views/admin/user/Edit.jsx";
import DeleteCategory from "views/admin/user/Delete.jsx";

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
                      <Route path="/admin/category/user/add" render={props => <AddCategory {...props} />} />
                      <Route path="/admin/category/user/edit/:id" render={props => <EditCategory {...props} />} />
                      <Route path="/admin/category/user" render={props => <CategoryList {...props} />} exact={true} />
                      <Route path="/admin/category/user/delete/:id" render={props => <DeleteCategory {...props} />} />
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