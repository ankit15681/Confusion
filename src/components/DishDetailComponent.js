import React from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';


function RenderDish({dish}){
        return( <div >
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
                </div>
             );

    }
function RenderComments({comments}){
        
        const listItems = comments.map((comments) =>
        <li key={comments.id}>{comments.comment}<br></br><br></br>-- {comments.author},  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}<br></br><br></br></li> 
        
         );
         return(
             
            <li>{listItems}</li>
         );
       
    }


const DishDetail = (props) => {
      if (props.dish != null){
        return (
                <div className="container">
                 <div className = "row">
                 <div className="col-12 col-md-5 m-1">
                   <Card>
                    <RenderDish dish = {props.dish} />
                   </Card>
                 </div>
                
                
                 <div className="col-12 col-md-5 m-1">
                 <h4>Comments</h4>
                 <ul class = "list-unstyled">  
                   <RenderComments comments = {props.dish.comments} />
                 </ul>
                 </div>

                </div>
               </div>
            
        );
     } else {
         return(
             <div></div>
         );
     }
    }
export default DishDetail;