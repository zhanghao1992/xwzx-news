/*
 * @Author: 张浩 386708307@qq.com
 * @Date: 2026-02-14 17:57:10
 * @LastEditors: 张浩 386708307@qq.com
 * @LastEditTime: 2026-02-18 17:33:04
 * @FilePath: /xwzx-news/src/config/api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * API配置文件
 * 包含API基础URL和AI问答功能所需的API参数
 */

// API基础URL配置
export const apiConfig = {
  // 后端API基础URL
  baseURL:
    process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000" : "",
};

export const aiChatConfig = {
  // OpenAI API地址
  apiEndpoint:
    "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",

  // API Key (由开发人员指定)
  apiKey: "sk-9c4d89982a6a4bd3b7494d94751fe81c",

  // 使用的模型
  model: "qwen3-max-preview",
};
