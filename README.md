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

##### Cache
简单的内存缓存
###### Example:
创建实例

```javascript
    import { Cache } from '@edwardxyt/gws-javascripts'

    let cache = new Cache()

```

*set* *get*

set 通过一个key 设置value和有效期

```javascript

    import { Cache } from '@edwardxyt/gws-javascripts';

    let cache = new Cache();

    cache.set('key', 'value', 10);
    // => null

    cache.get('key');
    // => 'value'

    // ... 10s 后
    cache.get('key');
    // => null

```

##### DOMReady
监听浏览器DOM加载状态, 一旦DOM加载完成, 立即执行, 
跟jQuery.ready方法相同
###### Example:
```javascript
    import { DOMReady } from '@edwardxyt/gws-javascripts'

    DOMReady(()=>{
        // 会在DOM加载完成之后再执行
        somethine()
    })
```

##### NativeBridge
当前网页嵌入到App中, 需要与app通信时, 需要调用这个方法
###### Example:
```javascript
    import { NativeBridgeFactory } from '@edwardxyt/gws-javascripts';

    let receive_handler = function(receive_data){
        console.log(receive_data) // => {type: '', value: ''}
        // use this method receive data from App
    };

    const NativeBridge = new NativeBridgeFactory('Easyloan888');
    // 设置接受来自App的方法
    NativeBridge.onReceive(data => (){
        console.log(data)
    })

    NativeBridge.trigger('close'); // 关闭当前webview
    NativeBridge.toNative('coupon'); // 到app原生的优惠券页面
```

##### rules
正则集合
###### Example:
```javascript
    import { rules } from '@edwardxyt/gws-javascripts'
    // ... code
    <FormItem
        {...formItemLayout}
        label="真实姓名"
    >
        {getFieldDecorator('realName', {
            initialValue: current.realName,
            rules: [
                {
                    required: true,
                    message: '必填!',
                },
                {
                    pattern: rules.realNameReg,
                    message: rules.realNameMsg,
                },
            ],
        })(<Input placeholder="请输入真实姓名！" />)}
    </FormItem>
    // ...code
```