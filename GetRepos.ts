const what = [
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
  "ss-group-project",
  "ss-lab2",
  "standardista-machine-learning-workshop",
  "telegram-send-daily-news-to-email",
  "the-daily-chronice-news",
  "training-program-guide",
  "twitch-ai-chatbot",
  "typescript-hello-world",
  "university",
];

async function fetchRepositories() {
  const token =
    "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";
  const perPage = 100; // Number of repositories per page

  let page = 1;
  let repositories = [];

  while (true) {
    const baseurl = `https://api.github.com/user/repos?page=${page}&per_page=${perPage}`;

    const response = await fetch(baseurl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const pageRepositories = await response.json();
    repositories = repositories.concat(pageRepositories);

    // Break the loop if the current page fetched less than the maximum per page
    if (pageRepositories.length < perPage) {
      break;
    }

    page++;
  }

  const names = repositories.map((repo: any) => repo.name);
  return names;
}

fetchRepositories()
  .then((names) => {
    console.log(names);
  })
  .catch((error) => {
    console.error(error);
  });
