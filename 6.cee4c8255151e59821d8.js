(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8yhi":function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n("Yvf7"),o=n("Ub9n");let l=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[i.b]]}),t})()},AuHR:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("OX4D");function o(t=-1){return e=>e.lift(new l(t,e))}class l{constructor(t,e){this.count=t,this.source=e}call(t,e){return e.subscribe(new s(t,this.count,this.source))}}class s extends i.a{constructor(t,e,n){super(t),this.count=e,this.source=n}error(t){if(!this.isStopped){const{source:e,count:n}=this;if(0===n)return super.error(t);n>-1&&(this.count=n-1),e.subscribe(this._unsubscribeAndRecycle())}}}},CgRx:function(t,e,n){"use strict";n.d(e,"a",function(){return P});var i=n("FBrc"),o=n("jV/k"),l=n("Ma1o");const s=(()=>{function t(){return Error.call(this),this.message="Timeout has occurred",this.name="TimeoutError",this}return t.prototype=Object.create(Error.prototype),t})();var a=n("34d6"),r=n("7YCk");class c{constructor(t,e,n,i){this.waitFor=t,this.absoluteTimeout=e,this.withObservable=n,this.scheduler=i}call(t,e){return e.subscribe(new d(t,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))}}class d extends r.b{constructor(t,e,n,i,o){super(t),this.absoluteTimeout=e,this.waitFor=n,this.withObservable=i,this.scheduler=o,this.scheduleTimeout()}static dispatchTimeout(t){const{withObservable:e}=t;t._unsubscribeAndRecycle(),t.add(Object(r.c)(e,new r.a(t)))}scheduleTimeout(){const{action:t}=this;t?this.action=t.schedule(this,this.waitFor):this.add(this.action=this.scheduler.schedule(d.dispatchTimeout,this.waitFor,this))}_next(t){this.absoluteTimeout||this.scheduleTimeout(),super._next(t)}_unsubscribe(){this.action=void 0,this.scheduler=null,this.withObservable=null}}var h=n("e6ST"),p=n("oECA"),b=n("O6Zd"),u=n("AuHR"),f=n("WKA6"),g=n("VcWf"),m=n("Ub9n"),O=n("EUGn");let P=(()=>{class t{constructor(t,e,n){this.apiConfig=t,this.http=e,this.ems=n}uploadAttachment(t,e){return this.http.post(t.data.url,e,{reportProgress:!0,observe:"events"}).pipe(function(t,e=l.a){return function(t,e,n=l.a){return i=>{let o=Object(a.a)(t),l=o?+t-n.now():Math.abs(t);return i.lift(new c(l,o,e,n))}}(8e4,Object(h.a)(new s),e)}(),Object(p.a)(this.handleError1("Attachment Entry",null)))}removeAttachment(t){return this.http.delete(`${this.apiConfig.host}/${this.removeE}/${t}`).pipe(Object(b.a)(t=>({isDeleted:!0})),Object(p.a)(this.handleError("Delete Attachment",null)))}addAttachment(t){let e=`${this.apiConfig.host}/${this.addE}`,n=Object.assign({key:t.key},t.attachment),o={headers:new i.e({"Content-Type":"application/json;charset=UTF-8"})};return this.http.post(e,n,o).pipe(Object(u.a)(2),Object(f.a)(1),Object(p.a)(this.handleError("Attachment Entry",null)))}signFile(t){let e=`${this.apiConfig.host}/${this.signE}/${t.name}`,n={headers:new i.e({"Content-Type":"application/json;charset=UTF-8"}),observe:"body"};return this.http.post(e,{filename:t.name,contentType:t.type},n).pipe(Object(p.a)(this.handleError("Attachment Upload",null)))}handleError(t="operation",e){return t=>(this.ems.message=t,Object(o.a)(e))}handleError1(t="operation",e){return t=>(this.ems.message=t,t instanceof Object&&t.name&&"TimeoutError"==t.name?Object(o.a)(408):Object(o.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(m.Tb(g.b),m.Tb(i.b),m.Tb(O.a))},t.\u0275prov=m.Gb({token:t,factory:t.\u0275fac}),t})()},M35K:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("Yvf7"),o=n("8VHZ"),l=n("Fk62"),s=n("kPid"),a=n("CgRx"),r=n("Ub9n");let c=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},providers:[a.a],imports:[[i.b,o.l,s.a,l.g.forChild([])]]}),t})()},RvSM:function(t,e,n){"use strict";n.d(e,"a",function(){return _});var i=n("Ub9n"),o=n("FBrc"),l=n("CgRx"),s=n("EUGn"),a=n("XA6Z"),r=n("jV/k"),c=n("Yvf7"),d=n("8VHZ");const h=["btnAddFile1"],p=["btnDelFile1"],b=["btnCanFile1"],u=["fileUploadProgress1"],f=["fileUploadError1"],g=["fileUploadError11"],m=["fileUploadText1"],O=["fileUploadMessage1"],P=["filePercent1"],C=["selectFileButton"],M=["fileAttachment"];function x(t,e){if(1&t){const t=i.Qb();i.Nb(0),i.Pb(1,"div",1),i.Pb(2,"label",2),i.xc(3),i.Ob(),i.Pb(4,"input",3,4),i.Wb("change",function(e){i.rc(t);const n=i.qc(5);return i.ac().uploadFile(e,n)}),i.Ob(),i.Pb(6,"button",5,6),i.Wb("click",function(e){i.rc(t);const n=i.qc(5);return i.ac().chooseFile(e,n)}),i.xc(8," Choose a File "),i.Ob(),i.Ob(),i.Pb(9,"div",7),i.Pb(10,"button",8,9),i.Wb("click",function(e){i.rc(t);const n=i.qc(5);return i.ac().addFile(e,n)}),i.xc(12," add "),i.Ob(),i.Pb(13,"button",10,11),i.Wb("click",function(e){return i.rc(t),i.ac().deleteUpload(e)}),i.xc(15," delete "),i.Ob(),i.Pb(16,"button",10,12),i.Wb("click",function(e){return i.rc(t),i.ac().cancelUpload(e)}),i.xc(18," cancel "),i.Ob(),i.Lb(19,"p",13,14),i.Lb(21,"p",13,15),i.Lb(23,"p",13,16),i.Lb(25,"p",13,17),i.Lb(27,"p",18,19),i.Lb(29,"p",18,20),i.Ob(),i.Mb()}if(2&t){const t=i.ac();i.zb(1),i.gc("formGroup",t.theForm),i.zb(1),i.ic("for","attachment-",t.myNumber,""),i.zb(1),i.yc(" ",t.myProps.label," "),i.zb(1),i.uc("display","none"),i.ic("id","attachment-",t.myNumber,""),i.gc("type",t.myProps.controlType)("name",t.myProps.key)("accept",t.myProps.accepts),i.zb(5),i.ic("id","file-upload-",t.myNumber,""),i.zb(1),i.ic("id","btn-add-file-",t.myNumber,""),i.zb(3),i.ic("id","btn-del-file-",t.myNumber,""),i.zb(3),i.ic("id","btn-can-file-",t.myNumber,""),i.zb(3),i.ic("id","file-upload-progress-",t.myNumber,""),i.zb(2),i.ic("id","file-upload-error-",t.myNumber,""),i.zb(2),i.jc("id","file-upload-error-",t.myNumber,"",t.myNumber,""),i.zb(2),i.ic("id","file-upload-text-",t.myNumber,""),i.zb(2),i.ic("id","file-upload-message-",t.myNumber,""),i.zb(2),i.ic("id","file-percent-",t.myNumber,"")}}let _=(()=>{class t{constructor(t,e){this.aus=t,this.ems=e,this.attachmentUrl="",this.uaddress="",this.$fileObj={key:"",attachment:{location:"",size:!1,mimetype:""}},this.$fileSize=512e3,this.uploadSuccess=!1,this.currentlyUploading=!1,this.myFile=new i.n}ngOnInit(){this.aus.addE=this.endpoints.add,this.aus.removeE=this.endpoints.remove,this.aus.signE=this.endpoints.sign}ngAfterViewInit(){this.$showButton(this.btnAddFile1,"block"),this.$setButton(this.btnAddFile1,!0,"disabled","btn-options")}ngOnChanges(t){t instanceof Object&&t.ready4Submission&&t.ready4Submission.currentValue&&(this.fileAttachment.nativeElement.value="")}ngOnDestroy(){this.cancelFile&&this.cancelFile.unsubscribe(),this.removeFailed&&this.removeFailed.unsubscribe()}formSubmittedUploadCancel(){this.$setElement(this.fileAttachment,!1),this.selectFileButton.nativeElement.textContent="Choose a file to upload.",this.fileAttachment.nativeElement.value="",this.$showButton(this.btnCanFile1,"none"),this.$setElement(this.btnCanFile1,!1),this.$setButton(this.btnAddFile1,!0,"disabled","btn-options"),this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadError11,this.fileUploadProgress1,this.filePercent1,this.fileUploadText1])}cancelUpload(t){this.$clearEvent(t),this.$clearEvent(t),this.$setElement(this.btnCanFile1,!0),this.cancelFile&&this.cancelFile.unsubscribe(),this.$showButton(this.btnCanFile1,"none"),this.$setElement(this.btnCanFile1,!1),this.$setButton(this.btnAddFile1,!1,"btn-options","disabled"),this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadError11,this.fileUploadProgress1,this.filePercent1,this.fileUploadText1]),this.$setElement(this.fileAttachment,!1),this.$setText(this.fileUploadText1,"Pending file upload has been canceled. You can proceed to choose and upload another file.","block")}deleteUpload(t){this.$clearEvent(t),this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadError11,this.fileUploadProgress1,this.filePercent1,this.fileUploadText1]),this.$setText(this.fileUploadMessage1,this.attachmentName+" is getting deleted. Please be patient and wait.","block"),this.$setButton(this.btnDelFile1,!0,"disabled","btn-options"),this.removeFailed=this.aus.removeAttachment(this.$fileObj.key).subscribe(t=>{let e=setTimeout(()=>{this.$clearText([this.fileUploadMessage1,this.fileUploadText1,this.fileUploadError1,this.fileUploadProgress1]),this.$setButton(this.btnDelFile1,!1,"btn-options","disabled"),this.$setText(this.fileUploadError11,`An error has occured while removing ${this.attachmentName} document. Please try again.`,"block"),this.removeFailed.unsubscribe()},3e4);t instanceof Object&&t.isDeleted&&(this.$setElement(this.fileAttachment,!1),this.$setButton(this.btnAddFile1,!0,"disabled","btn-options"),this.$showButton(this.btnDelFile1,"none"),this.$showButton(this.btnAddFile1,"block"),this.$setText(this.fileUploadMessage1,`${this.myProps.label} successfully deleted. You can now upload another ${this.attachmentName} document.`,"block"),this.$setText(this.selectFileButton,"Choose a file to upload.","block"),this.fileAttachment.nativeElement.value="",this.fileAttachment.nativeElement.textContent="",this.$$file=null,this.$fileObj={key:"",attachment:{location:"",size:!1,mimetype:""}}),clearTimeout(e),null==t&&(this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadProgress1]),this.$setButton(this.btnDelFile1,!1,"btn-options","disabled"),this.$setText(this.fileUploadError1,"An error has occured. Please try again.","block"))})}addFile(t,e){this.$clearEvent(t),this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadError11,this.fileUploadProgress1,this.fileUploadText1]);let n={attachment:e.files[0]};if(!(n&&n.attachment&&n.attachment.name))return!1;this.cancelFile=this.aus.signFile(n.attachment).pipe(Object(a.a)(t=>{if(t){this.$fileObj.attachment.location=`${t.data.url}/${t.data.fields.key}`,this.$fileObj.attachment.size=n.attachment.size,this.$fileObj.attachment.mimetype=n.attachment.type,this.$fileObj.key=t.data.fields.key;let e=new FormData;for(let n in t.data.fields)e.append(n,t.data.fields[n]);return e.append("file",n.attachment),this.aus.uploadAttachment(t,e)}return Object(r.a)({noHash:!0})})).subscribe(t=>{if(t instanceof Object&&t.noHash)return this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadError11,this.fileUploadProgress1]),this.$setText(this.fileUploadError1,"A server error has occured. Please try again.","block"),!1;if(408==t)return this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadError11,this.fileUploadProgress1,this.fileUploadText1,this.filePercent1]),this.$setText(this.fileUploadError1,"A network timeout error has occured. Please try again.","block"),this.$showButton(this.btnCanFile1,"none"),this.$setElement(this.btnCanFile1,!1),this.$setButton(this.btnAddFile1,!1,"btn-options","disabled"),this.$showButton(this.btnAddFile1,"block"),!1;if(null==t&&0==this.uploadSuccess)return this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadError11,this.fileUploadProgress1,this.fileUploadText1,this.filePercent1]),this.$setText(this.fileUploadError1,"A network error has occured. Please try again.","block"),this.$showButton(this.btnCanFile1,"none"),this.$setElement(this.btnCanFile1,!1),this.$setButton(this.btnAddFile1,!1,"btn-options","disabled"),this.$showButton(this.btnAddFile1,"block"),this.$setElement(this.fileAttachment,!1),!1;if(t instanceof Object)switch(t.type){case o.d.Sent:this.$setElement(this.fileAttachment,!0),this.$setButton(this.btnAddFile1,!0,"disabled","btn-options"),this.$showButton(this.btnCanFile1,"block"),this.$setText(this.fileUploadMessage1,this.myProps.label+" is uploading. Please be patient and wait. % uploaded : ","inline-block"),this.currentlyUploading=!0;break;case o.d.ResponseHeader:break;case o.d.UploadProgress:let e=""+Math.round(t.loaded/t.total*100);this.$setText(this.filePercent1,e,"inline-block")}return t instanceof Object&&201==t.status&&(this.uploadSuccess=!0,this.$showButton(this.btnAddFile1,"none"),this.$setButton(this.btnDelFile1,!1,"btn-options","disabled"),this.$showButton(this.btnDelFile1,"block"),this.$clearText([this.fileUploadMessage1,this.filePercent1,this.fileUploadText1,this.fileUploadProgress1,this.fileUploadError1]),this.$setText(this.fileUploadText1,this.myProps.label+" successfully uploaded.","block"),this.$showButton(this.btnCanFile1,"none"),this.$setElement(this.btnCanFile1,!1),this.aus.addAttachment(this.$fileObj).subscribe(),this.currentlyUploading=!1,this.$$file={location:this.$fileObj.attachment.location,key:this.$fileObj.key,size:this.fileAttachment.nativeElement.files[0].size,mimetype:this.fileAttachment.nativeElement.files[0].type}),t instanceof Object&&400==t.status?(this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadError11,this.fileUploadProgress1,this.fileUploadText1,this.filePercent1]),this.$setText(this.fileUploadError1,"Upload request has timed out. Please try again.","block"),this.$showButton(this.btnCanFile1,"none"),this.$setElement(this.btnCanFile1,!1),this.$setButton(this.btnAddFile1,!1,"btn-options","disabled"),this.$showButton(this.btnAddFile1,"block"),!1):void 0})}uploadFile(t,e){this.$clearEvent(t),this.attachmentFile=e.files[0];let n={attachment:e.files[0]};if(n&&!n.attachment)return this.$clearText([this.fileUploadMessage1,this.fileUploadText1,this.fileUploadError1,this.fileUploadError11,this.filePercent1,this.fileUploadProgress1]),this.$setText(this.selectFileButton,"Choose a file to upload.","block"),this.$showButton(this.btnAddFile1,"block"),this.$setButton(this.btnAddFile1,!0,"disabled","btn-options"),this.$setText(this.fileUploadError1,this.myProps.label+" should be provided and cannot be empty.","block"),!1;this.$checkAttachmentSize(this.attachmentFile,this.$fileObj,this.selectFileButton),this.$checkAttachmentType(this.attachmentFile,this.$fileObj,this.selectFileButton),this.$validateSignature(this.attachmentFile,this.$fileObj)}$clearEvent(t){t.stopPropagation(),t.preventDefault()}signFile(t){this.aus.signFile(t)}$showButton(t,e){t.nativeElement.style.display=e}$setElement(t,e){t.nativeElement.disabled=e}$setText(t,e,n,i,o){let l=t.nativeElement;l.textContent=e,l.style.display=n}updateDisplayAndSignature(){this.$$file={location:this.$fileObj.attachment.location,size:this.fileAttachment.nativeElement.files[0].size,mimetype:this.fileAttachment.nativeElement.type}}$checkAttachmentSize(t,e,n){if(t){if(t.size>this.$fileSize)return this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadProgress1]),this.$setButton(this.btnAddFile1,!0,"disabled","btn-options"),this.$setText(this.fileUploadError1,"File is too large and will not be uploaded.","block"),this.$setText(n,"A file with name "+t.name+" has been selected","block"),e.attachment.size=!0,!1;this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadProgress1]),this.$setButton(this.btnAddFile1,!1,"btn-options","disabled"),this.$setText(n,"A file with name "+t.name+" has been selected","block"),e.attachment.size=!1}else n.nativeElement.textContent="Choose a file to upload.",this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadProgress1]),this.$setButton(this.btnAddFile1,!0,"disabled","btn-options")}$clearText(t){if(t.length)for(let e=0;e<t.length;e++){let n=t[e];if(n){let t=n.nativeElement;t.style.display="none",t.textContent=""}}}getTypeFromMagicNumber(t){switch(t){case"89504E47":return"image/png";case"47494638":return"image/gif";case"25504446":return"application/pdf";case"FFD8FFDB":case"FFD8FFE0":case"FFD8FFE1":case"FFD8FFE2":case"FFD8FFE3":case"FFD8FFE8":return"image/jpeg";case"504B0304":return"application/zip";default:return"Unknown filetype"}}$setButton(t,e,n="",i=""){let o=t.nativeElement;o.disabled=e,-1==t.nativeElement.className.split(" ").indexOf(n)&&(o.className+=" "+n);let l=new RegExp(i,"g");o.className=o.className.replace(l,"")}$checkAttachmentType(t,e,n){if(t){if(-1==t.type.indexOf(this.attachmentType))return this.$clearText([this.fileUploadMessage1,this.fileUploadProgress1]),this.$setButton(this.btnAddFile1,!0,"disabled","btn-options"),this.$setText(this.fileUploadError1,`Only ${this.attachmentName} is allowed to be uploaded in this field.`,"block"),e.attachment.type=!0,!1;e.attachment.size||(this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadError11,this.fileUploadProgress1]),this.$setButton(this.btnAddFile1,!1,"btn-options","disabled"),n.nativeElement.textContent="A file with name "+t.name+" has been selected")}else n.nativeElement.textContent="Choose a file to upload.",this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadError11,this.fileUploadProgress1])}chooseFile(t,e){this.$clearEvent(t),e.click()}$validateSignature(t,e){const n=new FileReader;if(n.onloadend=t=>{if(t.target.readyState===FileReader.DONE){const n=new Uint8Array(t.target.result);let i=[];n.forEach(t=>{i.push(t.toString(16))});let o=i.join("").toUpperCase();if(-1==this.getTypeFromMagicNumber(o).indexOf(this.attachmentType))return this.$clearText([this.fileUploadMessage1,this.fileUploadError1,this.fileUploadError11,this.fileUploadProgress1]),this.$setButton(this.btnAddFile1,!0,"disabled","btn-options"),this.$setText(this.fileUploadError1,`Only ${this.attachmentName} is allowed to be uploaded in this field.`,"block"),e.attachment.type=!0,!1}},t){const e=t.slice(0,4);n.readAsArrayBuffer(e)}}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(l.a),i.Kb(s.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-attachment-upload"]],viewQuery:function(t,e){if(1&t&&(i.Ac(h,!0),i.Ac(p,!0),i.Ac(b,!0),i.Ac(u,!0),i.Ac(f,!0),i.Ac(g,!0),i.Ac(m,!0),i.Ac(O,!0),i.Ac(P,!0),i.Ac(C,!0),i.Ac(M,!0)),2&t){let t;i.pc(t=i.Xb())&&(e.btnAddFile1=t.first),i.pc(t=i.Xb())&&(e.btnDelFile1=t.first),i.pc(t=i.Xb())&&(e.btnCanFile1=t.first),i.pc(t=i.Xb())&&(e.fileUploadProgress1=t.first),i.pc(t=i.Xb())&&(e.fileUploadError1=t.first),i.pc(t=i.Xb())&&(e.fileUploadError11=t.first),i.pc(t=i.Xb())&&(e.fileUploadText1=t.first),i.pc(t=i.Xb())&&(e.fileUploadMessage1=t.first),i.pc(t=i.Xb())&&(e.filePercent1=t.first),i.pc(t=i.Xb())&&(e.selectFileButton=t.first),i.pc(t=i.Xb())&&(e.fileAttachment=t.first)}},inputs:{theForm:"theForm",theControl:"theControl",myProps:"myProps",myNumber:"myNumber",endpoints:["end-points","endpoints"],ready4Submission:["submission","ready4Submission"],attachmentName:["attachment-name","attachmentName"],attachmentType:["attachment-type","attachmentType"]},outputs:{myFile:"myFile"},features:[i.yb([s.a,l.a]),i.xb],decls:1,vars:1,consts:[[4,"ngIf"],[1,"form-group",3,"formGroup"],[1,"form-label-file","bold",3,"for"],[3,"type","name","accept","id","change"],["fileAttachment",""],[1,"btn-upload",3,"click"],["selectFileButton",""],[1,"form-group",3,"id"],[1,"btn","btn-add","btn-options",3,"id","click"],["btnAddFile1",""],[1,"btn","btn-options",3,"id","click"],["btnDelFile1",""],["btnCanFile1",""],[1,"",3,"id"],["fileUploadProgress1",""],["fileUploadError1",""],["fileUploadError11",""],["fileUploadText1",""],[3,"id"],["fileUploadMessage1",""],["filePercent1",""]],template:function(t,e){1&t&&i.vc(0,x,31,20,"ng-container",0),2&t&&i.gc("ngIf",e.theForm)},directives:[c.l,d.j,d.g],styles:["#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;width:150px;margin-right:20px;border-radius:12px 0 12px 0;background-color:#290140}#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#210140}#nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:10px;width:100%;color:#fff}tfoot[_ngcontent-%COMP%]{margin-top:20px}#entries[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:81.25%}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{overflow:hidden}.article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] + p[_ngcontent-%COMP%], .article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:2.5em}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:center;padding:10px 5px}#entries-table[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin-top:30px}#entries-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:81.25%}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{line-height:2em;text-align:center;padding:8px 0}table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{margin:10px 0;padding-left:2%;text-align:left;font-size:14px;font-weight:700;font-family:RobotoBold}tr[_ngcontent-%COMP%]:hover{background-color:#fbfaf8}.photo-item[_ngcontent-%COMP%]{width:31%;margin-right:1.5%;font-size:13px;line-height:2.5;height:400px;padding:1%;overflow:hidden}.list-sound-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .list-video-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .photo-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:150px}.photo-item-photo[_ngcontent-%COMP%]{width:150px;margin:0 auto 10px;height:150px}button[_ngcontent-%COMP%]{line-height:2em;background-color:#3b0956;border:2px solid #ac4bd8;color:#929292;border-radius:12px 6px 12px 6px;text-align:center;font-size:11px}button.btn-upload[_ngcontent-%COMP%]{display:block;width:90%}button.btn-options[_ngcontent-%COMP%]{margin-right:10px;width:120px}.btn-add[_ngcontent-%COMP%]{display:none}button.btn-submit[_ngcontent-%COMP%]{display:block;width:100%;margin:20px auto 0}#file-upload-1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #file-upload-2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #file-upload-3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #file-upload-4[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px}#upload[_ngcontent-%COMP%]{cursor:pointer}#btn-add-file-1[_ngcontent-%COMP%], #btn-add-file-2[_ngcontent-%COMP%], #btn-add-file-3[_ngcontent-%COMP%], #btn-add-file-4[_ngcontent-%COMP%], #btn-can-file-1[_ngcontent-%COMP%], #btn-can-file-2[_ngcontent-%COMP%], #btn-can-file-3[_ngcontent-%COMP%], #btn-can-file-4[_ngcontent-%COMP%], #btn-del-file-1[_ngcontent-%COMP%], #btn-del-file-2[_ngcontent-%COMP%], #btn-del-file-3[_ngcontent-%COMP%], #btn-del-file-4[_ngcontent-%COMP%]{display:none;cursor:pointer}#uploadError[_ngcontent-%COMP%], #uploadError1[_ngcontent-%COMP%], #uploadText[_ngcontent-%COMP%]{margin:5px 0}#upload-progress[_ngcontent-%COMP%]{margin:5px 0;padding-right:5px;border-radius:8px;display:none}#upload-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{background-color:#90ee90;margin-right:5px}.uploadMessage[_ngcontent-%COMP%]{display:none}.btn-add-file-1[_ngcontent-%COMP%], .btn-can-file-1[_ngcontent-%COMP%], .btn-del-file-1[_ngcontent-%COMP%], .btn-info[_ngcontent-%COMP%], .disabled[_ngcontent-%COMP%]{display:block;margin-right:.5em}.disabled[_ngcontent-%COMP%]{background-color:#171417!important;color:#fff;width:120px;padding:0 2.934087923450491%;color:#929292}@media screen and (max-width:480px){#entry-detail-form[_ngcontent-%COMP%], #request-form[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width:500px){#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;width:100%;text-align:left;margin-top:10px}#profile-view[_ngcontent-%COMP%], #update-profile[_ngcontent-%COMP%]{width:100%;padding:10px;margin:10px 0}.form-label[_ngcontent-%COMP%]{display:block;margin-bottom:8px;width:100%}.form-control[_ngcontent-%COMP%]{padding:4px 10px;width:100%;border-radius:6px;border:2px solid #ac4bd8;resize:none}#profile-view[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #profile-view[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:100%;display:block}}@media screen and (min-width:501px) and (max-width:900px){#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;width:100%;text-align:left;margin-top:10px}#profile-view[_ngcontent-%COMP%], #update-profile[_ngcontent-%COMP%]{width:97%;padding:10px;margin:10px 0}.form-label[_ngcontent-%COMP%]{display:inline-block;margin-bottom:8px;width:35%}.form-control[_ngcontent-%COMP%]{padding:4px 10px;width:65%;border-radius:6px;border:2px solid #ac4bd8;resize:none}}@media print{#letter-content[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%], #nav[_ngcontent-%COMP%]{display:none}}@media screen and (max-width:900px){#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;width:100%;margin-top:10px}#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], #nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:left}}#entry-detail-options[_ngcontent-%COMP%]{width:70%;margin:5px auto 0;padding:.6292901858419777% 2.0366495078945626%}#entry-detail-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], button.btn-submit[_ngcontent-%COMP%]{display:block;width:100%;margin:10px auto 0;line-height:2em;padding:0 2.934087923450491%;background-color:#290140;border:1.5px solid #ac4bd8;color:#a0a7a0;border-radius:6px}#entry-detail-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, button.btn-submit[_ngcontent-%COMP%]:hover{color:#fff;background-color:#210140}#entry-detail-form[_ngcontent-%COMP%], #request-form[_ngcontent-%COMP%]{width:80%;margin:0 auto;padding:5px 10px}#entry-detail-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}#guidelines[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul.errors[_ngcontent-%COMP%]{margin-left:30px}#guidelines[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], ul.errors[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:2em}#entry-detail-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], #request-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;padding-left:10px;font-family:RobotoBold;font-weight:700}#profile-view[_ngcontent-%COMP%], #update-profile[_ngcontent-%COMP%]{width:60%;padding:10px;margin:10px 0 10px 50px}#profile-view[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #update-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:2.5em}#profile-view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   colgroup[_ngcontent-%COMP%]{width:20%}.column-view[_ngcontent-%COMP%]{width:10%;margin:0 auto}#profile-view[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:top}#profile-view[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:81.25%}#profile-view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #profile-view[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{line-height:2em;text-align:left;padding:8px 0}#profile-view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{margin:10px 0;padding-left:2%;text-align:left;font-size:14px;font-weight:700;font-family:RobotoBold}.form-label[_ngcontent-%COMP%]{display:block;margin-bottom:8px;width:30%}#request-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #request-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], #update-profile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #update-profile[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #update-profile[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:2px solid #3d0398;padding:5px;color:#290140;border-radius:4px}#update-profile[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:80px;vertical-align:middle;resize:none}#update-profile[_ngcontent-%COMP%]   label.form-label-file[_ngcontent-%COMP%]{display:block;margin-bottom:5px;padding-left:10px;font-family:RobotoBold;font-weight:700}.form-group[_ngcontent-%COMP%]{margin-top:25px}.profile-property[_ngcontent-%COMP%]{margin-left:50%}"]}),t})()},bhAK:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("Ub9n"),o=n("Yvf7");function l(t,e){1&t&&(i.Pb(0,"ul"),i.Pb(1,"li"),i.xc(2," A Student is only allowed to enter a valid email address "),i.Ob(),i.Pb(3,"li"),i.xc(4," The payment will be only valid if the student have the amount required to fulfill the request "),i.Ob(),i.Pb(5,"li"),i.xc(6," Any attempt to circumvent the process or distort or modify pre-defined values which are read-only will not be allowed "),i.Ob(),i.Ob())}function s(t,e){1&t&&(i.Pb(0,"ul"),i.Pb(1,"li"),i.xc(2," Only Images are allowed to be uploaded in the form input fields. "),i.Ob(),i.Pb(3,"li"),i.xc(4," Images that are to be uploaded should not exceed 500 kilobytes in size. "),i.Ob(),i.Pb(5,"li"),i.xc(6," Other Form inputs not allowed by this form will be deemed invalid for processing. "),i.Ob(),i.Pb(7,"li"),i.xc(8," Multiple Image upload for each input field is not allowed. "),i.Ob(),i.Ob())}function a(t,e){if(1&t&&(i.Pb(0,"ul"),i.Pb(1,"li"),i.xc(2),i.Ob(),i.Pb(3,"li"),i.xc(4),i.Ob(),i.Pb(5,"li"),i.xc(6," Other Form inputs not requested by this form will be deemed invalid. "),i.Ob(),i.Pb(7,"li"),i.xc(8),i.Ob(),i.Ob()),2&t){const t=i.ac(2);i.zb(2),i.yc(" Only ",t.fileType," documents are allowed to be uploaded in the form input fields. "),i.zb(2),i.yc(" ",t.fileType," documents that are to be uploaded must not exceed 500 kilobyte in size. "),i.zb(4),i.yc(" Multiple ",t.fileType," documents upload for each field are not allowed. ")}}function r(t,e){if(1&t&&(i.Pb(0,"div",1),i.Pb(1,"h3"),i.xc(2," Form filling guidelines "),i.Ob(),i.Pb(3,"p"),i.xc(4," It is important to read the following guidelines to be able to successfully fill in and submit the form. "),i.Ob(),i.vc(5,l,7,0,"ul",2),i.vc(6,s,9,0,"ul",2),i.vc(7,a,9,3,"ul",2),i.Ob()),2&t){const t=i.ac();i.zb(5),i.gc("ngIf","payment"==t.systemGuideline),i.zb(1),i.gc("ngIf","request"==t.systemGuideline),i.zb(1),i.gc("ngIf","file"==t.systemGuideline)}}let c=(()=>{class t{constructor(){this.fileType="Image"}ngOnInit(){}set attachmentName(t){null!=t&&(this.fileType=t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-request-entry-create-file-guideline"]],inputs:{view:"view",systemGuideline:["system-guideline","systemGuideline"],fileType:["file-type","fileType"],attachmentName:["attachment-name","attachmentName"]},decls:1,vars:1,consts:[["id","guidelines",4,"ngIf"],["id","guidelines"],[4,"ngIf"]],template:function(t,e){1&t&&i.vc(0,r,8,3,"div",0),2&t&&i.gc("ngIf",e.view)},directives:[o.l],styles:[""]}),t})()}}]);