"use strict";(self.webpackChunkalgorea=self.webpackChunkalgorea||[]).push([[426],{9426:(Lt,E,o)=>{o.r(E),o.d(E,{LTIModule:()=>ht});var v=o(4666),p=o(3792),m=o(6562),S=o(591),G=o(1640),h=o(635),u=o(2673),Y=o(8504),I=o(9196),_=o(116),M=o(3158),F=o(538),X=o(3027),z=o(2395),f=o(6619),T=o(2262),$=o(661),J=o(1920),t=o(2560),Q=o(7366),Z=o(1050),C=o(8987),B=o(7794),y=o(6507),W=o(2094);const j=y.n_({loginIdMatched:y.O7});let K=(()=>{class e{constructor(n){this.http=n}check(n){const a=new C.LE({fromObject:{login_id:n}});return this.http.get(`${B.e.apiUrl}/current-user/check-login-id`,{params:a}).pipe((0,W.m)(j),(0,h.U)(c=>c.loginIdMatched))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(C.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var w=o(5682),H=o(7887),V=o(4583),b=o(7900),k=o(458),q=o(4893),tt=o(4723),et=o(7551);function ot(e,i){1&e&&t._UZ(0,"alg-loading",2)}function nt(e,i){1&e&&t._UZ(0,"alg-error",6)}function rt(e,i){1&e&&t._UZ(0,"alg-error",7)}function it(e,i){1&e&&t._UZ(0,"alg-error",8)}function st(e,i){1&e&&(t.TgZ(0,"alg-error"),t.ynx(1),t.SDv(2,9),t.BQk(),t._UZ(3,"br"),t.ynx(4),t.SDv(5,10),t.BQk(),t.qZA())}function at(e,i){if(1&e&&(t.ynx(0),t.YNc(1,nt,1,0,"alg-error",3),t.YNc(2,rt,1,0,"alg-error",4),t.YNc(3,it,1,0,"alg-error",5),t.YNc(4,st,6,0,"alg-error",1),t.BQk()),2&e){const n=i.ngIf;t.xp6(1),t.Q6J("ngIf","fetch_error"===n),t.xp6(1),t.Q6J("ngIf","no_child"===n),t.xp6(1),t.Q6J("ngIf","no_item_or_explicit_entry_with_no_result"===n),t.xp6(1),t.Q6J("ngIf","login_error"===n)}}var l=(()=>{return(e=l||(l={})).FetchError="fetch_error",e.NoItemOrExplicitEntryWithNoResult="no_item_or_explicit_entry_with_no_result",e.NoChild="no_child",e.LoginError="login_error",l;var e})();const N=new Error(l.NoItemOrExplicitEntryWithNoResult),P=new Error(l.NoChild),L=new Error(l.LoginError),R="is_redirection",A="lti_use_from_path",O="user_id";let ct=(()=>{class e{constructor(n,a,c,d,s,dt,ut,ft,pt,It,Tt){this.activatedRoute=n,this.itemRouter=a,this.router=c,this.userSession=d,this.checkLoginService=s,this.layoutService=dt,this.activityNavTreeService=ut,this.getItemPathService=ft,this.resultActionsService=pt,this.getItemChildrenService=It,this.ltiDataSource=Tt,this.loginId$=this.activatedRoute.queryParamMap.pipe((0,h.U)(r=>r.get(O))),this.isRedirection$=this.activatedRoute.queryParamMap.pipe((0,h.U)(r=>(0,T.Wt)(r.get(R)))),this.fromPath$=this.activatedRoute.queryParamMap.pipe((0,h.U)(r=>(0,T.Wt)(r.get(A))?r.get(f.vd):null)),this.contentId$=this.activatedRoute.paramMap.pipe((0,h.U)(r=>{const g=r.get("contentId");if(!g)throw new Error("unexpected: contentId should be defined");return g})),this.isLoggedIn$=this.loginId$.pipe((0,u.w)(r=>{if(!r)throw L;return this.checkLoginService.check(r)}),(0,Y.X)(3),(0,I.d)(1)),this.navigationData$=(0,m.a)([this.isLoggedIn$,this.isRedirection$]).pipe((0,u.w)(([r,g])=>{if(!r){if(g)throw L;return S.E}return this.contentId$}),(0,u.w)(r=>this.getNavigationData(r)),(0,$.iS)(),(0,I.d)(1)),this.error$=this.navigationData$.pipe((0,h.U)(r=>{if(r.isError)switch(r.error){case P:return l.NoChild;case N:return l.NoItemOrExplicitEntryWithNoResult;case L:return l.LoginError;default:return l.FetchError}})),this.subscriptions=[(0,m.a)([this.contentId$,this.loginId$.pipe((0,_.h)(z.K0))]).subscribe(([r,g])=>{(0,f.jd)(`/lti/${r}?${O}=${g}&${R}=${(0,T.h0)(!0)}`),this.activityNavTreeService.navigationNeighborsRestrictedToDescendantOfElementId=r}),(0,m.a)([this.isLoggedIn$.pipe((0,M.K)(()=>S.E)),this.isRedirection$]).pipe((0,_.h)(([r,g])=>!r&&!g)).subscribe(()=>this.userSession.login()),this.navigationData$.pipe((0,$.RI)(),(0,F.M)(this.contentId$,this.fromPath$)).subscribe(([{firstChild:r,path:g,attemptId:U},vt,D])=>{this.ltiDataSource.data={contentId:vt,attemptId:U};const x=(0,f.lm)();if(!x)throw new Error("redirect url should be set by now");if((0,f.jd)((0,f.It)(x,A,(0,T.h0)(!0))),D)return void this.router.navigateByUrl(D);const mt=(0,J.rn)("activity",r.id,g,{parentAttemptId:U});this.itemRouter.navigateTo(mt,{navExtras:{replaceUrl:!0}})})],this.layoutService.configure({fullFrameActive:!0,showTopRightControls:!1,canToggleFullFrame:!1})}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}getNavigationData(n){const a=this.getItemPathService.getItemPath(n).pipe((0,h.U)(s=>[...s,n]),(0,I.d)(1)),c=a.pipe((0,u.w)(s=>this.resultActionsService.startWithoutAttempt(s)),(0,M.K)(s=>{throw(0,X.Lg)(s)?N:s}),(0,I.d)(1)),d=c.pipe((0,u.w)(s=>this.getItemChildrenService.get(n,s)),(0,h.U)(([s])=>{if(!s)throw P;return s}));return(0,G.D)({attemptId:c,path:a,firstChild:d})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.gz),t.Y36(Q.h),t.Y36(p.F0),t.Y36(Z.o),t.Y36(K),t.Y36(w.P),t.Y36(H.X),t.Y36(V.n),t.Y36(b.i),t.Y36(k.q),t.Y36(q.J))},e.\u0275cmp=t.Xpm({type:e,selectors:[["alg-lti"]],decls:4,vars:6,consts:function(){let i,n,a,c,d;return i="Unable to load this task. Either you have a connection issue or this task is not correctly configured. Please retry, if the problem persists, contact us.",n="This task is not correctly configured (chapter with tasks expected).",a="This task is not correctly configured (item not found or explicit entry but no result)",c="Something wrong occurred during the login process, please retry after closing this tab or window.",d="Si le probl\xE8me persiste, contactez-nous.",[["size","large",4,"ngIf"],[4,"ngIf"],["size","large"],["message",i,4,"ngIf"],["message",n,4,"ngIf"],["message",a,4,"ngIf"],["message",i],["message",n],["message",a],c,d]},template:function(n,a){if(1&n&&(t.YNc(0,ot,1,0,"alg-loading",0),t.ALo(1,"async"),t.YNc(2,at,5,4,"ng-container",1),t.ALo(3,"async")),2&n){let c;t.Q6J("ngIf",null==(c=t.lcZ(1,2,a.navigationData$))?null:c.isFetching),t.xp6(2),t.Q6J("ngIf",t.lcZ(3,4,a.error$))}},dependencies:[v.O5,tt.q,et.N,v.Ov]}),e})(),lt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild([{path:"",pathMatch:"full",component:ct}]),p.Bz]}),e})();var gt=o(6284);let ht=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[v.ez,gt.q,lt]}),e})()}}]);
//# sourceMappingURL=426.6b1b481fa5b0e18b.js.map