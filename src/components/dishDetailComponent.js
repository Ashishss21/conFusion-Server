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
                <div>Nothing Found</div>
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
                                <p>--{c.author}, {c.date}</p>
                            </div>
                        </Row>)}
                </Card>
            );
        }
        else{
            return(
                <div>Nothing Found</div>
            );
        }
    }
    
    render(){
        return(
            <div className="container">
                <Row>
                    <div className="col-5 col-md-12 m-1 col-sm">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-xs-5 col-md-12 m-1 col-sm">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </Row>
            </div>
        );
    }
}

export default DishDetail;