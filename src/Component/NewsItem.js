import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="card" >
                <div style={{position:'absolute',textAlign:'left'}}><span className="badge bg-success">{this.props.source}</span></div>
                            <img src={this.props.imageUrl?this.props.imageUrl:"https://cdn.xxl.thumbs.canstockphoto.com/question-mark-face-illustration-of-question-mark-symbol-and-human-face-drawing_csp12249442.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                       
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.discription}</p>
                                <p className="card-text"><small className="text-muted">By {this.props.author?this.props.author:"Unknown"} on {this.props.date}</small></p>
                                <a href={this.props.newsUrl} target="__blank" className="btn btn-primary high--dark">Read More</a>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
