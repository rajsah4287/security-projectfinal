import React from "react";
import { Link } from 'react-router-dom';

function AboutScreen() {



    return (
        <div className="about">
            <h1>Welcome To Design-House</h1>
            <p>"Your one-stop media solution for all things photography! Our web application offers a seamless and user-friendly platform where you can easily book professional photographers for various occasions such as marriages, events, pujas, album shootings, and so much more. At Design House, we understand that capturing life's precious moments is an art, and our team of skilled photographers is dedicated to preserving your memories in the most captivating and meaningful way possible. Whether it's the joyous celebration of a wedding, the excitement of a special event, the spiritual essence of a puja, or the creation of beautiful albums, our photographers are adept at translating emotions into timeless photographs that you'll cherish forever. Booking with Design House is effortless, giving you the convenience and flexibility to choose the perfect photographer for your specific needs. Our intuitive interface allows you to browse through a diverse portfolio of talented professionals, each with their unique style and expertise, ensuring you find the ideal match for your occasion. With an emphasis on quality, creativity, and attention to detail, our photographers use state-of-the-art equipment and techniques to deliver stunning visual narratives that tell your story with authenticity and grace. From candid shots that capture the essence of the moment to carefully choreographed poses that showcase your best angles, we tailor our photography services to suit your preferences and vision. Whether it's a grand celebration or an intimate gathering, Design House is committed to providing a personalized experience that exceeds your expectations. Our dedication to customer satisfaction means that we go above and beyond to ensure your photography session is a delightful and stress-free experience from start to finish. Join us at Design House and unlock the power of storytelling through breathtaking imagery. Book your photographer today and let us create art that celebrates the beauty of your life's most cherished moments. Trust us with your memories, and we'll turn them into timeless masterpieces that will warm your heart for years to come."</p>
            
<h1>👁️‍🗨️How to use this app..? don't worry i can clearly explain..✌️</h1>
            
            <li>first of all you can click Get Start button</li>
            <li>1st you go to register, and then next you click login in your correct email and password.
                because no login in your account you can't booking your slot.
                directly you will reach the <b>Error Message!..</b></li>
            <li>successfully login go to home page,and choose your fav. Packages book now</li>
            <li>next page move to booking your packages  select start date to end date then show book now
                </li>
            <li>next page go to Demo payment section , click pay button enter demo email id
                <b> Next card no: 4242 4242 4242 4242 </b>
                using this demo card number,and select expiry date and CVC password just click any 3 numbers</li>
            <li>next page move to your Profile and Bookings Packages</li>
            <h3>How to Access Admin page..?</h3>
            <li>1st logout your Account,
                next login this email:<b>mano@gamil.com</b> and password:<b>111</b>because this email and password only access to admin  go to link top /admin Example:<b>http://localhost:3000/admin</b></li>
                <Link to="/contact"><button className="pay">Contact</button></Link>
                <br/><br/>
        </div>
    )
}
export default AboutScreen;