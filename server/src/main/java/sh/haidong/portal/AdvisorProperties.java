package sh.haidong.portal;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "advisor")
public record AdvisorProperties(String apiKey, String baseUrl, String model) {}
