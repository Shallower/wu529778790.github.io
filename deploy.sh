#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf dist/

# 生成静态文件
pnpm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'blog.shenzjd.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/wu529778790/wu529778790.github.io.git main:gh-pages

cd -
