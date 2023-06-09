
import React, { useState, useEffect, useRef } from 'react';
import { LookerEmbedSDK } from "@looker/embed-sdk"

const EmbedSDKInit = () => {
  localStorage.getItem('premium') === 'true'
    ?
    LookerEmbedSDK.init(
      process.env.LOOKERSDK_EMBED_HOST,
      {
        // The location of the service which will privately create a signed URL
        url: '/api/auth',
        headers: [
          // include some factor which your auth service can use to uniquely identify a user, so that a user specific url can be returned. This could be a token or ID
          { name: 'usertoken', value: 'user1' }
        ]
      },
    )
    :
    LookerEmbedSDK.init(
      process.env.LOOKERSDK_EMBED_HOST,
      {
        // The location of the service which will privately create a signed URL
        url: '/api/auth',
        headers: [
          // include some factor which your auth service can use to uniquely identify a user, so that a user specific url can be returned. This could be a token or ID
          { name: 'usertoken', value: 'user2' }
        ]
      },
    );


}

export default EmbedSDKInit;
