import GoogleLogin from "react-google-login"
const clientId='831772952005-fdk0jts5l69fgo823q37ss0fbp646aqq.apps.googleusercontent.com'
function Logout(){
    const onSuccess=()=>{
        console.log("Log out successful");
    }
    return (
        <div id="signOutButton">
<GoogleLogin 
        clientId={clientId}
        buttonText="Выйти"
       onLogoutSuccess={onSuccess}
        />
        </div>
    )
}
export default Logout