# 两数相除分析

- 被除数 / 除数 = 商，被除数 = 除数 * 商
- 位运算左移 `<<` 相当于一个数乘以 2，而位运算右移 `>>` 相当于除以 2

**思路就是:**
让除数左移直到到大于被除数前的一个数

> 🤔 计算 `28 / 3`
>
> 进行三次左移操作，使 `3*2*2*2=3*8=24<28`
> 第四次左移操作会得到 `3*2^4=48 > 28`
> 记录下 `2*2*2=2^3=8`
>
> 再用 `28-24=4`，4 > 3的，所以就再像上面再计算 `4 / 3`，则得到 `3*2^0=3<4`，记录下 `2^0=1`
> 由于 `4-3=1` 小于除数 `3`，停止计算，并将每轮得到的值相加
> 在本例中即是 `8+1=9`，即商为 `9`
> 正常除也是`（28/3=9）`
> 结果正确

注意：需要考虑边界问题除数为 0，被除数为最小值而除数为 -1 的溢出问题。