# larkplayer-vr

[larkplayer](https://github.com/dblate/larkplayer) 插件，用于播放 360º 全景视频

* 基于 [kaleidoscope](https://github.com/thiagopnts/kaleidoscope) 开发
* pc 端通过鼠标拖拽转动视频角度
* 移动端通过手势拖拽转或晃动手机改变视频角度

## 下载

CDN

```javascript
<script type="text/javascript" src="https://unpkg.com/larkplayer-vr@latest/dist/larkplayer-vr.js"></script>
```

NPM

```shell
npm install larkplayer-vr
```

## 使用

```javascript
<!DOCTYPE html>
<html>
<head>
    <title>larkplayer vr test</title>
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0,user-scalable=no">
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/larkplayer@latest/dist/larkplayer.css">

    <style type="text/css">
        body { margin: 0; padding: 0; }
    </style>
</head>
<body>
    <video id="video-el" src="./daban.mp4" loop></video>

    <script type="text/javascript" src="https://unpkg.com/larkplayer@latest/dist/larkplayer.js"></script>
    <script type="text/javascript" src="https://unpkg.com/larkplayer-vr@latest/dist/larkplayer-vr.js"></script>

    <script type="text/javascript">
        var width = Math.min(document.body.clientWidth, 640);
        var options = {};
        var player = larkplayer('video-el', {
            width: width,
            height: width * 9 / 16,
            plugin: {
                /**
                 * larkplayer-vr 配置
                 *
                 * @param {Object=} options 配置项，可选
                 * @param {number} options.height canvas 高度，默认为播放器高度 
                 * @param {number} options.width canvas 宽度，默认为播放器宽度
                 * @param {number} options.initialYaw 视频初始化时的角度，比如 45, 90, 180
                 * @param {Function} options.onError 出错时的回调函数
                 * @param {Function} options.onDragStart 拖动开始时的回调函数
                 * @param {Function} options.onDragStop 拖动结束时的回调函数
                 * @param {boolean} options.verticalPanning 禁用垂直平移，默认 false
                 */
                vr: options
            }
        });
        
        // 将镜头恢复到初始位置
        // player.plugin.vr.centralize();
        
        // 销毁插件
        // player.plugin.vr.dispose();
    </script>
</body>
</html>
```

# 兼容性

__pc 端__

* chrome
* safari
* firefox
* edge
* ie11

__移动端__

* chrome
* safari

# License

MIT
