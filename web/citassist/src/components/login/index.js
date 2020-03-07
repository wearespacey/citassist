import React, {useEffect, useState} from 'react';
import { Grid, GridRow, GridColumn, Form, Header, Segment, Image, Message, Input, Button, Loader } from 'semantic-ui-react';
import './login-style.css';

export default ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const connect = ()=>{
        alert('Bon courage sans DB :^)')
    }

    return(
        <Grid className='login_container' centered inverted padded>
                <GridColumn computer={6} tablet={10} mobile={16} >
                    <GridRow centered>
                        <Header as='h1' textAlign='center'>Log In to Welcome</Header><br />
                    </GridRow>
                    <GridRow centered>
                        <Form as={Segment} textAlign='center' size={'big'}>
                            <Form.Input name='username' onChange={event=>setUsername(event.target.value)} icon='user' iconPosition='left' placeholder='Username' fluid />
                            <Form.Input name='password' onChange={event=>setPassword(event.target.value)} icon='lock' iconPosition='left' placeholder='Password' type='password' fluid/>
                            <Form.Button onClick={()=>connect()} fluid color='green'>Log In</Form.Button>
                            {/* <Loader active /> */}
                        </Form>
                    </GridRow>
                </GridColumn>
            </Grid>
    );
}