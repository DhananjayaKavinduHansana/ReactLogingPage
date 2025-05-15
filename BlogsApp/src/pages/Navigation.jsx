import '../css/navigation.css'

const Navigation = () => {
    return (  
        <div className="navContainer">
        <h1>Hello Blog</h1>
            <div className="navPannel">
                <div className="navLink">Home</div>
                <div className="navLink">About</div>
                <div className="navLink">Contact</div>
            </div>
        </div>
    );
}
 
export default Navigation;