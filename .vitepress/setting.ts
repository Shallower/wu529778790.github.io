// typing --------------------------------------------------------------------

export interface SocialLink {
  icon: SocialLinkIcon;
  link: string;
}

export type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'mastodon'
  | 'slack'
  | 'twitter'
  | 'youtube'
  | { svg: string };

// setting --------------------------------------------------------------------

export const github = 'https://github.com/wu529778790/wu529778790.github.io';

export function createSocialLinks(): SocialLink[] {
  return [
    { icon: 'github', link: github },
    // {
    //   icon: {
    //     svg: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    //     <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    //     <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">  <image id="image0" width="32" height="32" x="0" y="0"
    //         xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDo
    //     AAB1MAAA6mAAADqYAAAXcJy6UTwAAAHIUExURQAAAB6A/x+A/x6B/x56/x6A/x6A/x6A/x6A/x6A
    //     /x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A
    //     /x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A
    //     /x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A
    //     /x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A
    //     /x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A
    //     /x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A
    //     /x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A
    //     /x6A/x6A/x6A/x6A/x6A/x6A/x6A/x6A/////3Hr+NgAAACWdFJOUwAAAAAABl1bBRCG9POEDyWr
    //     /KkkcfkLc+wEAk7Z2CGXYCphmDvIEYh7+K0mr3oIaujOQwFF0OdpDANoB883tnAJ9pSWcrc4Y94Y
    //     /hnyvDDj4l4yvfFa39pSPMdT21jD7nkgpKIfDe/CNh2f+qEKHp4cd8Q6xu11UODh108vuoOFuS4X
    //     9yOskxZs6dHSa0YosP0nEor1ib0wTV4AAAABYktHRJfmbhuvAAAAB3RJTUUH5wYUBxETRYbAuQAA
    //     AF50RVh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAppcHRjCiAgICAgIDI4CjM4NDI0OTRkMDQwNDAw
    //     MDAwMDAwMDAwZjFjMDI2ZTAwMDM1MjQ2NDcxYzAyMDAwMDAyMDAwNDAwCmCaPZ4AAAHTSURBVDjL
    //     rVNpV1JRFH1bk55AISFPAVEQQXEgFTWQVDBDUsws5yErc8rU5tGZyjFNsvt7PfcBLizAtVqeD3fd
    //     u+9+5+6z3zmCcMkBioz3OYqrIjJ8nqtUqa9dT5cE0ORpGdPe0KVhAPl6RqHPT0uQCgoZKyyQUhAA
    //     gxECjKYis0neGM6TgOISC8kHrFa6gVhqK05mAGV2plY6YhjgKFcxe1kSA8YKJ8mv1HAMqKqmYpw1
    //     xuQUrpu1pL+u3g24Gxpp23TLhUR6j5dejcPNPp9MvU1UAQYPF9TS2uZHInGg/U4g8Rj8HXeDEDpD
    //     zFlyj/8kLo11dbGYXKDb5mShTqE8TGjPfbk4Sy938kGfXPDDR8TtVwriwCCBQ8NcCEbsjI3y+uAd
    //     Gyc4NCEKyGp5TNvJJx5kA0+fTT3n6acrZgicnYvVPf9igbGFl/P8Rlrk69IUIfrlV3GvIL2eJP6b
    //     4JW4k2/f0fH9B+nMKXg/mgn6JHcTRMVnOnz5es5JrKyS5vBaLnXVuprq2tj8+3dutUfIobxvuu/k
    //     V+TH9j89AdfOLmXe26el9sCVoqfg/rnH5GhscKfsOeDw6Bc9U32cvq2jv09Uf6IZZocGR5GTebQu
    //     GL3/iVNGTHdSXGp/KgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNi0yMFQwNzoxNzoxOSswMDow
    //     MHsX18oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDYtMjBUMDc6MTc6MTkrMDA6MDAKSm92AAAA
    //     KHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA2LTIwVDA3OjE3OjE5KzAwOjAwXV9OqQAAAABJRU5E
    //     rkJggg==" />
    //     </svg>`
    //   },
    //   link: 'https://juejin.cn/user/1169536104532829'
    // }
  ];
}

export function createAlgolia() {
  return {
    apiKey: 'b537815b63bd12a83511061a06d783b9',
    indexName: '',
    // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
    appId: '',
    placeholder: '请输入关键词',
    translations: {
      button: {
        buttonText: '搜索文档'
      }
    }
  };
}
