import React, {Component} from "react"

class Footer extends Component {
    constructor() {
        super()
        this.state = {

        }
        //this.handleChange = this.handleChange.bind(this)
    }
render() {
    return (
        <div id="footer">
        <h1>hello hayden</h1>
          <ul class="icons">
    				<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
    				<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
    				<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
    				<li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
    				<li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
    				<li><a href="#" class="icon brands fa-google-plus"><span class="label">Google+</span></a></li>
    			</ul>
    			<ul class="copyright">
    				<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
    			</ul>
          {/* <Header /> */}
          {/* <banner /> */}
          {/* <main /> */}
          {/* <cta /> */}
          {/* <footer /> */}
        </div>
      );
  }
}
export default Footer;
