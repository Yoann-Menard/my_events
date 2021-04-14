import FacebookLogin from "react-facebook-login";

export default function Facebook() {
  let state = {
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
    state = {
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    };
    console.log(response);
  };

  let fbContent;

  if (state.isLoggedIn) {
    fbContent = (
      <div
        style={{
          width: "400px",
          margin: "auto",
          background: "#f4f4f4",
          padding: "20px",
        }}
      >
        <img src={state.picture} alt={state.name} />
        <h2>Bienvenue {state.name}</h2>
        Email: {state.email}
      </div>
    );
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
  return <div>{fbContent}</div>;
}
