/*
* @Author: worldzb
* @Date:   2017-12-10 21:06:17
* @Last Modified by:   worldzb
* @Last Modified time: 2017-12-26 00:19:06
*/

import alignCenter from '../WDmenuItem/alignCenter.vue';
import alignLeft from '../WDmenuItem/alignLeft.vue';
import alignRight from '../WDmenuItem/alignRight.vue';
import bold from '../WDmenuItem/bold.vue';
import italic from '../WDmenuItem/italic.vue';
import underline from '../WDmenuItem/underline.vue';
import imageUpload from '../WDmenuItem/imageUpload.vue'
import test from '../WDmenuItem/test.vue';

const comp={
	alignCenter:alignCenter,
	alignLeft:alignLeft,
	alignRight:alignRight,
	bold:bold,
	italic:italic,
	underline:underline,
	imageUpload:imageUpload,
	test:test,
	
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