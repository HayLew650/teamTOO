import React, {Component} from "react"

class Cta extends Component {
    constructor() {
        super()
        this.state = {

        }
      //  this.handleChange = this.handleChange.bind(this)
    }
  render() {
      return (
        <div id="cta">
        <h1>this is the cta</h1>
        <h2>Sign up for beta access</h2>
    					<p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc.</p>

    					<form>
    						<div class="row gtr-50 gtr-uniform">
    							<div class="col-8 col-12-mobilep">
    								<input type="email" name="email" id="email" placeholder="Email Address" />
    							</div>
    							<div class="col-4 col-12-mobilep">
    								<input type="submit" value="Sign Up" class="fit" />
    							</div>
    						</div>
    					</form>
          {/* <Header /> */}
          {/* <banner /> */}
          {/* <main /> */}
          {/* <cta /> */}
          {/* <footer /> */}
        </div>
      );
  }
}
export default Cta;
