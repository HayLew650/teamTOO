import React, {Component} from "react"
import axios from "axios"

class Banner extends Component {
    constructor() {
        super()
        this.state = {

        }
      }
      //
      <body>
    Metadata: <input type="file" value="metadata"><br>
    Content: <input type="file" value="contentdata"><br>
    <input type="button" onclick="upload()" value="Test">
<script type="text/javascript">


    upload = function() {



        var formData = new FormData();
        var metadataBlob = new Blob([$('input[type=file]')[0].files[0]],{type:"application/json"});
        var contentBlob = new Blob([$('input[type=file]')[1].files[0]],{type:"text/plain"});
        formData.append('data', metadataBlob, "metadata");
        formData.append('cid_63apple', contentBlob, "contentdata");

        $.ajax({
            url: "https://api.yuuvis.io/dms/objects",
            processData: false,
            contentType: false,
            cache: false,
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{9e5ef43b87034ff5a9a9cdaa58914638}");
            },
            type: "POST",

            data: formData
        })
        .done(function(data) {
            alert("success");
            console.log(data);
        })
        .fail(function() {
            alert("error");
        });
    };
</script>
</body>
//
      //  this.handleChange = this.handleChange.bind(this)
      componentDidMount() { //
         axios.get(`https://yuuvis.io/dms/objects`)
           .then(res => {
             const persons = res.data;
             this.setState({ persons });
           })
       }

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
