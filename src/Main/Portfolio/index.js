import { useSelector } from "react-redux";
import { selectRepos, selectLoadingState } from "../../appSlice";
import useToggleDarkTheme from "../../useToggleDarkTheme";
import { Loader } from "./Loader";
import { PortfolioContent } from "./PortfolioContent";
import { PortfolioHeader } from "./PortfolioHeader";
import {
  RepoLink,
  PortfolioList,
  RepoDescription,
  RepoLinks,
  RepoTile,
  RepoTitle,
  RepoUrl,
} from "./styled";

export const Portfolio = () => {
  const darkTheme = useToggleDarkTheme();
  const repos = useSelector(selectRepos);

  const loadingState = useSelector(selectLoadingState);

  return (
    <PortfolioContent>
      <PortfolioHeader />
      <Loader toggleDarkMode={darkTheme} />
      {loadingState === "success" ? (
        <PortfolioList toggleDarkMode={darkTheme}>
          {repos.map((repo) => (
            <RepoTile toggleDarkMode={darkTheme} key={repo.id}>
              <RepoTitle toggleDarkMode={darkTheme}>
                {repo.name.replaceAll("-", " ")}
              </RepoTitle>
              <RepoDescription>{repo.description}</RepoDescription>
              <RepoLinks>
                Demo:
                <RepoLink
                  toggleDarkMode={darkTheme}
                  href={repo.homepage}
                  rel="me"
                  target="_blank"
                >
                  <RepoUrl>{repo.homepage.replaceAll("https://", "")}</RepoUrl>
                </RepoLink>
                Code:
                <RepoLink
                  toggleDarkMode={darkTheme}
                  href={repo.html_url}
                  rel="me"
                  target="_blank"
                >
                  <RepoUrl>{repo.html_url.replaceAll("https://", "")}</RepoUrl>
                </RepoLink>
              </RepoLinks>
            </RepoTile>
          ))}
        </PortfolioList>
      ) : (
        ""
      )}
    </PortfolioContent>
  );
};
