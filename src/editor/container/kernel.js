/*
* @Author: yang
* @Date:   2018-02-05 12:51:25
* @Last Modified by:   yang
* @Last Modified time: 2018-02-06 11:08:23
*/

/**
 * 在这里注册插件
 */
import Vue from "vue";

import codeShow from '../../components/codeShow/codeShow.vue';
import imgUpload from '../../components/imgUpload/imgUpload.vue';
import imgBox from '../../components/imgBox/imgBox.vue';

import code from '../../components/common/code.vue';
import imageBox from '../../components/common/imageBox.vue';

const RegisterList={
	codeShow:Vue.extend(codeShow),
	imgUpload:Vue.extend(imgUpload),
	imgBox:Vue.extend(imgBox),
	code:Vue.extend(code),
	imageBox:Vue.extend(imageBox),
};
const CreatList={

}
export let Register=RegisterList;
export let Create=CreatList;
