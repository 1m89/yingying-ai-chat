<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>萤梦间 - 光之碎片</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      overflow: hidden;
      background: #0a0a1a;
      cursor: default;
    }

    /* 主容器 */
    .container {
      position: relative;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    /* 背景图层 */
    .background-layer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      animation: breathe 8s ease-in-out infinite;
    }

    /* 呼吸动画 */
    @keyframes breathe {
      0%, 100% {
        filter: brightness(1) contrast(1);
      }
      50% {
        filter: brightness(1.08) contrast(1.05);
      }
    }

    /* 悬浮动画 */
    @keyframes float {
      0%, 100% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(0, -15px);
      }
    }

    @keyframes floatSlow {
      0%, 100% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(0, -10px);
      }
    }

    /* Logo区域 */
    .logo-area {
      position: absolute;
      top: 8%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      z-index: 10;
      opacity: 0;
      animation: fadeInDown 1.2s ease-out 0.5s forwards;
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }

    .logo-title {
      font-size: 2.5em;
      font-weight: 300;
      color: #f5f0e8;
      text-shadow: 0 0 30px rgba(245, 240, 232, 0.4);
      letter-spacing: 12px;
      margin-bottom: 8px;
    }

    .logo-subtitle {
      font-size: 0.85em;
      color: #c5b8d4;
      letter-spacing: 6px;
      opacity: 0.8;
    }

    /* 粒子画布 */
    #particles {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 5;
      pointer-events: none;
    }

    /* 点击热区基础样式 */
    .hotspot {
      position: absolute;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 20;
      opacity: 0;
      animation: spotAppear 1s ease-out forwards;
    }

    @keyframes spotAppear {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* 点击波纹效果 */
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(245, 240, 232, 0.6) 0%, transparent 70%);
      pointer-events: none;
      animation: rippleEffect 0.8s ease-out;
    }

    @keyframes rippleEffect {
      0% {
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        width: 300px;
        height: 300px;
        opacity: 0;
      }
    }

    /* 悬停提示 */
    .hotspot-hint {
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translateX(-50%);
      padding: 8px 20px;
      background: rgba(245, 240, 232, 0.2);
      backdrop-filter: blur(15px);
      border-radius: 25px;
      border: 1px solid rgba(245, 240, 232, 0.3);
      color: #f5f0e8;
      font-size: 0.9em;
      letter-spacing: 3px;
      white-space: nowrap;
      opacity: 0;
      transition: all 0.3s ease;
      pointer-events: none;
    }

    .hotspot:hover .hotspot-hint {
      opacity: 1;
      bottom: -55px;
    }

    /* 悬停光晕 */
    .hotspot::before {
      content: '';
      position: absolute;
      inset: -30px;
      background: radial-gradient(circle, rgba(232, 220, 192, 0.3) 0%, transparent 60%);
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
      border-radius: 50%;
    }

    .hotspot:hover::before {
      opacity: 1;
      animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 0.3;
      }
      50% {
        transform: scale(1.2);
        opacity: 0.5;
      }
    }

    /* ========== 手机版布局 ========== */
    @media (max-width: 768px) {
      .background-layer {
        background-image: url('/mnt/user-data/uploads/1765410440164_e84bc4bbf1ee95b7eef7537882f589a7_720.png');
      }

      .logo-title {
        font-size: 2em;
        letter-spacing: 8px;
      }

      .logo-subtitle {
        font-size: 0.75em;
        letter-spacing: 4px;
      }

      /* 探索碎片 - 中上最大 */
      .hotspot-explore {
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 200px;
        animation-delay: 0.5s;
      }

      .hotspot-explore::after {
        content: '';
        position: absolute;
        inset: 0;
        animation: float 6s ease-in-out infinite;
      }

      /* 小屋碎片 - 中左 */
      .hotspot-home {
        top: 48%;
        left: 20%;
        width: 140px;
        height: 140px;
        animation-delay: 0.7s;
      }

      .hotspot-home::after {
        content: '';
        position: absolute;
        inset: 0;
        animation: floatSlow 7s ease-in-out infinite 1s;
      }

      /* 创作碎片 - 中右 */
      .hotspot-create {
        top: 50%;
        right: 18%;
        width: 140px;
        height: 140px;
        animation-delay: 0.9s;
      }

      .hotspot-create::after {
        content: '';
        position: absolute;
        inset: 0;
        animation: floatSlow 7s ease-in-out infinite 0.5s;
      }
    }

    /* ========== 电脑版布局 ========== */
    @media (min-width: 769px) {
      .background-layer {
        background-image: url('/mnt/user-data/uploads/1765410443917_c83150f8e98c67d88872675e2fc06ebf_720.png');
      }

      .logo-title {
        font-size: 3.5em;
        letter-spacing: 16px;
      }

      .logo-subtitle {
        font-size: 1em;
      }

      /* 探索碎片 - 左侧大块 */
      .hotspot-explore {
        top: 40%;
        left: 25%;
        width: 280px;
        height: 320px;
        animation-delay: 0.5s;
      }

      .hotspot-explore::after {
        content: '';
        position: absolute;
        inset: 0;
        animation: float 7s ease-in-out infinite;
      }

      /* 创作碎片 - 右上 */
      .hotspot-create {
        top: 30%;
        right: 25%;
        width: 180px;
        height: 200px;
        animation-delay: 0.7s;
      }

      .hotspot-create::after {
        content: '';
        position: absolute;
        inset: 0;
        animation: floatSlow 8s ease-in-out infinite 1s;
      }

      /* 小屋碎片 - 右下 */
      .hotspot-home {
        bottom: 28%;
        right: 20%;
        width: 180px;
        height: 200px;
        animation-delay: 0.9s;
      }

      .hotspot-home::after {
        content: '';
        position: absolute;
        inset: 0;
        animation: floatSlow 8s ease-in-out infinite 0.5s;
      }
    }

    /* 调试模式（可选） */
    .debug .hotspot {
      background: rgba(255, 0, 0, 0.2);
      border: 2px dashed red;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- 背景层 -->
    <div class="background-layer"></div>

    <!-- 粒子画布 -->
    <canvas id="particles"></canvas>

    <!-- Logo -->
    <div class="logo-area">
      <div class="logo-title">萤梦间</div>
      <div class="logo-subtitle">FIREFLY DREAM</div>
    </div>

    <!-- 探索碎片热区 -->
    <div class="hotspot hotspot-explore" data-action="explore">
      <div class="hotspot-hint">开始探索</div>
    </div>

    <!-- 小屋碎片热区 -->
    <div class="hotspot hotspot-home" data-action="home">
      <div class="hotspot-hint">旅者小屋</div>
    </div>

    <!-- 创作碎片热区 -->
    <div class="hotspot hotspot-create" data-action="create">
      <div class="hotspot-hint">创作工坊</div>
    </div>
  </div>

  <script>
    // ========== 粒子系统 ==========
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.life = Math.random() * 200 + 100;
        this.maxLife = this.life;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;

        if (this.life < 0 || this.x < 0 || this.x > canvas.width || 
            this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = `rgba(232, 220, 192, ${this.opacity * (this.life / this.maxLife)})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 50 }, () => new Particle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    // 窗口大小调整
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // ========== 点击交互 ==========
    const hotspots = document.querySelectorAll('.hotspot');

    hotspots.forEach(spot => {
      spot.addEventListener('click', (e) => {
        const action = spot.dataset.action;
        
        // 创建波纹效果
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        spot.appendChild(ripple);

        setTimeout(() => ripple.remove(), 800);

        // 触发跳转（这里先用alert演示）
        setTimeout(() => {
          switch(action) {
            case 'explore':
              alert('🔮 即将进入探索世界...\n（这里会跳转到ExplorePage）');
              // window.location.href = '/explore';
              break;
            case 'home':
              alert('🏠 即将进入旅者小屋...\n（这里会跳转到UserCenter）');
              // window.location.href = '/me';
              break;
            case 'create':
              alert('✨ 即将进入创作工坊...\n（这里会跳转到RoleCreate）');
              // window.location.href = '/role/new';
              break;
          }
        }, 200);
      });

      // 触摸反馈
      spot.addEventListener('touchstart', (e) => {
        spot.style.transform = 'scale(0.95)';
      });

      spot.addEventListener('touchend', (e) => {
        spot.style.transform = 'scale(1)';
      });
    });

    // ========== 调试模式切换 ==========
    // 按 D 键切换调试模式，显示热区边界
    let debugMode = false;
    document.addEventListener('keydown', (e) => {
      if (e.key === 'd' || e.key === 'D') {
        debugMode = !debugMode;
        document.querySelector('.container').classList.toggle('debug', debugMode);
      }
    });
  </script>
</body>
</html>