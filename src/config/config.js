/*
* @Author: worldzb
* @Date:   2017-12-10 20:54:06
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-01 23:21:21
*/

//字体选择
const fontFace=[
	{name:"微软雅黑",class:"YaHei"},
	{name:"宋体",class:"SimSun"},
	{name:"Courier New",class:"'Courier New', Courier, monospace"},
	{name:"Times new roman",class:"Times new roman"},
	{name:"新宋体",class:"NSimSun"},
	{name:"仿宋",class:"FangSong"},
	{name:"楷体",class:"KaiTi"},
	{name:"隶书",class:"LiSu"},
	{name:"幼圆",class:"YouYuan"},
	{name:"华文琥珀",class:"STHupo"},
	{name:"华文彩云",class:"STCaiyun"},
	{name:"Consoles",class:"Consolas, Monaco, monospace"},
	{name:"Arial",class:"Arial, Helvetica, sans-serif"},
	{name:"Arial Black",class:"Gadget, sans-serif"},
	{name:"Comic Sans MS",class:"'Comic Sans MS', cursive, sans-serif"},
	{name:"Impact",class:"Impact, Charcoal, sans-serif"},
	{name:"Verdana",class:"Verdana, Geneva, sans-serif"},
];

const imgUpload={
	url:'http://localhost:80/www3/home-server/public/imgUpload',
};

const codeShow={
	cdnUrl:"https://cdn.bootcss.com/monaco-editor/0.10.1/min",
}


const config={
	codeShow:codeShow,
	MenuTextShow:false,
	fontFace:fontFace,
	imgUpload:imgUpload,
	version:'1.0.0(内测版)',
}


export default config;

