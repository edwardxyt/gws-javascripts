# Browser: @edwardxyt/gws-javascripts
用于nodejs 常用工具类。
## Installation

```
npm install @edwardxyt/gws-javascripts
```
## Usage

```
import gwsJS from "@edwardxyt/gws-javascripts";
```
## Methods
##### arraySort(arr)
数组排序
###### Example:
```
import {ArraySort} from "@edwardxyt/gws-javascripts";
let {bubbleSort} = new ArraySort();

// 冒泡排序
bubbleSort([1,2,3]).then(data => {
    console.log(data)
})
```

##### Components
动态组件 具体请看 [@edwardxyt/gws-components](https://www.npmjs.com/package/@edwardxyt/gws-components)
###### Example:
```
import { Components } from '@edwardxyt/gws-javascripts';

Components.showAlert('URL中没有获取到 fincId');
```