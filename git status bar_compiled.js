if(!lt.util.load.provided_QMARK_('crate.binding')) {
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__7612__auto__,writer__7613__auto__,opt__7614__auto__){return cljs.core._write.call(null,writer__7613__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8638 = cljs.core.seq.call(null,self__.watches);var chunk__8639 = null;var count__8640 = 0;var i__8641 = 0;while(true){
if((i__8641 < count__8640))
{var vec__8642 = cljs.core._nth.call(null,chunk__8639,i__8641);var key__$1 = cljs.core.nth.call(null,vec__8642,0,null);var f = cljs.core.nth.call(null,vec__8642,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8717 = seq__8638;
var G__8718 = chunk__8639;
var G__8719 = count__8640;
var G__8720 = (i__8641 + 1);
seq__8638 = G__8717;
chunk__8639 = G__8718;
count__8640 = G__8719;
i__8641 = G__8720;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8638);if(temp__4092__auto__)
{var seq__8638__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8638__$1))
{var c__7793__auto__ = cljs.core.chunk_first.call(null,seq__8638__$1);{
var G__8721 = cljs.core.chunk_rest.call(null,seq__8638__$1);
var G__8722 = c__7793__auto__;
var G__8723 = cljs.core.count.call(null,c__7793__auto__);
var G__8724 = 0;
seq__8638 = G__8721;
chunk__8639 = G__8722;
count__8640 = G__8723;
i__8641 = G__8724;
continue;
}
} else
{var vec__8643 = cljs.core.first.call(null,seq__8638__$1);var key__$1 = cljs.core.nth.call(null,vec__8643,0,null);var f = cljs.core.nth.call(null,vec__8643,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8725 = cljs.core.next.call(null,seq__8638__$1);
var G__8726 = null;
var G__8727 = 0;
var G__8728 = 0;
seq__8638 = G__8725;
chunk__8639 = G__8726;
count__8640 = G__8727;
i__8641 = G__8728;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.atm))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__8645 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__8645,0,null);var path__$2 = cljs.core.nth.call(null,vec__8645,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
}));
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__8729__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8729 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__8729__delegate.call(this,sa,f,x,y,z,more);};
G__8729.cljs$lang$maxFixedArity = 5;
G__8729.cljs$lang$applyTo = (function (arglist__8730){
var sa = cljs.core.first(arglist__8730);
arglist__8730 = cljs.core.next(arglist__8730);
var f = cljs.core.first(arglist__8730);
arglist__8730 = cljs.core.next(arglist__8730);
var x = cljs.core.first(arglist__8730);
arglist__8730 = cljs.core.next(arglist__8730);
var y = cljs.core.first(arglist__8730);
arglist__8730 = cljs.core.next(arglist__8730);
var z = cljs.core.first(arglist__8730);
var more = cljs.core.rest(arglist__8730);
return G__8729__delegate(sa,f,x,y,z,more);
});
G__8729.cljs$core$IFn$_invoke$arity$variadic = G__8729__delegate;
return G__8729;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj8647 = {};return obj8647;
})();
crate.binding._depend = (function _depend(this$,atm){if((function (){var and__7033__auto__ = this$;if(and__7033__auto__)
{return this$.crate$binding$computable$_depend$arity$2;
} else
{return and__7033__auto__;
}
})())
{return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else
{var x__7672__auto__ = (((this$ == null))?null:this$);return (function (){var or__7045__auto__ = (crate.binding._depend[goog.typeOf(x__7672__auto__)]);if(or__7045__auto__)
{return or__7045__auto__;
} else
{var or__7045__auto____$1 = (crate.binding._depend["_"]);if(or__7045__auto____$1)
{return or__7045__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-depend",this$);
}
}
})().call(null,this$,atm);
}
});
crate.binding._compute = (function _compute(this$){if((function (){var and__7033__auto__ = this$;if(and__7033__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__7033__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__7672__auto__ = (((this$ == null))?null:this$);return (function (){var or__7045__auto__ = (crate.binding._compute[goog.typeOf(x__7672__auto__)]);if(or__7045__auto__)
{return or__7045__auto__;
} else
{var or__7045__auto____$1 = (crate.binding._compute["_"]);if(or__7045__auto____$1)
{return or__7045__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__7612__auto__,writer__7613__auto__,opt__7614__auto__){return cljs.core._write.call(null,writer__7613__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){var self__ = this;
var this$__$1 = this;this$__$1.atms = cljs.core.conj.call(null,this$__$1.atms,atm);
return cljs.core.add_watch.call(null,atm,self__.key,(function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,this$__$1);
}));
});
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;var nv = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));this$__$1.value = nv;
return cljs.core._notify_watches.call(null,this$__$1,old,nv);
});
crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8648 = cljs.core.seq.call(null,self__.watches);var chunk__8649 = null;var count__8650 = 0;var i__8651 = 0;while(true){
if((i__8651 < count__8650))
{var vec__8652 = cljs.core._nth.call(null,chunk__8649,i__8651);var key__$1 = cljs.core.nth.call(null,vec__8652,0,null);var f = cljs.core.nth.call(null,vec__8652,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8731 = seq__8648;
var G__8732 = chunk__8649;
var G__8733 = count__8650;
var G__8734 = (i__8651 + 1);
seq__8648 = G__8731;
chunk__8649 = G__8732;
count__8650 = G__8733;
i__8651 = G__8734;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8648);if(temp__4092__auto__)
{var seq__8648__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8648__$1))
{var c__7793__auto__ = cljs.core.chunk_first.call(null,seq__8648__$1);{
var G__8735 = cljs.core.chunk_rest.call(null,seq__8648__$1);
var G__8736 = c__7793__auto__;
var G__8737 = cljs.core.count.call(null,c__7793__auto__);
var G__8738 = 0;
seq__8648 = G__8735;
chunk__8649 = G__8736;
count__8650 = G__8737;
i__8651 = G__8738;
continue;
}
} else
{var vec__8653 = cljs.core.first.call(null,seq__8648__$1);var key__$1 = cljs.core.nth.call(null,vec__8653,0,null);var f = cljs.core.nth.call(null,vec__8653,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__8739 = cljs.core.next.call(null,seq__8648__$1);
var G__8740 = null;
var G__8741 = 0;
var G__8742 = 0;
seq__8648 = G__8739;
chunk__8649 = G__8740;
count__8650 = G__8741;
i__8651 = G__8742;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key,meta){return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));crate.binding._compute.call(null,neue);
var seq__8658_8743 = cljs.core.seq.call(null,atms);var chunk__8659_8744 = null;var count__8660_8745 = 0;var i__8661_8746 = 0;while(true){
if((i__8661_8746 < count__8660_8745))
{var atm_8747 = cljs.core._nth.call(null,chunk__8659_8744,i__8661_8746);crate.binding._depend.call(null,neue,atm_8747);
{
var G__8748 = seq__8658_8743;
var G__8749 = chunk__8659_8744;
var G__8750 = count__8660_8745;
var G__8751 = (i__8661_8746 + 1);
seq__8658_8743 = G__8748;
chunk__8659_8744 = G__8749;
count__8660_8745 = G__8750;
i__8661_8746 = G__8751;
continue;
}
} else
{var temp__4092__auto___8752 = cljs.core.seq.call(null,seq__8658_8743);if(temp__4092__auto___8752)
{var seq__8658_8753__$1 = temp__4092__auto___8752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8658_8753__$1))
{var c__7793__auto___8754 = cljs.core.chunk_first.call(null,seq__8658_8753__$1);{
var G__8755 = cljs.core.chunk_rest.call(null,seq__8658_8753__$1);
var G__8756 = c__7793__auto___8754;
var G__8757 = cljs.core.count.call(null,c__7793__auto___8754);
var G__8758 = 0;
seq__8658_8743 = G__8755;
chunk__8659_8744 = G__8756;
count__8660_8745 = G__8757;
i__8661_8746 = G__8758;
continue;
}
} else
{var atm_8759 = cljs.core.first.call(null,seq__8658_8753__$1);crate.binding._depend.call(null,neue,atm_8759);
{
var G__8760 = cljs.core.next.call(null,seq__8658_8753__$1);
var G__8761 = null;
var G__8762 = 0;
var G__8763 = 0;
seq__8658_8743 = G__8760;
chunk__8659_8744 = G__8761;
count__8660_8745 = G__8762;
i__8661_8746 = G__8763;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.compute = (function compute(compu){return crate.binding._compute.call(null,compu);
});
crate.binding.depend_on = (function depend_on(compu,atm){return crate.binding._depend.call(null,compu,atm);
});
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj8663 = {};return obj8663;
})();
crate.binding.bindable = (function (){var obj8665 = {};return obj8665;
})();
crate.binding._value = (function _value(this$){if((function (){var and__7033__auto__ = this$;if(and__7033__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__7033__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__7672__auto__ = (((this$ == null))?null:this$);return (function (){var or__7045__auto__ = (crate.binding._value[goog.typeOf(x__7672__auto__)]);if(or__7045__auto__)
{return or__7045__auto__;
} else
{var or__7045__auto____$1 = (crate.binding._value["_"]);if(or__7045__auto____$1)
{return or__7045__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__7033__auto__ = this$;if(and__7033__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__7033__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__7672__auto__ = (((this$ == null))?null:this$);return (function (){var or__7045__auto__ = (crate.binding._on_change[goog.typeOf(x__7672__auto__)]);if(or__7045__auto__)
{return or__7045__auto__;
} else
{var or__7045__auto____$1 = (crate.binding._on_change["_"]);if(or__7045__auto____$1)
{return or__7045__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__7612__auto__,writer__7613__auto__,opt__7614__auto__){return cljs.core._write.call(null,writer__7613__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),(function (){return func.call(null,crate.binding._value.call(null,this$__$1));
}));
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__7612__auto__,writer__7613__auto__,opt__7614__auto__){return cljs.core._write.call(null,writer__7613__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8666 = cljs.core.seq.call(null,self__.watches);var chunk__8667 = null;var count__8668 = 0;var i__8669 = 0;while(true){
if((i__8669 < count__8668))
{var vec__8670 = cljs.core._nth.call(null,chunk__8667,i__8669);var key = cljs.core.nth.call(null,vec__8670,0,null);var f = cljs.core.nth.call(null,vec__8670,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8764 = seq__8666;
var G__8765 = chunk__8667;
var G__8766 = count__8668;
var G__8767 = (i__8669 + 1);
seq__8666 = G__8764;
chunk__8667 = G__8765;
count__8668 = G__8766;
i__8669 = G__8767;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8666);if(temp__4092__auto__)
{var seq__8666__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8666__$1))
{var c__7793__auto__ = cljs.core.chunk_first.call(null,seq__8666__$1);{
var G__8768 = cljs.core.chunk_rest.call(null,seq__8666__$1);
var G__8769 = c__7793__auto__;
var G__8770 = cljs.core.count.call(null,c__7793__auto__);
var G__8771 = 0;
seq__8666 = G__8768;
chunk__8667 = G__8769;
count__8668 = G__8770;
i__8669 = G__8771;
continue;
}
} else
{var vec__8671 = cljs.core.first.call(null,seq__8666__$1);var key = cljs.core.nth.call(null,vec__8671,0,null);var f = cljs.core.nth.call(null,vec__8671,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8772 = cljs.core.next.call(null,seq__8666__$1);
var G__8773 = null;
var G__8774 = 0;
var G__8775 = 0;
seq__8666 = G__8772;
chunk__8667 = G__8773;
count__8668 = G__8774;
i__8669 = G__8775;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__7612__auto__,writer__7613__auto__,opt__7614__auto__){return cljs.core._write.call(null,writer__7613__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__8672){var vec__8673 = p__8672;var event = cljs.core.nth.call(null,vec__8673,0,null);var el = cljs.core.nth.call(null,vec__8673,1,null);var v = cljs.core.nth.call(null,vec__8673,2,null);return func.call(null,event,el,v);
}));
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__7045__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__7045__auto__))
{return or__7045__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__8776){
var bc = cljs.core.first(arglist__8776);
var segs = cljs.core.rest(arglist__8776);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__8682_8777 = cljs.core.seq.call(null,added);var chunk__8683_8778 = null;var count__8684_8779 = 0;var i__8685_8780 = 0;while(true){
if((i__8685_8780 < count__8684_8779))
{var a_8781 = cljs.core._nth.call(null,chunk__8683_8778,i__8685_8780);crate.binding.bc_add.call(null,bc,a_8781,a_8781);
{
var G__8782 = seq__8682_8777;
var G__8783 = chunk__8683_8778;
var G__8784 = count__8684_8779;
var G__8785 = (i__8685_8780 + 1);
seq__8682_8777 = G__8782;
chunk__8683_8778 = G__8783;
count__8684_8779 = G__8784;
i__8685_8780 = G__8785;
continue;
}
} else
{var temp__4092__auto___8786 = cljs.core.seq.call(null,seq__8682_8777);if(temp__4092__auto___8786)
{var seq__8682_8787__$1 = temp__4092__auto___8786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8682_8787__$1))
{var c__7793__auto___8788 = cljs.core.chunk_first.call(null,seq__8682_8787__$1);{
var G__8789 = cljs.core.chunk_rest.call(null,seq__8682_8787__$1);
var G__8790 = c__7793__auto___8788;
var G__8791 = cljs.core.count.call(null,c__7793__auto___8788);
var G__8792 = 0;
seq__8682_8777 = G__8789;
chunk__8683_8778 = G__8790;
count__8684_8779 = G__8791;
i__8685_8780 = G__8792;
continue;
}
} else
{var a_8793 = cljs.core.first.call(null,seq__8682_8787__$1);crate.binding.bc_add.call(null,bc,a_8793,a_8793);
{
var G__8794 = cljs.core.next.call(null,seq__8682_8787__$1);
var G__8795 = null;
var G__8796 = 0;
var G__8797 = 0;
seq__8682_8777 = G__8794;
chunk__8683_8778 = G__8795;
count__8684_8779 = G__8796;
i__8685_8780 = G__8797;
continue;
}
}
} else
{}
}
break;
}
var seq__8686 = cljs.core.seq.call(null,removed);var chunk__8687 = null;var count__8688 = 0;var i__8689 = 0;while(true){
if((i__8689 < count__8688))
{var r = cljs.core._nth.call(null,chunk__8687,i__8689);crate.binding.bc_remove.call(null,bc,r);
{
var G__8798 = seq__8686;
var G__8799 = chunk__8687;
var G__8800 = count__8688;
var G__8801 = (i__8689 + 1);
seq__8686 = G__8798;
chunk__8687 = G__8799;
count__8688 = G__8800;
i__8689 = G__8801;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8686);if(temp__4092__auto__)
{var seq__8686__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8686__$1))
{var c__7793__auto__ = cljs.core.chunk_first.call(null,seq__8686__$1);{
var G__8802 = cljs.core.chunk_rest.call(null,seq__8686__$1);
var G__8803 = c__7793__auto__;
var G__8804 = cljs.core.count.call(null,c__7793__auto__);
var G__8805 = 0;
seq__8686 = G__8802;
chunk__8687 = G__8803;
count__8688 = G__8804;
i__8689 = G__8805;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8686__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__8806 = cljs.core.next.call(null,seq__8686__$1);
var G__8807 = null;
var G__8808 = 0;
var G__8809 = 0;
seq__8686 = G__8806;
chunk__8687 = G__8807;
count__8688 = G__8808;
i__8689 = G__8809;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__8690){var vec__8693 = p__8690;var path = cljs.core.nth.call(null,vec__8693,0,null);var opts = cljs.core.nth.call(null,vec__8693,1,null);var vec__8694 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__8694,0,null);var opts__$1 = cljs.core.nth.call(null,vec__8694,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__8690 = null;if (arguments.length > 1) {
  p__8690 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__8690);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8810){
var atm = cljs.core.first(arglist__8810);
var p__8690 = cljs.core.rest(arglist__8810);
return bound_coll__delegate(atm,p__8690);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8695){var vec__8697 = p__8695;var opts = cljs.core.nth.call(null,vec__8697,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__8695 = null;if (arguments.length > 2) {
  p__8695 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__8695);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8811){
var as = cljs.core.first(arglist__8811);
arglist__8811 = cljs.core.next(arglist__8811);
var atm = cljs.core.first(arglist__8811);
var p__8695 = cljs.core.rest(arglist__8811);
return map_bound__delegate(as,atm,p__8695);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__8699 = b;if(G__8699)
{var bit__7695__auto__ = null;if(cljs.core.truth_((function (){var or__7045__auto__ = bit__7695__auto__;if(cljs.core.truth_(or__7045__auto__))
{return or__7045__auto__;
} else
{return G__8699.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8699.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8699);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__8699);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__8701 = b;if(G__8701)
{var bit__7695__auto__ = null;if(cljs.core.truth_((function (){var or__7045__auto__ = bit__7695__auto__;if(cljs.core.truth_(or__7045__auto__))
{return or__7045__auto__;
} else
{return G__8701.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8701.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8701);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__8701);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__8703 = atm;if(G__8703)
{var bit__7695__auto__ = (G__8703.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7695__auto__) || (G__8703.cljs$core$IDeref$))
{return true;
} else
{if((!G__8703.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8703);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__8703);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__8704){var vec__8706 = p__8704;var func = cljs.core.nth.call(null,vec__8706,0,null);var func__$1 = (function (){var or__7045__auto__ = func;if(cljs.core.truth_(or__7045__auto__))
{return or__7045__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__8704 = null;if (arguments.length > 1) {
  p__8704 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__8704);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8812){
var atm = cljs.core.first(arglist__8812);
var p__8704 = cljs.core.rest(arglist__8812);
return bound__delegate(atm,p__8704);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitstatusbar')) {
goog.provide('lt.plugins.gitstatusbar');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.statusbar');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.objs.tabs');
goog.require('lt.util.cljs');
goog.require('lt.objs.workspace');
goog.require('lt.objs.context');
goog.require('lt.objs.workspace');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.canvas');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.statusbar');
goog.require('clojure.set');
goog.require('lt.objs.bottombar');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.objs.canvas');
goog.require('lt.object');
goog.require('lt.object');
goog.require('clojure.set');
goog.require('lt.util.load');
goog.require('lt.objs.tabs');
goog.require('lt.objs.bottombar');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
lt.plugins.gitstatusbar.fs = require("fs");
lt.plugins.gitstatusbar.cp = require("child_process");
lt.plugins.gitstatusbar.is_git_QMARK_ = (function is_git_QMARK_(path){if(cljs.core.truth_(lt.plugins.gitstatusbar.fs.existsSync(path)))
{var stat = lt.plugins.gitstatusbar.fs.statSync(path);return stat.isDirectory();
} else
{return null;
}
});
lt.plugins.gitstatusbar.repos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.gitstatusbar.ss = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.gitstatusbar.git = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.gitstatusbar.update_repo = (function update_repo(path,change){if(cljs.core.truth_(path))
{return cljs.core.swap_BANG_.call(null,lt.plugins.gitstatusbar.repos,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.merge,change);
} else
{return null;
}
});
lt.plugins.gitstatusbar.repo_dirty_git = (function repo_dirty_git(path){if(cljs.core.truth_(path))
{return lt.plugins.gitstatusbar.cp.exec("git status --porcelain",{"cwd": path},(function (e,out,err){if((cljs.core.not.call(null,e)) && (cljs.core.empty_QMARK_.call(null,err)))
{return lt.plugins.gitstatusbar.update_repo.call(null,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dirty","dirty",1109497668),!(cljs.core.empty_QMARK_.call(null,out))], null));
} else
{return null;
}
}));
} else
{return null;
}
});
lt.plugins.gitstatusbar.repo_branch_git = (function repo_branch_git(path){if(cljs.core.truth_(path))
{return lt.plugins.gitstatusbar.cp.exec("git rev-parse --abbrev-ref HEAD",{"cwd": path},(function (e,out,err){if(cljs.core.truth_((function (){var and__7033__auto__ = cljs.core.not.call(null,e);if(and__7033__auto__)
{var and__7033__auto____$1 = out;if(cljs.core.truth_(and__7033__auto____$1))
{return cljs.core.empty_QMARK_.call(null,err);
} else
{return and__7033__auto____$1;
}
} else
{return and__7033__auto__;
}
})()))
{return lt.plugins.gitstatusbar.update_repo.call(null,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"branch","branch",3927841044),clojure.string.trim.call(null,out)], null));
} else
{return null;
}
}));
} else
{return null;
}
});
lt.plugins.gitstatusbar.repo_git = (function repo_git(path){lt.plugins.gitstatusbar.repo_dirty_git.call(null,path);
return lt.plugins.gitstatusbar.repo_branch_git.call(null,path);
});
lt.plugins.gitstatusbar.render_branch = (function render_branch(container){if(cljs.core.truth_(new cljs.core.Keyword(null,"branch","branch",3927841044).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lt.plugins.gitstatusbar","repo","lt.plugins.gitstatusbar/repo",1203910145).cljs$core$IFn$_invoke$arity$1(container))))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.repo-container","li.repo-container",1645942761),(cljs.core.truth_(new cljs.core.Keyword(null,"dirty","dirty",1109497668).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lt.plugins.gitstatusbar","repo","lt.plugins.gitstatusbar/repo",1203910145).cljs$core$IFn$_invoke$arity$1(container)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-circle-o.dirty-indicator","i.fa.fa-circle-o.dirty-indicator",4270739022),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"uncommitted changes in repo"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-check-circle.dirty-indicator","i.fa.fa-check-circle.dirty-indicator",577593553),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"no uncommitted changes"], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-code-fork","i.fa.fa-code-fork",1052144720)], null),new cljs.core.Keyword(null,"branch","branch",3927841044).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lt.plugins.gitstatusbar","repo","lt.plugins.gitstatusbar/repo",1203910145).cljs$core$IFn$_invoke$arity$1(container))], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956)], null);
}
});
lt.plugins.gitstatusbar.slurp = (function slurp(path){return lt.plugins.gitstatusbar.fs.readFileSync(path,{"encoding": "utf-8"});
});
lt.plugins.gitstatusbar.on_head_change = (function on_head_change(path){return lt.plugins.gitstatusbar.repo_git.call(null,path);
});
lt.plugins.gitstatusbar.track_repo = (function track_repo(path){if(cljs.core.truth_((function (){var and__7033__auto__ = lt.plugins.gitstatusbar.fs.existsSync([cljs.core.str(path),cljs.core.str("/.git/HEAD")].join(''));if(cljs.core.truth_(and__7033__auto__))
{return cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,lt.plugins.gitstatusbar.ss),path));
} else
{return and__7033__auto__;
}
})()))
{lt.plugins.gitstatusbar.on_head_change.call(null,path);
return lt.plugins.gitstatusbar.fs.watch([cljs.core.str(path),cljs.core.str("/.git")].join(''),{"persistent": false},(function (event,filename){if(cljs.core._EQ_.call(null,"HEAD",filename))
{return lt.plugins.gitstatusbar.on_head_change.call(null,path);
} else
{return null;
}
}));
} else
{return null;
}
});
lt.plugins.gitstatusbar.untrack_repo = (function untrack_repo(path){var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lt.plugins.gitstatusbar.ss),path);if(cljs.core.truth_(temp__4092__auto__))
{var watcher = temp__4092__auto__;return watcher.close();
} else
{return null;
}
});
lt.plugins.gitstatusbar.watch_dirs = (function watch_dirs(dirs){var existing_paths = cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,lt.plugins.gitstatusbar.ss)));var new_paths = cljs.core.set.call(null,dirs);var to_add = clojure.set.difference.call(null,new_paths,existing_paths);var to_rem = clojure.set.difference.call(null,existing_paths,new_paths);cljs.core.swap_BANG_.call(null,lt.plugins.gitstatusbar.ss,cljs.core.merge,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__8848_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[p1__8848_SHARP_,lt.plugins.gitstatusbar.track_repo.call(null,p1__8848_SHARP_)],null));
}),to_add))));
var seq__8854_8859 = cljs.core.seq.call(null,to_rem);var chunk__8855_8860 = null;var count__8856_8861 = 0;var i__8857_8862 = 0;while(true){
if((i__8857_8862 < count__8856_8861))
{var path_8863 = cljs.core._nth.call(null,chunk__8855_8860,i__8857_8862);lt.plugins.gitstatusbar.untrack_repo.call(null,path_8863);
{
var G__8864 = seq__8854_8859;
var G__8865 = chunk__8855_8860;
var G__8866 = count__8856_8861;
var G__8867 = (i__8857_8862 + 1);
seq__8854_8859 = G__8864;
chunk__8855_8860 = G__8865;
count__8856_8861 = G__8866;
i__8857_8862 = G__8867;
continue;
}
} else
{var temp__4092__auto___8868 = cljs.core.seq.call(null,seq__8854_8859);if(temp__4092__auto___8868)
{var seq__8854_8869__$1 = temp__4092__auto___8868;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8854_8869__$1))
{var c__7793__auto___8870 = cljs.core.chunk_first.call(null,seq__8854_8869__$1);{
var G__8871 = cljs.core.chunk_rest.call(null,seq__8854_8869__$1);
var G__8872 = c__7793__auto___8870;
var G__8873 = cljs.core.count.call(null,c__7793__auto___8870);
var G__8874 = 0;
seq__8854_8859 = G__8871;
chunk__8855_8860 = G__8872;
count__8856_8861 = G__8873;
i__8857_8862 = G__8874;
continue;
}
} else
{var path_8875 = cljs.core.first.call(null,seq__8854_8869__$1);lt.plugins.gitstatusbar.untrack_repo.call(null,path_8875);
{
var G__8876 = cljs.core.next.call(null,seq__8854_8869__$1);
var G__8877 = null;
var G__8878 = 0;
var G__8879 = 0;
seq__8854_8859 = G__8876;
chunk__8855_8860 = G__8877;
count__8856_8861 = G__8878;
i__8857_8862 = G__8879;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.swap_BANG_.call(null,lt.plugins.gitstatusbar.ss,(function (p1__8849_SHARP_){return cljs.core.apply.call(null,cljs.core.dissoc,p1__8849_SHARP_,to_rem);
}));
});
lt.plugins.gitstatusbar.path__GT_repo_path = (function path__GT_repo_path(path){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8858_SHARP_){var and__7033__auto__ = path;if(cljs.core.truth_(and__7033__auto__))
{return path.startsWith(p1__8858_SHARP_);
} else
{return and__7033__auto__;
}
}),cljs.core.keys.call(null,cljs.core.deref.call(null,lt.plugins.gitstatusbar.repos))));
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitstatusbar","container","lt.plugins.gitstatusbar/container",3742762258),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){if(cljs.core.truth_(this$))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),crate.binding.bound.call(null,this$,lt.plugins.gitstatusbar.render_branch)], null);
} else
{return null;
}
}));
lt.plugins.gitstatusbar.container = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gitstatusbar","container","lt.plugins.gitstatusbar/container",3742762258));
lt.objs.statusbar.add_statusbar_item.call(null,lt.plugins.gitstatusbar.container);
lt.plugins.gitstatusbar.__BEH__watch_editor = (function __BEH__watch_editor(this$){return lt.plugins.gitstatusbar.repo_git.call(null,lt.plugins.gitstatusbar.path__GT_repo_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitstatusbar","watch-editor","lt.plugins.gitstatusbar/watch-editor",2407592128),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitstatusbar.__BEH__watch_editor,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null));
lt.plugins.gitstatusbar.__BEH__attach = (function __BEH__attach(this$){if(cljs.core.truth_(lt.objs.tabs.active_tab.call(null)))
{return lt.object.merge_BANG_.call(null,lt.plugins.gitstatusbar.container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitstatusbar","repo","lt.plugins.gitstatusbar/repo",1203910145),cljs.core.get.call(null,cljs.core.deref.call(null,lt.plugins.gitstatusbar.repos),lt.plugins.gitstatusbar.path__GT_repo_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.tabs.active_tab.call(null))))))], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitstatusbar","attach","lt.plugins.gitstatusbar/attach",4763329238),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitstatusbar.__BEH__attach,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
lt.plugins.gitstatusbar.__BEH__workspace = (function __BEH__workspace(this$){return lt.plugins.gitstatusbar.watch_dirs.call(null,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gitstatusbar","workspace","lt.plugins.gitstatusbar/workspace",2246026534),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gitstatusbar.__BEH__workspace,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set","set",1014018004),null,new cljs.core.Keyword(null,"updated","updated",779473965),null], null), null));
cljs.core.add_watch.call(null,lt.plugins.gitstatusbar.repos,new cljs.core.Keyword(null,"repos-watch","repos-watch",3938757301),(function (k,r,o,n){return lt.object.merge_BANG_.call(null,lt.plugins.gitstatusbar.container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gitstatusbar","repo","lt.plugins.gitstatusbar/repo",1203910145),(cljs.core.truth_(lt.objs.tabs.active_tab.call(null))?cljs.core.get.call(null,n,lt.plugins.gitstatusbar.path__GT_repo_path.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.tabs.active_tab.call(null)))))):null)], null));
}));
if(cljs.core.truth_(lt.objs.workspace.current_ws))
{lt.plugins.gitstatusbar.watch_dirs.call(null,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
} else
{}
}

//# sourceMappingURL=git status bar_compiled.js.map