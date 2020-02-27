(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f8eef3f"],{1029:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{dense:"",align:"center"}},[a("v-col",{attrs:{cols:2}},[a("span",[t._v(t._s(t.name))])]),a("v-col",{attrs:{cols:10}},[a("v-range-slider",{staticClass:"align-center",attrs:{value:t.localValue,max:t.max,min:t.min,"hide-details":"",dark:"",color:"#4baf62",step:t.step},on:{input:t.handleInput},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"50px"},attrs:{dark:"",value:t.localValue[0],max:t.max,min:t.min,"hide-details":"","single-line":"",type:"number",step:t.step},on:{input:t.handleChange,focus:function(e){t.prependFocused=!0},blur:function(e){t.prependFocused=!1}}})]},proxy:!0},{key:"append",fn:function(){return[a("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"50px"},attrs:{dark:"",value:t.localValue[1],max:t.max,min:t.min,"hide-details":"","single-line":"",type:"number",step:t.step},on:{input:t.handleChange,focus:function(e){t.appendFocused=!0},blur:function(e){t.appendFocused=!1}}})]},proxy:!0}])})],1)],1)],1)},s=[],n={name:"RangeSlider",props:["name","min","max","value","step"],data(){return{prependFocused:!1,appendFocused:!1}},methods:{handleChange(t){let e=0;!1===this.prependFocused&&!0===this.appendFocused&&(e=1),(this.prependFocused||this.appendFocused)&&this.$set(this.localValue,e,t)},handleInput(t){this.prependFocused&&this.appendFocused||(this.localValue=t)}},computed:{localValue:{get(){return this.value},set(t){this.$emit("input",t)}}}},l=n,u=a("2877"),r=a("6544"),h=a.n(r),o=a("62ad"),c=(a("33e9"),a("9a18")),d=a("80d2"),p=c["a"].extend({name:"v-range-slider",props:{value:{type:Array,default:()=>[0,0]}},data(){return{activeThumb:null,lazyValue:this.value}},computed:{classes(){return{...c["a"].options.computed.classes.call(this),"v-input--range-slider":!0}},internalValue:{get(){return this.lazyValue},set(t){let e=t.map(t=>this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue)));if(e[0]>e[1]||e[1]<e[0]){if(null!==this.activeThumb){const t=1===this.activeThumb?0:1,e=this.$refs[`thumb_${t}`];e.focus()}e=[e[1],e[0]]}this.lazyValue=e,Object(d["i"])(e,this.value)||this.$emit("input",e),this.validate()}},inputWidth(){return this.internalValue.map(t=>(this.roundValue(t)-this.minValue)/(this.maxValue-this.minValue)*100)},trackFillStyles(){const t=c["a"].options.computed.trackFillStyles.call(this),e=Math.abs(this.inputWidth[0]-this.inputWidth[1]),a=this.vertical?"height":"width",i=this.vertical?this.$vuetify.rtl?"top":"bottom":this.$vuetify.rtl?"right":"left";return t[a]=`${e}%`,t[i]=`${this.inputWidth[0]}%`,t}},methods:{getTrackStyle(t,e,a=0,i=0){const s=this.vertical?this.$vuetify.rtl?"top":"bottom":this.$vuetify.rtl?"right":"left",n=this.vertical?"height":"width",l=`calc(${t}% + ${a}px)`,u=`calc(${e}% + ${i}px)`;return{transition:this.trackTransition,[s]:l,[n]:u}},getIndexOfClosestValue(t,e){return Math.abs(t[0]-e)<Math.abs(t[1]-e)?0:1},genInput(){return Object(d["g"])(2).map(t=>{const e=c["a"].options.methods.genInput.call(this);return e.data=e.data||{},e.data.attrs=e.data.attrs||{},e.data.attrs.value=this.internalValue[t],e})},genTrackContainer(){const t=[];if(this.disabled){const e=10,a=[[0,this.inputWidth[0],0,-e],[this.inputWidth[0],Math.abs(this.inputWidth[1]-this.inputWidth[0]),e,-2*e],[this.inputWidth[1],Math.abs(100-this.inputWidth[1]),e,0]];this.$vuetify.rtl&&a.reverse(),t.push(...a.map(t=>this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.getTrackStyle(...t)}))))}else t.push(this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.getTrackStyle(0,100)})),this.$createElement("div",this.setBackgroundColor(this.computedColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles})));return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genChildren(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),Object(d["g"])(2).map(t=>{const e=this.internalValue[t],a=e=>{this.isActive=!0,this.activeThumb=t,this.onThumbMouseDown(e)},i=e=>{this.isFocused=!0,this.activeThumb=t,this.$emit("focus",e)},s=t=>{this.isFocused=!1,this.activeThumb=null,this.$emit("blur",t)},n=this.inputWidth[t],l=this.isActive&&this.activeThumb===t,u=this.isFocused&&this.activeThumb===t;return this.genThumbContainer(e,n,l,u,a,i,s,`thumb_${t}`)})]},onSliderClick(t){if(!this.isActive){if(this.noClick)return void(this.noClick=!1);const{value:e,isInsideTrack:a}=this.parseMouseMove(t);if(a){this.activeThumb=this.getIndexOfClosestValue(this.internalValue,e);const t=`thumb_${this.activeThumb}`,a=this.$refs[t];a.focus()}this.setInternalValue(e),this.$emit("change",this.internalValue)}},onMouseMove(t){const{value:e,isInsideTrack:a}=this.parseMouseMove(t);a&&null===this.activeThumb&&(this.activeThumb=this.getIndexOfClosestValue(this.internalValue,e)),this.setInternalValue(e)},onKeyDown(t){if(null===this.activeThumb)return;const e=this.parseKeyDown(t,this.internalValue[this.activeThumb]);null!=e&&(this.setInternalValue(e),this.$emit("change",this.internalValue))},setInternalValue(t){this.internalValue=this.internalValue.map((e,a)=>a===this.activeThumb?t:Number(e))}}}),m=a("0fd9"),v=a("8654"),f=Object(u["a"])(l,i,s,!1,null,"312a6c2b",null);e["a"]=f.exports;h()(f,{VCol:o["a"],VRangeSlider:p,VRow:m["a"],VTextField:v["a"]})},"33e9":function(t,e,a){},"5c73":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CVrangeSlider",{attrs:{name:"Area",min:0,max:100,step:.1},on:{input:function(e){return t.handleData("area")}},model:{value:t.value.area,callback:function(e){t.$set(t.value,"area",e)},expression:"value.area"}}),a("CVrangeSlider",{attrs:{name:"Ratio (W/H)",min:0,max:100,step:.1},on:{input:function(e){return t.handleData("ratio")}},model:{value:t.value.ratio,callback:function(e){t.$set(t.value,"ratio",e)},expression:"value.ratio"}}),a("CVrangeSlider",{attrs:{name:"Extent",min:0,max:100},on:{input:function(e){return t.handleData("extent")}},model:{value:t.value.extent,callback:function(e){t.$set(t.value,"extent",e)},expression:"value.extent"}}),a("CVslider",{attrs:{name:"Speckle Rejection",min:0,max:100},on:{input:function(e){return t.handleData("speckle")}},model:{value:t.value.speckle,callback:function(e){t.$set(t.value,"speckle",e)},expression:"value.speckle"}}),a("CVselect",{attrs:{name:"Target Group",list:["Single","Dual"]},on:{input:function(e){return t.handleData("targetGroup")}},model:{value:t.value.targetGroup,callback:function(e){t.$set(t.value,"targetGroup",e)},expression:"value.targetGroup"}}),a("CVselect",{attrs:{name:"Target Intersection",list:["None","Up","Down","Left","Right"],disabled:t.isDisabled},on:{input:function(e){return t.handleData("targetIntersection")}},model:{value:t.value.targetIntersection,callback:function(e){t.$set(t.value,"targetIntersection",e)},expression:"value.targetIntersection"}})],1)},s=[],n=a("1029"),l=a("8384"),u=a("1447"),r={name:"Contours",props:["value"],components:{CVrangeSlider:n["a"],CVselect:l["a"],CVslider:u["a"]},methods:{handleData(t){this.handleInput(t,this.value[t]),this.$emit("update")}},data(){return{}},computed:{isDisabled(){return 0===this.value.targetGroup}}},h=r,o=a("2877"),c=Object(o["a"])(h,i,s,!1,null,"559b3ddb",null);e["default"]=c.exports},"9a18":function(t,e,a){"use strict";var i=a("ba0d");e["a"]=i["a"]}}]);
//# sourceMappingURL=chunk-6f8eef3f.5538449a.js.map