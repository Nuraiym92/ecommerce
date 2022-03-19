import GoogleLogin from "react-google-login"
const clientId='831772952005-fdk0jts5l69fgo823q37ss0fbp646aqq.apps.googleusercontent.com'

function Login(){
    
    const onSuccess=(res)=>{
        console.log("LOGIN SUCCESS! Current user:",res.profileObj );
}
const onFailure=(res)=>{
    console.log("LOGIN FAILED res:",res);
}


 
     return(
         
      <div>
<GoogleLogin 
        clientId={clientId}
        buttonText="Вход"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        />
     
         </div>
     )
}
export default Login