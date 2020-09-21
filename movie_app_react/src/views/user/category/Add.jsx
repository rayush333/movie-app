
import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import axios from 'axios';







class AddCategory extends Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      item: {
        name: "",
        brandName: "",
        price: '',
        tags: ["handwash"]
      }
    }
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this)



  }

  handleChange(e) {
console.log("check",e.target.value)

const data = this.state.item;
data[e.target.name] = e.target.value
this.setState({ item:data });
console.log(this.state.item)

  }

  save(){
const item = this.state.item ;
console.log(item);
    axios.post(`http://localhost:3010/api/items`, item)
      .then(res => {
        console.log(res.data);
        this.props.history.push('/user/category')
      })
      .catch(error => {
        console.log(error.response.data)
    });
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col>
              <h4>Add New Item</h4>
              <form >
                <FormInputs
                  ncols={["col-md-6", "col-md-6"]}
                  properties={[
                    {
                      label: "Item Name",
                      type: "text",
                      name: "name",
                      onChange:this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Item Category",
                      defaultValue: "",
                    },
                    {
                      label: "Brand Name",
                      type: "text",
                      name: "brandName",
                      onChange:this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Brand Name",
                      defaultValue: ""
                    }
                  ]}
                />
                <FormInputs
                  ncols={["col-md-6"]}
                  properties={[
                    {
                      label: "Price",
                      type: "text",
                      name: "price",
                      onChange:this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Price",
                      defaultValue: ""
                    }
                  ]}
                />
                <Button bsStyle="info" onClick={this.save}>Save</Button>
                <div className="clearfix" />
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AddCategory;
