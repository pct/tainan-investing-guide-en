	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingBackground="#323232";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.logoHeight="40";
bookConfig.logoPadding="0";
bookConfig.logoTop="0";
bookConfig.toolbarColor="#444444";
bookConfig.iconColor="#CCCCCC";
bookConfig.pageNumColor="#333333";
bookConfig.iconFontColor="#FFFFFF";
bookConfig.toolbarAlwaysShow="No";
bookConfig.formFontColor="#27181A";
bookConfig.formBackgroundColor="#27181A";
bookConfig.InstructionsButtonVisible="Show";
bookConfig.showInstructionOnStart="No";
bookConfig.showGotoButtonsAtFirst="No";
bookConfig.QRCode="Hide";
bookConfig.HomeButtonVisible="Hide";
bookConfig.HomeURL="%first page%";
bookConfig.aboutButtonVisible="Hide";
bookConfig.enablePageBack="Hide";
bookConfig.ShareButtonVisible="Show";
bookConfig.isInsertFrameLinkEnable="Show";
bookConfig.addCurrentPage="No";
bookConfig.EmailButtonVisible="Show";
bookConfig.btnShareWithEmailBody="\{link\}";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.BookMarkButtonVisible="Hide";
bookConfig.TableOfContentButtonVisible="Show";
bookConfig.isHideTabelOfContentNodes="yes";
bookConfig.SearchButtonVisible="Show";
bookConfig.leastSearchChar="3";
bookConfig.searchFontColor="#FFFFFF";
bookConfig.searchKeywordFontColor="#FFB000";
bookConfig.searchHightlightColor="#FDC606";
bookConfig.SelectTextButtonVisible="Hide";
bookConfig.PrintButtonVisible="Hide";
bookConfig.BackgroundSoundButtonVisible="Show";
bookConfig.FlipSound="No";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="Show";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="3";
bookConfig.autoPlayLoopCount="1";
bookConfig.ZoomButtonVisible="Show";
bookConfig.maxZoomWidth="0";
bookConfig.defaultZoomWidth="0";
bookConfig.mouseWheelFlip="yes";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.PhoneButtonVisible="Hide";
bookConfig.AnnotationButtonVisible="Hide";
bookConfig.FullscreenButtonVisible="Show";
bookConfig.WeChatShareButtonVisible="Hide";
bookConfig.bgBeginColor="#FFFFFF";
bookConfig.bgEndColor="#FFFFFF";
bookConfig.bgMRotation="90";
bookConfig.backgroundPosition="stretch";
bookConfig.backgroundOpacity="100";
bookConfig.backgroundScene="None";
bookConfig.LeftShadowWidth="100";
bookConfig.LeftShadowAlpha="1";
bookConfig.RightShadowWidth="40";
bookConfig.RightShadowAlpha="1";
bookConfig.ShowTopLeftShadow="Yes";
bookConfig.HardPageEnable="No";
bookConfig.hardCoverBorderWidth="8";
bookConfig.borderColor="#572F0D";
bookConfig.outerCoverBorder="Yes";
bookConfig.cornerRound="8";
bookConfig.leftMarginOnMobile="0";
bookConfig.topMarginOnMobile="0";
bookConfig.rightMarginOnMobile="0";
bookConfig.bottomMarginOnMobile="0";
bookConfig.pageBackgroundColor="#FFFFFF";
bookConfig.flipshortcutbutton="Show";
bookConfig.BindingType="side";
bookConfig.RightToLeft="No";
bookConfig.FlipDirection="0";
bookConfig.flippingTime="0.3";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.autoDoublePage="Yes";
bookConfig.isTheBookOpen="No";
bookConfig.thicknessWidthType="Thick";
bookConfig.thicknessColor="#FFFFFF";
bookConfig.SingleModeBanFlipToLastPage="No";
bookConfig.showThicknessOnMobile="No";
bookConfig.isSingleBookFullWindowOnMobile="no";
bookConfig.isStopMouseMenu="yes";
bookConfig.restorePageVisible="no";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="10";
bookConfig.rightMargin="10";
bookConfig.hideMiniFullscreen="no";
bookConfig.maxWidthToSmallMode="400";
bookConfig.maxHeightToSmallMode="350";
bookConfig.leftRightPnlShowOption="None";
bookConfig.highDefinitionConversion="yes";
bookConfig.LargeLogoPosition="top-left";
bookConfig.LargeLogoTarget="Blank";
bookConfig.isFixLogoSize="No";
bookConfig.logoFixWidth="0";
bookConfig.logoFixHeight="0";
bookConfig.updateURLForPage="No";
bookConfig.LinkDownColor="#0000FF";
bookConfig.LinkAlpha="0.4";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";

