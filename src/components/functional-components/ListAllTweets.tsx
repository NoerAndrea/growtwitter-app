import { Fragment } from "react";
import { useEffect, useState } from "react";
import {
  listTweet,
  Tweet,
} from "../../configs/services/growtwetter-api/tweet.service";

import { Main as Content } from "../styled-components/Main";
import { MainList } from "../styled-components/MainList";
import {
  TweetCard,
  ProfileAvatarImgContainer,
  ProfileAvatarImg,
} from "../styled-components/MainTweetCard";
import { useTheme } from "styled-components";

export function Main() {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    async function listTweets() {
      const response = await listTweet();
      if (response.data) {
        setTweets(response.data);
      }
    }
    listTweets();
  }, []);

  const theme = useTheme();

  return (
    <Fragment>
      <Content>
        <div>
          <h1>Página Inicial</h1>

          <main>
            {tweets.map((tweet) => (
              <MainList key={tweet.id}>
                <TweetCard>
                  <ProfileAvatarImgContainer>
                    <ProfileAvatarImg src={theme.images.avatar} alt="Avatar" />
                  </ProfileAvatarImgContainer>
                  <div>
                    <p>{tweet.user.username}</p>
                    <p>@{tweet.user.username}</p>
                    <p>3h</p>
                    <p>{tweet.content}</p>
                  </div>
                </TweetCard>
              </MainList>
            ))}
          </main>
        </div>
      </Content>
    </Fragment>
  );
}
