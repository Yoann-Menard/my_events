import FacebookLogin from "react-facebook-login";

const Facebook = () => {
  const state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  const componentClicked = () => {
    console.log("clicked");
  };

  const responseFacebook = (response) => {
    console.log(response);
  };
  
  let fbContent;
  if (state.isLoggedIn) {
  } else {
    fbContent = (
      <FacebookLogin
        appId="513656713134116"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }

  return <div></div>;
};

export default Facebook;
