"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[89],{8665:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(7294),n=a(6010),r=a(2434),i=a(9960);const s="sidebar_a9qW",m="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD";var p=a(5999);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}const h=function(e){const{sidebar:t,toc:a,children:i,...s}=e,m=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},2754:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(7294),n=a(2263),r=a(8665),i=a(8561),s=a(5999),m=a(1750);const o=function(e){const{metadata:t}=e,{previousPage:a,nextPage:n}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,{permalink:a,title:l.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&l.createElement(m.Z,{permalink:n,title:l.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))};var c=a(5773);const d=function(e){const{metadata:t,items:a,sidebar:s}=e,{siteConfig:{title:m}}=(0,n.Z)(),{blogDescription:d,blogTitle:g,permalink:p}=t,u="/"===p?m:g;return l.createElement(r.Z,{title:u,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:s},a.map((e=>{let{content:t}=e;return l.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(o,{metadata:t}))}},8561:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(7294),n=a(6010),r=a(3905),i=a(5999),s=a(9960),m=a(4996),o=a(5773),c=a(8780),d=a(4689),g=a(6753);const p="blogPostTitle_rzP5",u="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j";var E=a(62);const b="image_o0gy";const v=function(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:i}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:b,src:i,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},_="authorCol_FlmR",N="imageOnlyAuthorRow_trpF",Z="imageOnlyAuthorCol_S2np";function f(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",r?N:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!r&&"col col--6",r?Z:_),key:t},l.createElement(v,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const k=function(e){const t=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,m.C)(),{children:b,frontMatter:v,assets:_,metadata:N,truncated:Z,isBlogPostPage:k=!1}=e,{date:P,formattedDate:T,permalink:w,tags:y,readingTime:C,title:L,editUrl:I,authors:R}=N,M=_.image??v.image,D=!k&&Z,U=y.length>0,A=k?"h1":"h2";return l.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(A,{className:p,itemProp:"headline"},k?L:l.createElement(s.Z,{itemProp:"url",to:w},L)),l.createElement("div",{className:(0,n.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:P,itemProp:"datePublished"},T),void 0!==C&&l.createElement(l.Fragment,null," \xb7 ",t(C))),l.createElement(f,{authors:R,assets:_})),M&&l.createElement("meta",{itemProp:"image",content:a(M,{absolute:!0})}),l.createElement("div",{id:k?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:d.Z},b)),(U||Z)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[h]:k})},U&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":D})},l.createElement(E.Z,{tags:y})),k&&I&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.Z,{editUrl:I})),D&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":U})},l.createElement(s.Z,{to:N.permalink,"aria-label":`Read more about ${L}`},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),n=a(5999),r=a(7462),i=a(6010);const s="iconEdit_dcUD";const m=function(e){let{className:t,...a}=e;return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var o=a(5773);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(m,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(9960);const r=function(e){const{permalink:t,title:a,subLabel:r}=e;return l.createElement(n.Z,{className:"pagination-nav__link",to:t},r&&l.createElement("div",{className:"pagination-nav__sublabel"},r),l.createElement("div",{className:"pagination-nav__label"},a))}},7774:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010),r=a(9960);const i="tag_hD8n",s="tagRegular_D6E_",m="tagWithCount_i0QQ";const o=function(e){const{permalink:t,name:a,count:o}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(i,{[s]:!o,[m]:o})},a,o&&l.createElement("span",null,o))}},62:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010),r=a(5999),i=a(7774);const s="tags_XVD_",m="tag_JSN8";function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:m},l.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);