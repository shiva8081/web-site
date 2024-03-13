import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps={
        country:'in',
        pagesize:8,
        category:'general'

    }
    static propTypes={
        country: PropTypes.string ,
        pagesize: PropTypes.number ,
        category:PropTypes.string 
    }
    constructor() {
        super();
        console.log('hello')
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        }
    }
    async componentDidMount() {
        console.log('cdm');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0875093ccbc84e1f925e6c1c1f3eb1d4&page=1&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedata = await data.json()
        // console.log(parsedata)
        this.setState({ articles: parsedata.articles,totalResult:parsedata.totalResult,loading:false })
        console.log(this.state.articles)


    }
    handlenextclick = async () => {
        console.log("next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pagesize))) {


            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0875093ccbc84e1f925e6c1c1f3eb1d4&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedata = await data.json();
            // console.log(parsedata)
            this.setState({
                articles: parsedata.articles,
                page: this.state.page + 1,
                loading: false
            })

        }
    }

        handlepreviousclick = async () => {
            console.log('previous');
            console.log('cdm');
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0875093ccbc84e1f925e6c1c1f3eb1d4&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedata = await data.json();
            // console.log(parsedata)
            this.setState({
                articles: parsedata.articles,
                page: this.state.page - 1,
                loading: false
            });
        }
    
    render() {
        const { articles } = this.state;
        return (
            <div className='container my-4' >
                <h1 className='text-center'>News -- top HeadLines</h1>
                {this.state.loading && <Spin />}

                <div className='row'>
                    {!this.state.loading&&this.state.articles.map((element, index) => {
                        return <div className='col-md-3' key={index} >
                            <NewsItem title={element.title.slice(0, 45) ?? "unknown"} description={element.description ? element.description.slice(0, 200) : "unkonw"} Imageurl={element.urlToImage} Newsurl={element.url} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between '>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepreviousclick} >previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextclick} >next</button>
                </div>
            </div>
        )
    }
}

export default News
