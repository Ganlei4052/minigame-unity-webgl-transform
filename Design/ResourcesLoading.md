# 资源按需加载概述

​		区别于原生 APP 游戏很少考虑场景内的资源规划问题，开发时通常将资源在游戏启动时全加载到内存中，而小游戏需要做到“即点即玩”，影响游戏的呈现速度因素中如首资源包的下载往往占比较大，因此需要根据场景中的主次内容进行资源上的优化分包处理。

​		目前分包将基于 AA/AB 包的按需加载，以及 Unity Instant Game 三种方案。值得注意的是，微信小游戏环境中**不支持对本地的 Bundle 进行加载**，因此无论哪种方案最终都采用上传 CDN 方式在游戏运行时异步按需下载。

#### AA包、AB包、Instant Game 方案选择说明

> 相关手册：[AA(Addressable) 进行资源按需加载](UsingAddressable.md) 、 [AB(AssetBundle)进行资源按需加载](UsingAssetBundle.md) 、[Instant Game 实践指南](InstantGameGuide.md)

​		AA/AB 包是常规的分包解决方案，关于他们的选择对于轻度游戏来说两者没有特别要求，倒是功能强大的 AA包 使用门槛更低一些，而对于重度游戏，平台目前所反馈到的结论是使用 **AB包** 的性能要比 AA包 更好，AA包较大项目时生成的未压缩的 catalog 较大，加载效率低，改用 AB包后，效果提升明显。

​		Instant Game 是由 Unity 官方提供的自动加载方案，有关 Instant Game 详细内容可查阅 **Instant Game 实践指南**，本节说明三种方案的差异：

|                | 常规资源加载方案（AA/AB包） | Instant Game 工具              |
| -------------- | --------------------------- | ------------------------------ |
| 技术原理       | 基于 AA/AB 包的异步资源管理 | Unity引擎底层资源异步加载策略  |
| 引擎版本       | 不限制                      | 目前需指定版本 2021.2.5        |
| 转化人力       | 适中                        | 较少/适中                      |
| 懒加载资源类型 | 常见纹理资源                | 纹理、模型、骨骼动画、音频资源 |
| 自选CDN        | 支持                        | 不支持（需使用腾讯云CDN服务）  |
| 必要的代码修改 | 通常需要适配                | 较少/达到最佳仍需要            |
| 首资源包处理   | 通常需要适配                | 默认不需要/达到最佳仍需要      |

**选择建议：**

- 游戏工程本身已采用完善的 AA/AB 资源管理，建议继续沿用常规资源加载方案，且有助于后续压缩纹理等优化工作的进行有效提升游戏运行性能；
- 原生 APP 版本游戏完全没有做资源的拆包，希望减少游戏的转化周期，使用 Instant Game 方案可以快速完成转化工作。



### 各类型游戏的优化侧重点

​		不同的游戏所需要的性能不尽相同，转化过程中的复杂度以及关注的侧重点自然也是不同的。游戏开发者可以根据自己游戏的类型进行不同的优化策略来提升实际的游戏体验，本节总结的列举开发者对不同类型的游戏应重点关注的优化内容。

- **小型游戏**

 特点：游戏总包体积较小，“关卡”休闲类小游戏等。

 **关注**：快速适配对微信API能力的接入，性能上重点对首场景启动优化，关卡分包加载（主关卡优先，后续关卡按需加载等）。

- **原生 APP 平台采用本地 AB/AA 包的游戏**

 特点：游戏原本发布原生 APP 平台，开发时为优化运行时内存，将游戏资源以 AA/AB 包方式存放于磁盘本地，在游戏运行时适宜的位置进行加载/卸载。

 **关注**：将 AA/AB 资源包改用 CDN 远程加载，及时卸载不再使用的资源包释放内存，使用纹理压缩工具降低纹理资源大小提升渲染效率。

- **大型无 AB 游戏**

 特点：游戏较大，但未使用 AA/AB 包方式进行分包管理，或较少使用，场景中必须与非及时资源在启动时一并加载。

 **关注**：该类游戏需要耐心调优，重点关注游戏运行时的内存优化。需将游戏内资源逐一拆分，推荐使用 AB包 方式进行按需加载与及时资源释放，对多 Scene 时对后续场景使用 AA/AB分包方式载入，做好资源加载过程中的UI上的进度条反馈。推荐使用纹理压缩工具、WASM代码分包、资源预下载等能力优化，效果提升明显。