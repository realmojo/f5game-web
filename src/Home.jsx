import React from "react";
import { Layout, Card, Col, Row } from "antd";
import { Header } from "./components/Nav";
const { Meta } = Card;

export const Home = () => {
  const items = [
    {
      image: "https://f5game.s3.ap-northeast-2.amazonaws.com/match.png",
      link: "https://match.f5game.co.kr",
      title: "같은그림찾기 - 치매예방 두뇌운동",
      description:
        "같은그림을 제한시간 이내에 빠르게 찾아보세요. 같은그림을 3초간 보여준 후 빠르게 찾아내는 두뇌운동 게임입니다.",
    },
    {
      image: "https://f5game.s3.ap-northeast-2.amazonaws.com/sudoku.png",
      link: "https://sudoku.f5game.co.kr",
      title: "스도쿠",
      description:
        "스도쿠 퍼즐의 목표는 9×9 격자를 숫자로 채워, 각 행과 열과 3×3구역이 1에서 9까지의 숫자 모두를 포함하도록 하는 것입니다.",
    },
    {
      image: "https://f5game.s3.ap-northeast-2.amazonaws.com/memory.png",
      link: "https://memory.f5game.co.kr",
      title: "순간기억력",
      description:
        "여러개의 반짝이는 순간 기억력을 테스트 해보세요. 당신의 기억력은 얼마나 좋으신가요? 순간의 기억력이 당신의 지능입니다.",
    },
    {
      image: "https://f5game.s3.ap-northeast-2.amazonaws.com/color.png",
      link: "https://color.f5game.co.kr",
      title: "색맹 테스트",
      description:
        "비슷한 색상 중에서 다른 색상을 찾아보세요. 사색자 테스트이며 색맹인지 아닌지 구분할 수 있습니다.",
    },
    {
      image: "https://f5game.s3.ap-northeast-2.amazonaws.com/pitch.png",
      link: "https://pitch.f5game.co.kr",
      title: "절대음감 테스트",
      description:
        "절대음감이란 어떤 음을 들었을 때 그 고유의 진동수를 파악하여 정확한 음정을 찾아내는 청각 능력을 말합니다. 여러분들도 한번 도전해보세요!",
    },
    {
      image: "https://f5game.s3.ap-northeast-2.amazonaws.com/color-age.png",
      link: "https://color-age.f5game.co.kr",
      title: "정신연령 테스트",
      description:
        "색상으로 알아보는 정신연령 테스트를 해보세요. 10대부터 60대까지 확인 가능합니다.",
    },
    {
      image: "https://f5game.s3.ap-northeast-2.amazonaws.com/mbti.png",
      link: "https://mbti.f5game.co.kr",
      title: "MBTI 검사 성격 이상형 테스트",
      description:
        "몇 가지 문항을 통하여 자신의 MBTI유형과 이성의 MBTI유형을 확인할 수 있습니다.",
    },
    {
      image: "https://f5game.s3.ap-northeast-2.amazonaws.com/adhd.png",
      link: "https://adhd.f5game.co.kr",
      title: "성인 ADHD 테스트 자가진단",
      description:
        "몇 가지 문항을 통하여 자신의 성인 ADHD인지 확인할 수 있습니다.",
    },
    {
      image: "https://f5game.s3.ap-northeast-2.amazonaws.com/animal.png",
      link: "https://animal.f5game.co.kr",
      title: "영적동물 테스트",
      description:
        "몇 가지 문항을 통하여 자신의 영적동물이 어느것과 어울리는지 확인할 수 있습니다.",
    },
  ];

  return (
    <>
      <Header />
      <Layout>
        <Layout className="site-layout">
          <Row className="mt-8 mb-24" gutter={[10, 10]}>
            {items.map((item, key) => (
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={8}
                xl={8}
                xxl={6}
                key={key}
                className="pb-6"
              >
                <a href={`${item.link}`} target="_blank">
                  <Card
                    hoverable
                    style={{
                      margin: "0 auto",
                      width: 320,
                    }}
                    cover={
                      <img
                        alt={item.title}
                        src={item.image}
                        style={{ width: 320, height: 320 }}
                      />
                    }
                  >
                    <Meta
                      title={<h2>{item.title}</h2>}
                      description={<p>{item.description}</p>}
                    />
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Layout>
      </Layout>
    </>
  );
};
