package com.aiportal.web;

import com.aiportal.ai.DemoChatService;
import com.aiportal.ai.IndustryAssistant;
import jakarta.validation.constraints.NotBlank;
import java.util.Optional;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Validated
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ChatController {

  private final ObjectProvider<IndustryAssistant> assistant;
  private final DemoChatService demoChatService;
  private final boolean hasApiKey;

  public ChatController(
      ObjectProvider<IndustryAssistant> assistant,
      DemoChatService demoChatService) {
    this.assistant = assistant;
    this.demoChatService = demoChatService;
    this.hasApiKey = StringUtils.hasText(System.getenv("OPENAI_API_KEY"));
  }

  @GetMapping("/health")
  public ResponseEntity<HealthResponse> health() {
    return ResponseEntity.ok(new HealthResponse("ok", "织筑 AI", hasApiKey ? "llm" : "demo"));
  }

  @PostMapping("/chat")
  public ResponseEntity<ChatResponse> chat(@RequestBody @Validated ChatRequest request) {
    String answer;
    if (hasApiKey) {
      answer = Optional.ofNullable(assistant.getIfAvailable())
          .map(a -> a.chat(request.message()))
          .orElseGet(() -> demoChatService.reply(request.message()));
    } else {
      answer = demoChatService.reply(request.message());
    }
    return ResponseEntity.ok(new ChatResponse(answer));
  }

  public record ChatRequest(@NotBlank String message) {}

  public record ChatResponse(String reply) {}

  public record HealthResponse(String status, String product, String mode) {}
}
