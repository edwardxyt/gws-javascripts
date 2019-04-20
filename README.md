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
import {arraySort} from "@edwardxyt/gws-javascripts";

// 冒泡排序
arraySort.bubbleSort([1,2,3]).then(data => {
    log(data)
})
```