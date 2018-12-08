import React,{ Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './app.css';
import Scrolls from '../components/scrolls'

class App extends Component{
    constructor(){
        super()
        this.state = { 
            robots: [],
            Searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({Searchfield: event.target.value})
    }


    render(){
        const filteredrobots = this.state.robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(this.state.Searchfield.toLocaleLowerCase());
        })
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <CardList robots={filteredrobots} />
                
                
            </div>
            );
    }
}

export default App;