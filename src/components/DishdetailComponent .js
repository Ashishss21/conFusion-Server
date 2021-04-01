import React from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

function RenderDish({dish}){
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


    function RenderComments({comments}) {
            return (
                <div className="container">
                 <Card key={comments.id}>
                    <h4>Comments</h4>
                    {comments.map(c=>
                        <div key={c.id}>
                            <div className="col">
                                <CardText>{c.comment}</CardText>
                                <CardText>--{c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</CardText>
                            </div>
                        </div>)}
                </Card>
                </div>
            );
    }

    const DishDetail = (props) => { 
        if (props.dish != null){
        return(
            <div className="container">
            <div className="row">
                <div className = "col-5 col-xs-12 m-1">
                    <RenderDish dish = {props.dish} />
                </div>
                <div className = "col-5 col-xs-12 m-1">
                    <RenderComments comments = {props.dish.comments} />
                </div>
                </div>
            </div>
        );
    }
    else {
        return(
            <div></div>
        );
    } 
}

export default DishDetail;