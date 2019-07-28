import React, {Component} from "react"


class Banner extends Component {
    constructor() {
        super()
        this.state = {

        }
      }
      //  this.handleChange = this.handleChange.bind(this)

    render() {
        return (
          <div id="banner">
          <h1>this is banner</h1>
          <h2>Alpha</h2>
      					<p>Another fine responsive site template freebie by HTML5 UP.</p>
      					<ul class="actions special">
      						<button><a href="#" class="button primary">Upload file</a></button>
      						<button><a href="/products/product-1.html" class="button primary">Google Docs</a></button>
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

export default Banner;
