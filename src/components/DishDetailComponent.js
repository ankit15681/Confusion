import React, {Component} from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';
import Menu from './MenuComponent';

class DishDetail extends Component{

 constructor(props){

     super(props);

 }

 renderDish(dish){
        return( <div>
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
                </div>
             );

    }
    renderComments(comments){
        
        const listItems = comments.map((comments) =>
        <li key={comments.id}>{comments.comment}<br></br><br></br>-- {comments.author},  {(new Date(comments.date)).toDateString()}<br></br><br></br></li> 
        
         );
         return(
             
            <li>{listItems}</li>
         );
       
    }


   render(){
      if(this.props.dish!=null){
        return (
                <div className="row">
            
                 <div className="col-12 col-md-5 m-1">
                   <Card>
                    {this.renderDish(this.props.dish)}
                   </Card>
                 </div>
                
                
                 <div className="col-12 col-md-5 m-1">
                 <h4>Comments</h4>
                 <ul class = "list-unstyled">   
                     {this.renderComments(this.props.dish.comments)}
                     </ul>
                 </div>

 
               </div>
            
        );
     } else {
         return(
             <div></div>
         );
     }
    }
   }

export default DishDetail;