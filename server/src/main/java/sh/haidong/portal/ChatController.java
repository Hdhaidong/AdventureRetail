package sh.haidong.portal;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class ChatController {
  private final IndustryAdvisor advisor;

  public ChatController(IndustryAdvisor advisor) {
    this.advisor = advisor;
  }

  @GetMapping("/api/health")
  public java.util.Map<String, String> health() {
    return java.util.Map.of("status", "ok");
  }

  @PostMapping("/api/chat")
  public ChatResponse chat(@RequestBody ChatRequest request) {
    if (request.message() == null || request.message().isBlank()) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "message required");
    }
    return advisor.advise(request.message().trim(), request.industry());
  }
}
