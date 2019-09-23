import React, {Component} from 'react'
import CardArray from './cardArray'
import Scroll from './scroll'
import SearchBox from './searchBox'
import './index.css'

// Creating the parent App Component. Because we are using state, we use class, constructor and super so that we can setState and use props  
class App extends Component {
    constructor(){
        super()
        this.state= {
            robots:[],
            searchfield:''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
           return  response.json()
        })
            .then (users => {
                this.setState({robots:users})
        })
    }
    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
    }
    render (){
      const filteredRobots = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
     })
     if(this.state.robots.length === 0) {
         return <h1>Loading</h1>
     }else {

         return (
             <div className="tc">
    <h1 className="f1">RoboFriends</h1>
 <SearchBox searchChange={this.onSearchChange} />
 <Scroll>

 <CardArray robots = {filteredRobots}/>
 </Scroll>
 </div>
 )
}
  }
 }
 export default App
        

        


        



        
        
        