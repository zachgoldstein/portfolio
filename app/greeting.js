import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div className="greeting">
        <h1 id="tester">Hello, {this.props.name}!<small>you rock</small> </h1>

        <div class="row">
          <div class="col">1</div>
          <div class="col">2</div>
          <div class="col">3</div>
        </div>

      </div>
    );
  },
});
