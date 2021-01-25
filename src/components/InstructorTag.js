import {TagWrapper, Emoji, Name, GoToGithub} from "./styles";

const InstructorTag = (props) => {
  // or pass {name, emoji, github}
  const link = props.github;
  return (
    <TagWrapper
      onClick={() => window.open(`https://github.com/${link}`)}
    >
      <Emoji>{props.emoji}</Emoji>
      <Name>{props.name}</Name>
      <GoToGithub>Go to GitHub</GoToGithub>
    </TagWrapper>
  );
};

export default InstructorTag;
