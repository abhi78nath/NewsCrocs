import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
          <div className="card">
                <img src={!imageUrl?"https://img.freepik.com/free-vector/cute-monkey-working-laptop_138676-3304.jpg?t=st=1657092675~exp=1657093275~hmac=bb7a4e190efb3e548e155ccd2af0b5e0769171d951090bd26e0f985fc32864b8&w=740":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...<span class="badge bg-success">{source}</span></h5>
                    <p className="card-text">{description}...</p>
                    <p class="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem