import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smooth Reveal Animations with Framer Motion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>A Superb and Extended Title</Title>
        <Copy>
          The most powerful MacBook Pro ever is here. With the blazing-fast M1
          Pro or M1 Max chip — the first Apple silicon designed for pros — you
          get groundbreaking performance and amazing battery life. Add to that a
          stunning Liquid Retina XDR display, the best camera and audio ever in
          a Mac notebook, and all the ports you need. The first notebook of its
          kind, this MacBook Pro is a beast.
        </Copy>
        <h2>Here is a simple gallery reveal</h2>
        <div>
          <div />
          <div />
          <div />
        </div>
        <h2>What’s that? Lists too?</h2>
        <ul>
          <li>A simple list item 1</li>
          <li>A simple list item 2</li>
          <li>A simple list item 3</li>
        </ul>
        <h2>And a simple recurring animation, only when in view</h2>
        <p>
          <span role="emoji">💩</span>
        </p>
      </main>
    </div>
  );
}

const Title = styled.h1``;

const Heading = styled.h2``;
const Emoji = styled.p``;
const Copy = styled.p``;
