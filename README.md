# neutralino-vitesse-lite-template
一个neutralinojs + vitesse-lite 的起始模版


## Usage

### Development
#### 1.先build vitesse项目
```bash
  pnpm build
```
#### 2.再dev vitesse项目
```bash
  pnpm dev
```
#### 3.最后 再启动另外一个终端 dev neutralino项目
```bash
  pnpm neu:dev
```
如果不出意外的话修改页面如pages/index.vue，可以立即看到热更新，说明成功

### Build
```bash
pnpm neu:build
```
打包生成的可执行文件在/dist/项目名/里
