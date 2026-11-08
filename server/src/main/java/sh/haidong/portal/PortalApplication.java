package sh.haidong.portal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AdvisorProperties.class)
public class PortalApplication {
  public static void main(String[] args) {
    SpringApplication.run(PortalApplication.class, args);
  }
}
