(self.webpackChunk=self.webpackChunk||[]).push([[773],{220:(e,t,i)=>{window.$=window.jQuery=i(755),i(2),i(728),i(251),i(613),i(642),i(679),i(276),i(20),window.components={login_sanitiser:i(768),profile_editor:i(812)}},768:module=>{module.exports=function(config){var regex_test=eval(config.new),regex_filter=eval(config.filter);return{test:function(e){return regex_test.test(e)&&e.length>=config.length.min&&e.length<=config.length.max},sanitise:function(e){return e.toLowerCase().replace(regex_filter,"")}}}},812:(e,t,i)=>{e.exports=function(e){if($("#suggested_login_text").length){var t=$("#suggested_login_msg");t.find("span").text($("#suggested_login_text").text()),t.find("a").click((function(){$("#login").val($("#suggested_login_text").find("strong").text()),t.remove()})),t.show()}var n={submit_available:!0,setSubmitAvailable:function(e){this.submit_available=e,this.el.find("[type=submit]").prop("disabled",!this.submit_available)},onSubmit:function(e){this.submit_available?$(document.body).append($('<div class="overlay-spinner">')):e.preventDefault()},init:function(){this.el=$("form#profile")}};n.init();var a=i(768)(e.login_validator);function r(){var e=$("#login").val();e=a.sanitise(e),$("#login").val(e)}$("#login").on("keyup",r),$("#login").on("mouseup",r),$("#login").on("change",(function(e){$("#login_change_limitations").show(),s()})),$("#picture").on("change",(function(e){var t=parseFloat($(this).attr("max_file_size"))||0;if(t){var i=!0;if(e.currentTarget.files.length)(e.currentTarget.files[0].size/1048576).toFixed(2)>t&&(i=!1);n.setSubmitAvailable(i);var a=$("#block_picture").find("span.file_size_error").toggleClass("hidden",i);$(this).parent().append(a),$(this).closest(".form-group").toggleClass("has-error",!i)}})),$("#birthday").datepicker({format:"yyyy-mm-dd",endDate:new Date,autoclose:!0,language:e.app_locale});var o={country_code:null,is_teacher:!1,install:function(){this.is_teacher?($("input[name=primary_email").typeahead({source:this.source,autoSelect:!0}),$("input[name=secondary_email").typeahead({source:this.source,autoSelect:!0})):($("input[name=primary_email").typeahead("destroy"),$("input[name=secondary_email").typeahead("destroy"))},refresh:function(){var e="teacher"==$("select[name=role]").val();this.is_teacher!==e&&(this.is_teacher=e,this.install())},source:function(t,i){if(t.indexOf("@")>=0)return null;for(var n=[],a=0;a<e.official_domains.length;a++)n.push(t+"@"+e.official_domains[a]);i(n)}};function s(){if($("#public_info_login").html($("#login").val()),"-2"==$("#graduation_grade").val())var e=$("#graduation_year").val();else e=$("#graduation_grade").find("option:selected").text();$("#public_info_grade").html(e)}function l(){$("#public_name_first_name").html($("#first_name").val()),$("#public_name_last_name").html($("#last_name").val())}function c(){$("#block_teacher_domain_verified").toggle("teacher"==$("select[name=role]").val())}function d(){$("#teacher_domain_alert").toggle("no"==$("input[name=teacher_domain_verified]:checked").val())}function f(){$("#block_ministry_of_education_fr").hide(),$("#block_ministry_of_education").hide(),"FR"==$("select[name=country_code]").val()?$("#block_ministry_of_education_fr").show():$("#block_ministry_of_education").show()}if(o.refresh(),function(t){function i(){var e=!t.prop("checked");$("#profile div[optional_field=1]").toggle(e),$("#profile fieldset").each((function(t,i){if(i=$(i),e)i.show();else{var n=i.find("div[role=block]:visible").length>0;i.toggle(n)}}))}t.click(i),t.prop("checked",!e.optional_fields_visible),i(),$("#graduation_grade").trigger("change")}($("#optional_fields_filter")),$("#graduation_year").change((function(){s()})),$("#graduation_grade").change((function(){var e=$(this).val(),t=$("#graduation_year").val(),i=!e&&t||"-2"==e,n=$("#graduation_grade").is(":visible");i&&n?$("#block_graduation_year").show():($("#graduation_year").val(""),$("#block_graduation_year").hide()),s()})).trigger("change"),$("#first_name").change(l),$("#last_name").change(l).trigger("change"),$("input[name=teacher_domain_verified][value=yes]").prop("checked",!0),c(),$("select[name=role]").click(c),d(),$("input[name=teacher_domain_verified]").click(d),f(),$("select[name=country_code]").change((function(){f(),o.refresh()})),$("select[name=role]").change((function(){o.refresh()})),!$("input[name=timezone]").val()){var u=new Date,h=new Date(u.getFullYear(),0,1,0,0,0,0),g=new Date(u.getFullYear(),6,1,0,0,0,0),_=h.toGMTString(),p=new Date(_.substring(0,_.lastIndexOf(" ")-1));_=g.toGMTString();var m=(h-p)/36e5,v=(g-new Date(_.substring(0,_.lastIndexOf(" ")-1)))/36e5;$.ajax({url:"/timezone",data:{offset:m,dls:v==m?0:1},success:function(e){$("input[name=timezone]").val(e)}})}!function(){for(var t,i={},a=0;t=e.verified_attributes[a];a++)i[t]=$("#"+t).val();$("#profile").on("submit",(function t(a){var r=function(){for(var t,n=[],a=0;t=e.verified_attributes[a];a++)i[t]&&$("#"+t).val()!=i[t]&&n.push(t);return n}();r.length?(a.preventDefault(),$("#verification_alert_save").on("click",(function(){$("#profile").off("submit",t),$("#profile").submit()})),function(e){$("#verification_alert li").hide();for(var t,i=0;t=e[i];i++)$("#verification_alert #verification_alert_"+t).show();$("#verification_alert").modal("show")}(r)):n.onSubmit(a)}))}(),$("form#profile").find("label").each((function(){var t=$(this),i=e.tooltips[t.attr("for")];if(i){var n=$('<span class="fas fa-question-circle profile-tooltip-icon"></span>');n.tooltip({title:i,placement:"left"}),t.parents(".form-group").append(n)}}))}},679:()=>{!function(e){var t,i=e();e.fn.sortable=function(n){var a=String(n);return n=e.extend({connectWith:!1},n),this.each((function(){if(/^enable|disable|destroy$/.test(a)){var r=e(this).children(e(this).data("items")).attr("draggable","enable"==a);"destroy"==a&&r.add(this).removeData("connectWith items").off("dragstart.h5s dragend.h5s selectstart.h5s dragover.h5s dragenter.h5s drop.h5s")}else{r=e(this).children(n.items);var o,s,l,c=e("<"+(/^ul|ol$/i.test(this.tagName)?"li":/^tbody$/i.test(this.tagName)?"tr":"div")+' class="sortable-placeholder '+n.placeholderClass+'">').html("&nbsp;");r.find(n.handle).mousedown((function(){o=!0})).mouseup((function(){o=!1})),e(this).data("items",n.items),i=i.add(c),n.connectWith&&e(n.connectWith).add(this).data("connectWith",n.connectWith),r.attr("draggable","true").on("dragstart.h5s",(function(i){if(n.handle&&!o)return!1;o=!1;var a=i.originalEvent.dataTransfer;a.effectAllowed="move",a.setData("Text","dummy"),l=(t=e(this)).addClass("sortable-dragging").index(),s=t.parent()})).on("dragend.h5s",(function(){t&&(t.removeClass("sortable-dragging").show(),i.detach(),l!=t.index()&&t.parent().trigger("sortupdate",{item:t}),t.parent().is(s)||t.parent().trigger("sortconnect",{item:t}),t=null)})).not("a[href], img").on("selectstart.h5s",(function(){return this.dragDrop&&this.dragDrop(),!1})).end().add([this,c]).on("dragover.h5s dragenter.h5s drop.h5s",(function(a){return!r.is(t)&&n.connectWith!==e(t).parent().data("connectWith")||("drop"==a.type?(a.stopPropagation(),i.filter(":visible").after(t),t.trigger("dragend.h5s"),!1):(a.preventDefault(),a.originalEvent.dataTransfer.dropEffect="move",r.is(this)?(n.forcePlaceholderSize&&c.height(t.outerHeight()),t.hide(),e(this)[c.index()<e(this).index()?"after":"before"](c),i.not(c).detach()):i.is(this)||e(this).children(n.items).length||(i.detach(),e(this).append(c)),!1))}))}}))}}(jQuery)},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(a[o]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&a[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}},687:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[555,170],(()=>(t(220),t(687))));e.O()}]);