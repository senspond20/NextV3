import React from "react";
import CustomMarkRender2 from "components/Molecules/CustomMarkRender2";


const CONTENT = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| 1 | 2 |
| 3| 4 |

~~~js
function sum(a,b){
    return a+b;
}
console.log(5,7);
~~~

~~~java
class Test{
    string name;
}
~~~
&lt;div class="note">ggg</div&gt;
\<div class="note">ggg\</div>
`

const handle = () =>{
    return(
        <CustomMarkRender2 content={CONTENT} />
    )

}
export default handle;