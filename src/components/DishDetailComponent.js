import React from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

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
                 <div className="row">
                     <Breadcrumb>
                         <BreadcrumbItem ><Link to='/home'>Home</Link></BreadcrumbItem>
                         <BreadcrumbItem ><Link to='/menu'>Menu</Link></BreadcrumbItem>
                         <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                     </Breadcrumb>

                     <div className="col-12">
                         <h3>{props.dish.name}</h3>
                         <hr />
                     </div>
                 </div>
                 <div className = "row">
                 <div className="col-12 col-md-5 m-1">
                        <Card>
                            <RenderDish dish = {props.dish} />
                        </Card>
                 </div>      
                 <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul class = "list-unstyled">  
                        <RenderComments comments = {props.comments} />
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