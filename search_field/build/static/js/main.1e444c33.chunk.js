(this["webpackJsonpsearch-field"]=this["webpackJsonpsearch-field"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),s=a.n(c),i=a(13),r=a.n(i),l=(a(23),a(14)),o=a(15),h=a(17),u=a(16),d=(a(24),a(3)),m=a.n(d),j=a.p+"static/media/loader.488387b4.gif",g="";g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;var f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).handleInputChange=function(e){var t=e.target.value;t?c.setState({query:t,loading:!0,message:""},(function(){c.getSearchResults(t)})):c.setState({query:t,message:""})},c.getSearchResults=function(e){var t="".concat(g,"/search=").concat(e);c.cancel&&c.cancel.cancel(),c.cancel=m.a.CancelToken.source(),m.a.get(t,{cancelToken:c.cancel.token}).then((function(e){var t=e.data.length?"":"There are no more search results";c.setState({results:e.data,message:t,loading:!1})})).catch((function(e){(m.a.isCancel(e)||e)&&c.setState({loading:!1,message:"Failed to Get Data"})}))},c.renderSearchResults=function(){var e=c.state.results;if(Object.keys(e).length&&e.length)return Object(n.jsx)("div",{className:"results-container",children:e.map((function(e){return Object(n.jsx)("div",{className:"result-item",children:Object(n.jsxs)("h6",{className:"animal-name",children:[e.common_name," , ",e.scientific_name]})},e._id)}))})},c.state={query:"",results:{},loading:!1,mesage:""},c.cancel="",c}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="".concat(g,"/findAll");m.a.get(t).then((function(t){e.setState({results:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.query,a=e.loading,c=e.message;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h2",{className:"heading",children:"Live Search"}),Object(n.jsxs)("label",{className:"search-label w-100",htmlFor:"search-input",children:[Object(n.jsx)("input",{type:"text",value:t,id:"search-input",placeholder:"Search animals by common or scientific names...",onChange:this.handleInputChange}),Object(n.jsx)("i",{className:"fas fa-search search-icon"})]}),c&&Object(n.jsxs)("p",{className:"message",children:[" ",c," "]}),Object(n.jsx)("img",{src:j,className:"search-loading ".concat(a?"show":"hide"),alt:"loading"}),this.renderSearchResults()]})}}]),a}(c.Component);a(42);var O=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(f,{})})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.1e444c33.chunk.js.map