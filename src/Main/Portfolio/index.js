import { useSelector } from "react-redux";
import { selectRepos } from "../../appSlice";
import useToggleDarkTheme from "../../useToggleDarkTheme";
import { Loader } from "./Loader";
import { PortfolioHeader } from "./PortfolioHeader";
import {
  RepoLink,
  PortfolioContent,
  PortfolioList,
  RepoDescription,
  RepoItem,
  RepoLinks,
  RepoName,
} from "./styled";

export const Portfolio = () => {
  const darkTheme = useToggleDarkTheme();
  const repos = useSelector(selectRepos);

  return (
    <PortfolioContent>
      <PortfolioHeader />
      <Loader toggleDarkMode={darkTheme} />
      <PortfolioList>
        {repos.map((repo) => (
          <RepoItem key={repo.id}>
            <RepoName>{repo.name.replaceAll("-", " ")}</RepoName>
            <RepoDescription>{repo.description}</RepoDescription>
            <RepoLinks>
              Demo:
              <RepoLink href={repo.homepage} rel="me" target="_blank">
                 {repo.homepage.replaceAll("https://", "")}
              </RepoLink>
              Code:
              <RepoLink href={repo.html_url} rel="me" target="_blank">
                {repo.html_url.replaceAll("https://", "")}
              </RepoLink>
            </RepoLinks>
          </RepoItem>
        ))}
      </PortfolioList>
    </PortfolioContent>
  );
};
