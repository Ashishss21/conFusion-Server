import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

/*--------------------------------CommentForm end--------------------------------------------------------*/

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


    function RenderComments({comments, addComment, dishId}) {
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
                        <div className="container">
                            <CommentForm dishId={dishId} addComment={addComment} />
                        </div>
                </Card>
                </div>
            );
    }

    const DishDetail = (props) => { 
        if (props.dish != null){
        return(
            <div className="container">

                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>

                </div>
                
                <div className="row">
                    <div className = "col-5 col-xs-12 m-1">
                        <RenderDish dish = {props.dish} />
                    </div>
                    <div className = "col-5 col-xs-12 m-1">
                        <RenderComments comments = {props.comments}
                            addComment = {props.addComment}
                            dishId={props.dish.id}
                        />
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