// 定义技能数据按分类
const categories = [
    {
        name: 'Language Skills',
        skills: [
            { name: 'CSS', percentage: '50%' },
            { name: 'HTML', percentage: '60%' },
            { name: 'JS', percentage: '60%' },
            { name: 'RUST', percentage: '80%' },
            { name: 'C', percentage: '90%' },
            { name: 'C++', percentage: '70%' },
            { name: 'Python', percentage: '70%' },
            { name: 'Lua', percentage: '60%' },
            { name: 'Shell', percentage: '70%' },
        ]
    },
    {
        name: 'Other Skills',
        skills: [
            { name: 'STM/ESP32', percentage: '60%' },
            { name: '3D-SolidWorks', percentage: '60%' },
            { name: 'PCB-Disign', percentage: '60%' },
            { name: 'Docker', percentage: '80%' },
            { name: 'DevOps', percentage: '70%' },
            { name: 'K8s', percentage: '50%' },
            { name: 'Git', percentage: '80%' },
        ]
    },
    
];

// 获取目标div
const skillsContainer = document.querySelector('.my_skills');

// 遍历每个分类
categories.forEach(category => {
    // 创建分类标题
    const categoryTitle = document.createElement('h1');
    categoryTitle.textContent = category.name;

    // 创建包含分类的盒子
    const categoryBox = document.createElement('div');
    categoryBox.className = 'box';

    // 将分类标题添加到分类盒子
    categoryBox.appendChild(categoryTitle);

    // 遍历每个技能并创建技能条
    category.skills.forEach(skill => {
        // 创建<p>元素并设置内容
        const p = document.createElement('p');
        p.textContent = skill.name;

        // 创建.progress div
        const progress = document.createElement('div');
        progress.className = 'progress';

        // 创建.progress-bar div
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.setProperty('--progress-width', skill.percentage); // 设置自定义属性

        // 创建<span>元素并设置内容
        const span = document.createElement('span');
        span.textContent = skill.percentage;

        // 组装进度条结构
        progressBar.appendChild(span);
        progress.appendChild(progressBar);

        // 将技能名和进度条添加到分类盒子
        categoryBox.appendChild(p);
        categoryBox.appendChild(progress);
    });

    // 将分类盒子添加到技能容器中
    skillsContainer.appendChild(categoryBox);
});