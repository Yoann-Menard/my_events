import React, { useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';

const Facebook = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  /***********************
  PSEUDO CODE :

  connexion effectuée
        |
        |
        |
        V

(newUser) ? createnewUser() : void

 // let user = {
    //   pseudo: data.name,
    //   mail: data.email,
    //   avatar: data.picture,
    //   presentation: '',
    // };

*******************************/

  // console.log('unknown user : ', user);

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    response.accessToken ? setLogin(true) : setLogin(false);
  };

  return (
    <div className='container'>
      <Card style={{ width: '600px' }}>
        <Card.Header>
          {!login && (
            <div>
              <p>Pour commencer connecter vous à votre compte facebook</p>
              <FacebookLogin
                appId='513656713134116'
                autoLoad={true}
                fields='name,email,picture'
                scope='public_profile,user_friends'
                callback={responseFacebook}
                icon='fa-facebook'
              />
            </div>
          )}
          {login && <Image src={picture} roundedCircle />}
        </Card.Header>
        {login && (
          <Card.Body>
            <Card.Title>{data?.name}</Card.Title>
            <Card.Title>{data?.email}</Card.Title>
            <Card.Text>
              En se connectant via Facebook (une fois la connexion effectuée),
              vous déterminerez si c’est un utilisateur ayant déjà un compte sur
              votre plateforme, ou si c’est un nouvel utilisateur. Dans ce
              dernier cas, un compte (sur votre service) lui sera
              automatiquement créé à partir des informations récupérées via
              Facebook.
            </Card.Text>
          </Card.Body>
        )}
      </Card>
    </div>
  );
};
export default Facebook;
