import React from 'react';
import './Header.css';
import { Link,useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';

function Header( { backButton } ) {
    const history = useHistory();
    return (
        <header>
            { backButton 
            ? 
                <IconButton onClick = {()=>{ history.replace(backButton)}}>
                    <ArrowBackIosIcon fontSize="large"  /> 
                </IconButton>
            :
                <IconButton>
                    <PersonIcon fontSize="large"  /> 
                </IconButton>
            }

            
            <Link to="/">
                <img class="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="Tinder logo"/>
            </Link>

            <Link to="/chats">
                <IconButton>
                    <ForumIcon  fontSize="large" />
                </IconButton>
            </Link>
        </header>
    )
}

export default Header;
