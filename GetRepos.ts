async function fetchRepositories() {
  const token =
    "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";

  const baseurl = `https://api.github.com/user/repos`;

  const response = await fetch(baseurl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const repositories = await response.json();
  const names = repositories.map((repo) => repo.name);
  return names;
}

fetchRepositories()
  .then((repositories) => {
    console.log(repositories);
  })
  .catch((error) => {
    console.error(error);
  });

const repos = [
  "age-calculator-app",
  "ai-greeting-generator",
  "ber-ai-generative-art-platform",
  "browser-games",
  "chuck-norris-quotes-generator",
  "cities-skylines-mods",
  "codewell-solutions",
  "free-code-camp-course",
  "freshcode-course",
  "frontend-mentor-solutions",
  "gcalendar-automation",
  "habitica-task-helper",
  "internet-is-hard-web-course",
  "javascript-algorithms-data-structures_free-code-camp",
  "klopotenko-clone",
  "leetcode-solutions",
  "my-hobby-site",
  "newsletter-sign-up-with-success-message-component",
  "nextjs-learning",
  "personal-reflective-journal",
  "portfolio",
  "productivity-flomodoro-app",
  "python-twitchio-chat-bot",
  "react-memory-cards-game",
  "react-todo-app",
  "regex-golf",
  "robo-social-media-feed",
  "seesmof",
  "shopping-cart-with-useReducer",
  "specter-ross-legal-company-landing",
];
