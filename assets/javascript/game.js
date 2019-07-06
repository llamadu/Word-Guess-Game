
body {
	font-family: 'Dekko', cursive;
	text-align: center;
	background: #EFEFEF; /*light gray*/
	color: #5f6268; /*dark gray */
}

h1 {
	font-size: 45px;
	font-weight: 900;
	text-transform: uppercase;
}

#icon {
	height: 100px;
	display: block;
	margin: -10px auto;
}

img {
	display: block;
	margin: 20px auto;
}

.used {
	border: #6B7A8F;
	background: #6B7A8F;
}

#container > div {
	color: #EFEFEF; /*light gray */
	border: 1px solid #; /*green*/
	background: #4ABDAC; /*green*/
	width: 45px;
	height: 45px;
	font-size: 14px;
	text-transform: uppercase;
	margin-right: 5px;
	display: inline-block;
	line-height: 45px;
}

button {
	color: #EFEFEF; /*light gray */
	border: 1px solid #3AA9D8; /*sky*/
	background: #3AA9D8; /*sky*/
	width: 45px;
	height: 45px;
	font-size: 14px;
	letter-spacing: 2.5px;
	text-transform: uppercase;
	margin-bottom: 5px;
  	-webkit-transform: perspective(1px) translateZ(0);
  	transform: perspective(1px) translateZ(0);
  	-webkit-transition-duration: 0.5s;
  	transition-duration: 0.5s;
  	-webkit-transition-property: transform;
	transition-property: transform;
}

button:hover {
	border: #6B7A8F;
	background: #6B7A8F;
	cursor: pointer;
	color: #EFEFEF; /*light gray*/
	text-transform: uppercase;
  	-webkit-transform: scale(1.1);
  	transform: scale(1.1);
}

button:focus {
	outline:0;
}


.play-again {
	margin-top: 20px;
	width: 190px;
	height: 45px;
	background: #4ABDAC; /*green*/
	border: 1px solid #4ABDAC; /*orange*/
}
