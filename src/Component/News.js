import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: [],
            loader: true,
            totalArticles: 0,
            pageNo: 1,
            country:this.props.country,
            searchText:this.props.searchText
        }
    }
    fetchMoreData = async () => {
        this.fetchData(this.state.pageNo + 1);
        this.setState({ pageNo: this.state.pageNo + 1 });
    }
    capitalize=(a)=>{
        let i=String(a).charCodeAt(0)
        a=(i>=97?String.fromCodePoint(i-32):a[0])+String(a).slice(1)
        return a;
    }
    fetchData = async (pageNo) => {
        let q=""
        if(this.props.searchText!=="" && this.props.searchText!==undefined && this.props.searchText!==null){
            q=`&q=${this.props.searchText}`
        }
        this.props.setProgress(20)
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${pageNo}${q}`
        let data = await fetch(url);
        this.props.setProgress(60)
        let jsonData = await data.json()
        this.props.setProgress(90)
        console.log(jsonData)
        this.setState({
            loader:false,
            content: this.state.content.concat(jsonData.articles),
            totalArticles: jsonData.totalResults
        })
        if(jsonData.totalResults){
            this.setState({loader:false})
        }
        this.props.setProgress(100)
    }
    updateCountry=()=>{
        this.setState({
            content:[],
            totalArticles:0,
            pageNo:1,
            loader:true,
            country:this.props.country
            ,searchText:this.props.searchText
        })
        this.fetchData(1)
    }
    componentDidMount() {
        this.fetchData(this.state.pageNo);
    }
    render() {
      
        if(this.props.country!==this.state.country){
            this.updateCountry();
        }
        
        if(this.props.searchText!==this.state.searchText){
            this.updateCountry();
        }
        document.title=`News Monkey-Top ${this.capitalize(this.props.category)} Headline's `
        return (

            <div style={{ marginTop: 80, textAlign: 'center' }}>
                <div className="container my-4"><h1>News Monkey-Top {this.capitalize(this.props.category)} Headline's </h1></div>
                <InfiniteScroll
                    dataLength={this.state.content.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={this.state.totalArticles-this.state.content.length>5 || this.state.loader }
                    loader={<div className="container " style={{marginBottom:10}}><Spinner /></div>}>
                    <div className="row">
                        {!this.state.loader && this.state.content.map((item,index) => {
                            return (
                                
                                <div className="col-md-4" key={index}>
                                
                                    <NewsItem source={item.source.name} imageUrl={item.urlToImage} title={item.title} discription={item.description} newsUrl={item.url} author={item.author} date={new Date(item.publishedAt).toUTCString()} />
                                </div>
                                
                            )
                        })}
                    </div>
                </InfiniteScroll>
             {!this.state.loader && this.state.totalArticles===0 && <div className="container my-3"><h1>No Matching Result Found</h1></div>}   
            </div>
        )
    }
}
