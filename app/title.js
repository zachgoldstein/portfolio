import React from "react";

var textDescriptors = [
  "Software Engineer",
  "Maker of things",
  "Doer of stuff",
  "Cool cat",
  "Software Enginerd",
  "Programmer",
  "Code Gypsy"
];

export default React.createClass({

  componentDidMount: function () {
    this.props.scrambleLength = 500;
    this.props.scrambleFrequency = 10;

    var currentState = this.state;

    currentState.pickText = setInterval(this.pickText, 2000);
    this.pickText();
  },

  startScrambler: function () {
    var currentState = this.state;
    currentState.currentRun = 1;

    currentState.textScrambler = setInterval(this.scrambleProgress, this.props.scrambleFrequency);

    currentState.scramblerTimeout = setTimeout(this.stopScrambler, this.props.scrambleLength);

  },

  pickText: function () {

    var currentState = this.state;

    currentState.currentDescriptor = textDescriptors[this.state.currentTextIndex % textDescriptors.length];

    currentState.currentTextIndex = this.state.currentTextIndex + 1;

    this.startScrambler();

    this.setState(currentState);
  },

  scrambleProgress: function () {
    var currentState = this.state;
    currentState.currentByLine = this.state.currentDescriptor;

    var numTotalRuns = this.props.scrambleLength/this.props.scrambleFrequency;

    currentState.progress = currentState.currentRun/ numTotalRuns;

    var textToScramble = this.state.currentDescriptor;
    var scrambledText = "";

    for (var i = 0, len = textToScramble.length; i < len; i++) {
      var char = textToScramble[i];
      var textPosition = i/textToScramble.length;

      if (this.state.progress < textPosition) {
        var letter = this.findScrambledCharacter();
        scrambledText += letter;
      } else {
        scrambledText += textToScramble[i];
      }
    }

    currentState.currentRun += 1;
    currentState.scrambledText = scrambledText;

    this.setState(currentState);

  },

  findScrambledCharacter: function () {
    var charArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return charArray[Math.floor(Math.random() * charArray.length)];
  },

  stopScrambler: function () {
    clearTimeout(this.state.textScrambler);
    clearInterval(this.state.scramblerTimeout);

    var currentState = this.state;
    currentState.scrambledText = this.state.currentDescriptor;
    this.setState(currentState);
  },

  getInitialState: function () {
    return {
      currentByLine: "",
      currentDescriptor: textDescriptors[0],
      currentTextIndex: 0
    }
  },

  render: function() {
    return (
      <div>
        <h1> ZACH GOLDSTEIN </h1>
        <h3> {this.state.scrambledText} </h3>
        <p> I love hearing about new projects</p>
      </div>
    );
  },
});
