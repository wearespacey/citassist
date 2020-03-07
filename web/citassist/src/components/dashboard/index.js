import React, {useEffect, useState} from 'react';
import { Grid, GridRow, GridColumn, Form, Header, Segment, Image, Input, Button, Container } from 'semantic-ui-react';
import './dashboard.css';
import Logo from '../../logo.png';

export default ()=>{
    return(
        <div>
            <header>
                <Image src={Logo} size='large' centered/>
            </header>
            <Grid className='dashboard_container'>
                <Grid.Column className='dashboard_menu_left' width={5} fluid>
                    <p>Hello</p>
                </Grid.Column>
                <Grid.Column width={6}>
                    
                </Grid.Column>
                <Grid.Column className='dashboard_menu_right' width={5} fluid>
                    <p>Hello</p>
                </Grid.Column>
            </Grid>
        </div>
    );
}