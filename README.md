# psd-analyze
psd-analyze

## 安装
	npm install psd-analyze -g

## 语法
 	psd -n psd名称(不需要后缀)
## PSD结构要求(图层置顶)
![PSD结构要求](http://ww4.sinaimg.cn/large/65e4f1e6gw1f7ad2a0vd0j20cw0k2my4.jpg)

## 示例
![示例](http://ww2.sinaimg.cn/large/006y8lVagw1f779n1024zj30di02ywen.jpg)

## 目录结构
![目录结构](http://ww2.sinaimg.cn/large/006y8lVagw1f779kh743gj30fo05yjrn.jpg)

## 运行命令后的目录结构
![目录结构2](http://ww1.sinaimg.cn/large/006y8lVagw1f779o0qgrqj30lg0du3zm.jpg)

## 备注
psd图层命名只能用英文, 这是因为psd-analyze会将图层的名字当做元素的class, 如图:
![psd](http://ww1.sinaimg.cn/large/801b780agw1f7ezyhp286j20zk0iejxg.jpg)

一般来说, 设计给到的psd不可能将所有图层都放在顶层结构. 我们在切图的时候,把可以合并的图层给合并了,然后将图层置顶, 养成shift+ctrl+s的习惯, 把当前操作的psd部分另存为 xxx.psd , 这样也方便维护图层.