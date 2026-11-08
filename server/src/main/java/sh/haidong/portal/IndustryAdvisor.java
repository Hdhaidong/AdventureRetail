package sh.haidong.portal;

import dev.langchain4j.data.message.UserMessage;
import dev.langchain4j.model.openai.OpenAiChatModel;
import org.springframework.stereotype.Service;

@Service
public class IndustryAdvisor {
  private static final String SYSTEM = """
      你是「织衡」的行业顾问，只回答布料与房屋工程问题。
      范围：布料（面料、克重、用途、护理），以及房屋的维修、设计、施工、工程。
      用简体中文，先给结论，再给 3 条可执行建议。不要编造规范编号。
      结构、承重、消防、临电等问题必须提醒：需由持证工程师现场复核，不能替代正式设计。
      无关问题礼貌拒答并拉回这两个行业。
      """;

  private final AdvisorProperties properties;

  public IndustryAdvisor(AdvisorProperties properties) {
    this.properties = properties;
  }

  public ChatResponse advise(String message, String industry) {
    String prompt = SYSTEM + "\n当前行业：" + blankTo(industry, "未指定") + "\n用户问题：" + message;
    if (properties.apiKey() == null || properties.apiKey().isBlank()) {
      return new ChatResponse(local(message, industry), "local");
    }
    OpenAiChatModel model = OpenAiChatModel.builder()
        .apiKey(properties.apiKey())
        .baseUrl(properties.baseUrl())
        .modelName(properties.model())
        .build();
    String text = model.chat(UserMessage.from(prompt)).aiMessage().text();
    return new ChatResponse(text, "langchain4j");
  }

  private static String local(String message, String industry) {
    String topic = blankTo(industry, guess(message));
    return switch (topic) {
      case "布料" -> """
          先确认用途，再定面料，不要先锁价格。
          1. 写清场景：服装、家居还是工装，决定克重、透气和耐磨。
          2. 要供应商提供成分、克重和色牢度，而不是只看手感。
          3. 大货前做一米样：水洗、摩擦、日晒。结论：样品不过，不投产。
          """.trim();
      case "维修" -> """
          先找原因，再动墙面或管线。
          1. 渗漏先查源头（屋面、窗边、管井），不要只刷涂料。
          2. 电路老化先断电、测绝缘，再决定局部更换还是回路改造。
          3. 承重构件开裂必须停工，请持证结构工程师现场复核。
          """.trim();
      case "设计" -> """
          设计先定边界：用途、荷载、预算、工期。
          1. 平面按动线画，不按家具目录堆功能。
          2. 布料与饰面在施工图阶段就定规格，避免后期改色改克重。
          3. 出图前对照消防、采光和疏散，正式出图由注册设计师签章。
          """.trim();
      case "施工" -> """
          施工按工序，不按到场材料。
          1. 先隐蔽工程验收（防水、管线、基层），再做饰面和软装面料。
          2. 每天只开一个工作面，材料进场核对批次和合格证。
          3. 变更必须书面，口头改做法不算数。
          """.trim();
      default -> """
          工程问题先对齐范围、工期和责任界面。
          1. 把需求写成清单：做什么、不做什么、验收标准。
          2. 关键路径单独列：基础、主体、机电、饰面、布艺安装。
          3. 涉及结构、消防、临电的结论，必须由持证工程师复核后才能施工。
          """.trim();
    };
  }

  private static String guess(String message) {
    if (message == null) return "工程";
    if (contains(message, "布", "面料", "克重", "纺织", "纱")) return "布料";
    if (contains(message, "维修", "漏", "裂缝", "翻新")) return "维修";
    if (contains(message, "设计", "图纸", "方案")) return "设计";
    if (contains(message, "施工", "工序", "进场")) return "施工";
    return "工程";
  }

  private static boolean contains(String text, String... keys) {
    for (String key : keys) {
      if (text.contains(key)) return true;
    }
    return false;
  }

  private static String blankTo(String value, String fallback) {
    return value == null || value.isBlank() ? fallback : value;
  }
}
