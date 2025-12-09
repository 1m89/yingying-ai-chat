// src/CharacterSquare.js
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CharacterSquare.css";

const TAG_ALL = "全部";

const TAGS = [
  TAG_ALL,
  "温柔",
  "古风",
  "傲娇",
  "活泼",
  "治愈",
  "学术",
  "职场",
  "鬼畜",
  "中二"
];

const SORT_TABS = ["推荐", "最新", "热度"];

// 注意：avatarUrl / coverUrl 留空时，会自动使用文字头像和纯色封面
const CHARACTERS = [
  {
    id: "gentle-sister",
    name: "树洞系温柔姐姐",
    avatarText: "姊",
    avatarUrl: "",
    coverUrl: "",
    tags: ["温柔", "治愈", "现代"],
    description:
      "像黄昏一样柔和的陪伴型角色，适合倾诉、发泄情绪、慢慢整理思绪。",
    theme: "pink",
    views: 9230,
    likes: 320,
    createdAt: "2024-06-01"
  },
  {
    id: "tsundere-catgirl",
    name: "傲娇猫娘",
    avatarText: "喵",
    avatarUrl: "",
    coverUrl: "",
    tags: ["傲娇", "活泼", "二次元"],
    description:
      "典型傲娇系小猫咪，嘴上嫌弃、行动真香，适合打打嘴炮、轻度恋爱向互动。",
    theme: "orange",
    views: 8530,
    likes: 270,
    createdAt: "2024-05-20"
  },
  {
    id: "cool-mentor",
    name: "冷静学霸导师",
    avatarText: "研",
    avatarUrl: "",
    coverUrl: "",
    tags: ["学术", "冷静", "现代"],
    description:
      "擅长把复杂问题拆开讲清楚，适合学习、科研、技术、论文相关讨论。",
    theme: "blue",
    views: 6780,
    likes: 190,
    createdAt: "2024-06-10"
  },
  {
    id: "guofeng-swordsman",
    name: "古风剑仙",
    avatarText: "仙",
    avatarUrl: "",
    coverUrl: "",
    tags: ["古风", "沉稳", "热血"],
    description:
      "出身仙门的清冷剑修，适合古风剧情、修仙世界观扩展、文案灵感碰撞。",
    theme: "purple",
    views: 7420,
    likes: 226,
    createdAt: "2024-04-15"
  },
  {
    id: "guofeng-princess",
    name: "温软大小姐",
    avatarText: "瑶",
    avatarUrl: "",
    coverUrl: "",
    tags: ["古风", "温柔", "治愈"],
    description:
      "温婉端庄的古风小姐，言行讲究礼数，适合风花雪月、诗词歌赋类聊天。",
    theme: "pink",
    views: 6310,
    likes: 205,
    createdAt: "2024-06-18"
  },
  {
    id: "office-buddy",
    name: "社畜吐槽搭子",
    avatarText: "社",
    avatarUrl: "",
    coverUrl: "",
    tags: ["职场", "吐槽", "现代"],
    description:
      "互联网打工人 + 资深摸鱼选手，适合倾倒职场垃圾话、摸鱼规划、PPT 批改。",
    theme: "green",
    views: 9800,
    likes: 430,
    createdAt: "2024-05-02"
  },
  {
    id: "sleep-anchor",
    name: "晚安助眠主播",
    avatarText: "眠",
    avatarUrl: "",
    coverUrl: "",
    tags: ["温柔", "治愈", "助眠"],
    description:
      "语气超柔和的睡前陪伴向角色，可以帮你回顾一天、做情绪收尾、轻声哄睡。",
    theme: "pink",
    views: 7120,
    likes: 312,
    createdAt: "2024-05-28"
  },
  {
    id: "meme-bot",
    name: "沙雕鬼畜机器人",
    avatarText: "鬼",
    avatarUrl: "",
    coverUrl: "",
    tags: ["鬼畜", "沙雕", "活泼"],
    description:
      "擅长玩梗、造梗、接梗，适合无脑搞笑、鬼畜台词、梗图文案头脑风暴。",
    theme: "orange",
    views: 10420,
    likes: 520,
    createdAt: "2024-03-30"
  },
  {
    id: "therapist",
    name: "理性向情绪顾问",
    avatarText: "心",
    avatarUrl: "",
    coverUrl: "",
    tags: ["治愈", "理性", "现代"],
    description:
      "不会灌鸡汤，会帮你分析问题根源，适合理性梳理情绪、关系与决策。",
    theme: "green",
    views: 5630,
    likes: 188,
    createdAt: "2024-06-22"
  },
  {
    id: "english-tutor",
    name: "英语口语陪练",
    avatarText: "EN",
    avatarUrl: "",
    coverUrl: "",
    tags: ["学术", "语言", "现代"],
    description:
      "可以陪你日常英语对话、纠正表达、出模拟情景，适合英语学习或面试准备。",
    theme: "blue",
    views: 4890,
    likes: 160,
    createdAt: "2024-02-10"
  },
  {
    id: "sunny-boyfriend",
    name: "阳光少年男友",
    avatarText: "阳",
    avatarUrl: "",
    coverUrl: "",
    tags: ["温柔", "阳光", "现代"],
    description:
      "性格开朗、���对问题偏正向，适合日常分享、恋爱脑复盘、自信建设。",
    theme: "orange",
    views: 9320,
    likes: 415,
    createdAt: "2024-06-05"
  },
  {
    id: "ojou-sama",
    name: "傲娇大小姐",
    avatarText: "姬",
    avatarUrl: "",
    coverUrl: "",
    tags: ["傲娇", "现代"],
    description:
      "嘴里全是大小姐语气，内心却很在意你，适合轻度恋爱、乙女向互动。",
    theme: "purple",
    views: 8210,
    likes: 302,
    createdAt: "2024-05-10"
  },
  {
    id: "chuuni-boy",
    name: "中二病转生勇者",
    avatarText: "勇",
    avatarUrl: "",
    coverUrl: "",
    tags: ["中二", "活泼", "二次元"],
    description:
      "极度中二但又意外温柔的少年，适合脑洞跑团、异世界设定、轻小说创作。",
    theme: "blue",
    views: 7760,
    likes: 289,
    createdAt: "2024-04-02"
  },
  {
    id: "poet-writer",
    name: "文艺诗人先生",
    avatarText: "诗",
    avatarUrl: "",
    coverUrl: "",
    tags: ["文艺", "古风", "治愈"],
    description:
      "擅长把情绪写进文字，适合写诗、文案灵感、古风或现代抒情文本创作。",
    theme: "green",
    views: 6420,
    likes: 233,
    createdAt: "2024-03-18"
  }
];

