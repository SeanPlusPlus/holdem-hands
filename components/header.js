import Head from 'next/head'

const Header = () => {
  return (
    <Head>
      <title>Hold&apos;em Hands</title>
      <meta name="description" content="Hold&apos;em Hands by Sean++" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="icon" href="https://i.imgur.com/9mRsAsh.png" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://holdem-hands.vercel.app/" />
      <meta property="og:title" content="Hold&apos;em Hands" />
      <meta property="og:description" content="Texas Hold&apos;em starting hands game by Sean++" />
      <meta property="og:image" content="https://i.imgur.com/9mRsAsh.png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" value="holdem-hands.vercel.app" />
      <meta name="twitter:title" value="Hold&apos;em Hands" />
      <meta name="twitter:description" value="Texas Hold&apos;em starting hands game by Sean++" />
      <meta name="twitter:image" content="https://i.imgur.com/9mRsAsh.png" />
      <meta name="twitter:url" value="https://holdem-hands.vercel.app/" />
    </Head>
  )
}

export default Header
