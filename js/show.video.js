const videoItems = document.querySelectorAll('.video-item');
const mainVideo = document.getElementById('mainVideo');
const videoTitle = document.getElementById('videoTitle');
const descriptions = {
    '赛龙舟': {
        title: "赛龙舟文化展示",
        content: `
                    <div class="info-section">
                        <h3>简介</h3>
                        <p>赛龙舟是中国传统体育项目，已有2000多年历史。每年农历五月初五端午节期间，在全国各地的江河湖海上都会举行龙舟竞渡活动。</p>
                    </div>
                    <div class="info-section">
                        <h3>历史渊源</h3>
                        <p>相传起源于春秋战国时期的楚国，与纪念爱国诗人屈原有关。后来逐渐发展成为端午节的重要民俗活动，象征着吉祥、驱邪避灾。</p>
                    </div>
                    <div class="info-section">
                        <h3>文化内涵</h3>
                        <p>龙舟竞渡承载着深厚的文化内涵：</p>
                        <ul>
                            <li>爱国精神：纪念屈原，传承爱国情怀</li>
                            <li>团结协作：数十人同舟共济，展现团队精神</li>
                            <li>顽强拼搏：劈波斩浪，体现奋斗精神</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>现代发展</h3>
                        <p>如今，赛龙舟已成为国际性体育赛事，是中国优秀传统文化走向世界的重要载体。2006年，龙舟运动被列入第一批国家级非物质文化遗产名录。</p>
                    </div>`
    },
    '剪纸艺术': {
        title: "剪纸艺术展示",
        content: `
                    <div class="info-section">
                        <h3>简介</h3>
                        <p>剪纸是中国最普及的民间艺术形式之一，用剪刀或刻刀在纸上剪刻出各种图案，寄托着人们对美好生活的向往。</p>
                    </div>
                    <div class="info-section">
                        <h3>艺术特色</h3>
                        <p>剪纸艺术具有鲜明的特点：</p>
                        <ul>
                            <li>构图对称：讲究匀称、均衡</li>
                            <li>寓意深远：图案都包含美好寓意</li>
                            <li>技法多样：剪、刻、贴、绘结合</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>文化价值</h3>
                        <p>剪纸不仅是一种艺术形式，更是中国传统文化的重要载体，记录着人们的生活方式、民间习俗和审美情趣。2009年，中国剪纸入选联合国教科文组织人类非物质文化遗产代表作名录。</p>
                    </div>`
    },
    '皮影戏': {
        title: "皮影戏展示",
        content: `
                    <div class="info-section">
                        <h3>简介</h3>
                        <p>皮影戏是一种用皮革制作的人物剪影在幕后表演的戏剧，被誉为"光影艺术"的鼻祖。</p>
                    </div>
                    <div class="info-section">
                        <h3>艺术特色</h3>
                        <p>皮影戏融合多种艺术形式：</p>
                        <ul>
                            <li>造型美：皮影造型精美，雕刻细腻</li>
                            <li>音乐美：配以地方曲调，韵味独特</li>
                            <li>表演美：操作技巧精湛，形神兼备</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>传承发展</h3>
                        <p>皮影戏历经千年传承，2011年被联合国教科文组织列入人类非物质文化遗产代表作名录。现代皮影戏在保持传统特色的同时，也在不断创新表现形式。</p>
                    </div>`
    },
    '茶艺': {
        title: "茶艺展示",
        content: `
                    <div class="info-section">
                        <h3>简介</h3>
                        <p>茶艺是中国特有的一种饮茶文化，包含沏茶、赏茶、闻茶、饮茶等一系列艺术化的饮茶方式。</p>
                    </div>
                    <div class="info-section">
                        <h3>文化内涵</h3>
                        <p>茶艺体现了中国传统文化的精髓：</p>
                        <ul>
                            <li>礼仪之道：体现待人接物之道</li>
                            <li>修身养性：提升个人品格修养</li>
                            <li>天人合一：追求人与自然的和谐</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>现代价值</h3>
                        <p>茶艺不仅是一种技艺，更是一种生活态度。它让现代人在繁忙的生活中找到片刻宁静，感受传统文化的魅力。2008年，中国茶艺被列入国家级非物质文化遗产名录。</p>
                    </div>`
    }
};

videoItems.forEach(item => {
    item.addEventListener('click', function () {
        videoItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        const videoSrc = this.getAttribute('data-video');
        mainVideo.src = videoSrc;
        mainVideo.load();
        mainVideo.play();

        const title = this.getAttribute('data-title');
        if (descriptions[title]) {
            videoTitle.textContent = descriptions[title].title;
            document.querySelector('.info-content').innerHTML = descriptions[title].content;
        }
    });
});