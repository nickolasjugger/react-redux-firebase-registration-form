(this["webpackJsonpgithub-prod"]=this["webpackJsonpgithub-prod"]||[]).push([[0],{208:function(e,a,t){e.exports=t(398)},213:function(e,a,t){},398:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(83),i=t.n(o),l=(t(213),t(35)),s=t(36),u=t(39),c=t(38),m=t(37),p=function(e){return{type:"REGISTRATION_SET_USERNAME_IS_UNIQUE",payload:e}},d=t(25),E=t(52),v=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).validateField=function(e){var a=e.target.id,t=e.target.value;switch(a){case"email":n.setState({emailError:!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(t)});break;case"phone":n.setState({phoneError:!/^[\d]+$/.test(t)});break;case"password":case"rePassword":n.setState({rePasswordError:!(n.state.user.password===n.state.rePassword)})}},n.hideErrorMessage=function(e){switch(e.target.id){case"email":n.setState({emailError:!1});break;case"phone":n.setState({phoneError:!1});break;case"rePassword":n.setState({rePasswordError:!1})}},n.handleSubmit=function(e){e.preventDefault();var a=n.state.user,t=a.username,r=a.email,o=a.phone,i=a.password,l=n.state,s=l.rePassword,u=l.emailError,c=l.phoneError,m=l.rePasswordError,p=n.props.sendUserData;n.setState({submitted:!0}),t&&r&&o&&i&&s&&!u&&!c&&!m&&p(n.state.user)},n.handleInputChange=function(e){var a=e.target.id,t=e.target.value,r=n.state.user,o=n.props,i=o.usernameIsUnique,l=o.setUsernameIsUnique;"username"==a&&!1===i&&l(null),"rePassword"==a?n.setState(Object(E.a)({},a,t)):n.setState({user:Object(d.a)({},r,Object(E.a)({},a,t))})},n.state={user:{username:"",email:"",country:"",phone:"",password:""},rePassword:"",emailError:!1,phoneError:!1,rePasswordError:!1,submitted:!1},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.usernameIsUnique,t=e.submitDisabled;return r.a.createElement("div",{className:"registration"},r.a.createElement("h2",null,"Registration Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"registration-field-container"},r.a.createElement("label",{htmlFor:"username"},"Username ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{className:"registration-field ".concat(!1===a||this.state.submitted&&!this.state.user.username?"field-error":null),type:"text",id:"username",value:this.state.user.username,maxLength:"20",onChange:this.handleInputChange}),!1===a?r.a.createElement("span",{className:"message-error"},"Username is already taken."):null,this.state.submitted&&!this.state.user.username&&r.a.createElement("span",{className:"message-error"},"Username is required.")),r.a.createElement("div",{className:"registration-field-container"},r.a.createElement("label",{htmlFor:"email"},"Email ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{className:"registration-field ".concat(this.state.emailError||this.state.submitted&&!this.state.user.email?"field-error":null),type:"text",id:"email",value:this.state.user.email,maxLength:"50",onChange:this.handleInputChange,onBlur:this.state.user.email?this.validateField:null,onFocus:this.state.emailError?this.hideErrorMessage:null}),this.state.emailError&&r.a.createElement("span",{className:"message-error"},'Please enter a valid email address. For example, "ivan@gmail.com".'),this.state.submitted&&!this.state.user.email&&r.a.createElement("span",{className:"message-error"},"Email is required.")),r.a.createElement("div",{className:"registration-field-container"},r.a.createElement("label",{htmlFor:"country"},"Country"),r.a.createElement("select",{className:"registration-field",id:"country",value:this.state.user.country,onChange:this.handleInputChange},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"Afghanistan"},"Afghanistan"),r.a.createElement("option",{value:"\xc5land Islands"},"\xc5land Islands"),r.a.createElement("option",{value:"Albania"},"Albania"),r.a.createElement("option",{value:"Algeria"},"Algeria"),r.a.createElement("option",{value:"American Samoa"},"American Samoa"),r.a.createElement("option",{value:"Andorra"},"Andorra"),r.a.createElement("option",{value:"Angola"},"Angola"),r.a.createElement("option",{value:"Anguilla"},"Anguilla"),r.a.createElement("option",{value:"Antarctica"},"Antarctica"),r.a.createElement("option",{value:"Antigua and Barbuda"},"Antigua and Barbuda"),r.a.createElement("option",{value:"Argentina"},"Argentina"),r.a.createElement("option",{value:"Armenia"},"Armenia"),r.a.createElement("option",{value:"Aruba"},"Aruba"),r.a.createElement("option",{value:"Australia"},"Australia"),r.a.createElement("option",{value:"Austria"},"Austria"),r.a.createElement("option",{value:"Azerbaijan"},"Azerbaijan"),r.a.createElement("option",{value:"Bahamas"},"Bahamas"),r.a.createElement("option",{value:"Bahrain"},"Bahrain"),r.a.createElement("option",{value:"Bangladesh"},"Bangladesh"),r.a.createElement("option",{value:"Barbados"},"Barbados"),r.a.createElement("option",{value:"Belarus"},"Belarus"),r.a.createElement("option",{value:"Belgium"},"Belgium"),r.a.createElement("option",{value:"Belize"},"Belize"),r.a.createElement("option",{value:"Benin"},"Benin"),r.a.createElement("option",{value:"Bermuda"},"Bermuda"),r.a.createElement("option",{value:"Bhutan"},"Bhutan"),r.a.createElement("option",{value:"Bolivia"},"Bolivia"),r.a.createElement("option",{value:"Bosnia and Herzegovina"},"Bosnia and Herzegovina"),r.a.createElement("option",{value:"Botswana"},"Botswana"),r.a.createElement("option",{value:"Bouvet Island"},"Bouvet Island"),r.a.createElement("option",{value:"Brazil"},"Brazil"),r.a.createElement("option",{value:"British Indian Ocean Territory"},"British Indian Ocean Territory"),r.a.createElement("option",{value:"Brunei Darussalam"},"Brunei Darussalam"),r.a.createElement("option",{value:"Bulgaria"},"Bulgaria"),r.a.createElement("option",{value:"Burkina Faso"},"Burkina Faso"),r.a.createElement("option",{value:"Burundi"},"Burundi"),r.a.createElement("option",{value:"Cambodia"},"Cambodia"),r.a.createElement("option",{value:"Cameroon"},"Cameroon"),r.a.createElement("option",{value:"Canada"},"Canada"),r.a.createElement("option",{value:"Cape Verde"},"Cape Verde"),r.a.createElement("option",{value:"Cayman Islands"},"Cayman Islands"),r.a.createElement("option",{value:"Central African Republic"},"Central African Republic"),r.a.createElement("option",{value:"Chad"},"Chad"),r.a.createElement("option",{value:"Chile"},"Chile"),r.a.createElement("option",{value:"China"},"China"),r.a.createElement("option",{value:"Christmas Island"},"Christmas Island"),r.a.createElement("option",{value:"Cocos (Keeling) Islands"},"Cocos (Keeling) Islands"),r.a.createElement("option",{value:"Colombia"},"Colombia"),r.a.createElement("option",{value:"Comoros"},"Comoros"),r.a.createElement("option",{value:"Congo"},"Congo"),r.a.createElement("option",{value:"Congo, The Democratic Republic of The"},"Congo, The Democratic Republic of The"),r.a.createElement("option",{value:"Cook Islands"},"Cook Islands"),r.a.createElement("option",{value:"Costa Rica"},"Costa Rica"),r.a.createElement("option",{value:"Cote D'ivoire"},"Cote D'ivoire"),r.a.createElement("option",{value:"Croatia"},"Croatia"),r.a.createElement("option",{value:"Cuba"},"Cuba"),r.a.createElement("option",{value:"Cyprus"},"Cyprus"),r.a.createElement("option",{value:"Czech Republic"},"Czech Republic"),r.a.createElement("option",{value:"Denmark"},"Denmark"),r.a.createElement("option",{value:"Djibouti"},"Djibouti"),r.a.createElement("option",{value:"Dominica"},"Dominica"),r.a.createElement("option",{value:"Dominican Republic"},"Dominican Republic"),r.a.createElement("option",{value:"Ecuador"},"Ecuador"),r.a.createElement("option",{value:"Egypt"},"Egypt"),r.a.createElement("option",{value:"El Salvador"},"El Salvador"),r.a.createElement("option",{value:"Equatorial Guinea"},"Equatorial Guinea"),r.a.createElement("option",{value:"Eritrea"},"Eritrea"),r.a.createElement("option",{value:"Estonia"},"Estonia"),r.a.createElement("option",{value:"Ethiopia"},"Ethiopia"),r.a.createElement("option",{value:"Falkland Islands (Malvinas)"},"Falkland Islands (Malvinas)"),r.a.createElement("option",{value:"Faroe Islands"},"Faroe Islands"),r.a.createElement("option",{value:"Fiji"},"Fiji"),r.a.createElement("option",{value:"Finland"},"Finland"),r.a.createElement("option",{value:"France"},"France"),r.a.createElement("option",{value:"French Guiana"},"French Guiana"),r.a.createElement("option",{value:"French Polynesia"},"French Polynesia"),r.a.createElement("option",{value:"French Southern Territories"},"French Southern Territories"),r.a.createElement("option",{value:"Gabon"},"Gabon"),r.a.createElement("option",{value:"Gambia"},"Gambia"),r.a.createElement("option",{value:"Georgia"},"Georgia"),r.a.createElement("option",{value:"Germany"},"Germany"),r.a.createElement("option",{value:"Ghana"},"Ghana"),r.a.createElement("option",{value:"Gibraltar"},"Gibraltar"),r.a.createElement("option",{value:"Greece"},"Greece"),r.a.createElement("option",{value:"Greenland"},"Greenland"),r.a.createElement("option",{value:"Grenada"},"Grenada"),r.a.createElement("option",{value:"Guadeloupe"},"Guadeloupe"),r.a.createElement("option",{value:"Guam"},"Guam"),r.a.createElement("option",{value:"Guatemala"},"Guatemala"),r.a.createElement("option",{value:"Guernsey"},"Guernsey"),r.a.createElement("option",{value:"Guinea"},"Guinea"),r.a.createElement("option",{value:"Guinea-bissau"},"Guinea-bissau"),r.a.createElement("option",{value:"Guyana"},"Guyana"),r.a.createElement("option",{value:"Haiti"},"Haiti"),r.a.createElement("option",{value:"Heard Island and Mcdonald Islands"},"Heard Island and Mcdonald Islands"),r.a.createElement("option",{value:"Holy See (Vatican City State)"},"Holy See (Vatican City State)"),r.a.createElement("option",{value:"Honduras"},"Honduras"),r.a.createElement("option",{value:"Hong Kong"},"Hong Kong"),r.a.createElement("option",{value:"Hungary"},"Hungary"),r.a.createElement("option",{value:"Iceland"},"Iceland"),r.a.createElement("option",{value:"India"},"India"),r.a.createElement("option",{value:"Indonesia"},"Indonesia"),r.a.createElement("option",{value:"Iran, Islamic Republic of"},"Iran, Islamic Republic of"),r.a.createElement("option",{value:"Iraq"},"Iraq"),r.a.createElement("option",{value:"Ireland"},"Ireland"),r.a.createElement("option",{value:"Isle of Man"},"Isle of Man"),r.a.createElement("option",{value:"Israel"},"Israel"),r.a.createElement("option",{value:"Italy"},"Italy"),r.a.createElement("option",{value:"Jamaica"},"Jamaica"),r.a.createElement("option",{value:"Japan"},"Japan"),r.a.createElement("option",{value:"Jersey"},"Jersey"),r.a.createElement("option",{value:"Jordan"},"Jordan"),r.a.createElement("option",{value:"Kazakhstan"},"Kazakhstan"),r.a.createElement("option",{value:"Kenya"},"Kenya"),r.a.createElement("option",{value:"Kiribati"},"Kiribati"),r.a.createElement("option",{value:"Korea, Democratic People's Republic of"},"Korea, Democratic People's Republic of"),r.a.createElement("option",{value:"Korea, Republic of"},"Korea, Republic of"),r.a.createElement("option",{value:"Kuwait"},"Kuwait"),r.a.createElement("option",{value:"Kyrgyzstan"},"Kyrgyzstan"),r.a.createElement("option",{value:"Lao People's Democratic Republic"},"Lao People's Democratic Republic"),r.a.createElement("option",{value:"Latvia"},"Latvia"),r.a.createElement("option",{value:"Lebanon"},"Lebanon"),r.a.createElement("option",{value:"Lesotho"},"Lesotho"),r.a.createElement("option",{value:"Liberia"},"Liberia"),r.a.createElement("option",{value:"Libyan Arab Jamahiriya"},"Libyan Arab Jamahiriya"),r.a.createElement("option",{value:"Liechtenstein"},"Liechtenstein"),r.a.createElement("option",{value:"Lithuania"},"Lithuania"),r.a.createElement("option",{value:"Luxembourg"},"Luxembourg"),r.a.createElement("option",{value:"Macao"},"Macao"),r.a.createElement("option",{value:"Macedonia, The Former Yugoslav Republic of"},"Macedonia, The Former Yugoslav Republic of"),r.a.createElement("option",{value:"Madagascar"},"Madagascar"),r.a.createElement("option",{value:"Malawi"},"Malawi"),r.a.createElement("option",{value:"Malaysia"},"Malaysia"),r.a.createElement("option",{value:"Maldives"},"Maldives"),r.a.createElement("option",{value:"Mali"},"Mali"),r.a.createElement("option",{value:"Malta"},"Malta"),r.a.createElement("option",{value:"Marshall Islands"},"Marshall Islands"),r.a.createElement("option",{value:"Martinique"},"Martinique"),r.a.createElement("option",{value:"Mauritania"},"Mauritania"),r.a.createElement("option",{value:"Mauritius"},"Mauritius"),r.a.createElement("option",{value:"Mayotte"},"Mayotte"),r.a.createElement("option",{value:"Mexico"},"Mexico"),r.a.createElement("option",{value:"Micronesia, Federated States of"},"Micronesia, Federated States of"),r.a.createElement("option",{value:"Moldova, Republic of"},"Moldova, Republic of"),r.a.createElement("option",{value:"Monaco"},"Monaco"),r.a.createElement("option",{value:"Mongolia"},"Mongolia"),r.a.createElement("option",{value:"Montenegro"},"Montenegro"),r.a.createElement("option",{value:"Montserrat"},"Montserrat"),r.a.createElement("option",{value:"Morocco"},"Morocco"),r.a.createElement("option",{value:"Mozambique"},"Mozambique"),r.a.createElement("option",{value:"Myanmar"},"Myanmar"),r.a.createElement("option",{value:"Namibia"},"Namibia"),r.a.createElement("option",{value:"Nauru"},"Nauru"),r.a.createElement("option",{value:"Nepal"},"Nepal"),r.a.createElement("option",{value:"Netherlands"},"Netherlands"),r.a.createElement("option",{value:"Netherlands Antilles"},"Netherlands Antilles"),r.a.createElement("option",{value:"New Caledonia"},"New Caledonia"),r.a.createElement("option",{value:"New Zealand"},"New Zealand"),r.a.createElement("option",{value:"Nicaragua"},"Nicaragua"),r.a.createElement("option",{value:"Niger"},"Niger"),r.a.createElement("option",{value:"Nigeria"},"Nigeria"),r.a.createElement("option",{value:"Niue"},"Niue"),r.a.createElement("option",{value:"Norfolk Island"},"Norfolk Island"),r.a.createElement("option",{value:"Northern Mariana Islands"},"Northern Mariana Islands"),r.a.createElement("option",{value:"Norway"},"Norway"),r.a.createElement("option",{value:"Oman"},"Oman"),r.a.createElement("option",{value:"Pakistan"},"Pakistan"),r.a.createElement("option",{value:"Palau"},"Palau"),r.a.createElement("option",{value:"Palestinian Territory, Occupied"},"Palestinian Territory, Occupied"),r.a.createElement("option",{value:"Panama"},"Panama"),r.a.createElement("option",{value:"Papua New Guinea"},"Papua New Guinea"),r.a.createElement("option",{value:"Paraguay"},"Paraguay"),r.a.createElement("option",{value:"Peru"},"Peru"),r.a.createElement("option",{value:"Philippines"},"Philippines"),r.a.createElement("option",{value:"Pitcairn"},"Pitcairn"),r.a.createElement("option",{value:"Poland"},"Poland"),r.a.createElement("option",{value:"Portugal"},"Portugal"),r.a.createElement("option",{value:"Puerto Rico"},"Puerto Rico"),r.a.createElement("option",{value:"Qatar"},"Qatar"),r.a.createElement("option",{value:"Reunion"},"Reunion"),r.a.createElement("option",{value:"Romania"},"Romania"),r.a.createElement("option",{value:"Russian Federation"},"Russian Federation"),r.a.createElement("option",{value:"Rwanda"},"Rwanda"),r.a.createElement("option",{value:"Saint Helena"},"Saint Helena"),r.a.createElement("option",{value:"Saint Kitts and Nevis"},"Saint Kitts and Nevis"),r.a.createElement("option",{value:"Saint Lucia"},"Saint Lucia"),r.a.createElement("option",{value:"Saint Pierre and Miquelon"},"Saint Pierre and Miquelon"),r.a.createElement("option",{value:"Saint Vincent and The Grenadines"},"Saint Vincent and The Grenadines"),r.a.createElement("option",{value:"Samoa"},"Samoa"),r.a.createElement("option",{value:"San Marino"},"San Marino"),r.a.createElement("option",{value:"Sao Tome and Principe"},"Sao Tome and Principe"),r.a.createElement("option",{value:"Saudi Arabia"},"Saudi Arabia"),r.a.createElement("option",{value:"Senegal"},"Senegal"),r.a.createElement("option",{value:"Serbia"},"Serbia"),r.a.createElement("option",{value:"Seychelles"},"Seychelles"),r.a.createElement("option",{value:"Sierra Leone"},"Sierra Leone"),r.a.createElement("option",{value:"Singapore"},"Singapore"),r.a.createElement("option",{value:"Slovakia"},"Slovakia"),r.a.createElement("option",{value:"Slovenia"},"Slovenia"),r.a.createElement("option",{value:"Solomon Islands"},"Solomon Islands"),r.a.createElement("option",{value:"Somalia"},"Somalia"),r.a.createElement("option",{value:"South Africa"},"South Africa"),r.a.createElement("option",{value:"South Georgia and The South Sandwich Islands"},"South Georgia and The South Sandwich Islands"),r.a.createElement("option",{value:"Spain"},"Spain"),r.a.createElement("option",{value:"Sri Lanka"},"Sri Lanka"),r.a.createElement("option",{value:"Sudan"},"Sudan"),r.a.createElement("option",{value:"Suriname"},"Suriname"),r.a.createElement("option",{value:"Svalbard and Jan Mayen"},"Svalbard and Jan Mayen"),r.a.createElement("option",{value:"Swaziland"},"Swaziland"),r.a.createElement("option",{value:"Sweden"},"Sweden"),r.a.createElement("option",{value:"Switzerland"},"Switzerland"),r.a.createElement("option",{value:"Syrian Arab Republic"},"Syrian Arab Republic"),r.a.createElement("option",{value:"Taiwan, Province of China"},"Taiwan, Province of China"),r.a.createElement("option",{value:"Tajikistan"},"Tajikistan"),r.a.createElement("option",{value:"Tanzania, United Republic of"},"Tanzania, United Republic of"),r.a.createElement("option",{value:"Thailand"},"Thailand"),r.a.createElement("option",{value:"Timor-leste"},"Timor-leste"),r.a.createElement("option",{value:"Togo"},"Togo"),r.a.createElement("option",{value:"Tokelau"},"Tokelau"),r.a.createElement("option",{value:"Tonga"},"Tonga"),r.a.createElement("option",{value:"Trinidad and Tobago"},"Trinidad and Tobago"),r.a.createElement("option",{value:"Tunisia"},"Tunisia"),r.a.createElement("option",{value:"Turkey"},"Turkey"),r.a.createElement("option",{value:"Turkmenistan"},"Turkmenistan"),r.a.createElement("option",{value:"Turks and Caicos Islands"},"Turks and Caicos Islands"),r.a.createElement("option",{value:"Tuvalu"},"Tuvalu"),r.a.createElement("option",{value:"Uganda"},"Uganda"),r.a.createElement("option",{value:"Ukraine"},"Ukraine"),r.a.createElement("option",{value:"United Arab Emirates"},"United Arab Emirates"),r.a.createElement("option",{value:"United Kingdom"},"United Kingdom"),r.a.createElement("option",{value:"United States"},"United States"),r.a.createElement("option",{value:"United States Minor Outlying Islands"},"United States Minor Outlying Islands"),r.a.createElement("option",{value:"Uruguay"},"Uruguay"),r.a.createElement("option",{value:"Uzbekistan"},"Uzbekistan"),r.a.createElement("option",{value:"Vanuatu"},"Vanuatu"),r.a.createElement("option",{value:"Venezuela"},"Venezuela"),r.a.createElement("option",{value:"Viet Nam"},"Viet Nam"),r.a.createElement("option",{value:"Virgin Islands, British"},"Virgin Islands, British"),r.a.createElement("option",{value:"Virgin Islands, U.S."},"Virgin Islands, U.S."),r.a.createElement("option",{value:"Wallis and Futuna"},"Wallis and Futuna"),r.a.createElement("option",{value:"Western Sahara"},"Western Sahara"),r.a.createElement("option",{value:"Yemen"},"Yemen"),r.a.createElement("option",{value:"Zambia"},"Zambia"),r.a.createElement("option",{value:"Zimbabwe"},"Zimbabwe"))),r.a.createElement("div",{className:"registration-field-container"},r.a.createElement("label",{htmlFor:"phone"},"Phone ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{className:"registration-field ".concat(this.state.phoneError||this.state.submitted&&!this.state.user.phone?"field-error":null),type:"text",id:"phone",value:this.state.user.phone,maxLength:"14",onChange:this.handleInputChange,onBlur:this.state.user.phone?this.validateField:null,onFocus:this.state.phoneError?this.hideErrorMessage:null}),this.state.phoneError&&r.a.createElement("span",{className:"message-error"},'Please enter a phone number in digits. For example, "89129998877".'),this.state.submitted&&!this.state.user.phone&&r.a.createElement("span",{className:"message-error"},"Phone is required.")),r.a.createElement("div",{className:"registration-field-container"},r.a.createElement("label",{htmlFor:"password"},"Password ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{className:"registration-field ".concat(this.state.submitted&&!this.state.user.password?"field-error":null),type:"password",id:"password",value:this.state.user.password,onChange:this.handleInputChange,onBlur:this.state.rePassword?this.validateField:null}),this.state.submitted&&!this.state.user.password&&r.a.createElement("span",{className:"message-error"},"Password is required.")),r.a.createElement("div",{className:"registration-field-container"},r.a.createElement("label",{htmlFor:"rePassword"},"Confirm password ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{className:"registration-field ".concat(this.state.rePasswordError||this.state.submitted&&!this.state.rePassword?"field-error":null),type:"password",id:"rePassword",value:this.state.rePassword,onChange:this.handleInputChange,onBlur:this.state.rePassword?this.validateField:null,onFocus:this.state.rePasswordError?this.hideErrorMessage:null}),this.state.rePasswordError&&r.a.createElement("span",{className:"message-error"},'"Confirm password" and "Password" do not match.'),this.state.submitted&&!this.state.rePassword&&r.a.createElement("span",{className:"message-error"},"Confirm password is required.")),r.a.createElement("div",null,r.a.createElement("button",{className:t?"button-disabled":"button-enabled",disabled:t},"Create accounts"))))}}]),t}(r.a.Component),h=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(v,{usernameIsUnique:this.props.usernameIsUnique,submitDisabled:this.props.submitDisabled,sendUserData:this.props.sendUserData,setUsernameIsUnique:this.props.setUsernameIsUnique})}}]),t}(r.a.Component),b={sendUserData:function(e){return{type:"REGISTRATION_SEND_USER_DATA",payload:e}},setUsernameIsUnique:p},g=Object(m.b)((function(e){return{usernameIsUnique:e.registration.usernameIsUnique,submitDisabled:e.registration.submitDisabled}}),b)(h),S=function(e){Object(u.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.usernameIsUnique,t=e.username;return r.a.createElement("div",{className:"container"},!0===a?r.a.createElement("h2",null,t):r.a.createElement(g,null))}}]),t}(r.a.Component),I=Object(m.b)((function(e){return{username:e.registration.user.username,usernameIsUnique:e.registration.usernameIsUnique}}))(S),f=t(15),y={user:{username:null,email:null,country:null,phone:null,password:null},usernameIsUnique:null,submitDisabled:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"REGISTRATION_SET_USERNAME_IS_UNIQUE":return Object(d.a)({},e,{usernameIsUnique:a.payload,submitDisabled:!1});case"REGISTRATION_SEND_USER_DATA":return Object(d.a)({},e,{user:a.payload,submitDisabled:!0});default:return e}},N=Object(f.c)({registration:w}),C=t(207),M=t(54),P=t.n(M),T=t(26),x=t(53),A=P.a.mark(O),U=P.a.mark(k),R=function(e){return e.registration},B=function(e){return Object(x.getFirestore)().collection("users").where("username","==",e.body.user.username).get().then((function(e){return e.docs.length}))},F=function(e){return Object(x.getFirestore)().collection("users").add(Object(d.a)({},e.body.user)).then((function(e){return e}))};function O(){var e;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(T.c)(R);case 2:return e=a.sent,a.next=5,Object(T.a)(B,{body:e});case 5:if(0!==a.sent){a.next=13;break}return a.next=9,Object(T.a)(F,{body:e});case 9:return a.next=11,Object(T.b)(p(!0));case 11:a.next=15;break;case 13:return a.next=15,Object(T.b)(p(!1));case 15:case"end":return a.stop()}}),A)}function k(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)("REGISTRATION_SEND_USER_DATA",O);case 2:case"end":return e.stop()}}),U)}var G=t(206),j=t(130),D=t.n(j);t(395);D.a.initializeApp({apiKey:"AIzaSyB-MDlZcUQqFXsHalcbpBMKE4hMZrNh4UE",authDomain:"react-redux-registration-2b5ea.firebaseapp.com",databaseURL:"https://react-redux-registration-2b5ea.firebaseio.com",projectId:"react-redux-registration-2b5ea",storageBucket:"react-redux-registration-2b5ea.appspot.com",messagingSenderId:"793157359295",appId:"1:793157359295:web:875d940d417af9d128980a"});var z=D.a,q=Object(C.a)(),L=Object(f.e)(N,Object(f.d)(Object(f.a)(q),Object(x.reduxFirestore)(z),Object(G.reactReduxFirebase)(z)));q.run(k),i.a.render(r.a.createElement(m.a,{store:L},r.a.createElement(I,null)),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.2822e64d.chunk.js.map