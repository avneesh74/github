import React, { useState, useContext } from 'react';
import GithubContext from '../../../context/github/githubContext'
import AlertContext from '../../../context/alert/AlertContext';

 const Search =({setAlert})=> {

    const githubContext= useContext(GithubContext);
    const alertContext= useContext(AlertContext);

    const [text,setText]=useState('');

   const onchange=(e)=>{
        setText(e.target.value)
    }

   const onsubmit=(e)=>{
        e.preventDefault()
        if(text===''){
            alertContext.setAlert('Please enter something', 'light');
        }else {
            githubContext.searchUsers(text)
            setText('');
        }
        
    };

    
        return (
            <div>
                <form onSubmit={onsubmit} className="form">
                    <input type="text" 
                        name="text"
                        placeholder="Search Users"
                        value={text}
                        onChange={onchange}/>
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
                {githubContext.users.length>0 && 
                    <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
                }
            </div>
        )
    
}

export default Search
