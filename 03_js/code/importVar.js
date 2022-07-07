// 一般导入，名称和到出时一致
import {m1, m2} from './exportVar'

// 导入时重命名
import {m1 as m} from './exportVar'

// 导入默认的指定一个名字  ， 注意没有{}
import x from './exportVar'

// 导入再导出
export {m3} from './exportVar'

console.log(m1, m2)