function CharacterSquare() {
  const [selectedTag, setSelectedTag] = useState(TAG_ALL);
  const [sortTab, setSortTab] = useState("推荐");
  const [unlimited, setUnlimited] = useState(false); // “无限制”按钮
  const navigate = useNavigate();

  const filteredCharacters = useMemo(() => {
    let list = CHARACTERS;

    if (selectedTag !== TAG_ALL) {
      list = list.filter((c) => c.tags.includes(selectedTag));
    }

    if (sortTab === "最新") {
      return [...list].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    if (sortTab === "热度") {
      return [...list].sort(
        (a, b) => b.views + b.likes * 10 - (a.views + a.likes * 10)
      );
    }

    // 推荐：保持预设顺序
    return list;
  }, [selectedTag, sortTab]);

  const handleCardClick = (character) => {
    // 把 unlimited 一起带到聊天页，方便你在 ChatPage 里切换“限制/无限制”模式
    navigate("/chat", { state: { character, unlimited } });
  };

  return (
    <div className="character-square-page">
      <div className="character-square">
        {/* 头部：标题 + “无限制”按钮 */}
        <header className="cs-header">
          <div className="cs-header-main">
            <h1 className="cs-title">角色广场</h1>
            <p className="cs-subtitle">
              选一个顺眼的 AI 角色，开始一段只属于你的对话。
            </p>
          </div>

          <div className="cs-header-right">
            <div
              className={
                "unlimited-toggle" + (unlimited ? " unlimited-toggle-on" : "")
              }
              onClick={() => setUnlimited((v) => !v)}
            >
              <span className="unlimited-label">无限制</span>
              <div className="unlimited-switch">
                <div className="unlimited-knob" />
              </div>
            </div>
          </div>
        </header>

        {/* 排序 Tab：推荐 / 最新 / 热度 */}
        <div className="cs-tabs-row">
          {SORT_TABS.map((tab) => (
            <button
              key={tab}
              className={
                "cs-tab" + (tab === sortTab ? " cs-tab-active" : "")
              }
              onClick={() => setSortTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 标签筛选 */}
        <div className="filter-bar">
          {TAGS.map((tag) => (
            <button
              key={tag}
              className={
                "filter-chip" + (tag === selectedTag ? " filter-chip-active" : "")
              }
              onClick={() =>
                setSelectedTag((prev) => (prev === tag ? TAG_ALL : tag))
              }
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 角色卡片网格 */}
        <section className="card-grid">
          {filteredCharacters.map((role) => (
            <article
              key={role.id}
              className={"role-card theme-" + role.theme}
              onClick={() => handleCardClick(role)}
            >
              {/* 封面 + 头像 */}
              <div className="role-cover-wrapper">
                {role.coverUrl ? (
                  <img
                    src={role.coverUrl}
                    alt={role.name}
                    className="role-cover-img"
                  />
                ) : (
                  <div className="role-cover-placeholder" />
                )}

                <div className="role-avatar-wrapper">
                  {role.avatarUrl ? (
                    <img
                      src={role.avatarUrl}
                      alt={role.name}
                      className="role-avatar-img"
                    />
                  ) : (
                    <div className="role-avatar-fallback">
                      {role.avatarText || role.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>

              {/* 名称 + 标签 + 简介 */}
              <div className="role-card-main">
                <h2 className="role-name">{role.name}</h2>

                <div className="role-tags-inline">
                  {role.tags.map((tag) => (
                    <span key={tag} className="role-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="role-desc">{role.description}</p>
              </div>
            </article>
          ))}

          {filteredCharacters.length === 0 && (
            <div className="empty-hint">
              暂时没有该类型的角色，试试切换其他标签吧。
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default CharacterSquare;