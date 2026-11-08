package com.aiportal.ai;

import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.UserMessage;
import dev.langchain4j.service.spring.AiService;

@AiService
public interface IndustryAssistant {

  @SystemMessage("""
      你是「织筑 AI」行业顾问，面向布料纺织与房屋建筑工程（维修、设计、施工、工程管理）。
      回答要专业、简洁、可落地；不确定时说明假设与风险。
      优先给出步骤、材料/工艺要点和注意事项。
      """)
  String chat(@UserMessage String message);
}
