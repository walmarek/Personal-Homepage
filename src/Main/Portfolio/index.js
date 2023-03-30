import { useSelector } from "react-redux";
import { selectRepos, selectLoadingState } from "../../appSlice";
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
  const repos = useSelector(selectRepos);

  const loadingState = useSelector(selectLoadingState);

  return (
    <PortfolioContent>
      <PortfolioHeader />
      <Loader />
      {loadingState === "success" && (
        <PortfolioList>
          {repos.map((repo) => (
            <RepoTile key={repo.id}>
              <RepoTitle>{repo.name.replaceAll("-", " ")}</RepoTitle>
              <RepoDescription>{repo.description}</RepoDescription>
              <RepoLinks>
                Demo:
                <RepoLink href={repo.homepage} rel="me" target="_blank">
                  <RepoUrl>{repo.homepage.replaceAll("https://", " ")}</RepoUrl>
                </RepoLink>
                Code:
                <RepoLink href={repo.html_url} rel="me" target="_blank">
                  <RepoUrl>{repo.html_url.replaceAll("https://", " ")}</RepoUrl>
                </RepoLink>
              </RepoLinks>
            </RepoTile>
          ))}
        </PortfolioList>
      )}
    </PortfolioContent>
  );
};
