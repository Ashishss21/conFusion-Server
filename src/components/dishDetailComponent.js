import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Row} from 'reactstrap';

class DishDetail extends Component{

    
    renderDish=(dish)=>{
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments=(dish)=>{
        if(dish != null){
            return(
                <Card key={dish.comments.id}>
                    <h4>Comments</h4>
                    {dish.comments.map(c=>
                        <Row key={c.id}>
                            <div className="col">
                                <p>{c.comment}</p>
                                <p>--{c.author}</p>
                            </div>
                        </Row>)}
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-md-12">
                    {this.renderComments(this.props.selectedDish)} 
                </div>
            </div>
        );
    }
}

export default DishDetail;