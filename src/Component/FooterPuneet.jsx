import "./Styles.css";

const Footer = () =>{

    return (
        <div className='footer'>
            <div>
                <div>
                    <h4>MOST POPULAR CATEGORIES</h4>
                    <li>Staples</li>
                    <li>Beverages</li>
                    <li>Personal Care</li>
                    <li>Home Care</li>
                    <li>Fruits and Vegetables</li>
                    <li>Baby Care</li>
                    <li>Snacks & Branded Foods</li>
                    <li>Dairy & Bakery</li>
              
                    <h4>CONTACT US</h4>
                
                    <p>Please note that you are accessing the <br /> BETA Version of www.jiomart.com</p>
                    <p>Should you encounter any bugs, glitches, lack <br /> of functionality, delayed deliveries, billing errors <br /> or other problems on the beta website, please <br /> email us on <span> cs@jiomart.com</span></p>
                    <h4>DOWNLOAD APP</h4>
                    <div style={{display:'flex', justifyContent:"space-evenly"}}>
                    <img className="R-footer-icon" src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png" alt="" />
                    <img className="R-footer-icon" src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div>© 2022 All rights reserved. Reliance Retail Ltd.</div>
            </div>
        </div>
    )
}
export default Footer;