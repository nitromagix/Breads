'use strict';

require("dotenv").config();
const express = require('express');
const {trace} = require('./helper');
const {stub} = require('./helper');

const app = express();