bookConfig.macBookVersion = "GJXYrvDITQlrFJYdmpOASSmjOGVcsiEGZVtlOPfapnINcVkkFHYWihHHecmgGBcXugGJWRuhMOYVhvOEeWttPHdZluGOQehoFGfXtnCNWWklCAYSb5aA156D_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=44;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Demo";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF Professional";
bookConfig.MidBgColor="#dbac18";
bookConfig.bookmarkCR = "ced5516fd3a967c40cd70d75fa49f794f535f782";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next","btnLastPage" : "Last","btnPrePage" : "Previous","btnGoToHome" : "Home","btnDownload" : "Download","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnPrint" : "Print","btnThumb" : "Thumbnails","btnBookMark" : "Bookmark","frmBookMark" : "Bookmark","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnSocialShare" : "Share","btnHelp" : "Help","btnAbout" : "About","btnSearch" : "Search","btnFullscreen" : "Fullscreen","btnExitFullscreen" : "Exit Fullscreen","btnMore" : "More","frmPrintCaption" : "Print","frmPrintall" : "Print All Pages","frmPrintcurrent" : "Print Current Page","frmPrintRange" : "Print Range","frmPrintexample" : "Example: 2,3,5-10","frmPrintbtn" : "Print","frmShareCaption" : "Share","frmShareLabel" : "Share","frmShareInfo" : "You can easily share this publication to social networks.Just click the appropriate button below","frminsertLabel" : "Insert to Site","frminsertInfo" : "Use the code below to embed this publication to your website.","frmaboutcaption" : "Contact","frmaboutcontactinformation" : "Contact Information","frmaboutADDRESS" : "Address","frmaboutEMAIL" : "Email","frmaboutWEBSITE" : "Website","frmaboutMOBILE" : "Mobile","frmaboutAUTHOR" : "Author","frmaboutDESCRIPTION" : "Description","frmSearch" : "Search","frmToc" : "Table Of Contents","btnTableOfContent" : "Table Of Contents","btnNote" : "Annotation","lblLast" : "This is the last page.","lblFirst" : "This is the first page.","lblFullscreen" : "Click to view in fullscreen","lblName" : "Name","lblPassword" : "Password","lblLogin" : "Login","lblCancel" : "Cancel","lblNoName" : "User name can not be empty.","lblNoPassword" : "Password can not be empty.","lblNoCorrectLogin" : "Please enter the correct user name and password.","btnVideo" : "Video Gallery","btnSlideShow" : "Slideshow","pnlSearchInputInvalid" : "The search text is too short.","btnDragToMove" : "Move by mouse drag","btnPositionToMove" : "Move by mouse position","lblHelp1" : "Drag the page corner to view","lblHelp2" : "Double click to zoom in, out","lblCopy" : "Copy","lblAddToPage" : "Add To Page","lblPage" : "Page","lblTitle" : "Title","lblEdit" : "Edit","lblDelete" : "Delete","lblRemoveAll" : "Remove All","tltCursor" : "Cursor","tltAddHighlight" : "Add highlight","tltAddTexts" : "Add texts","tltAddShapes" : "Add shapes","tltAddNotes" : "Add notes","tltAddImageFile" : "Add image file","tltAddSignature" : "Add signature","tltAddLine" : "Add line","tltAddArrow" : "Add arrow","tltAddRect" : "Add rect","tltAddEllipse" : "Add ellipse","lblDoubleClickToZoomIn" : "Double click to zoom in.","lblPages" : "Pages","infCopyToClipboard" : "Your browser dose not support clipboard, please do it yourself.","lblDescription" : "Title","frmLinkLabel" : "Link","infNotSupportHtml5" : "Your browser does not support HTML5.","frmHowToUse" : "How To Use","lblHelpPage1" : "Move your finger to flip the book page.","lblHelpPage2" : "Zoom in by using gesture or double click on the page.","lblHelpPage3" : "Click to view the table of content, bookmarks and share your books via social networks.","lblHelpPage4" : "Add bookmarks, use search function and auto flip the book.","lblHelpPage5" : "Open the thumbnails to overview all book pages.","frmQrcodeCaption" : "Scan the bottom two-dimensional code to view with mobile phone."}];var pageEditor =[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.237607",y:"0.304738",width:"0.156031",height:"0.013676"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://economic.tainan.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.192960",y:"0.325015",width:"0.217882",height:"0.013676"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:investtainan@mail.tainan.gov.tw"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.422098",y:"0.230930",width:"0.123344",height:"0.011517"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:recruit@moea.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.459973",y:"0.249070",width:"0.135577",height:"0.011517"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://investtaiwan.nat.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.422102",y:"0.385544",width:"0.107879",height:"0.011517"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:dois@moea.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.459974",y:"0.421825",width:"0.132119",height:"0.011517"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.dois.moea.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.422098",y:"0.505950",width:"0.126300",height:"0.011517"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:serve@moeaic.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.459974",y:"0.542230",width:"0.114640",height:"0.011517"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.moeaic.gov.tw"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.324543",y:"0.539706",width:"0.185904",height:"0.016687"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://economic.tainan.gov.tw"}}]]
var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}