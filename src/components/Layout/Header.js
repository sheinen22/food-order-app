import { Fragment } from 'react';
import HeaderCartButton from '../Layout/HeaderCartButton'

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

function Header (props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of food"/>
            </div>
        </Fragment>
    )
}

export default Header;