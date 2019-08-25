/* global window */
import React from 'react'
import Head from 'next/head'

const DefaultPage = () => (
  <div>
    <Head>
      <title>Domo</title>
      <meta charset="utf-8" />
  		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  		<link rel="stylesheet" href="static/css/main.css" />
  		<noscript><link rel="stylesheet" href="static/css/noscript.css" /></noscript>
      <script src="static/js/jquery.min.js"></script>
      <script src="static/js/skel.min.js"></script>
      <script src="static/js/util.js"></script>
      <script src="static/js/main.js"></script>
    </Head>
  </div>
)

export default (DefaultPage)
