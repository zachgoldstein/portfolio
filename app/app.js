var bootstrapcss = require('./css/bootstrap.min.css');
var css = require('./css/style.css');

import React from "react";
import Title from "./title"
import Social from "./socialLinks"
import Clients from "./clients"

React.render(
  <Title />,
  document.getElementById('title')
);

React.render(
  <Social />,
  document.getElementById('socialLinks')
);

React.render(
  <Clients />,
  document.getElementById('clients')
);
