// @flow
import app from '../lib/app';
import A from '../components/a';
import Blockquote from '../components/blockquote';
import Button from '../components/button';
import Buttons from '../components/buttons';
import Heading from '../components/heading';
import Image from '../components/image';
import Link from '../components/link';
import P from '../components/p';
import Page from '../components/page';
import Text from '../components/text';
import ToggleBaseline from '../components/toggle-baseline';
import ToggleDark from '../components/toggle-dark';

const Index = () => (
  <Page title="Este">
    <Heading size={3}>Este</Heading>
    <P>
      Starter kit for universal full–fledged React apps.
    </P>
    <P>
      {/* Styled text link. */}
      <A href="https://github.com/este/este">github.com/este/este</A>
    </P>
    {/* Just link, no styles. */}
    <Link href="https://mises.org/library/anatomy-state">
      <Image
        alt="50x50 placeholder"
        marginBottom={1}
        size={{ height: 50, width: 50 }}
        src="/static/50x50.png"
      />
    </Link>
    <Text>normal text</Text>
    <Text size={-1}>small text</Text>
    <P size={5}>text 5</P>
    <Blockquote
      source="Friedrich Hayek"
      href="https://en.wikipedia.org/wiki/Friedrich_Hayek"
    >
      The curious task of economics is to demonstrate to men how little they
      really know about what they imagine they can design.
    </Blockquote>
    <Buttons>
      <Button primary>Primary</Button>
      <Button success>Success</Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
      <Button primary disabled>Disabled</Button>
      <Button>Text</Button>
    </Buttons>
    <Buttons>
      <ToggleBaseline />
      <ToggleDark />
    </Buttons>
    {/* <List /> */}
  </Page>
);

export default app(Index);
