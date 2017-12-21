/*
* @Author: worldzb
* @Date:   2017-12-10 21:06:17
* @Last Modified by:   worldzb
* @Last Modified time: 2017-12-22 00:14:06
*/

import alignCenter from '../WDmenuItem/alignCenter.vue';
import alignLeft from '../WDmenuItem/alignLeft.vue';
import alignRight from '../WDmenuItem/alignRight.vue';

const comp={
	alignCenter:alignCenter,
	alignLeft:alignLeft,
	alignRight:alignRight,
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