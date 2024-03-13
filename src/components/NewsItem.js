import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,Imageurl,Newsurl}=this.props;
        return (
            <div>
                <div className="card btn-dark" style={{width: "18rem"}}>
                    <img src={Imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={Newsurl} target="_blankj" className="btn btn-dark btn-primary">read more</a>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default NewsItem
