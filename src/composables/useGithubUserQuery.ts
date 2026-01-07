import { Github } from "@/utils/github";
import { createProxyService } from "@webext-core/proxy-service";

export default function (token: { value: string | undefined }) {
  const github = createProxyService(GITHUB_SERVICE_KEY);

  return useQuery<Github.User | undefined>({
    queryKey: [QueryKeys.GithubUser, token],
    queryFn() {
      if (!token.value) return;
      return github.getUser(token.value);
    },
    retry: false,
  });
}
