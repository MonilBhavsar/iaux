import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';

import { IAUXExampleComponent } from '../../index';
import style from './styles.less';

/**
 * Here are some examples of how to create a story and use add-ons
 */
storiesOf('Examples', module)
  .addParameters({ jest: ['example.test.js'] })
  .addWithJSX('IA Example ReactJS Component', () => (
    <IAUXExampleComponent>
      <p>We are live from the archive.</p>
    </IAUXExampleComponent>
  ))
  .add('A11y - Accessible element', () => (
    <button>
      This button element passes accessibility
    </button>
  ))
  .add('A11y - Inaccessible element', () => (
    <button style={{ backgroundColor: 'red', color: 'darkRed' }}>
      Inaccessible button
    </button>
  ))
  .add('Login/Signup', () => (
    <div class="container">
      <div class="row">
        
      <div class="header text-center">
        <span class="iconochive-logo topinblock the-logo"></span>
        <h2>Login</h2>
      </div>
      <form>
        <div class="form-group row">
          <div class="col-sm-12 col-xs-12">
            <label class="form-control-label">Email Address</label>
          </div>
          <div class="col-sm-12 col-xs-12">
            <input type="email" id="" name="" value="" aria-label="Email Address" class="form-control"/>
          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-12 col-xs-12">
            <label class="form-control-label">Password</label>
          </div>
          <div class="col-sm-12 col-xs-12">
            <input type="password" class="form-control" id="" name="" value="" aria-label="Password" />
          </div>
        </div>

        <div class="form-group row">
          
          <div class="form-check col-sm-12 col-xs-12">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="" id="" name="" value="" aria-label="" /> Remember me
            </label>
          </div>
          
        </div>

        <div class="form-group row">
          <div class="col-sm-12 col-xs-12">
            <button class="btn btn-primary" value="" id="" name=""  aria-label="Login" >Log In</button>
          </div>

          <div class="col-sm-12 col-xs-12">
            <a href="#">Forgot your Password ?</a>
          </div>
        </div>  

        <div class="form-group row">
          
          
          <div class="col-sm-12 col-xs-12">
            Don't have a virtual library card?  <a href="#">Register for free!</a>
          </div>
        </div> 

        
       </form> 

      </div>
    </div>
  ))
  .add('Knobs - dynamically update props & variables', () => {
    const name = text('Name', 'Ar Chive');
    const age = number('Age', 89);
    const boolz = boolean('Like Ice Cream', false);
  
    const content = `I am ${name} and I'm ${age} years old. It is ${boolz} that I like ice cream`;
    return (<div>{content}</div>);
  })


