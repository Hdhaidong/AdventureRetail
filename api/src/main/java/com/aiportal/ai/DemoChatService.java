package com.aiportal.ai;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

/**
 * 无 OPENAI_API_KEY 时的本地演示回复，便于先部署验通。
 */
@Service
@ConditionalOnProperty(name = "app.demo-chat", havingValue = "true", matchIfMissing = true)
public class DemoChatService {

  public String reply(String message) {
    String q = message == null ? "" : message.toLowerCase();
    if (q.contains("布") || q.contains("面料") || q.contains("纺织")) {
      return """
          【演示模式】布料建议：
          1. 先明确用途（春夏/秋冬、正装/休闲、是否需要抗皱）。
          2. 常用方向：涤棉混纺抗皱耐穿；天丝/莫代尔手感更好；羊毛适合秋冬正装。
          3. 上架前检查色牢度、缩水率与克重是否匹配目标价位。
          配置 OPENAI_API_KEY 后可切换为完整 AI 回答。
          """;
    }
    if (q.contains("修") || q.contains("墙") || q.contains("施工") || q.contains("工程") || q.contains("设计")) {
      return """
          【演示模式】房屋工程建议：
          1. 先界定问题：维修 / 设计变更 / 施工工序 / 工程进度。
          2. 维修类：查清成因（渗水、空鼓、承重）再选材料与工序。
          3. 施工类：按基层处理 → 主材安装 → 验收节点推进，并记录隐蔽工程。
          配置 OPENAI_API_KEY 后可切换为完整 AI 回答。
          """;
    }
    return """
        【演示模式】织筑 AI 已收到你的问题。
        当前未配置 OPENAI_API_KEY，返回的是行业模板建议。
        请补充：所属行业（布料/建筑）、现场约束、目标结果，便于给出更具体步骤。
        """;
  }
}
