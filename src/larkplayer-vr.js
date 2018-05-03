/**
 * @file larkplayer vr(全景视频)插件
 * @author yuhui06
 * @date 2018/5/2
 */

import larkplayer from 'larkplayer';
import {Video} from 'kaleidoscopejs';
import assign from 'object-assign';

const Plugin = larkplayer.Plugin;

export default class Vr extends Plugin {
    constructor(player, options) {
        super(player, options);

        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.handleFullscreenChange = this.handleFullscreenChange.bind(this);

        this.viewer = new Video(assign({
            source: this.player.tech.el,
            containerId: '#' + this.player.el.id,
            width: this.player.width(),
            height: this.player.height()
        }, options));

        this.player.ready(() => {
            this.viewer.render();
        });

        this.player.on('fullscreenchange', this.handleFullscreenChange);
        this.player.off('click', this.player.handleClick);

        // @hack 防止浏览器进入全屏时，canvas 大小与播放器大小不一致
        // 如果 canvas 能将高宽设置为 100% 就好了
        larkplayer.Events.on(window, 'resize', this.handleWindowResize);
    }

    centralize() {
        this.viewer.centralize();
    }

    handleFullscreenChange() {
        this.viewer.setSize({
            width: this.player.width(),
            height: this.player.height()
        });
    }

    handleWindowResize() {
        if (this.player.isFullscreen()) {
            this.viewer.setSize({
                width: this.player.width(),
                height: this.player.height()
            }); 
        }
    }

    dispose() {
        this.viewer.destroy();
        this.player.off('fullscreenchange', this.handleFullscreenChange);
        this.player.on('click', this.player.handleClick);
        larkplayer.Events.off(window, 'resize', this.handleWindowResize);
    }

    static isSupported() {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext("experimental-webgl");

        return !!gl && gl instanceof WebGLRenderingContext;
    }
}

if (Vr.isSupported()) {
    Plugin.register(Vr, {name: 'vr'});
}


