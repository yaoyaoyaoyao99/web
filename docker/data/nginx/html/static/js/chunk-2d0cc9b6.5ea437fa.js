(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc9b6"],{"4f3a":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"6px"}},[a("el-card",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],staticStyle:{"margin-bottom":"6px"}},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",staticStyle:{"margin-bottom":"-20px"},attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"告警名称",prop:"alertName"}},[a("el-input",{attrs:{placeholder:"请输入告警名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.alertName,callback:function(t){e.$set(e.queryParams,"alertName",t)},expression:"queryParams.alertName"}})],1),a("el-form-item",{attrs:{label:"告警级别",prop:"alertLevel"}},[a("el-select",{attrs:{placeholder:"请选择告警级别",clearable:"",size:"small"},model:{value:e.queryParams.alertLevel,callback:function(t){e.$set(e.queryParams,"alertLevel",t)},expression:"queryParams.alertLevel"}},e._l(e.dict.type.iot_alert_level,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"处理状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择处理状态",clearable:"",size:"small"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.dict.type.iot_process_status,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1)],1),a("el-card",{staticStyle:{"padding-bottom":"100px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.alertLogList,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{label:"告警名称",align:"center",prop:"alertName"}}),a("el-table-column",{attrs:{label:"设备编号",align:"center",prop:"serialNumber"}}),a("el-table-column",{attrs:{label:"设备名称",align:"center",prop:"deviceName"}}),a("el-table-column",{attrs:{label:"告警级别",align:"center",prop:"alertLevel",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.iot_alert_level,value:t.row.alertLevel}})]}}])}),a("el-table-column",{attrs:{label:"告警时间",align:"center",prop:"createTime",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createTime,"{y}-{m}-{d} {h}:{i}:{s}")))])]}}])}),a("el-table-column",{attrs:{label:"数据",align:"left","header-align":"center",prop:"detail"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{domProps:{innerHTML:e._s(e.formatDetail(t.row.detail))}})]}}])}),a("el-table-column",{attrs:{label:"处理状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.iot_process_status,value:t.row.status}})]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:alertLog:edit"],expression:"['iot:alertLog:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("处理")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"处理结果",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",rows:"8"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)],1)},r=[],n=a("5530"),o=(a("d81d"),a("b775"));function i(e){return Object(o["a"])({url:"/iot/alertLog/list",method:"get",params:e})}function s(e){return Object(o["a"])({url:"/iot/alertLog/"+e,method:"get"})}function u(e){return Object(o["a"])({url:"/iot/alertLog",method:"post",data:e})}function c(e){return Object(o["a"])({url:"/iot/alertLog",method:"put",data:e})}function m(e){return Object(o["a"])({url:"/iot/alertLog/"+e,method:"delete"})}var d={name:"AlertLog",dicts:["iot_alert_level","iot_process_status"],data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,alertLogList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,alertName:null,alertLevel:null,status:null,productId:null,productName:null,deviceId:null,deviceName:null},form:{},rules:{remark:[{required:!0,message:"处理内容不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,i(this.queryParams).then((function(t){e.alertLogList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={alertLogId:null,alertName:null,alertLevel:null,status:null,productId:null,productName:null,deviceId:null,deviceName:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.alertLogId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加设备告警"},handleUpdate:function(e){var t=this;this.reset();var a=e.alertLogId||this.ids;s(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改设备告警"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.alertLogId?c(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):u(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,a=e.alertLogId||this.ids;this.$modal.confirm('是否确认删除设备告警编号为"'+a+'"的数据项？').then((function(){return m(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("iot/alertLog/export",Object(n["a"])({},this.queryParams),"alertLog_".concat((new Date).getTime(),".xlsx"))},formatDetail:function(e){if(null!=e&&""!=e){var t=JSON.parse(e),a='id：<span style="color:#F56C6C">'+t.id+"</span><br />";return a=a+'value：<span style="color:#F56C6C">'+t.value+"</span><br />",a=a+'remark：<span style="color:#F56C6C">'+t.remark+"</span>",a}}}},p=d,f=a("2877"),h=Object(f["a"])(p,l,r,!1,null,null,null);t["default"]=h.exports}}]);