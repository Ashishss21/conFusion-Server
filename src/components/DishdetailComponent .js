import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';


class DishDetail extends Component{   

    renderDish(dish){
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


    renderComments(dish) {
        if (dish != null) {
            return (
                <div className="container">
                 <Card key={dish.comments.id}>
                    <h4>Comments</h4>
                    {dish.comments.map(c=>
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
        else return <div></div>
    }

    render() {

        /*console.log(this.props);

        console.log(this.props);

        console.log(dish);
        
        console.log(this.props.dish);*/

        return(
            <div className="container">
                <div className="row">
                    <div className="col-5 col-xs-10">
                        {this.renderDish(this.props.dish)}
                        {/* <this.renderDish props={this.props.dish}/> */}
                        </div>
                    <div className="col-5 col-xs-10">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    } 
}

export default DishDetail;