// قيم عامة وآمنة للنشر (المفتاح publishable وليس سرياً)
window.QM={url:'https://qyhfgbraybwfsfzdrsrw.supabase.co',key:'sb_publishable_XlITAYT54_pqmi0Qpf-gKw_mTrkFrGW',wa:'9647828459666'};
window.db=supabase.createClient(QM.url,QM.key);
window.esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
window.priceOf=(pk,q)=>{const t=(pk.price_tiers||[]).filter(t=>t.min_qty<=q).sort((a,b)=>b.min_qty-a.min_qty)[0];return t?+t.price:(pk.price==null?null:+pk.price)};
window.fmt=n=>n==null?'السعر عند الطلب':Number(n).toLocaleString('en')+' د.ع';
