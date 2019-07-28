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
          <h2>liveWrite</h2>

      					<p>Another fine responsive site template freebie by HTML5 UP.</p>
                <ul class="actions special">
      						<li><a href="http://www.facebook.com" class="button primary">Upload File</a></li>
      						<li><a href="http://docs.google.com" class="button">Live Text Editor</a></li>
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
