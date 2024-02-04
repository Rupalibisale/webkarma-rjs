// import logo from './logo.svg';
import './App.css';



function App() {
  return (
    // <div className="App">
      <div className="container">
        <header style={{marginTop:"40px"}}>
        <nav >
        <div className="con-a" style={{marginLeft:"40px", display:"flex"}}>
        <div className="con-fon">
          <a href="https://facebook.com"><li class="fa-brands fa-facebook-f"></li></a>
          <a href="https://Youtube.com"><li class="fa-brands fa-youtube"></li></a>
          <a href="https://message"><li className="fa-sharp fa-solid fa-envelope"></li></a>
          <a href="https://xyz.com"><li className="fa-solid fa-phone-flip"></li></a>

        </div>

        <div className="con-font"  style={{ marginLeft: "260px" }}>
          <img src="https://partycharactersforkids.com/wp-content/uploads/2023/04/logo-new.png" alt="Logo"/>
        </div>

        <div className="con-fontt"  style={{ marginLeft: "250px" }}>
          <ul style={{display:"flex", listStyle:"none"}}>
          <li>SEARCH</li>
          <li style={{marginLeft:"30px"}}>|</li>
          <li style={{marginLeft:"30px"}}>LOGIN</li> 
          <li style={{marginLeft:"30px"}}>|</li>
          <a href="shop.com" style={{marginLeft:"30px"}}><li class="far fa-bag-shopping"></li></a>
          </ul>

        </div>
        </div>
        </nav>
        </header>

        {/* 2nd part */}
      <div className="sec-p" style={{backgroundColor:"rgb(226, 228, 228)", height:"90px", marginTop:"60px", marginRight:"0px"}}>
        <header >
          <nav>
            <ul style={{display:"flex", marginLeft:"70px", }}>
              <li style={{marginLeft:"60px", marginTop:"30px"}}>Home</li>
              <li style={{marginLeft:"60px",marginTop:"30px"}}>About Us</li>
              <li style={{marginLeft:"60px", marginTop:"30px"}}>Characters</li>
              <li style={{marginLeft:"60px", marginTop:"30px"}}>Themes</li>
              <li style={{marginLeft:"60px", marginTop:"30px"}}>Testimonials</li>
              <li style={{marginLeft:"60px", marginTop:"30px"}}>Cities</li>
              <li style={{marginLeft:"60px", marginTop:"30px"}}>Blog</li>
              <li style={{marginLeft:"60px", marginTop:"30px"}}>Contact Us</li>
            </ul>
          </nav>
        </header>
      </div>

      {/* 3rd P */}
      <div className="th-p">
        <div className="thpt">
         
          <h2 style={{ color:"white", fontSize:"70px"}}>Party Characters for Kids</h2>
          <form className="d-flex" style={{width:"500px", height:"50px", marginTop:"50px"}}>
        <input className="form-control me-2" type="text" placeholder="Enter Your Event Address or Zip Code"/>
        <button className="btn btn-danger" type="button" >SEARCH</button>
      </form>
        </div>
      </div>

      {/* 4th part */}

      <div className="partFo">
        <i className="text-danger" style={{fontSize:"22px"}}>Choose a Category</i>
        <h1 style={{fontSize:"60px", marginTop:"20px", fontFamily:"cursive"}}>Shop By Category</h1>
      </div>
       
{/* 5th part */}
<div className="fivepa">
<div className="Fivep">
  <ul>
    <li>SUPERHEROES</li>
    <li>PRINCESSESS</li>
    <li>MASCOTS</li>
    <li>CLOWNS</li>
    <li>PIRATES</li>
    <li>STAR WARS</li>
    <li>NON MASCOTS</li>
    <li>HOLIDAYS</li>
  </ul>
</div>
</div>

{/* 6th part */}

<div className="sixa">
<div className="sixb" style={{marginTop:"100px", marginLeft:"50px"}}>
  <div className="sixc">
    <img src="https://partycharactersforkids.com/wp-content/uploads/2023/04/rent-a-superhero-for-a-birthday-party-captain-america-370x370.webp" alt="Logo"></img>
     <div style={{backgroundColor:"rgb(226, 228, 228)"}}>
      <h2 style={{textAlign:"center"}}>American Hero</h2>
      <h5 style={{textAlign:"center"}}>Superhero</h5>

     </div>
  </div>

  <div className="sixc">
    <img src="https://partycharactersforkids.com/wp-content/uploads/2023/04/batgirl-for-hire-11-370x370.png" alt="Logo"></img>
     <div style={{backgroundColor:"rgb(226, 228, 228)"}}>
      <h2 style={{textAlign:"center"}}>Batgirl</h2>
      <h5 style={{textAlign:"center"}}>Superhero</h5>
     </div>
  </div>

  <div className="sixc">
    <img src="https://partycharactersforkids.com/wp-content/uploads/2023/04/black-370x370.webp" alt="Logo"></img>
     <div style={{backgroundColor:"rgb(226, 228, 228)"}}>
      <h2 style={{textAlign:"center"}}>Black widow</h2>
      <h5 style={{textAlign:"center"}}>Superhero</h5>
     </div>
  </div>

  <div className="sixc">
    <img src="https://partycharactersforkids.com/wp-content/uploads/2023/04/rent-a-superhero-for-a-birthday-party-captain-america-1-1-370x370.webp" alt="Logo"></img>
     <div className="content-wrapper">
      <h2 style={{textAlign:"center"}}>Captain Marv</h2>
      <h5 style={{textAlign:"center"}}>Superhero</h5>
     </div>
  </div>

</div>

</div>
      

      {/* 7th part */}

      <div className="btnseven">
        <button>See All</button>
      </div>

      {/* 8th part */}
      <div className="big-gray" style={{backgroundColor:"rgb(226, 228, 228)", marginTop:"70px"}}>
      <div className="partFo">
        <i className="text-danger" style={{fontSize:"22px", marginTop:"100px"}}>best offers</i>
        <h1 style={{fontSize:"60px", marginTop:"20px", fontFamily:"cursive"}}>Featured Characters</h1>
      </div>

      <div className="fourpic" style={{marginTop:"50px", marginLeft:"40px"}}>
        <div className="fop" style={{width:"100px", height:"400px"}}>
        
          <img src="https://partycharactersforkids.com/wp-content/uploads/2023/04/grinch-costume-rental-370x370.webp" alt="Logo"></img>

          
        <div className="data" style={{backgroundColor:"white"}}>
          <h2>Grinch</h2>
          <h5>Holiday</h5>
        </div>
        </div>

        <div className="fop">
          <img src="https://partycharactersforkids.com/wp-content/uploads/2023/04/characters-for-birthday-parties-sonic-370x370.webp" alt="Logo"></img>
        <div className="data" style={{backgroundColor:"white"}}>
          <h2 style={{textAlign:"center"}}>Speedy Hedgehog</h2>
          <h5 style={{textAlign:"center"}}>Mascot</h5>
        </div>
        </div>

        <div className="fop">
          <img src="https://partycharactersforkids.com/wp-content/uploads/2023/04/rent-a-superhero-for-a-birthday-party-spiderman-5-370x370.webp" alt="Logo"></img>
        <div className="data" style={{backgroundColor:"white"}}>
          <h2 style={{textAlign:"center"}}>Spider Character</h2>
          <h5 style={{textAlign:"center"}}>Superhero</h5>
        </div>
        </div>

        <div className="fop" >
          <img src="https://partycharactersforkids.com/wp-content/uploads/2023/04/peppa-pig-character-hire-near-me-1-370x370.webp" alt="Logo"></img>
        <div className="data" style={{backgroundColor:"white"}}>
          <h2 style={{textAlign:"center"}}>Pink Pig</h2>
          <h5 style={{textAlign:"center"}}>Mascot</h5>
        </div>
        </div>

      </div>


      <div className="Purplec" style={{ backgroundColor:"rgb(101, 33, 165)", marginTop:"70px"}}>
          
            <div style={{ color:"white", marginTop: "40px", textAlign:"center" }}>
              <p style={{color:"red", fontSize:"28px"}}><i class="fa-solid fa-comment"></i>   <i class="fa-solid fa-comment"></i></p>
              <h4>What clients say</h4>
              <h1 style={{ marginTop: "40px" }}>Testimonials</h1>
            </div>
           

<div className="cc" style={{ display: "flex", justifyContent: "center", marginTop: "40px", marginLeft:"40px" }}>
<div className="container mt-3">
  <div className="card" style={{marginBottom:"90px" ,width:"300px", color:"white", height:"350px", backgroundColor:"rgb(117, 46, 183)"}}>
    <div className="card-body"><h4><i>We were so impressed with the quality of the 
    characters we rented. They looke and acted just like the real thing and our guests couldnt get 
    enough of them. It was definetly worth the investment.!</i></h4></div> 
    <div className="card-footer"><h2><i>Ellis Baker</i></h2></div>
  </div>
</div>
<div className="container mt-3">
  <div className="card" style={{ marginBottom:"90px", width:"300px", height:"350px", backgroundColor:"rgb(117, 46, 183)", color:"white"}}>
    <div className="card-body"><h4><i>My son had the best birthday ever, thanks to the awesome characters we rented!</i></h4></div> 
    <div className="card-footer"><h2><i>Allan Lawson</i></h2></div>
  </div>
</div>
<div class="container mt-3">
  <div className="card" style={{ marginBottom:"90px", width:"300px", height:"350px", backgroundColor:"rgb(117, 46, 183)", color:"white"}}>
    <div className="card-body"><h4><i>The characters we rented were a huge hit at my 
    daughters Party! They were so talented and engaging.   and they really
     made the party come to life !</i></h4></div> 
    <div className="card-footer"><h2><i>Paola Bond</i></h2></div>
  </div>
</div>

</div>


      </div>

      <div className="downpurple" style={{marginTop:"50px", display: "flex", justifyContent: "center"}}>
 <div className="lets" style={{textAlign:"center", marginBottom:"100px"}}>
  <h1>Let’s Stay Connected</h1>
  <h4 style={{marginTop:"40px"}}>Sign up today to our newsletter and receive 
  <span style={{ color: "red" }}>15% OFF</span> your first purchase, and <br></br>also get our sneak peeks, tips, 
  and exclusive offers.</h4>
  <form className="d-flex" style={{width:"600px", height:"50px", marginTop:"50px"}}>
        <input className="form-control me-2" type="text" placeholder="Your e-mail"/>
        <button className="btn btn-danger" type="button" >Subscribe</button>
     </form>

    

<div className="form-check mt-3" style={{marginRight:"200px"}}>
  <input  type="checkbox" id="agreeCheckbox" />
  <label  style={{marginLeft:"30px"}} className="form-check-label" htmlFor="agreeCheckbox">  <h4>I agree that my submitted data is being collected and stored</h4> 
  </label>
</div>

 </div>

</div>
      </div>

      <div className="white" style={{textAlign:"center", marginBottom:"70px"}}>
          <div className="ab" style={{marginTop:"50px"}}>
          <h1><i>Socialize With Us</i></h1>
          
          <div className="log" style={{ display: "flex", justifyContent: "center" }}>
          <div className="con-a" style={{display:"flex", marginTop:"50px"}}>
        <div className="con-fon">
          <a href="https://facebook.com"><li class="fa-brands fa-facebook-f"></li></a>
          <a href="https://Youtube"><li class="fa-brands fa-youtube"></li></a>
          <a href="https://abcd.com"><li className="fa-sharp fa-solid fa-envelope"></li></a>
          <a href="https://xyz.com"><li className="fa-solid fa-phone-flip"></li></a>

        </div>
        </div>
        </div>

          </div>
      </div>
      

      <div className="secgray" style={{ backgroundColor: "rgb(226, 228, 228)", marginTop: "50px", marginBottom: "70px" }}>
        <div className="abc" style={{marginTop:"50px", textAlign:"center"}}>
          <h1>Need Help?</h1>
          <h5 style={{padding:"30px"}}>*Let our expert party planners help with fantastic ideas to make 
            your event great. Talk to one of our expert planners at (866) 
            434-4101 or click the Chat button below and they'll help you get 
            your party started.</h5>
            <br></br>
            <h5>Not finding what you're looking for? Contact us to see if we 
              can accommodate your request!</h5>

              <button  style={{
    background: "red",
   
    color: "white",
    width: "200px",
    height: "50px",
    transition: "background 0.3s",
  }}
  onMouseOver={(e) => (e.target.style.background = "rgb(74, 22, 123)")}
  onMouseOut={(e) => (e.target.style.background = "red")}><b>Call Us 
<i className="fa-sharp fa-solid fa-chevron-right"></i>
</b></button>
  <div style={{height:"70px", backgroundColor:"rgb(226, 228, 228)"}}></div>
        </div>


{/* footer section */}
        <div className="footer" style={{backgroundColor:"rgb(101, 33, 165)", color:"white"}}>
      <footer>
        <div className="footer-column">
          <div className="oneda">
            <h4>Top Cities</h4>
            <div className="Fone">
            <ul style={{listStyle:"none", color:"pink"}}>
              <li>New York City</li>
              <li>Los Angelels</li>
              <li>Tampa</li>
              <li>Chikagi</li>
              <li>Houston</li>
              <li>Brooklyn</li>
              <li>San Diego</li>
              <li>Las Vegas</li>
              <li>San Francisco</li>
              <li>Seattle</li>
              <li>Atlanta</li>
            </ul>
            </div>


            <div className="Fone">
              <ul style={{listStyle:"none", color:"pink"}}>
                <li>Boston</li>
                <li>Philadelphia</li>
                <li>Miami</li>
                <li>Phonix</li>
                <li>San Antonio</li>
                <li>Dallas</li>
                <li>San Jose</li>
                <li>Austin</li>
                <li>Jacksonville</li>
                <li>All Cities</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="footer-column" >
        <div className="oneda" >
          <h4 style={{marginTop:"50px"}}>All Categories</h4>
          <ul style={{listStyle:"none", color:"pink"}}>
            <li>Superheros</li>
            <li>Mascots</li>
            <li>Princesses</li>
            <li>Star Wars</li>
            <li>Non Mascots</li>
            <li>Clowns</li>
            <li>Pirates</li>
            <li>Holidays</li>
          </ul>
        </div>
         </div>

         <div className="footer-column">
        <div className="oneda">
          <h4>Company</h4>
          <ul style={{listStyle:"none", color:"pink"}}>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>My Account</li>
            <li>Terms & Conditions</li>
            <li>All Characters</li>
            <li>Testimonials</li>
            <li>Blogs</li>
          </ul>
        </div>
        </div>

        <div className="footer-column">
        <div className="oneda">
          <h4>Here To Help</h4>
          <ul style={{listStyle:"none", color:"pink"}}>
            <li>Customer Care</li>
            <li>Media Enquires</li>
          </ul>
          {/* <button style={{}}>Ask  Us a Question</button> */}
          <button  style={{
    background: "red",
   
    color: "white",
    width: "200px",
    height: "50px",
    transition: "background 0.3s",
  }}
  onMouseOver={(e) => (e.target.style.background = "yellow")}
  onMouseOut={(e) => (e.target.style.background = "red")}><b> <i class="fa-solid fa-comment"></i>Ask  Us a Question</b></button>
        </div>
        </div>
        <div className="conp" style={{marginTop:"100px", marginBottom:"50px"}}>
          <h5>Party Characters for Kids <span style={{color:"pink"}}>© 1987 - 2024. All Rights Reserved.</span></h5>
        </div>
      </footer>

</div>

<div className="footerd" >
 <div style={{textAlign:"center", marginTop:"31px", padding:"20px", paddingBottomBottom:"0px"}}>
 <p>Party Characters for Kids is an autonomous organization that has no 
    connection to, affiliation with, or licensing from the Walt Disney Company,
     Warner Brothers, DC Comics, Lucas Arts, Marvel, Saban, Mattel, or SCG
      Power Rangers LLC. Certain characters may be trademarks of their 
      respective corporations.</p>
 </div>
</div>
      </div>

      </div >
    // </div>
  );
}

export default App;









