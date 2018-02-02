/*
* @Author: worldzb
* @Date:   2017-12-10 21:06:17
* @Last Modified by:   yang
* @Last Modified time: 2018-02-02 15:18:40
*/

import alignCenter from '../WDmenuItem/alignCenter.vue';
import alignLeft from '../WDmenuItem/alignLeft.vue';
import alignRight from '../WDmenuItem/alignRight.vue';
import bold from '../WDmenuItem/bold.vue';
import italic from '../WDmenuItem/italic.vue';
import underline from '../WDmenuItem/underline.vue';
import imageUpload from '../WDmenuItem/imageUpload.vue';
import listOL from '../WDmenuItem/listOL.vue';
import listUL from '../WDmenuItem/listUL.vue';

import indent from '../WDmenuItem/indent.vue';
import outdent from '../WDmenuItem/outdent.vue';

import heading from '../WDmenuItem/heading.vue';

import about from '../WDmenuItem/about.vue';
import wdCode from '../WDmenuItem/code.vue';
import test from '../WDmenuItem/test.vue';
import horizontal from '../WDmenuItem/horizontal.vue';
import textColor from '../WDmenuItem/textColor.vue';
import fontBgc from '../WDmenuItem/fontBackgroundColor.vue';
import fontFamily from '../WDmenuItem/fontFamily.vue';
import preview from '../WDmenuItem/preview.vue';

const comp={
	alignCenter:alignCenter,
	alignLeft:alignLeft,
	alignRight:alignRight,
	bold:bold,
	italic:italic,
	underline:underline,
	imageUpload:imageUpload,
	listOL:listOL,
	listUL:listUL,
	indent:indent,
	outdent:outdent,
	test:test,
	about:about,
	heading:heading,
	wdCode:wdCode,
	horizontal:horizontal,
	textColor:textColor,
	fontBgc:fontBgc,
	fontFamily:fontFamily,
	preview:preview,
}
const compList=[
	{
		name:'alignCenter',
		comp:alignCenter,
		isRender:true
	},
	{
		name:'alignLeft',
		comp:alignLeft,
		isRender:true
	}
]

export default {
	comp:comp, 
	complist:compList
};