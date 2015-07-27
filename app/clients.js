import React from "react";

var clientData = [
  {
    img:"./app/img/springLogo.png",
    name:"Spring",
    tech:"Golang",
    link:"https://www.shopspring.com/",
    moreDetails:"https://au.linkedin.com/pub/zach-goldstein/5/89a/904"
  },
  {
    img:"./app/img/jiffyLogo.png",
    name:"JiffyShirts",
    tech:"Golang",
    link:"http://www.jiffyshirts.com/",
    moreDetails:"https://au.linkedin.com/pub/zach-goldstein/5/89a/904"
  },
  {
    img:"./app/img/astonClubLogo.png",
    name:"Aston Club",
    tech:"Nodejs",
    link:"http://astonclub.com.au/",
    moreDetails:"https://au.linkedin.com/pub/zach-goldstein/5/89a/904"
  },
  {
    img:"./app/img/eaLogo.png",
    name:"Electronic Arts",
    tech:"C#, Java",
    link:"http://www.ea.com/",
    moreDetails:"https://au.linkedin.com/pub/zach-goldstein/5/89a/904"
  },
  {
    img:"./app/img/blackberryLogo.png",
    name:"Blackberry",
    tech:"Actionscript",
    link:"http://us.blackberry.com/",
    moreDetails:"https://au.linkedin.com/pub/zach-goldstein/5/89a/904"
  },
  {
    img:"./app/img/betterPlaceLogo.png",
    name:"Better Place",
    tech:"iOS, Scala, Java",
    link:"https://en.wikipedia.org/wiki/Better_Place",
    moreDetails:"https://au.linkedin.com/pub/zach-goldstein/5/89a/904"
  },
  {
    img:"./app/img/fiLogo.png",
    name:"Fantasy Interactive",
    tech:"UX, Actionscript",
    link:"http://www.f-i.com/",
    moreDetails:"https://au.linkedin.com/pub/zach-goldstein/5/89a/904"
  },
  {
    img:"./app/img/RFLogo.png",
    name:"Sapphire Skies",
    tech:"Actionscript",
    link:"http://www.kongregate.com/games/zachgold/sapphire-skies",
    moreDetails:"https://au.linkedin.com/pub/zach-goldstein/5/89a/904"
  },
  {
    img:"./app/img/hitGrabLogo.png",
    name:"Hitgrab",
    tech:"Actionscript, PHP",
    link:"http://www.hitgrab.com/",
    moreDetails:"https://au.linkedin.com/pub/zach-goldstein/5/89a/904"
  }



];

var images = [
  require("./img/springLogo.png"),
  require("./img/jiffyLogo.png"),
  require("./img/astonClubLogo.png"),
  require("./img/eaLogo.png"),
  require("./img/blackberryLogo.png"),
  require("./img/betterPlaceLogo.png"),
  require("./img/fiLogo.png"),
  require("./img/RFLogo.png"),
  require("./img/hitGrabLogo.png")
];


export default React.createClass({
  getInitialState: function () {
    setTimeout(this.setFinishedInitialAnimations, 1000);
    return {hover: []};
  },

  setFinishedInitialAnimations: function() {
    var state = this.state;
    state.finishedAnimating = true;
    this.setState(state);
  },

  mouseOver: function (hoverItem) {
    if (!hoverItem.target.id) return;
    this.state.hover.push(hoverItem.target.id);
    // this.setState({hover: hoverItem.target.id});
    console.log("hoverItem in ",hoverItem.target.id);
    console.log("this.state.hover ", this.state.hover);
    this.forceUpdate();
  },

  mouseOut: function (hoverItem) {
    var self = this;
    if (!hoverItem.target.id) return;
    console.log("hoverItem out ",hoverItem.target.id);
    var newHover = this.state.hover;
    this.state.hover.forEach(function(hoveredItem, index){
      if (hoverItem.target.id == hoveredItem) {
        newHover.splice(index, 1);
      }
    })
    console.log("this.state.hover ", this.state.hover);
  },

  render: function() {

    var self = this;

    var numPerRow = 4;


    console.log("rendering");
    var cols = [];
    clientData.forEach(function(data, index){

      var style = {
        "opacity": 0,
        "animation-name": "animateIn",
        "animation-timing-function": "cubic-bezier(0,1.11,.65,.98)",
        "animation-iteration-count": 1,
        "animation-duration": "0.3s",
        "animation-fill-mode": "forwards",
        "animation-delay": index/20+"s"
      }

      var clientSection;
      if (self.state.finishedAnimating) {
        console.log("self.finishedAnimating!!!");
        clientSection = <div>
          <img src={data.img} />
          <div className="workItemDetails">
            <p>Client: {data.name}</p>
            <p>Tech: {data.tech}</p>
            <p><a href={data.link}>Link</a></p>
            <p><a href={data.moreDetails}>More Details</a></p>
          </div>
        </div>
      } else {
        clientSection = <div
          style={style}
          href="https://au.linkedin.com/pub/zach-goldstein/5/89a/904">
          <img src={data.img} />
          <div className="workItemDetails">
            <p>Client: {data.name}</p>
            <p>Tech: {data.tech}</p>
            <p><a href={data.link}>Link</a></p>
            <p><a href={data.moreDetails}>More Details</a></p>
          </div>
        </div>
      }

      cols.push(
        <div
          onMouseOver={self.mouseOver} onMouseOut={self.mouseOut}
          id={"workitem-"+index}
          className="workItem col-md-3">
          {clientSection}
        </div>
      );
    });

    var sortedCols = [];
    cols.forEach(function(col, index){
      if (index  % numPerRow == 0) {
        sortedCols.push([]);
      }
      sortedCols[sortedCols.length-1].push(col);
    })

    var rows = [];
    sortedCols.forEach(function(cols){
      rows.push (
        <div className="row-fluid">
          {cols}
        </div>
      )
    });

    return (
      <div>
        {rows}
      </div>
    );
  },
});
