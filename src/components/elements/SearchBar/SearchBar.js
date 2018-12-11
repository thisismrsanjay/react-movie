import React,{Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
    state={
        value : ''
    }

    timeout =null;
    doSearch= (event)=>{
        this.setState({value:event.target.value})
        clearTimeout(this.timeout);
        
        // no idea what it is but  delays 500
        //sets a timer which executes a function or specified piece of code once after the timer expires.
        this.timeout= setTimeout(()=>{
            this.props.callback(this.state.value);
        },500);
    }


    render(){
        return(
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <FontAwesome className="rmdb-fa-search" name="search" size="2x"/>
                    <input type="text"
                        className="rmdb-searchbar-input"
                        placeholder="Search"
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                </div>
            </div>
        )
    }
}
export default SearchBar;