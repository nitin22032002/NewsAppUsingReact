import React,{Component} from 'react'
import LoadingBar from 'react-top-loading-bar'
import NavBar from './Component/NavBar';
import News from './Component/News';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
class App extends Component{
  pageSize=10
  apiKey=process.env.REACT_APP_NEWS_API2
  constructor(){
    super()
    this.state={progress:10,countryCode:'in',country:"India",searchText:""}
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  handleChange=(a,b)=>{
    this.setState({countryCode:a,country:b})
  }
  handleSearch=(a)=>{
    this.setState({searchText:a})
  }
  render(){
    return(
      <Router>
      <div>
        <NavBar country={this.state.country} changeFuc={this.handleChange} search={this.handleSearch}/>
        <LoadingBar
        color='#f11946'
        height={5}
        progress={this.state.progress}
        onLoaderFinished={()=>{this.setProgress(0)}}
    />
        <Switch>
          <Route exact path="/home">
        <News searchText={this.state.searchText}  apiKey={this.apiKey} setProgress={this.setProgress} key="general" category="general" country={this.state.countryCode} pageSize={this.pageSize}/>
          </Route>
          <Route exact path="/">
        <News searchText={this.state.searchText}  apiKey={this.apiKey} setProgress={this.setProgress} key="general" category="general" country={this.state.countryCode} pageSize={this.pageSize}/>
           </Route>
          <Route exact path="/general">
        <News searchText={this.state.searchText}  apiKey={this.apiKey} setProgress={this.setProgress} key="general" category="general" country={this.state.countryCode} pageSize={this.pageSize}/>
          </Route>
          <Route exact path="/business">
        <News searchText={this.state.searchText}  apiKey={this.apiKey} setProgress={this.setProgress} key="business" category="business" country={this.state.countryCode} pageSize={this.pageSize}/>
          </Route>
          <Route exact path="/science">
        <News searchText={this.state.searchText}  apiKey={this.apiKey} setProgress={this.setProgress} key="science" category="science" country={this.state.countryCode} pageSize={this.pageSize}/>
          </Route>
          <Route exact path="/technology">
        <News searchText={this.state.searchText}  apiKey={this.apiKey} setProgress={this.setProgress} key="technology" category="technology" country={this.state.countryCode} pageSize={this.pageSize}/>
          </Route>
          <Route exact path="/sport">
        <News searchText={this.state.searchText}  apiKey={this.apiKey} setProgress={this.setProgress} key="sport" category="sports" country={this.state.countryCode} pageSize={this.pageSize}/>
          </Route>
          
          <Route exact path="/health">
        <News searchText={this.state.searchText}  apiKey={this.apiKey} setProgress={this.setProgress} key="health" category="health" country={this.state.countryCode} pageSize={this.pageSize}/>
          </Route>
          
          <Route exact path="/entertainment">
        <News searchText={this.state.searchText}  apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" category="entertainment" country={this.state.countryCode} pageSize={this.pageSize}/>
          </Route>
          
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
