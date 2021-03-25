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
                <div>Nothing Found</div>
            );
        }
    }


    renderComments(props) {
        if (props != null) {
            return (
                <div className="container">
                 <Card key={props.comments.id}>
                    <h4>Comments</h4>
                    {props.comments.map(c=>
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
        else return <div>Nothing Found</div>
    }

    render() {

        console.log(this.props);

        console.log(this.props);

        /*console.log(dish);*/

        return(
            <div className="container">
                <div className="row">
                    <div className="col-6 col-xs-12">
                        {/* {this.renderDish(this.props.selectedDish)} */}
                        <this.renderDish props={this.props.dish}/>
                        </div>
                    <div className="col-6 col-xs-12">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            </div>
        );
    } 
}

export default DishDetail;