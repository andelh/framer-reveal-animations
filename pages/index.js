import Head from "next/head";
import styled from "styled-components";

const images = new Array(16).fill(0).map((_, i) => true);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smooth Reveal Animations with Framer Motion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Title>A Superb and Extended Title</Title>
        <Copy>
          The most powerful MacBook Pro ever is here. With the blazing-fast M1
          Pro or M1 Max chip — the first Apple silicon designed for pros — you
          get groundbreaking performance and amazing battery life. Add to that a
          stunning Liquid Retina XDR display, the best camera and audio ever in
          a Mac notebook, and all the ports you need. The first notebook of its
          kind, this MacBook Pro is a beast.
        </Copy>
        <Heading>Here is a simple gallery reveal</Heading>
        <Gallery>
          {images.map((image, index) => (
            <Image
              key={index}
              src={`https://picsum.photos/seed/${index}/230`}
            />
          ))}
        </Gallery>
        <Heading>What’s that? Lists too?</Heading>
        <List>
          <li>A simple list item 1</li>
          <li>A simple list item 2</li>
          <li>A simple list item 3</li>
        </List>
        <Heading>And a simple recurring animation, only when in view</Heading>
        <Emoji>
          <span role="emoji">💩</span>
        </Emoji>
      </Container>
    </div>
  );
}

const Container = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 30vh 20px;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
`;

const Heading = styled.h2`
  font-size: 40px;
  font-weight: 600;
`;
const Copy = styled.p`
  margin-bottom: 25vh;
`;
const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30vh;
`;
const Image = styled.img``;
const Emoji = styled.p`
  font-size: 100px;
`;

const List = styled.ul`
  margin-bottom: 30vh;
`;
