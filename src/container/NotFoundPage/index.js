/**
 * @author Bruno Prdt
 * container/NotFoundPage/notFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

export default function NotFound() {
  return (
    <article>
      <h1 style={{marginTop: "12vh"}}>
          La page demandée n'existe pas.
      </h1>
    </article>
  );
}
