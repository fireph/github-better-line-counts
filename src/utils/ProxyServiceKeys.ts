import type { ProxyServiceKey } from "@webext-core/proxy-service";
import type { GithubService } from "./github";

export const GITHUB_SERVICE_KEY =
  "github-service" as ProxyServiceKey<GithubService>;
